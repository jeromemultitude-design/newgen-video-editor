# NewGen Video Editor: one-click setup for a ProVision editor's PC (Windows).
# Checks the tools, installs what's missing (after one yes), signs in to GitHub for the private repo,
# then installs or updates the plugin. Safe to run again: it only does what's still missing.
#   Double-click "Install NewGen Video Editor.cmd", or run:  powershell -ExecutionPolicy Bypass -File install.ps1 [-DryRun]
param([switch]$DryRun)   # -DryRun: check everything, print what it would run, change nothing
$ErrorActionPreference = "Stop"
$Repo = "jeromemultitude-design/newgen-video-editor"; $Market = "newgen"; $Plugin = "newgen-video-editor@newgen"

function Have($cmd) { [bool](Get-Command $cmd -ErrorAction SilentlyContinue) }
function Step($text) { Write-Host "`n== $text" -ForegroundColor Cyan }
function Stop-With($text) { Write-Host $text -ForegroundColor Red; exit 1 }
function Run {   # runs a program; stops on a non-zero exit code (PowerShell doesn't for programs)
  if ($DryRun) { Write-Host "  would run: $($args -join ' ')" -ForegroundColor DarkGray; return }
  $exe, $rest = $args
  & $exe @rest
  if ($LASTEXITCODE) { Stop-With "Failed: $($args -join ' ') (exit code $LASTEXITCODE)" }
}
function Refresh-Path { $env:Path = [Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [Environment]::GetEnvironmentVariable("Path", "User") }

Step "Checking tools"
if (-not (Have claude)) { Stop-With "Claude Code isn't installed on this PC. Ask Jerome to set it up first, then run this again." }
$missing = @()
$node = if (Have node) { [int]((node -v) -replace '^v(\d+).*', '$1') } else { 0 }
if ($node -lt 22) { $missing += [pscustomobject]@{ Name = "Node.js 22 or later"; Id = "OpenJS.NodeJS.LTS" } }
if (-not (Have ffmpeg)) { $missing += [pscustomobject]@{ Name = "ffmpeg"; Id = "Gyan.FFmpeg" } }
if (-not (Have gh)) { $missing += [pscustomobject]@{ Name = "GitHub CLI"; Id = "GitHub.cli" } }
$chromePaths = "$env:ProgramFiles\Google\Chrome\Application\chrome.exe", "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe", "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
if (-not ($chromePaths | Where-Object { Test-Path $_ })) { $missing += [pscustomobject]@{ Name = "Google Chrome"; Id = "Google.Chrome" } }

if ($missing) {
  Write-Host "Missing: $(($missing | ForEach-Object Name) -join ', ')" -ForegroundColor Yellow
  if (-not (Have winget)) { Stop-With "winget isn't available. Install these by hand, then run this again." }
  $ok = if ($DryRun) { "y" } else { Read-Host "Install them now? (Y/n)" }
  if ($ok -match '^[nN]') { Stop-With "Stopped. Install them, then run this again." }
  foreach ($m in $missing) { Write-Host "Installing $($m.Name)..."; Run winget install --id $m.Id -e --silent --accept-package-agreements --accept-source-agreements }
  Refresh-Path
} else { Write-Host "All tools are here: Claude Code, Node.js $node, ffmpeg, GitHub CLI, Chrome." }

Step "GitHub sign-in (the plugin repo is private)"
if ($DryRun -and -not (Have gh)) { Write-Host "  would sign in with: gh auth login --web" -ForegroundColor DarkGray }
else {
  gh auth status *> $null
  if ($LASTEXITCODE) { Write-Host "A browser opens: sign in to GitHub with your own account."; Run gh auth login --web --git-protocol https }
  Run gh auth setup-git   # lets Claude Code's git download the private repo with that sign-in
  gh repo view $Repo --json name *> $null
  if ($LASTEXITCODE) { Stop-With "Your GitHub account can't see $Repo yet. Send Jerome your GitHub username, then run this again." }
  Write-Host "Signed in, and the repo is reachable."
}

Step "Installing the NewGen Video Editor plugin"
if ((claude plugin marketplace list | Out-String) -match [regex]::Escape($Repo)) { Run claude plugin marketplace update $Market }
else { Run claude plugin marketplace add $Repo }
if ((claude plugin list | Out-String) -match [regex]::Escape($Plugin)) { Run claude plugin update $Plugin }
else { Run claude plugin install $Plugin }

Write-Host "`nDone. Restart Claude Code, then start a video job with:" -ForegroundColor Green
Write-Host '  "Use the NewGen Video Editor agent for this job."'

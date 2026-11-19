@echo off
rem Double-click to set up or update the NewGen Video Editor on this PC. install.ps1 must sit next to this file.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0install.ps1" %*
pause

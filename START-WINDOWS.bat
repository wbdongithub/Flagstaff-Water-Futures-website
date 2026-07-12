@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js 20 or newer, then run this file again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing website packages. This may take several minutes...
  call npm install
  if errorlevel 1 goto :error
)
echo Starting Flagstaff Water Futures...
call npm start
exit /b 0
:error
echo Installation failed. Review the error above.
pause
exit /b 1

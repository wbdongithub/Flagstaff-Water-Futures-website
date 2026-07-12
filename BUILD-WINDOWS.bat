@echo off
setlocal
cd /d "%~dp0"
if not exist node_modules call npm install
if errorlevel 1 goto :error
call npm run build
if errorlevel 1 goto :error
echo.
echo Build complete. The publishable website is in the build folder.
pause
exit /b 0
:error
echo Build failed. Review the error above.
pause
exit /b 1

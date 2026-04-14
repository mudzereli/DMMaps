@echo off
REM Generate areas_gamemap and deploy to Mudlet profile as genmap.json
setlocal
set ROOT=%~dp0
echo Running generator...
node "%ROOT%generate_areas_gamemap.js"
if errorlevel 1 (
  echo Generator failed.
  exit /b 1
)
set SRC=%ROOT%..\area_adjustments\areas_gamemap.js
set DEST=%USERPROFILE%\.config\mudlet\profiles\darkmists\genmap.json
echo Ensuring destination directory exists...
if not exist "%USERPROFILE%\.config\mudlet\profiles\darkmists\" mkdir "%USERPROFILE%\.config\mudlet\profiles\darkmists\"
echo Copying %SRC% to %DEST%...
copy /Y "%SRC%" "%DEST%"
if errorlevel 1 (
  echo Copy failed.
  exit /b 1
)
echo Done.
pause
endlocal
exit /b 0

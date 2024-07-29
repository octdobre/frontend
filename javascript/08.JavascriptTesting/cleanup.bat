@echo off
echo Cleaning up node_modules and package-lock.json...
rd /s /q "node_modules"
del /f package-lock.json
echo Reinstalling dependencies...
npm install
echo Cleanup and installation complete.
pause
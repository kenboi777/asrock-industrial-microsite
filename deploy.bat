@echo off
echo ==========================================
echo       AUTO DEPLOY: update from new export
echo ==========================================

echo.
echo [1/4] Checking Git Status...
git status

echo.
echo [2/4] Adding all files (git add .)...
git add .

echo.
echo [3/4] Committing changes...
git commit -m "update from new export"

echo.
echo [4/4] Pushing to remote...
git push

echo.
echo ==========================================
echo             PROCESS COMPLETE
echo ==========================================
pause
@echo off
cd public
start http://localhost:8000
py -m http.server 8000

@ECHO OFF

set port=8000
set schijf=D:
set map=RottOrNot\

%d%
cd %School%
cd %ProjectData%
cd %RottOrNot%


python -m SimpleHTTPServer %port%

pause
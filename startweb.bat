@ECHO OFF

set port=8000
set schijf=D:
set map=RottOrNot\

%schijf%
cd %map%


python -m SimpleHTTPServer %port%

pause
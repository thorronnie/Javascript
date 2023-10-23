var PU;
var QTECOM;
var PAP;
var REM;
var PORT;
var TOT = 

PU = parseInt (window.prompt("saisir prix unitaire"));
QTECOM = parseInt(window.prompt("entrez la quantité"));
var TOT=PU*QTECOM;

if (TOT>=100 && TOT<=200){
   var REM = TOT-5 ;
}

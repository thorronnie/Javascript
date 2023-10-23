var PU;
var QTECOM;
var PAP;
var REM;
var PORT;
 

PU = parseInt (window.prompt("saisir prix unitaire"));
QTECOM = parseInt(window.prompt("entrez la quantité"));
var TOT=PU*QTECOM;
alert(TOT)

/*calcul de la remise*/
function remise(){

if (TOT>=100 && TOT<=200){
   REM = TOT*0.95;
   console.log(REM);
}
else if (TOT>200){
    REM= TOT*0.90;
    console.log(REM);
}

alert(REM);
}
remise(REM);

/*calcul des frais de port*/

function frais(){

if (remise <500 && PORT>=6) {
    PORT = remise *1.02 ;
    console.log(PORT);
}

alert(PORT);
}
frais(PORT);

PU =parseInt(window.prompt("prix unitaire du produit:"));
QTECOM = parseInt(window.prompt("Quantité du produit:"));
var REM=0;
var PORT=0;
var TOT = PU*QTECOM;

if (TOT<100){
    PORT=6;
    PAP = TOT+PORT;
    alert("Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}

else if (TOT>=100 && TOT<=200){
    prixrem = (5*TOT)/100;
    PORT=6;
    PAP=TOT-prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}




else if (TOT>200 && TOT<500){
    prixrem = (10*TOT)/100;
    PORT=prixrem*0.02;
    PAP=TOT-prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

}



 else if (TOT>500){
    REM = (10*TOT)/100;
    prixrem= TOT-REM;
    console.log(prixrem);
    
        if(prixrem<500){
    PORT= prixrem*0.02;
    PAP=prixrem+PORT;
    alert("La remise est de "+prixrem+"€\n"+"Les frais de port sont de :"+PORT+ "€\n"+"Le prix total a payé est de :"+PAP+"€\n");

 }

        else if (prixrem>500){

    console.log(prixrem);
    alert("Le prix a payé est de "+prixrem+"€\n");


 }
}
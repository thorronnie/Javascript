/* commande alerte côté client */

alert("coucou");
console.log("c'est jolie");
prompt("veuillez écrire");
confirm("Merci")




var nom= prompt("Saisissez votre nom");
alert(nom);
var prénom= prompt("Saisissez votre prénom");
alert(prénom);

var nb1= parseInt(window.prompt("entrez un nombre"));
var nb2= parseInt(window.prompt("entrez un deuxième nombre"));
alert(nb1*nb2);

var C= parseInt(window.prompt("entrez la température en degrés"));
var F= parseInt(((C*9/5)+32));
alert("la température en Fahrenheit est de "+F);
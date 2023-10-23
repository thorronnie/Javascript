nb=parseInt(window.prompt("Entrez votre numero"))
function tablemutiply (nb){
var nb;
var i;
for (let i=1; i<=10; i++){
    result = nb*i;
    console.log(nb + "x" + i + "=" +result);
    document.write(nb + "x" + i + "=" +result + "<br>" );
}
}
tablemutiply(nb);






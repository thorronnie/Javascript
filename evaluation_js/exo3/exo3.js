var tab = ["audrey","aurelien", "flavien", "jeremy", "laurent", "melik", "nouara", "salem", "samuel", "stephane"];
var saisi = window.prompt("Veuillez choisir un prénom audrey, aurelien, flavien,jeremy,laurent,melik,nouara,salem,samuel,stephane. ");
var rang = tab.indexOf(saisi);
 
 
if (rang>=0)
{
    var sup = tab.splice(rang,1);
    console.log(rang+sup);

    var nb = tab.push("");
 
    console.log(tab);
 
}
else {
    alert ("Mauvais prénom");
 
}

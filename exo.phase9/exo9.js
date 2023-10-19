
var p = true;
var n =1 ;
while(p==true) 
{
    var prenom= window.prompt("saisissez votre prénom"+ (n++) ) ;
console.log(prenom+n);

    if(prenom =='' || prenom == null){
        p=false
}
}

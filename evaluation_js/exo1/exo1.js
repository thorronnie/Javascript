var jeunes=0;
var adultes=0;
var vieux=0;
var personnes;
do {
  personnes = parseInt (window.prompt("Entrez votre age"));
  if ( personnes <20) {
    jeunes++;
    console.log(jeunes);
  }
  else if ((personnes >=20 ) && (personnes <40)) {
    adultes++;
    console.log(adultes);
  }
  if ((personnes >= 40) && (personnes <100)) {
    vieux++;
    console.log(vieux);
  } 
}
while(personnes < 100);
 
window.alert("Il y a " + "" + jeunes + "" + " jeunes\n " + "Il y a " + "" + adultes + "" + " adulte\n " 
+ " Il y a " + " Il y a " + "" + vieux + "" +" vieux\n " + " dont "+ " 1 " + "" + " centenaire ");
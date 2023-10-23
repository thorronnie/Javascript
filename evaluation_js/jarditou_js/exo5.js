var validation = document.getElementById("bouton_envoi");
var nom = document.getElementById("nom");
var  nom_m = document.getElementById("nom_manquant");


validation.addEventListener('click', f_valid);

function f_valid(e){
        if (nom.validity.valueMissing) {
            e.preventDefault();
            nom_m.textContent = 'nom manquant';
            nom_m.style.color = 'red';
        }

}
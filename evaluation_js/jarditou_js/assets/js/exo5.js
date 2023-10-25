// document.getElementById("envoyer"),addEventListener("click") ,function(e) {

// var nom = document.getElementById('nom');
// var nom_m = document.getElementById('nom_manquant');

// var prenom = document.getElementById("prenom");
// var prenom_m = document.getElementById("prenom_manquant");

// }
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formulaire_contact');
    var btnEnvoi = document.getElementById('btn_envoi');

    form.addEventListener('submit', function(event) {
        var erreurs = false;

        // Validation du champ nom
        var nom = document.getElementById('nom');
        var erreur1 = document.getElementById('erreur1');
        if (!/^[A-z]+$/.test(nom.value)) {
            erreurs = true;
            erreur1.textContent = 'Le nom est invalide.';
            event.preventDefault();
        } else {
            erreur1.textContent = '';
        }

        // Validation du champ prénom
        var prenom = document.getElementById('prenom');
        var erreur2 = document.getElementById('erreur2');
        if (!/^[A-z]+$/.test(prenom.value)) {
            erreurs = true;
            erreur2.textContent = 'Le prénom est invalide.';
            event.preventDefault();
        } else {
            erreur2.textContent = '';
        }

        // validation du champ code postal
        var cp = document.getElementById('cp');
        var erreur4 = document.getElementById('erreur4');
        if (!/^[A-z]+$/.test(cp.value)) {
            erreurs = true;
            erreur4.textContent = 'Le code postal est invalide.';
            event.preventDefault();
        } else {
            erreur4.textContent = '';
        }

        // validation du champ mail
        var mail = document.getElementById('mail');
        var erreur5 = document.getElementById('erreur5');
        if (!/^[A-z]+(5)$/.test(cp.value)) {
            erreurs = true;
            erreur5.textContent = 'Le mail est invalide.';
            event.preventDefault();
        } else {
            erreur5.textContent = '';
        }
        // validation du champ sujet
        var sujet = document.getElementById('sujet');
        var erreur6 = document.getElementById('erreur6');
        if (!test(sujet.value="")) {
            erreurs = true;
            erreur6.textContent = 'choisissez un sujet';
            event.preventDefault();
        } else {
            erreur6.textContent = '';
        }
        // Autres validations pour les champs obligatoires

        // Si des erreurs sont présentes, empêcher la soumission du formulaire
        if (erreurs) {
            event.preventDefault();
            document.getElementById('erreur8').textContent = 'Veuillez corriger les erreurs avant de soumettre le formulaire.';
        }
    });
});
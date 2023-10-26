function validerFormulaire() {
  const NomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/
  const PrenomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]+$/

  // Réinitialise les messages d'erreur
  resetErrorMessages();

  let isValid = true;

  // Valide le nom
  const nom = document.getElementById("nom");
  const erreurNom = document.getElementById("erreur");

  if (!validateRequiredField(nom, erreurNom)) {
    isValid = false;
  
        
      } else if (!NomRegex.test(nom.value)) {
        erreurNom.textContent = "Le nom doit contenir uniquement des lettres.";
        isValid = false;
      }
 //-----------------------------------------------------------------------------------
 
 
  // Valide le prénom
  const prenom = document.getElementById("prenom");
  const erreurPrenom = document.getElementById("erreur1");

  if (!validateRequiredField(prenom, erreurPrenom)) {
    isValid = false;
  }
  else if (!PrenomRegex.test(prenom.value)) {
    erreurPrenom.textContent = "Le nom doit contenir uniquement des lettres.";
    isValid = false;
  } 


  // Valide le sexe
  if (!validateSexe()) {
    isValid = false;
  }

  // Valide la date de naissance
  const dob = document.getElementById("dob");
  const erreurDob = document.getElementById("erreur2");

  if (!validateRequiredField(dob, erreurDob)) {
    isValid = false;
  }

  // Valide le code postal
  const cp = document.getElementById("cp");
  const erreurCp = document.getElementById("erreur3");
  const cpRegex = /^\d{5}$/;

  if (!validateRequiredField(cp, erreurCp)) {
    isValid = false;
  } else if (!cpRegex.test(cp.value)) {
    erreurCp.textContent = "Entrez un code postal valide (5 chiffres).";
    isValid = false;
  }

  // Valide l'email
  const email = document.getElementById("email");
  const erreurEmail = document.getElementById("erreur4");
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  if (!validateRequiredField(email, erreurEmail)) {
    isValid = false;
  } else if (!emailPattern.test(email.value)) {
    erreurEmail.textContent = "Veuillez entrer une adresse email valide.";
    isValid = false;
  }

  // Valide le sujet
  const sujet = document.getElementById("sujet");
  const erreurSujet = document.getElementById("erreur5");

  if (sujet.value === "") {
    erreurSujet.textContent = "Sélectionnez un sujet.";
    isValid = false;
  }

  // Valide la question
  const question = document.getElementById("question");
  const erreurQuestion = document.getElementById("erreur6");

  if (!validateRequiredField(question, erreurQuestion)) {
    isValid = false;
  }

  // Valide l'acceptation des conditions
  const check = document.getElementById("check");
  const erreurCheck = document.getElementById("erreur7");

  if (!check.checked) {
    erreurCheck.textContent = "Vous devez accepter les conditions.";
    isValid = false;
  }

  if (!isValid) {
    // Empêche la soumission du formulaire si des erreurs sont présentes
    return false;
  }

  // Si tout est valide, le formulaire sera soumis normalement
  return true;
}

function resetErrorMessages() {
  const errorElements = document.querySelectorAll("p[id^='erreur']");
  errorElements.forEach((element) => (element.textContent = ""));
}

function validateRequiredField(field, erreur) {
  if (field.value.trim() === "") {
    erreur.textContent = "Ce champ est obligatoire.";
    return false;
  }
  return true;
}

function validateSexe() {
  const sexeFeminin = document.getElementById("sexe_f");
  const sexeMasculin = document.getElementById("sexe_m");
  const erreurText = document.getElementById("erreursexe");

  if (!sexeFeminin.checked && !sexeMasculin.checked) {
    erreurText.textContent = "Veuillez sélectionner votre sexe.";
    return false;
  } else {
    erreurText.textContent = "";
    return true;
  }
}
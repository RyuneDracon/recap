//<!--
  // Nombre de catégories
  let nbtype = $('#menu').find('ul').length;
 
  // Fonction pour effacer le tri
  function notriage() {
    $('#menu').find('input:checked').prop('checked', false);
    $('#gallery_Tout').css('display', 'flex');
    $('#gallery_Autre').css('display', 'none');
  }
 
  // Fonction du tri
  function triage() {
    // On se débarrasse des articles déjà triés
    $('#gallery_Autre').html('');
    // Si aucune case est cochée, on a l'affichage de base
    if ($('#menu').find('input:checked').length < 1) {
      notriage();
    }
    else {
      // Tableau qui va contenir toutes les cases cochées
      let validation = [];
      /// Pour chaque catégorie on regarde s'il y a les cases cochée et on les met dans le tableau par catégorie
      for (i=0; i < nbtype; i++) {
        validation[i] = [];
        let lescases = $('#menu ul').eq(i).find('input:checked');
        for (y=0; y < lescases.length; y++) {
          validation[i][y] = lescases.eq(y).attr('name');
        }
      }
      // Pour chaque objet, on va faire la validation pour voir si on la prend
      let lesarticles = $('#gallery_Tout > div');
      // Pour chaque article
      for (i=0; i < lesarticles.length; i++) {
        let leok = 'No';
        let learticle = lesarticles.eq(i);
        // On regarde chaque catégorie
        for (y=0; y < nbtype; y++) {
          // Si la catégorie a des cases cochées, on autorise si l'article a la  d'une des class
          if (validation[y].length > 0) {
            let leok1 = 'No';
            for (x=0; x < validation[y].length; x++) {
              if (learticle.hasClass(validation[y][x])) {
                leok1 = "Oui";
                x = validation[y].length;
              }
            }
            if (leok1 == 'No') {
              y = nbtype;
              leok = 'No';
            }
            else {
              leok = 'Oui';
            }
          }
        }
        // L'objet fait partie des options, on l'ajoute dans la liste d'objets triés
        if (leok == 'Oui') {
          $('#gallery_Autre').append(learticle.clone(true));
        }
      }
      // On fait disparaître la liste des objets pour apparaître celle des objets triés
      $('#gallery_Tout').css('display', 'none');
      $('#gallery_Autre').css('display', 'flex');
      //S'il y a 0 article à droite après le tri, on dit qu'il y a 0 résultat
      let pasarticle = $('#gallery_Autre').children().length;
      if (pasarticle < 1) {
        $('#gallery_Autre').html('Aucun résultat ne correspond à votre recherche.');
      }
    }
  }
  //-->
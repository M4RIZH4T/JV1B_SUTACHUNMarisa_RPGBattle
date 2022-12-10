//if (...) { document.write (...); } else { document.write (...); }
//while (...) { (...) ; }
//faire une fonction : 
//var ... = ...() 
//document.getElementById("...").addEvent...('...') ; 

//VARIABLES ------------------------------------------------------------------------------------------------------------------------
//joueurs
var joueur1 = document.getElementById("personnage1");
var joueur2 = document.getElementById("personnage2");
var joueur3 = document.getElementById("personnage3");
var joueur4 = document.getElementById("personnage4");

var pvJoueur1 = 100 ; 
var pvJoueur2 = 100 ; 
var pvJoueur3 = 100 ; 
var pvJoueur4 = 100 ; 

var barrePvJoueur1 = document.getElementById("barrePvPersonnage1"); 
var barrePvJoueur2 = document.getElementById("barrePvPersonnage2"); 
var barrePvJoueur3 = document.getElementById("barrePvPersonnage3"); 
var barrePvJoueur4 = document.getElementById("barrePvPersonnage4"); 

var manaJoueur1 = document.getElementById("barreManaPersonnage1"); 
var manaJoueur2 = document.getElementById("barreManaPersonnage2"); 
var manaJoueur3 = document.getElementById("barreManaPersonnage3"); 
var manaJoueur4 = document.getElementById("barreManaPersonnage4"); 

var manaConsomme = 20 ; 

var imgJoueur1 = document.getElementById("personnage1_img"); 
var imgJoueur2 = document.getElemenyById("personnage2_img"); 

var attaqueSpecialeJoueur1 = 30 ; //boule magique qui fait 30 de dégats 
var attaqueSpecialeJoueur2 = 20 ; //heal un personnage au hasard de 20 PV 
var attaqueSpecialeJoueur3 = 35 ; //épée magique qui fait 35 de dégats 
var attaqueSpecialeJoueur4 = 32 ; //flèche magique qui inflige 32 de dégâts 

var joueursEncoreEnVie = 0 ; //va servir à savoir le nombre de joueurs encore en vie 

//mechants 

var mechant1 = document.getElementById("monstre1"); 
var mechant2 = document.getElementById("monstre2"); 
var mechant3 = document.getElementById("monstre3");

var pvMechant1 = 100 ; 
var pvMechant2 = 100 ; 
var pvMechant3 = 100 ; 

var barrePvMechant1 = document.getElementById("barrePvMonstre1"); 
var barrePvMechant2 = document.getElementById("barrePvMonstre2");
var barrePvMechant3 = document.getElementById("barrePvMonstre3");

var imgMechant1 = document.getElementById("monstre1_img"); 
var imgMechant2 = document.getElementById("monstre2_img"); 
var imgMechant3 = document.getElementById("monstre3_img"); 

//barre de texte --------------------------------------------------------------------------------------------------------------------
texte = document.getElementsById("barre_texte"); 

//afficher les PV et le mana quand on click sur un joueur ---------------------------------------------------------------------------

var choixDuJoueur = 0 ; 

imgJoueur1.onclick = function() //pour le premier joueur 
{ 

    texte.innerHTML = " Le joueur 1 possède " + pvJoueur1 + " PV. " ; 
    choixDuJoueur = 1 ; 
}


imgJoueur2.onclick = function() //pour le deuxième joueur 
{

    texte.innerHTML = " Le joueur 2 possède " + pvJoueur2 + " PV. " ;
    choixDuJoueur = 2 ; 
}

imgJoueur3.onclick = function() //pour le deuxième joueur 
{

    texte.innerHTML = " Le joueur 3 possède " + pvJoueur3 + " PV. " ;
    choixDuJoueur = 3 ;
}

imgJoueur4.onclick = function() //pour le deuxième joueur 
{

    texte.innerHTML = " Le joueur 4 possède " + pvJoueur4 + " PV. " ;
    choixDuJoueur = 4 ; 
}



//afficher les PV quand on click sur un méchant --------------------------------------------------------------------------------

var choixDuMonstre = 0 ; //faire les onclick des monstres et faire dedans choixDuMonstre = 1 ou 2 ou 3 

imgMechant1.onclick = function () 
{ 
    texte.innerHTML = "Vous avez sélectionné le monstre 1. Le monstre 1 possède " + pvMechant1 + "PV. " ; 
    choixDuMonstre = 1 ; 
}

imgMechant2.onclick = function () 
{ 
    texte.innerHTML = "Vous avez sélectionné le monstre 2. Le monstre 2 possède " + pvMechant2 + "PV. " ; 
    choixDuMonstre = 2 ; 
}

imgMechant3.onclick = function () 
{ 
    texte.innerHTML = "Vous avez sélectionné le monstre 3. Le monstre 3 possède " + pvMechant3 + "PV. " ; 
    choixDuMonstre = 3 ; 
}


//avoir un dégat fait par le joueur compris au hasard entre 0 et 20 (nombre = 20)------------------------------------------------------------------------
function degatsJoueur(nombre) { 

    return Math.floor(Math.random() * (nombre + 1) ) ; 

}



//fonction des attaques des joueurs --------------------------------------------------------------------------------------------------
 

function attaqueJoueur() { 

    for (i = 0 ; i <= 4 ; i++) //lancer la boucle 4 fois pour les 4 joueurs 
    { 
        if (choixDuMonstre === 1) 
        { 
            var degatsFaitParJoueur = degatsJoueur(20); //attaque entre 0 et 20 de dégats 
            pvMechant1 = pvMechant1 - degatsFaitParJoueur ; //diminution des PV du méchant 1 
            texte.innerHTML = "Le joueur" + i +  "inflige" + degatsFaitParJoueur + "de dégats au méchant 1." ;

        } 
        
    
        //je ne sais pas comment diminuer le mana du bon personnage 
        //manaJoueur1.value = manaJoueur1.value - manaConsomme ; //cela va enlever 20 de mana à chaque attaque 

        if (choixDuMonstre === 2) 
        { 
            var degatsFaitParJoueur = degatsJoueur(20); //attaque entre 0 et 20 de dégats 
            pvMechant2 = pvMechant2 - degatsFaitParJoueur ; //diminution des PV du méchant 2 
            texte.innerHTML = "Le joueur" + i +  "inflige" + degatsFaitParJoueur + "de dégats au méchant 2." ;

        } 

        if (choixDuMonstre === 3) 
        { 
            var degatsFaitParJoueur = degatsJoueur(20); //attaque entre 0 et 20 de dégats 
            pvMechant3 = pvMechant3 - degatsFaitParJoueur ; //diminution des PV du méchant 3 
            texte.innerHTML = "Le joueur" + i + "inflige" + degatsFaitParJoueur + "de dégats au méchant 3." ;

        } 

        }
       
}

//fonction attaque spéciale des joueurs ----------------------------------------------------

function attaqueSpecialeJoueur () 
{ 
    if (choixDuJoueur === 1 && pvJoueur1 >= 0 ) //magicienne qui inflige des dégats à un monstre choisi 
    { 
        if (choixDuMonstre === 1 && pvMechant1 >= 0 )
        {
            pvMechant1 = pvMechant1 - attaqueSpecialeJoueur1 ; 
            texte.innerHTML = "Le joueur 1 inflige" + attaqueSpecialeJoueur1 + "de dégats au méchant 1. "  ; 
        }

        if (choixDuMonstre === 2 && pvMechant2 >= 0 )
        {
            pvMechant2 = pvMechant2 - attaqueSpecialeJoueur1 ; 
            texte.innerHTML = "Le joueur 1 inflige" + attaqueSpecialeJoueur1 + "de dégats au méchant 2. " ; 
        }

        if (choixDuMonstre === 3 && pvMechant3 >= 0 )
        {
            pvMechant3 = pvMechant3 - attaqueSpecialeJoueur1 ; 
            texte.innerHTML = "Le joueur 1 inflige" + attaqueSpecialeJoueur1 + "de dégats au méchant 3. " ; 
        }
    }

    if (choixDuJoueur === 2 && pvJoueur2 >= 0 ) //prêtre qui heal un camarade 
    { 
        if (choixDuJoueur === 1 && pvJoueur1 >= 0 )
        {
            pvJoueur1 = pvJoueur1 + attaqueSpecialeJoueur2 ; 
            texte.innerHTML = "Le joueur 2 soigne et redonne" + attaqueSpecialeJoueur2 + "PV au joueur 1. " ; 
        }

        if (choixDuJoueur === 3 && pvJoueur3 >= 0 )
        {
            pvJoueur3 = pvJoueur3 + attaqueSpecialeJoueur2 ; 
            texte.innerHTML = "Le joueur 2 soigne et redonne" + attaqueSpecialeJoueur2 + "PV au joueur 3. " ;  
            
        }

        if (choixDuJoueur === 4 && pvJoueur4 >= 0 )
        {
            pvJoueur4 = pvJoueur4 + attaqueSpecialeJoueur2 ; 
            texte.innerHTML = "Le joueur 2 soigne et redonne" + attaqueSpecialeJoueur2 + "PV au joueur 4. " ; 
        }
    }

    if (choixDuJoueur === 3 && pvJoueur3 >= 0) //attaque avec son épée magique 
    { 
        if (choixDuMonstre === 1 && pvMechant1 >= 0 )
        {
            pvMechant1 = pvMechant1 - attaqueSpecialeJoueur3 ; 
            texte.innerHTML = "Le joueur 3 inflige" + attaqueSpecialeJoueur3 + "de dégats au méchant 1 grâce à son épée magique. " ; 
        }

        if (choixDuMonstre === 2 && pvMechant2 >= 0)
        {
            pvMechant2 = pvMechant2 - attaqueSpecialeJoueur3 ;
            texte.innerHTML = "Le joueur 3 inflige" + attaqueSpecialeJoueur3 + "de dégats au méchant 2 grâce à son épée magique. " ; 
        }

        if (choixDuMonstre === 3 && barrePvMechant3 >= 0)
        {
            pvMechant3 = pvMechant3 - attaqueSpecialeJoueur3 ; 
            texte.innerHTML = "Le joueur 3 inflige" + attaqueSpecialeJoueur3 + "de dégats au méchant 3 grâce à son épée magique. " ; 
        }
    }

    if (choixDuJoueur === 4 && pvJoueur4 >= 0) //attaque avec une flèche magique 
    { 
        if (choixDuMonstre === 1 && pvMechant1 >= 0 )
        {
            pvMechant1 = pvMechant1 - attaqueSpecialeJoueur4 ;
            texte.innerHTML = "Le joueur 4 inflige" + attaqueSpecialeJoueur4 + "de dégats au méchant 1 grâce à sa flèche magique. " ; 
        }

        if (choixDuMonstre === 2 && pvMechant2 >= 0)
        {
            pvMechant2 = pvMechant2 - attaqueSpecialeJoueur4 ;
            texte.innerHTML = "Le joueur 4 inflige" + attaqueSpecialeJoueur4 + "de dégats au méchant 2 grâce à sa flèche magique. " ;
        }

        if (choixDuMonstre === 3 && pvMechnt3 >= 0)
        {
            pvMechant3 = pvMechant3 - attaqueSpecialeJoueur4 ;
            texte.innerHTML = "Le joueur 4 inflige" + attaqueSpecialeJoueur4 + "de dégats au méchant 3 grâce à sa flèche magique. " ;
        }
    }

}



//riposte des méchants  ----------------------------------------------------------------------

//avoir un dégat fait par le méchant compris au hasard entre 0 et 30 (nombre = 30) 
function degatsMonstre(nombre) { 

    return Math.floor(Math.random() * (nombre + 1) ) ; 

}

//choix aléatoire d'un joueur par le monstre 
function choixJoueurHasard () { 

    return Math.floor( Math.random() * 4) + 1 ; //ici le +1 sert à choisir un nombre commençant à 1 donc un random de 1 à 4

}

function riposteMechant1() {  

    choixJoueurHasard() //je sais pas comment faire le lien entre choixJoueurHasard et choixDuJoueur 

    if (choixDuJoueur === 1 && pvJoueur1 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur1 = pvJoueur1- degatsFaitParMechant ; //le nombre de PV diminue 
        barrePvJoueur1.value = barrePvJoueur1.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 1 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 1  ! "; 

    }

    if (choixDuJoueur === 2 && pvJoueur2 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur2= pvJoueur2 - degatsFaitParMechant ;
        barrePvJoueur2.value = barrePvJoueur2.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 1 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 2  ! ";

    }

    if (choixDuJoueur === 3 && pvJoueur3 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur3 = pvJoueur3 - degatsFaitParMechant ;
        barrePvJoueur3.value = barrePvJoueur3.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 1 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 3  ! "; 

    }

    if (choixDuJoueur === 4 && pvJoueur4 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur4 = pvJoueur4 - degatsFaitParMechant ;
        barrePvJoueur4.value = barrePvJoueur4.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 1 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 4  ! "; 

    }
    

}
function riposteMechant2() {  

    choixJoueurHasard() //je sais pas comment faire le lien entre choixJoueurHasard et choixDuJoueur 

    if (choixDuJoueur === 1 && pvJoueur1 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur1 = pvJoueur1 - degatsFaitParMechant ;
        barrePvJoueur1.value = barrePvJoueur1.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 2 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 1  ! "; 

    }

    if (choixDuJoueur === 2 && pvJoueur2 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur2 = pvJoueur2 - degatsFaitParMechant ;
        barrePvJoueur2.value = barrePvJoueur2.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 2 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 2  ! ";

    }

    if (choixDuJoueur === 3 && pvJoueur3 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur3 = pvJoueur3 - degatsFaitParMechant ;
        barrePvJoueur3.value = barrePvJoueur3.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 2 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 3  ! "; 

    }

    if (choixDuJoueur === 4 && pvJoueur4 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur4 = pvJoueur4 - degatsFaitParMechant ;
        barrePvJoueur4.value = barrePvJoueur4.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 2 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 4  ! "; 

    }
    

}
function riposteMechant1() {  

    choixJoueurHasard() //je sais pas comment faire le lien entre choixJoueurHasard et choixDuJoueur 

    if (choixDuJoueur === 1 && pvJoueur1 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur1 = pvJoueur1 - degatsFaitParMechant ;
        barrePvJoueur1.value = barrePvJoueur1.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 3 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 1  ! "; 

    }

    if (choixDuJoueur === 2 && pvJoueur2 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur2 = pvJoueur2 - degatsFaitParMechant ;
        barrePvJoueur2.value = barrePvJoueur2.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 3 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 2  ! ";

    }

    if (choixDuJoueur === 3 && pvJoueur3 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur3 = pvJoueur3 - degatsFaitParMechant ;
        barrePvJoueur3.value = barrePvJoueur3.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 3 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 3  ! "; 

    }

    if (choixDuJoueur === 4 && pvJoueur4 >= 0) 
    { 
        var degatsFaitParMechant = degatsMonstre(30); //attaque entre 0 et 30 de dégats 
        pvJoueur4 = pvJoueur4 - degatsFaitParMechant ;
        barrePvJoueur4.value = barrePvJoueur4.value - degatsFaitParJoueur ; //le nombre de PV diminue dans la barre de vie 
        texte.innerHTML = "Le monstre 3 riposte et inflige " + degatsFaitParMechant + "de dégats au joueur 4  ! "; 

    }
    

}

//défense -----------------------------------------------------------------------------------

function Defense() 
{ 
    if ((choixDuJoueur == 1 ))
    { 

    }
}

//fuite -------------------------------------------------------------------------------------

function fuir() 
{ 
    texte.innerHTML = "Vous avez choisi de fuir.. c'est terminé. Réessayez ! " ; 
}

//mort des joueurs ---------------------------------------------------------------------------

function mortJoueur1() 
{ 
    if (pvJoueur1 <= 0)
      { 
        texte.innerHTML = "Le joueur 1 est mort, il lui reste 0 PV. "; 
        imgJoueur1.style.display = "none" ; //faire disparaître l'image du joueur sur l'écran une fois qu'il meurt 
      }

}

function mortJoueur2() 
{ 
    if (pvJoueur2 <= 0)
      { 
        texte.innerHTML = "Le joueur 2 est mort, il lui reste 0 PV. "; 
        imgJoueur2.style.display = "none" ; //faire disparaître l'image du joueur sur l'écran une fois qu'il meurt 
      }

}

function mortJoueur3() 
{ 
    if (pvJoueur3 <= 0)
      { 
        texte.innerHTML = "Le joueur 3 est mort, il lui reste 0 PV. "; 
        imgJoueur3.style.display = "none" ; //faire disparaître l'image du joueur sur l'écran une fois qu'il meurt 
      }

}

function mortJoueur4() 
{ 
    if (pvJoueur4 <= 0)
      { 
        texte.innerHTML = "Le joueur 4 est mort, il lui reste 0 PV. "; 
        imgJoueur4.style.display = "none" ; //faire disparaître l'image du joueur sur l'écran une fois qu'il meurt  
      }

}

//mort des méchants -------------------------------------------------------------------------

function mortMechant1() 
{ 
    if (pvMechant1 <= 0)
    { 
        texte.innerHTML = "Le méchant 1 est mort, il lui reste 0 PV. "; 
        imgMechant1.style.display = "none" ; //faire disparaître l'image du monstre sur l'écran une fois qu'il meurt 
    }
}

function mortMechant2() 
{ 
    if (pvMechant2 <= 0)
    { 
        texte.innerHTML = "Le méchant 2 est mort, il lui reste 0 PV. " ;
        imgMechant2.style.isplay = "none" ; //faire disparaître l'image du monstre sur l'écran une fois qu'il meurt 
    }
}

function mortMechant3() 
{ 
    if (pvMechant3 <= 0)
    { 
        texte.innerHTML = "Le méchant 3 est mort, il lui reste 0 PV. " ;
        imgMechant3.style.display = "none" ; //faire disparaître l'image du monstre sur l'écran une fois qu'il meurt 
    }
}



//Relier les boutons ---------------------------------------------------------------------------------
var boutonAttaque = document.getElementById("buttonAttaque") ; 
var boutonAttaqueSpeciale = document.getElementById("buttonAttaqueSpeciale") ; 
var boutonDefendre = document.getElementById("buttonDefendre") ; 
var boutonFuir = document.getElementById("buttonFuir") ; 

boutonAttaque.onclick = function()  //lancer la fonction attaque lorsqu'on clique sur le bouton attaque 
{ 
    attaqueJoueur() ; 
}

boutonAttaqueSpeciale.onclick = function () //faire une attaque spéciale quand on appui sur le bouton 
{ 
    attaqueSpecialeJoueur() ; 
}

boutonDefendre.onclick = function() 
{ 

}
boutonFuir.onclick = function() 
{ 
    fuir() ; 
    
}

//faire la condition de victoire----------------------------------------------------------------- 

function Victoire() 
{
    if (pvMechant1 <= 0 && pvMechant2 <=0 && pvMechant3 <= 0)
    { 
        texte.innerHTML = "VOUS AVEZ REUSSI A BATTRE LES MONSTRES, VOUS AVEZ GAGNE ! " ; 

    }
}
//faire la condition de défaite------------------------------------------------------------------ 

function Defaite() 
{ 
    if (pvJoueur1 <= 0 && pvJoueur2 <= 0 && pvJoueur3 <= 0 && pvJoueur4 <=0) 
    { 
        texte.innerHTML = "Oh non...Vous avez été vaincu par les monstres. Réessayez ! " ; 
    
    }
}

//savoir combien de joueurs il reste en vie ------------------------------------------------------
function joueursEnVie () 
{ 
    if (pvJoueur1 >= 0 && pvJoueur2 >= 0 && pvJoueur3 >= 0 && pvJoueur4>=0 ) 
    { 
        joueursEncoreEnVie = 4 ; 
    }

}


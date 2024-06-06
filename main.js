const prompt = require("prompt-sync")()

console.log("Bonjour et bienvenue dans ")

let choice = prompt("Voulez vous jouer au jeu oui (O) ou non (N) : ").toUpperCase()

while (choice != "N" && choice != "O") {
    choice = prompt("Voulez vous jouer au jeu oui (O) ou non (N) :  ").toUpperCase()
}
if (choice === "O") {
    console.log("Tu es dans une foret, tu as deux chemins mais tu ne sais pas ce qu'il se cache derriere ce chemin !")
    choice = prompt("Quel chemin choisis-tu Droite (D) ou Gauche (G)").toUpperCase()

    // ---------------------------------------------------------------------CHEMIN DE DROITE------------------------------------------------------------------------ 
    while (choice != "D" && choice != "G") {
        choice = prompt("Quel chemin choisis-tu Droite (D) ou Gauche (G)").toUpperCase()
    }
    if (choice === "D") {
        console.log("Tu as choisis le chemin de droite. Tu arrives au bord d'une falaise haute de 50 mètres, tu peux faire demi tour (1), ou sauter de la falaise (2)")
        choice = prompt("Quel choix fais-tu (1) ou (2): ").toUpperCase()
        while (choice != "1" && choice != "2") {
            choice = prompt("Quel choix fais-tu (1) ou (2):").toUpperCase()
        }
        if (choice === "1") {
            console.log("Pas de chance il y avait des loups derrière, tu viens de te faire bouffer.")
            console.log("FIN DU JEU")
        } else if (choice === "2") {
            console.log("Tu as fait le bon choix en sautant de la falaise, tu as fait un sacré plat du ventre, mais tu es encore en vie.")
            console.log("Maintenant un autre choix s'offre à toi, il y a une petite île avec des cocotiers à 200 mètres a la nage (1), ou alors tu peux retourner dans la foret (2)")
            choice = prompt("Entre ton choix ici (1) ou (2): ").toUpperCase()
            while (choice != "1" && choice != "2") {
                choice = prompt("Entre ton choix ici (1) ou (2): ").toUpperCase()

            }
            if (choice === "1") {
                console.log("Tu seras tranquille ici, bravo tu as fait le bon choix.")
                console.log("FIN DU JEU")
            } else if (choice === "2") {
                console.log("Tu décides de retourner dans la foret, les loups te bouffe encore.")
                console.log("FIN DU JEU")
            }

        }

    }
    // -------------------------------------------------------------------------------CHEMIN DE GAUCHE------------------------------------------------------------
    else if (choice === "G") {
        console.log("Tu as choisis le chemin de gauche")
        console.log("Tu arrives au bord d'un étang d'eau et tu as très soif, boire de l'eau de l'étang (1) ou ne pas boire d'eau pour le moment (2)")
        choice = prompt("Entre ton choix ici : ").toUpperCase()
        while(choice != "1" && choice !="2"){
            choice = prompt("Vous devez répondre par (1) ou (2) ").toUpperCase()
        }
        if(choice === "1"){
            console.log("Tu as choisis de boire de l'eau de l'étang sans savoir ce qu'il y avait à l'interieur")
            console.log("L'eau de l'étang est infectée, pas de chance. Tu es infecté, et tu meurs de l'infection.")
            console.log("FIN DU JEU")
        }
        else if(choice === "2"){
            console.log("Tu as choisis de pas boire de l'eau de l'étang")
            console.log("Après cet étang, deux autres chemins s'offrent à toi, le chemin de droite, une longue route avec la lumière au bout (1) ou une route bien sombre et tu n'en vois pas la fin (2)")
            choice = prompt("Quelle route décides-tu d'emprunter ? : ").toUpperCase()
            while(choice != "1" && choice !="2"){
                choice = prompt("Vous devez répondre par (1) ou (2)").toUpperCase()
            }
            if(choice === "1"){
                console.log("Vous avez choisis le bon chemin, au bout de cette longue route tu trouves un magasin qui vend des boissons bien fraiches.")
                console.log("Tu ne meurs donc pas de soif, tu retrouves la civilisation, bravo ! ");
            }
            else if(choice === "2"){
                choice = prompt("Tu croises des loups, que fais-tu? Tu fuis (1) ou tu essaies de les battre (2)").toUpperCase()
                while (choice !="1" && choice !="2") {
                    choice = prompt("Tu croises des loups, que fais-tu? Tu fuis (1) ou tu essaies de les battre (2) : ").toUpperCase()
                }
                if(choice === "1"){
                    console.log("En fuyant tu trebuches et tu te tords la nuque. T'es mort.")
                    console.log("FIN DU JEU")
                }
                else if(choice === "2"){
                    console.log("T'es completement fou, tu te fais arracher par les loups. Tu meurs.")
                    console.log("FIN DU JEU")
                }
            }
        }
    }
}
else if (choice === "N") {
    console.log("Tant pis, au revoir")
}




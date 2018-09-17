/* Ahmed Ben Daya / p1161664 */
var imageEntree = document.getElementById('entreeImg');
var imageRepas = document.getElementById('repasImg');
var priceE =0   , priceR = 0, sousTotal ;

//Fonction pour remplir les listes deroulantes.
function fillOptions() {

    var selectOptionEntree = "<option value=''>Choisir..</option>";
    var selectOptionRepas = "<option value='r'>Choisir..</option>";

    //Remplir la liste des entrees
    for (i in cuisine.entrees) {
        selectOptionEntree += "<option value='" + cuisine.entrees[i].nom + "'>" + cuisine.entrees[i].nom + " (prix: " + cuisine.entrees[i].prix + "$)" + "</option>"

    }

    //Remplir la liste des repas
    for (i in cuisine.repas) {
        selectOptionRepas += "<option value='" + cuisine.repas[i].nom + "'>" + cuisine.repas[i].nom + " (prix: " + cuisine.repas[i].prix + "$)" + "</option>"

    }


    document.getElementById('entree').innerHTML = selectOptionEntree;
    document.getElementById('repas').innerHTML = selectOptionRepas;

}

function update(id) {
    
    var id = document.getElementById(id);    
    updateImages(id);
    updatePrice(id);
    updateTotal();
}

//Mettre a jour les images
function updateImages(id) {
    if (id.value == "") {
        imageEntree.src = "images/vide.jpg";
    } else if (id.value == cuisine.entrees[0].nom) {
        imageEntree.src = cuisine.entrees[0].image;
    } else if (id.value == cuisine.entrees[1].nom) {
        imageEntree.src = cuisine.entrees[1].image;
    } else if (id.value == "r") {
        imageRepas.src = "images/vide.jpg";
    } else if (id.value == cuisine.repas[0].nom) {
        imageRepas.src = cuisine.repas[0].image;
    } else if (id.value == cuisine.repas[1].nom) {
        imageRepas.src = cuisine.repas[1].image;
    }
}

//Mettre a jour les prix
function updatePrice(id) {
    var priceEntree = document.getElementById('priceEntree');
    var priceRepas = document.getElementById('priceRepas');
    if (id.value == cuisine.entrees[0].nom) {
        priceE = cuisine.entrees[0].prix;
        priceEntree.textContent = priceE + "$";
    } else if (id.value == cuisine.entrees[1].nom) {
        priceE = cuisine.entrees[1].prix;
        priceEntree.textContent = priceE + "$";
    } else if (id.value == "") {
        priceE = 0;
        priceEntree.textContent = priceE + "$";
    } else if (id.value == "r") {
        priceR = 0;
        priceRepas.textContent = priceR + "$";

    } else if (id.value == cuisine.repas[0].nom) {
        priceR = cuisine.repas[0].prix;
        priceRepas.textContent = priceR + "$";

    } else if (id.value == cuisine.repas[1].nom) {
        priceR = cuisine.repas[1].prix;
        priceRepas.textContent = priceR + "$";

    }

}

//Calculer le sous-total
function updateSousTotal() {
    var sTotal = document.getElementById('sousTotal');
    sousTotal = priceE + priceR;
    sTotal.textContent = sousTotal.toFixed(2);

}

//Calculer le total
function updateTotal() {

    updateSousTotal();

    var taxesAffichage = document.getElementById('taxes');
    var totalAffichage = document.getElementById('total');
    var taxes = sousTotal * 12.9 / 100;
    var total = sousTotal + taxes;

    taxesAffichage.textContent = taxes.toFixed(2);
    totalAffichage.textContent = total.toFixed(2);


}

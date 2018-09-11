/* Ahmed Ben Daya / p1161664 */


//Declaration des variables globales
var imageEntree = document.getElementById('entreeImg');
var imageRepas = document.getElementById('repasImg');
var priceE =0   , priceR = 0, sousTotal ;



//Fonction pour remplir les listes deroulantes.
function fillOptions() {

    var optionsEntree = ["Salade (prix: 5.95$)", "Ecargot (prix: 4.95$)"],
        optionsRepas = ["Spaghetti (prix: 8.95$)", "Lasagne (prix: 9.95$)"];

    var selectOptionEntree = "<option value=''>Choisir..</option>";
    var selectOptionRepas = "<option value='r'>Choisir..</option>";

    //Remplir la liste des entrees
    for (var i = 0; i < optionsEntree.length; i++) {
        selectOptionEntree += "<option value='" + optionsEntree[i] + "'>" + optionsEntree[i] + "</option>"

    }

    //Remplir la liste des repas
    for (var i = 0; i < optionsRepas.length; i++) {
        selectOptionRepas += "<option value='" + optionsRepas[i] + "'>" + optionsRepas[i] + "</option>"

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
    } else if (id.value == "Salade (prix: 5.95$)") {
        imageEntree.src = "images/salade.jpg";
    } else if (id.value == "Ecargot (prix: 4.95$)") {
        imageEntree.src = "images/escargot.jpg";
    } else if (id.value == "r") {
        imageRepas.src = "images/vide.jpg";
    } else if (id.value == "Spaghetti (prix: 8.95$)") {
        imageRepas.src = "images/spaghetti.jpg";
    } else if (id.value == "Lasagne (prix: 9.95$)") {
        imageRepas.src = "images/lasagne.jpg";
    }
}

//Mettre a jour les prix
function updatePrice(id) {
    var priceEntree = document.getElementById('priceEntree');
    var priceRepas = document.getElementById('priceRepas');
    if (id.value == "Salade (prix: 5.95$)") {
        priceE = 5.95;
        priceEntree.textContent = priceE + "$";
    } else if (id.value == "Ecargot (prix: 4.95$)") {
        priceE = 4.95;
        priceEntree.textContent = priceE + "$";
    } else if (id.value == "") {
        priceE = 0;
        priceEntree.textContent = priceE + "$";
    } else if (id.value == "r") {
        priceR = 0;
        priceRepas.textContent = priceR + "$";

    } else if (id.value == "Spaghetti (prix: 8.95$)") {
        priceR = 8.95;
        priceRepas.textContent = priceR + "$";

    } else if (id.value == "Lasagne (prix: 9.95$)") {
        priceR = 9.95;
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

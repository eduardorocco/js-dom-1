/* Consegna
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e 
accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi 
(dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
BONUS
Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
e così via... */

const button = document.getElementById('lamp-button')

let yellowLamp = document.getElementById('y-lamp').style.display = "none"

function toggleDisplay(id) {

    let element = document.getElementById(id);


    if (element.style.display === "none") {

        element.style.display = "block"

    } else {

        element.style.display = "none"
    }
}





button.addEventListener('click', function(){



    toggleDisplay('w-lamp')

})
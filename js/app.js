 
//creo oggetto con le tariffe assocciate al lavoro della select
tariffeLavori = {
    '1': 20.50,
    '2': 15.30,
    '3': 33.60
}

const codiciPromozionaliValidi = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24']

const form = document.getElementById('addPreventivo');
//console.log(form)
form.addEventListener('submit', addPreventivo);

//funzione che accetta un parametro di tipo evento
function addPreventivo(e) {
    
    //disabilitare la propagazione del submit
    e.preventDefault();
    
const lavori = document.getElementById('lavori').value;

//recupero la tariffaoraria dall'oggetto di tariffe orarie
const tariffaLavoro = tariffeLavori[lavori];

const codicePromozionale = document.getElementById('codicePromo').value;

//inizzializzo lo sconto a 0
let sconto = 0;

//verifico la validezza del codice promozionale
if (codiciPromozionaliValidi.includes(codicePromozionale)) {
    //se il codice è valido applico lo sconto del 25%
    sconto = 0.25;
} else if (codicePromozionale === '') {
        sconto = 0;
} else {
    //se il codice promozionale non è valido, mostro avviso
    alert('Il codice promozionale inserito non è valido.')
}

//calcolo il prezzo per 10 ore, applicando lo sconto se presente
const oreLavoro = 10;
let prezzoTotale = tariffaLavoro * oreLavoro;
prezzoTotale *= (1 - sconto);
   
//creo un div per stampare il prezzo nel dom
const prezzoHtml = document.getElementById('stampaPrezzo');
prezzoHtml.innerHTML = `
<div><b>Prezzo finale</b></div>
<div><b>&euro;</b>${prezzoTotale.toFixed(2)}</div>
`;

}

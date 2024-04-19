 
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
    
    //disabilito la propagazione del submit
    e.preventDefault();

    // Validazione del modulo utilizzando Bootstrap
    if (form.checkValidity() === false) {
        // Se il modulo non è valido, interrompi l'invio e la propagazione dell'evento
        e.stopPropagation();

        // Aggiungo la classe di validazione di Bootstrap
        form.classList.add('was-validated');
        return;
    }

//verifico se è stat selezionata un'opzione valida dalla select
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
} 

//calcolo il prezzo per 10 ore, applicando lo sconto se presente
const oreLavoro = 10;
let prezzoTotale = tariffaLavoro * oreLavoro;
prezzoTotale *= (1 - sconto);

//formatto il prezzo con due decimali
const prezzoFormattato = prezzoTotale.toFixed(2);

//trovo l'indice del punto decimale nella stringa
const indicePuntoDecimale = prezzoFormattato.indexOf('.');

//estraggo la parte intera del prezzo dalla stringa formattata
const parteIntera = prezzoFormattato.substring(0, indicePuntoDecimale);

//estraggo la parte decimale del prezzo della stringa formattata
const parteDecimale = prezzoFormattato.substring(indicePuntoDecimale + 1);

//creo un div per stampare il prezzo nel dom
const prezzoHtml = document.getElementById('stampaPrezzo');

//assegno la stringa html al div
prezzoHtml.innerHTML = `
<p><b>Prezzo Totale</b></p>
<b>&euro;
<span>${parteIntera}</span>
</b>
.${parteDecimale}
`;

};




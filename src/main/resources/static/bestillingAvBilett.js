//boolean verdier som brukes for å sjekke om veridene er gyldige senere i programmet
let filmV = false;
let antallV = false;
let fornavnV = false;
let etternavnV = false;
let telefonnrV = false;
let emailV = false;

//RegEx utrykk som brukes for å validere input senere i programmet.
const antallRegEx = /^[1-9][0-9]?$|^100$/;
const navnRegEx = /^([a-zA-Z-]{1,20})/;
const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;

//En ut variabel som senere i programmmet brukes til å legge til ting på siden
let ut = "";

//Arrayet som skal holde på informasjonen til de ulike billettene
const billettListe=[];

//Registreringsfunsjonen som legger til verdiene som et objekt i arrayet samt starter funksjonen som viser billettene på siden.
function registreringAvBillett(fl,at,fn,et,tn,ep){

    const billett={
        film : fl,
        antall : at,
        fornavn :fn,
        etternavn:et,
        telefonNr:tn,
        epost:ep
    };
    billettListe.push(billett);
    visBilletter()
}

//Dette er funksjonen som henter inputtet fra nettsiden for den sender verdiene for validering
function innhentingAvInput(){

    const film = document.getElementById("film-select").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonnr").value;
    const email = document.getElementById("email").value;

    validering(film,antall,fornavn,etternavn,telefonNr,email);
}

//Her valideres verdiene som kommer fra 'innhentingAvInput()', dette gjøres gjennom å teste dem opp mot regex utrykkene
// lagret tidligere i oppgaven, om noen av utrykkene ikke lar seg validere så startes funksjonene som viser de spesifike
//feilmeldingene. Til slutt har jeg en if setning som sjekker om boolean variablene til de ulike er sanne, og hvis de er sanne
//Så startes registrering av billettene
function validering(fl,at,fn,en,tn,ep){

    if(fl === "1"){
        filmFeil()
        filmV = false;
    } else{
        filmV = true;
        console.log("film")
    }
    if (antallRegEx.test(at)){
        antallV = true;
        console.log("antall")
    } else{
        antallFeil();
    }

    if (navnRegEx.test(fn)){
        fornavnV = true;
        console.log("fornavn")
    } else {
        fornavnFeil()
    }
    if (navnRegEx.test(en)){
        etternavnV = true;
        console.log("etternavn")
    } else {
        etternavnFeil()
    }

    if (telefonRegEx.test(tn)){
        telefonnrV = true;
        console.log("telefon")
    } else {
        telefonNrFeil()
    }

    if (emailRegEx.test(ep)){
        emailV = true;
        console.log("email")
    }else {
        emailFeil()
    }

    if (filmV === true && antallV === true && fornavnV === true && etternavnV === true && telefonnrV === true && emailV === true){
        registreringAvBillett(fl,at,fn,en,tn,ep)
    }

}

//Dette er feilmeldingsfunksjonene somm endrer displayet til block sånn at feilmeldingene vises.
function filmFeil(){
    const x = document.getElementById("filmValidering");
    x.setAttribute("style", "display: block;")
}
function antallFeil(){
    const x = document.getElementById("antall-validering");
    x.setAttribute("style", "display: block;")
}
function fornavnFeil(){
    const x = document.getElementById("fornavn-validering");
    x.setAttribute("style", "display: block;")
}
function etternavnFeil(){
    const x = document.getElementById("etternavn-validering");
    x.setAttribute("style", "display: block;")
}
function telefonNrFeil(){
    const x = document.getElementById("telefonnr-validering");
    x.setAttribute("style", "display: block;")
}
function emailFeil(){
    const x = document.getElementById("email-validering");
    x.setAttribute("style", "display: block;")
}

//denne funksjonen sletter billettene ved å sette arrayets lengde til 0. Så kjører den visbillett funksjonen som
// løper gjennom det tomme arrayet og tømmer billett tabellen.
function slettBilletter(){
    billettListe.length = 0;
    visBilletter();

}

//Denne funksjonen legger til verdiene fra billett-arrayet på siden gjennom ut-variablen. Ettter den har gjort det så starter den ryddform funksjonen
function visBilletter(){
    // skriv ut
    let ut = "<table class='table'><tr>" +
        "<th>Film</th><th>Antall Billetter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Email</th>" +
        "</tr>";
    for (let p of billettListe){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn + "</td><td>" + p.etternavn  + "</td><td>" + p.telefonNr  + "</td><td>" + p.epost + "</td>";
        ut+="</tr>";
    }
    console.log(billettListe)
    document.getElementById("billettListe").innerHTML=ut;
    ryddForm();
}

//Denne funksjonen resetter formen, slik at teksten som står i innputt feltene forsvinner, samt setter displayet på feilmeldingene til none, som skjuler dem.
function ryddForm(){
    const form = document.getElementById("billettSkjema");
    const filmSelect = document.getElementById("film-select");

    const filmFeilTekst = document.getElementById("filmValidering");
    const antallFeilTekst = document.getElementById("antall-validering");
    const fornavnFeilTekst = document.getElementById("fornavn-validering");
    const etternavnFeilTekst = document.getElementById("etternavn-validering");
    const telefonFeilTekst = document.getElementById("telefonnr-validering");
    const emailFeilTekst = document.getElementById("email-validering");

    filmFeilTekst.setAttribute("style","display: none;")
    antallFeilTekst.setAttribute("style","display: none;")
    fornavnFeilTekst.setAttribute("style","display: none;")
    etternavnFeilTekst.setAttribute("style","display: none;")
    telefonFeilTekst.setAttribute("style","display: none;")
    emailFeilTekst.setAttribute("style","display: none;")


    filmV = false;
    antallV = false;
    fornavnV = false;
    etternavnV = false;
    telefonnrV = false;
    emailV = false;

    form.reset();
    filmSelect.selectedIndex = 0;
}
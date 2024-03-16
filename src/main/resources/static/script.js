//RegEx utrykk som brukes for å validere input senere i programmet.
const antallRegEx = /^[1-9][0-9]?$|^100$/;
const navnRegEx = /^([a-zA-Z-]{1,20})/;
const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const emailRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;



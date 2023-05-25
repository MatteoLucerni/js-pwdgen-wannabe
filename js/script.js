console.log('JS OK');

/*
 Traccia:
 Chiedi all’utente il suo nome,
 poi chiedi il suo cognome,
 poi chiedi il suo colore preferito
 Infine scrivi sulla pagina nomecognomecolorepreferito21 */

const paragraph = document.getElementById("paragraph");
const nome = prompt('Qual\'è il tuo nome?', 'matteo');
console.log(nome);

const cognome = prompt('Qual\'è il tuo cognome?', 'lucerni');
console.log(cognome);

const colore = prompt('Qual\'è il tuo colore preferito?', 'verde');
console.log(colore);

paragraph.innerText = `Password generata: ${nome + cognome + colore + 33}`;
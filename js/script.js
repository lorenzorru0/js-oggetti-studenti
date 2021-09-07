/**
 * Functions
*/

/** 
 * Main code
*/
let studentObject = {
    'nome': "Lorenzo",
    'cognome': "Orrù",
    'età': 20
};

for (let x in studentObject) {
    document.getElementById(`singleObject`).innerHTML += studentObject[x] + ' ';
}

let arrayStudentObject = [
    {
        'nome': "Lorenzo",
        'cognome': "Orrù",
        'età': 20
    },
    {
        'nome': "Marco",
        'cognome': "Rossi",
        'età': 23
    },
    {
        'nome': "Giuseppe",
        'cognome': "Chiesa",
        'età': 34
    }
];

var newName;
var newSurname;
var newAge;
do {
    newName = prompt(`Inserisci il nome del nuovo studente: `);
} while (newName.length < 4);
do {
    newSurname = prompt(`Inserisci il cognome del nuovo studente: `);
} while (newSurname.length < 4);
do {
    newAge = parseInt(prompt(`Inserisci il cognome del nuovo studente: `));
} while (isNaN(newAge));



for (let i = 0; i < arrayStudentObject.length; i++) {
    document.getElementById(`arrayStudentObject`).innerHTML += `
        <li>Nome: ${arrayStudentObject[i].nome}</li>
        <li>Cognome: ${arrayStudentObject[i].cognome}</li>
        <li>Età: ${arrayStudentObject[i].età}</li>
        `
}

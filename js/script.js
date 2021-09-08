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

var newStudent = {
    'nome': "",
    'cognome': "",
    'età': 0
};
do {
    newStudent.nome = prompt(`Inserisci il nome del nuovo studente: `);
} while (newStudent.nome.length < 4);
do {
    newStudent.cognome = prompt(`Inserisci il cognome del nuovo studente: `);
} while (newStudent.cognome.length < 4);
do {
    newStudent.età += parseInt(prompt(`Inserisci l'età del nuovo studente: `));
} while (isNaN(newStudent.età));

arrayStudentObject.push(newStudent);


for (let i = 0; i < arrayStudentObject.length; i++) {
    document.getElementById(`arrayStudentObject`).innerHTML += `
        <li>Nome: ${arrayStudentObject[i].nome}</li>
        <li>Cognome: ${arrayStudentObject[i].cognome}</li>
        <li>Età: ${arrayStudentObject[i].età}</li>
        `
}

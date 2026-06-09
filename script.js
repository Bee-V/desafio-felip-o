// Lista de varios heróis
let herois = [
    { nome: "Frodo", xp: 2500 },
    { nome: "Legolas", xp: 9000 },
    { nome: "Gandalf", xp: 10500 },
    { nome: "sam", xp: 1800 },
    { nome: "Aragon", xp: 8600}
];

// Percorre todos os heróis
for (let i = 0; i < herois.length; i++) {

    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel;

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}


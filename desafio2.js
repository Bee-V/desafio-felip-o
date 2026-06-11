//Desafio2
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

let jogadores = [
    { nome: "Frodo", vitorias: 8, derrotas: 2 },
    { nome: "Legolas", vitorias: 35, derrotas: 10 },
    { nome: "Gandalf", vitorias: 110, derrotas: 15 },
    { nome: "Sam", vitorias: 15, derrotas: 5 },
    { nome: "Aragon", vitorias: 50, derrotas: 20 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularRank(
        jogadores[i].vitorias,
        jogadores[i].derrotas
    );

    console.log(
        `${jogadores[i].nome}: O Herói tem saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`
    );
}
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); 
    }

    atacar() {
        let ataque = "";

       
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "hobbit":
                ataque = "espada de hobbit";
                break;
            case "arqueiro":
                ataque = "arco e flecha";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        // Exibe a mensagem formatada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroi1 = new Heroi("Gandalf", 2019, "mago");
heroi1.atacar(); // Saída: o mago atacou usando magia

const heroi2 = new Heroi("Aragorn", 87, "guerreiro");
heroi2.atacar(); // Saída: o guerreiro atacou usando espada

const heroi3 = new Heroi("Frodo", 25, "hobbit");
heroi3.atacar(); // Saída: o hobbit atacou usando espada de hobbit

const heroi4 = new Heroi("Legolas", 36, "arqueiro");
heroi4.atacar(); // Saída: o arqueiro atacou usando arco e flecha
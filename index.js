class PFC {
    constructor() {
        this.tbl = ["pierre","feuille","ciseaux"];
    }

    alea() {
        return this.tbl[Math.floor(Math.random() * 3)];
    }

    run() {
        this.resBot = this.alea();
        const readline = require('node:readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question(`Choisissez entre: pierre, feuille et ciseaux.`, reponse => {
            if ((reponse === "pierre" && this.resBot === "feuille") || (reponse === "ciseaux" && this.resBot === "pierre") || (reponse === "feuille" && this.resBot === "ciseaux"))
                console.log(`Vous: ${reponse} \tL'ordinateur: ${this.resBot} \nVous avez perdu...`);
            else if ((reponse === "feuille" && this.resBot === "pierre") || (reponse === "pierre" && this.resBot === "ciseaux") || (reponse === "ciseaux" && this.resBot === "feuille"))
                console.log(`Vous: ${reponse} \tL'ordinateur: ${this.resBot} \nVous avez gagné !`);
            else if (reponse === this.resBot)
                console.log(`Vous: ${reponse} \tL'ordinateur: ${this.resBot} \nÉgalité !`);
            else {
                console.log("Attention, vous ne pouvez pas jouer ça !");
            }
            readline.close();
        });
    }
}

const robot = new PFC();

console.log(robot.run());

const config = {
    type: Phaser.AUTO,

    width: 800,
    height: 600,

    backgroundColor: 0x1e1e2f,

    scene: {
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let jogador;
let teclas;
let velocidade = 5;

function create() {

    // Jogador
    jogador = this.add.rectangle(300, 400, 60, 60, 0x00ff88);

    // Contorno do jogador
    jogador.setStrokeStyle(4, 0xffffff);

    // Objetivo
    this.add.rectangle(700, 500, 80, 80, 0xff4444);
    this.add.text(660, 545, "OBJETIVO", {
        fontSize: "18px",
        color: "#ffffff"
    });

    // Controles
    teclas = this.input.keyboard.addKeys({
        direita: "RIGHT",
        esquerda: "LEFT",
        cima: "UP",
        baixo: "DOWN"
    });
}

function update() {

    if (teclas.direita.isDown) {
        jogador.x += velocidade;

        if (jogador.x > 770) {
            jogador.x = 770;
        }
    }

    if (teclas.esquerda.isDown) {
        jogador.x -= velocidade;

        if (jogador.x < 30) {
            jogador.x = 30;
        }
    }

    if (teclas.cima.isDown) {
        jogador.y -= velocidade;

        if (jogador.y < 30) {
            jogador.y = 30;
        }
    }

    if (teclas.baixo.isDown) {
        jogador.y += velocidade;

        if (jogador.y > 570) {
            jogador.y = 570;
        }
    }
}


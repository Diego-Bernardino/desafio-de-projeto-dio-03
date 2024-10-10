class hero {
    constructor(name = '', age = 0, type = '') {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    toAttack() {
        let attack = '';
        switch (this.type.toUpperCase()){
            case 'GUERREIRO':
                attack = 'Usou espada!';
                break
            case 'MAGO':
                attack = 'Usou magia!';
                break
            case 'MONGE':
                attack = 'Usou artes marciais';
                break
            case 'NINJA':
                attack = 'Usou shuriken'
        }
        console.log(`O ${this.type} atacou usando ${attack}`);
    }
}

let player1 = new hero('Gandalf', 1000, 'mago');
let player2 = new hero('Aragorn', 38, 'guerreiro');
player1.toAttack();
player2.toAttack();
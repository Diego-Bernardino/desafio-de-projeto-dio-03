class pokemon {
    constructor(name, level, sex, currentHp, hitPoints) {
        this.name = name;
        this.level = level;
        this.sex = sex;
        this.hitPoints = hitPoints;
        this.currentHp = currentHp;
    }
    register() {
        console.log(`${this.name} cadastrado com sucesso`);
    }
}

function pokeRegister() {
    switch (count) {
        case 0:
            pokeId001.register();
            break
        case 1:
            pokeId002.register();
            break
        case 2:
            pokeId003.register();
            break
        case 3:
            pokeId004.register();
            break
        case 4:
            pokeId005.register();
            break
        case 5:
            pokeId006.register();
            break
        case 6:
            pokeId007.register();
    }
}

let pokeId001 = new pokemon('Poochyena', 2, 'M', 13, 13);
let pokeId002 = new pokemon('Zigzagoon', 2, 'F', 13, 13);
let pokeId003 = new pokemon('Dragonite', 5, 'M', 25, 25);
let pokeId004 = new pokemon('Dragonite', 5, 'F', 24, 24);
let pokeId005 = new pokemon('Dragonite', 5, 'F', 24, 24);
let pokeId006 = new pokemon('Poochyena', 3, 'F', 15, 15);
let pokeId007 = new pokemon('Wurmple', 2, 'M', 7, 14);

let count
for (count = 0; count <= 6; count ++) {
    pokeRegister();
}
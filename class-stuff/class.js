class Hero {
    constructor(name, level){
        this.name = name;
        this.level = level;
    }

    greet(){
        return `${this.name} is a cool guy`;
    }
}


let hero2 = new Hero('Varg', 1);
console.log(hero2);
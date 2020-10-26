class Ninja{
    constructor(name,health, speed = 3, strength = 3){
        this.name = name;
        this.health= health;
        this.speed= speed;
        this.strength= strength;
    }
    sayName(){
        console.log(console.log(`${this.name}`));
        }
    showStats(){
        console.log(`Name: ${this.name}  Strength: ${this.strength}  Speed: ${this.speed}  Health: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
        }
    }


let ninja1 = new Ninja("Hyabusa",3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
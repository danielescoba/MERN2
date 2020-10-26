class Ninja{
    constructor(name,health = 200, speed = 3, strength = 3){
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
class Sensei extends Ninja{
    constructor(name,wisdom=10){
        super(name)
        this.wisdom = wisdom
    }
    speakWisdom(){
        console.log(`"What one programmer can do in one month, two programmers can do in two months."`)
    }
    showStats(){
    super.showStats();
    console.log(`Wisdom: ${this.wisdom}`)
    }
    drinkSake(){
    super.drinkSake();
    }
}


let ninja1 = new Ninja("Hyabusa",3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
superSensei.drinkSake();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
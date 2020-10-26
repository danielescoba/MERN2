class ninja 
{
    constructor(name, health, speed=3, strength=3)
    {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }
    sayName()
    {
        console.log(`This Ninja's name ${this.name}`);
    }
    showStats()
    {
        console.log(`This Ninja's stats ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);

    }
    drink()
    {
        this.health += 10;
        console.log(`Ninja current health: ${this.health}`);
    }
}
class Sensei extends ninja
{
    constructor(name, health = 200, speed = 10, strength =10, wisdom = 10)
    {
        super(name, health, speed , strength)
        this.wisdom = wisdom;
    }
    showStats()
    {
    super.showStats()
    {
        console.log(`Wisdom: ${this.wisdom}`);
    }
    } 
    drinkSake()
    {  
    super.drink()
    {}
    }
    speakWisdom()
    {
        this.drinkSake();
        console.log(`${this.name} says "What one programmer can do in one month, two programmers can do in two months."`)
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
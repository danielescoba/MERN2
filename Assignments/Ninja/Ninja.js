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
Ninja1 = new ninja("Daniel", 50);
Ninja1.sayName();
Ninja1.showStats();
Ninja1.drink();
Ninja1.drink();
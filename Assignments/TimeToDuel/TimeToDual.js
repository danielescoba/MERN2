class Player
{
    constructor(name, ninjastars=6)
    {
        this.name = name;
        this.ninjastars = ninjastars;
    }
    Play(card)
    {
        this.ninjastars -= card.cost;
        if(this.ninjastars < 0)
        {
            console.log(`Don't have enough NinjaStars to play ${card.name}`);
            this.ninjastars +=card.cost;
        }
        else
        {
            console.log(`${this.name} played this ${card.name}`)
        }
    }
}
class unit
{
    constructor(name,cost,power,resilience)
    {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }
    Attack(target)
    {
        target.resilience -= this.power
        if(target.resilience <= 0)
        {
            console.log(`${target.name} has been destroyed!`)
        }
        else
        {
            console.log(`${target.name} has ${target.resilience} left!`)
        }
    }
}
class EffectCards extends unit
{
    constructor(name, cost, text , stat, magnitude)
    {
        super(name,cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    PlayEffect(target)
    {
        if(this.stat == "resilience")
        {
        target.resilience += this.magnitude;
        console.log(`This Unit ${target.name} resilience is ${target.resilience}`);
        }
        if(this.stat == "power")
        {
        target.power += this.magnitude;
        console.log(`This Unit ${target.name} resilience is ${target.power}`);
        }
    }
}
const Player1 = new Player("Player1",8)
const Player2 = new Player("Player2")
const RedBeltNinja = new unit("Red Belt Ninja", 3 , 3, 4);
const BlackBeltNinja = new unit("Black Belt Ninja", 4 , 5, 4);
const HardAlog = new EffectCards("Hard Algorithm", 2 ,"Increase target's resilience by 3", "resilience" , 3);
const UnhandledPromiseRejection = new EffectCards("Unhandled Promise Rejection", 2 ,"Recude target's resilience by 2", "resilience" , -2);
const PairProgramming = new EffectCards("Pair Programming", 2 ,"Increase target's power by 2", "power" , 2);

Player1.Play(RedBeltNinja);
Player1.Play(HardAlog);
HardAlog.PlayEffect(RedBeltNinja);
Player2.Play(BlackBeltNinja);
Player2.Play(UnhandledPromiseRejection);
UnhandledPromiseRejection.PlayEffect(RedBeltNinja);
Player1.Play(PairProgramming);
PairProgramming.PlayEffect(RedBeltNinja);
console.log("Player1 Attacks");
RedBeltNinja.Attack(BlackBeltNinja);
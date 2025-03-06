let xp= 0;
let health = 100;
let gold = 50;
let currentweapon = 0;
let fighting;
let monterhealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text= document.querySelector("#text");
const xpText= document.querySelector("#xpText");
const healthText= document.querySelector("#healthText");
const goldText= document.querySelector("#healthText");
const monsterstat= document.querySelector("#monsterstat");
const monsterNameText= document.querySelector("#monsterNmae");
const monsterHealthText= document.querySelector("#monsterHealth");

const weapon =[
    {
        name: "stick",
        power: 5

},
{
    name: "dagger",
    power: 30
},
{
    name: "claw hammer",
    poer: 50
},
{
    name: "sword",
    power: 100
}
];

const locations = [
    {
        name: "town square",
        "button text":["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, gocave, FightDragon],
        text: "you are in the town square. you see a sign that says \"sore"\""
    }
    {
       name: "store",
       "button text":  ["buy 10 health (10 gold)", "buy weapon (30 gold)","Go to town square"],
       "button functions" [BuyHealth, buyWeapon, goTown],
       text: "you enter the store."
    }
    {
        name: "cave",
        "button text":  ["fight slime", "fight fanged beast","Go to town square"],
        "button functions" [fightslime, fightbeast, goTown],
        text: "you enter the cave. you see some monsters."
    }
    {
        name: "fight"
        "button text": ["Attact", "Dodge", "run"],
        "button functions": [attact, Dodge, goTown],
        text: "you are fighting a monster."
    }
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button function": [goTown, goTown, easteregg],
        text: 'the monster screams "Arg!" as it dies. you gain experience points and find gold.'
        
    }
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "you die."
    }
    {
        name:"win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "you defeat the dragon! YOU WIN THE GAME!"
    }
    {
        name: "easter egg",
        "button text": ["2","8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, gotown],
        text: "ypu find a secret game. pick a number above. Ten numbers will be randomly chosen between 0 and 10. if the number yo choose matches one of the random numbers, you win!"
    }
];
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
]

button1.onclick =goStore;
button2.onclick =gocave;
button3.onclick =fightDragon;

fuction Updat(location){
    mnsterStats. style.dispaly = "none";
    button1.innerText = Location["button text"][0];
    button2.innerText = Location["button text"][1];
    button3.innerText = Location["button text"][2];
    button1.onclick = Location["button function"][0];
    button2.onclick = Location["button function"][1];
    button3.onclick = Location["button function"][2];
    text.innerText =  Location.text;

}

function fightdragon (){


}

function gotown (){
    Update(Locations[0]);

}
function goCave (){
    console.log("Going to cave")

}
function fightBeast(){

}
function buyweapon()
   if (currenweapon < weapons. length-1) {
    if(gold>=30) {
        gold -= 30;
        currentweapon++;
        goldText.innerText =gold;
        let newweapon = ewapons[currentweapon].name;
        text.innerText = "you now have a" newweapon + ".";
        inventory. push(newWeapon);
        text. innerText += " in your inventory you have:" + inventory;
    }else{
        text.innerText = "you do have enough gold to buy a weapon.";
    }else {
    text. innerText = "you already have the most powerful weapon!";
    button2. innerText = " sell weapon for 15 gold";
    button2. onclick = sellweapon;
}
    
 }

function buyHealth(){
    if (gold >=10){
        
    gold = gold - 10 
    health =health + 10
    goldText. innerText= gold;
    healthText. innerText=health;
  }else{
    text.innerText="You do not have enough gold to buy health.";
  }

    

function sellweapon(){
    if(inventory.length >1){
        gold +=15;
        goldText.innerText +gold;
        let currentWeapon = inventory.shift();
        text.innerText = "you sold a" + currentweapon + ".";
        text. innerText += " in your inventory you have:" + inventory;
    }else{
           text.innerText = "don't sell your only weapon";
    }
}
function gofight(){
    update( locations[3]);
    monsterHealth = monster[fighting]. health;
    monsterstats.style.display = "block";
    monsterNameText.innerText = monsters[fighting]. name;
    monsterHealthText.innerText = monsterHealth;

}
}
function foghtsilme(){
    fighting = 0;
    gofight();

}
function attack(){
    text.innerText = "the " + monster[fighting].name + "attacks.";
    text.innerText += "you attack it with your " + weapons[currentweapon].name + ".";
  if(ismonsterHit()){
    health -=getMonsterAttackvalue(monsters[fighting].level);
    }else{
        text.innerText +="you miss.";
    }
    monsterHealth -= weapons[currentwealth].power + Math.floor(math.random() * xp) +1;;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (Health <=0) {
         lose();
    }else if(monsterHealth <= 0){
        fighting === 2 ? winGame(): defeatmonster();
    }
    if (Math.random() <= .1 && inventory.length !=-1){
        text.innerText += "ypur" + inventory.pop() + "breaks.";
        currenweapon--;
    }
}

function getMonsterAttackvalue(level){
    let hit = (level * 5)-(math.floor(math.random() *xp));
    console.log(hit);
    return hit;
}

function ismonsterHit(){
    return Math.random() >.2 || health <20;
}
function dodge(){
    text.innerText= "you dodge the attack from the" + monsters[fighting].name + ".";

}

function fightDragon(){
    fighting =2;
    gofight();
}
function defeatmonster(){
    gold += math.floor(monsters[fighting]. level * 6.7);
    xp += monsters[fighting].level;
    goldText.innerText =gold;
    xpText.innerText =xp;
    update(location[4]);
}
function lose(){
    update(locations[5]);
}

function winGame() {
    update(locations[6]);
}

function restart(){
    xp = 0;
    health =100;
    gold =50;
    currentweapon =0;
    inventory =["stick"];
    goldText.innerText =gold;
    healthText.innerText =health;
    xpText.innerText =xp;
    goTown();
}

function easterEgg(){
    update(locations[7]);
}
function pickTwo(){
    pickTwo(2);
}
function pickEight(){
    pickEight(8);
}
function pick(guess){
    let numbers =[];
    while (numbers.length < 10){
        numbers.push(Math. floor(Math.random () *11))
    }
    text.innerText = "you picked " +guess +".here are the random numbers:\n"

    for(let i =0; i<10; i++){
        text.innerText +=numbers[i] + "\n";
    }

    if (numbers.indexOf(guess) !=-1){
        text.innerText += "right! you win 20 gold!"
        gold += 20;
        goldText.innerText = gold;
    }else{
        text.innerText + = "wrong! you loss 10 health!"
        health -=10;
        healthText.innerText = health;
        if (health <=0) {
            lose();
        }
    }
}
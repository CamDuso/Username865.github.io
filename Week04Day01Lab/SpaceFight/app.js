const Ship = {
  shiphull: "20",
  shipfirepower: "5",
  shipaccuracy: ".7",
  shipdefense: ".7"
  // Methods
  // Ex: USSHelloWorld.attack(alienTeam[0])
  // Shoot/Attack Method (Parameter(enemy))
  // accuracy to determine if they hit (Math.random()?)
  // Needs Firepower to determine damage
  // Enemy Hull to decrease
  // name to console.log status of game
  // Retreat Method
  // name to console.log they retreated
  //call gameOver function
};
class alienShip {
  constructor(hull, firepower, accuracy, defense) {
    (this.hull = hull),
    (this.firepower = firepower),
    (this.accuracy = accuracy),
    (this.defense = defense);
  }
}
// Methods
// Ex: alienShip.attack()
// Shoot/Attack Method (Parameter(enemy))
// accuracy to determine if they hit (Math.random()?)
// Needs Firepower to determine damage
// Enemy Hull to decrease
// name to console.log status of game

// Functions we might need:
// gameOver()
// win(who won)
// lose()
// game()
// logic for the game
// while loop maybe?
// DOM functionality
// button that makes either player or enemy attack (two buttons probably)

let hull = Math.floor((Math.random() * 6) + 3);
let firepower = Math.floor((Math.random() * 4) + 2);
let accuracy = Math.floor((Math.random() * .8) + .5);
// let defense = Math.floor((Math.random() * .5) + .7);

let alien1 = new alienShip(4, 3, .7,);
let alien2 = new alienShip(4, 2, .6,);
let alien3 = new alienShip(4, 4, .6,);
let alien4 = new alienShip(4, 3, .6,);
let alien5 = new alienShip(4, 2, .7,);
let alien6 = new alienShip(4, 2, .7,);

let alienTeam = [alien1, alien2, alien3, alien4, alien5, alien6];

function attackAlien() {
    if (Ship.shiphull <= 0){
        console.log ('Game Over')
        return
    }  
  if (Math.random() >= alienTeam[0].accuracy) {
    console.log("HIT, you deal " + Ship.shipfirepower + " damage to the enemy.");
    alienTeam[0].hull -= Ship.shipfirepower;

    if (alienTeam[0].hull <= 0) {
      console.log("This enemy has been defeated");
      alienTeam.shift();
      console.log("There are " + alienTeam.length + " enemies remaining.");
    } else {
      console.log("The enemy has " + alienTeam[0].hull + " health remaining");
    }
  } else {
    console.log("MISS");
  }
  if (alienTeam.length < 1) {
    console.log(
      "Congratulations. You managed to saved Humanity from the NEVER ENDING HORDE OF BLOOD THIRSTY ALIENS"
    );
    return;
  }
}

function attackShip() {
    if (Ship.shiphull <=0){
        console.log ('Game Over')
        return
    }
  if (alienTeam.length > 0) {
    if (Math.random() >= Ship.shipaccuracy) {
      console.log("HIT, you take " + alienTeam[0].firepower + " damage.");
      Ship.shiphull -= alienTeam[0].firepower;

      if (Ship.shiphull <= 0) {
        console.log("You were destroyed, and Earth is DOOMED.");
      } else {
        console.log("You have " + Ship.shiphull + " health remaining");
      }
    } else {
      console.log("MISS");
    }
  }
  return;
}

function runAway(){
    if (Ship.shiphull <=0){
        console.log ('Game Over')
        return
    }
    console.log("You run away, leaving Earth defenseless")
    console.log ("GAME OVER")
}
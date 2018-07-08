var playerName= prompt("Halt, Traveler! What Is Your Name?");
var playerGender= prompt("These Eyes Of Mine Are Failing Me... Are You A Man Or a Woman?").toLowerCase();
confirm("A Huge Dragon Obstructs Your Path! The Dragon Is Charging Towards You With Amazing Speed... What Will You Do?!!");
var playerChoice= prompt("CHOOSE: 'Slay' or 'Dodge'").toUpperCase();
var playerWeapon = true;
var SLAY = true;
var DODGE = true;
var SWORD = true;
var GUN = true;
var LANCE = true;
var GREATSWORD = true;
var AXE = true;
var BOW = true;
var KNIFE = true;
var SCYTHE = true;
var FIST = true;
var HAMMER = true;
var WHIP = true;
var SPEAR = true;
var slaying = true;
var dodging = true;
var youHit = Math.floor(Math.random()*30);
var youDodge = Math.floor(Math.random()*30);
var damageThisRound = Math.floor(Math.random()*60+20);
var totalDamage = 0;
var speedThisRound = Math.floor(Math.random()*60+20);
var totalSpeed = 0;
var dragon = true;



//Gender
switch(playerGender){
  case "male":
  case "man":
    playerGender= "his ";
    break;
  case 'female':
  case 'woman':
    playerGender= "her ";
    break;
  default:
  slaying = false;
  document.write("Well, Are You A Man Or A Woman You Dankish Boil-Brained Joithead?! ");
  break;
}

//Add loop for bad answers

if(playerChoice==='SLAY'){
  confirm ("You're A Brave Soul!");
  var playerWeapon= prompt("Select Your Weapon:").toUpperCase();
while (slaying) {
    if (youHit) {
      switch(playerWeapon){
        case 'SWORD':
        case 'LANCE':
        case 'GREATSWORD':
        case 'AXE':
        case 'KNIFE':
        case 'SCYTHE':
        case 'FISTS':
        case 'HAMMER':
        case 'WHIP':
        case 'SPEAR':
            document.write(playerName+" swung "+playerGender+" "+playerWeapon+" with all "+playerGender+" strength and did "+damageThisRound+" damage!");
            break;
        case 'BOW':
        case 'GUN':
            document.write(playerName+" shot "+playerGender+" "+playerWeapon+" with great accuracy and did "+damageThisRound+" damage!");
            break;
        default:
              document.write("Great Choice!");
            break;
          }
      totalDamage+=damageThisRound;
            if (totalDamage >= 50) {
                document.write(" You Have Slain The Dragon!");
                slaying = false;
                dragon = false;
        } else if (totalDamage >= 100) {
            document.write(" You Have Slain The Dragon With a critical hit!");
            slaying = false;
            dragon = false;
    } else {
        document.write(" Oh No, Your "+playerWeapon+" Was Not Strong Enough! The Dragon Burnt You To A Crisp...");
        style= document.write(" Game Over.");
    slaying = false;
    }
}
}
}

if(playerChoice==='DODGE'){
while (dodging){
    if (youDodge){
      totalSpeed+=speedThisRound;
      if (totalSpeed >= 50){
        document.write(playerName+" ran quickly out of the way at "+speedThisRound+" miles per hour!");
        document.write(playerName+" moved like a fish in water,"+playerName+" is safe! ");
        dodging=false;

var playerChoice= prompt("But the dragon must be defeated...will you play again? Yes or No").toUpperCase();
if (playerChoice==="YES"){
confirm ("You're A Brave Soul!");
var playerWeapon= prompt("Select Your Weapon").toUpperCase();
while (slaying) {
    if (youHit) {
      switch(playerWeapon){
        case 'SWORD':
        case 'LANCE':
        case 'GREATSWORD':
        case 'AXE':
        case 'KNIFE':
        case 'SCYTHE':
        case 'FISTS':
        case 'HAMMER':
        case 'WHIP':
        case 'SPEAR':
            document.write(playerName+" swung "+playerGender+" "+playerWeapon+" with all "+playerGender+" strength and did "+damageThisRound+" damage!");
            break;
        case 'BOW':
        case 'GUN':
            document.write(playerName+" shot "+playerGender+" "+playerWeapon+" with great accuracy and did "+damageThisRound+" damage!");
            break;
        default:
              document.write("Great Choice!");
            break;
          }
      totalDamage+=damageThisRound;
            if (totalDamage >= 50) {
                document.write(" You Have Slain The Dragon!");
                slaying = false;
                dragon = false;
        } else if (totalDamage >= 100) {
            document.write(" You Have Slain The Dragon With a critical hit!");
            slaying = false;
            dragon = false;
    } else {
        document.write(" Oh No, Your "+playerWeapon+" Was Not Strong Enough! The Dragon Burnt You To A Crisp...");
        document.write(" Game Over.");
    slaying = false;
    }
}
}}

else if (playerChoice==="NO") {
 document.write(" But the dragon flies off to terrorize yet another village...");
}
      } else {
    document.write("The Dragon Ate You Up, Slowpoke. ");
    document.write("Game Over.");
    dodging=false;
  }

}}}

if (dragon === false){
confirm("The Dust Clears and a Voice Echoes In Your Mind...");
confirm("The ETHERAL VOICE beckons you to the East...");
var playerChoice= prompt("Will you follow the voice? 'Yes' or 'No'").toUpperCase();
if (playerChoice === 'YES'){
  confirm("You have a long journey to endure on your adventure to the East...");
  confirm("An APPRENTICE MAGE approaches, winded after a long day's walk");
  //Troll Battle
  //Call to the King
  confirm("A messenger from the King approaches as you head eastward...");
  confirm("You are called to the King's palace at once for your service to the kingdom!");
  }
if (playerChoice === 'NO'){
    confirm("With a Heavy Heart, You Return to Your Village...");
}
confirm("A WANDERING PRIEST");
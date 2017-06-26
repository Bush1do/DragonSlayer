confirm("A huge dragon obstructs your path! What will you do?!!");
String playerChoice= prompt("CHOOSE: 'Slay' or 'Dodge'").toUpperCase();
boolean playerWeapon = true;
boolean SLAY = true;
boolean DODGE = true;
boolean SWORD = true;
boolean GUN = true;
boolean LANCE = true;
boolean GREATSWORD = true;
boolean AXE = true;
boolean BOW = true;
boolean KNIFE = true;
boolean SCYTHE = true;
boolean FISTS = true;
boolean HAMMER = true;
boolean WHIP = true;
boolean slaying = true;
boolean dodging = true;
int youHit = Math.floor(Math.random()*30);
int youDodge = Math.floor(Math.random()*30);
int damageThisRound = Math.floor(Math.random()*60+20);
int totalDamage = 0;
int speedThisRound = Math.floor(Math.random()*60+20);
int totalSpeed = 0;

if(playerChoice==='SLAY'){
  String playerWeapon= prompt("Select Your Weapon").toUpperCase();
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
            System.out.println("You swung your "+playerWeapon+" with all your strength and did "+damageThisRound+" damage!");
            break;
        case 'BOW':
        case 'GUN':
            System.out.println("You shot your "+playerWeapon+" with great accuracy and did "+damageThisRound+" damage!");
            break;
        default:
              System.out.println("Choose One!");
            break;
          }
      totalDamage+=damageThisRound;
            if (totalDamage >= 50) {
                System.out.println(" You slew the dragon");
                slaying = false;
        } else {
              youHit = Math.floor(Math.random() * 30);
        }
    } else {
        System.out.println(" Oh No, Your "+playerWeapon+" Was Not Strong Enough! The Dragon beat you...");
    slaying = false;
    }
}
}

if(playerChoice==='DODGE'){
while (dodging){
    if (youDodge){
      System.out.println("You ran quickly out of the way at "+speedThisRound+" miles per hour!");
      totalSpeed+=speedThisRound;
        if (totalSpeed >= 50){
          System.out.println("You moved like a fish in water, you're safe!");
          dodging=false;
        }
          String playerChoice= prompt("But the dragon must be defeated...will you play again? Yes or No").toUpperCase();
            if (playerChoice==='YES') {  String playerWeapon= prompt("Select Your Weapon").toUpperCase();
                if(playerWeapon==='SWORD'||'GREATSWORD'||'LANCE'||'KNIFE'||'AXE')
            while (slaying) {
                if (youHit) {
                    System.out.println("You swung your "+playerWeapon+" with all your strength and did "+damageThisRound+" damage!");
                    totalDamage+=damageThisRound;
                        if (totalDamage >= 50) {
                            System.out.println(" You slew the dragon");
                            slaying = false;
                    } else {
                          youHit = Math.floor(Math.random() * 30);
                    }
                } else {
                    System.out.println("Oh No The Dragon beat you!");
                slaying = false;
                }
            }}
           else {
            youHit = Math.floor(Math.random() * 30);
            System.out.println(" The dragon flies off to terrorize yet another village...");
            dodging=false;
          }
      } else {
          System.out.println("The dragon ate you up, slowpoke. ");
          System.out.println("Game Over");
          dodging=false;
      }
        }
    }

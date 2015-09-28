var slaying = true;
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;
while(slaying) {
    var weapon = prompt("What weapon shall you draw? (Sword? Club? Bow?)");
    if (weapon === "sword" || "Sword") {
        var swordHit = Math.floor(Math.random() * 5);
        if (swordHit == 1) {
            console.log("You cut the dragon");
            totalDamage += damageThisRound;
            if (totalDamage >= 1) {
                if (totalDamage >= 30) {
                    console.log("You win!");
                    slaying = false;
                }
            } else {
                console.log("but the dragon is still alive and ate you whole! You died.");
                swordHit = Math.floor(Math.random() * 5);
                }
            } else {
            console.log("You didn't even touch the dragon and it ate you whole.")
        }
        slaying = false;
    }
    if (weapon === "club" || "Club") {
        var clubHit = Math.floor(Math.random()*3);
        if (clubHit == 1) {
            console.log("You cut the dragon");
            totalDamage += damageThisRound;
            if (totalDamage >= 1) {
                if (totalDamage >= 30) {
                    console.log("You win!");
                    slaying = false;
                }
            } else {
                console.log("but the dragon is still alive and ate you whole! You died.");
                clubHit = Math.floor(Math.random() * 3);
            }
        } else {
            console.log("You didn't even touch the dragon and it ate you whole.")
        }
        slaying = false;
    }
    if (weapon === "Bow" || "bow") {
        var bowHit = Math.floor(Math.random());
        if (bowHit == 1) {
            console.log("You cut the dragon");
            totalDamage += damageThisRound;
            if (totalDamage >= 1) {
                if (totalDamage >= 30) {
                    console.log("You win!");
                    slaying = false;
                }
            } else {
                console.log("but the dragon is still alive and ate you whole! You died.");
                bowHit = Math.floor(Math.random());
            }
        } else {
            console.log("You didn't even touch the dragon and it ate you whole.")
        }
        slaying = false;
    }
}
function die(){
  return 1 + Math.floor(Math.random() * 6);
}
function autoRoller(attacker, defender) {
  var Winner = "Defender";
  console.log(attacker + ' VS ' + defender);
  while (attacker > 0){
    var attack = [];
    var defend = [];

    for (var i = 0; (i < 3) && (i <= attacker); i++){
      attack[i] = die();
    }
    for (var i = 0; (i < 2) && (i <= defender); i++){
      defend[i] = die();
    }

    attack.sort(function (a, b) { return b-a });
    defend.sort(function (a, b) { return b-a });
    console.log(attack + ' - ' + defend);
    
    for (var i = 0; i < defend.length; i++) {
      if (attack[i] > defend[i]){
        defender--;
      } else {
        attacker--;
      }
    }
    
    if (defender <= 0){
      Winner = "Attacker";
      break;
    }
  }
  results = {
    winner: Winner,
    attacker: attacker,
    defender: defender
  }
  return results;
}
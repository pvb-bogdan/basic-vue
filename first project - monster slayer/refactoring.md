attack: function (){
  let min = 3;
  let max = 10;
  let damage = Math.max(Math.floor(Math.random() * max) + 1, min);
  // console.log(damage);
  this.monsterHealth -= damage;
  // checking if we are dead or not
  if(this.monsterHealth <= 0) {
    alert(' ai castigat');
    this.gameIsRunning = false;
    return;
  }
  // if we want that monster has a bit of an edge change min max  vars
  max = 11;
  min = 4;
  damage = Math.max(Math.floor(Math.random() * max) + 1, min);
  // console.log(damage);
  this.playerHealth -= damage;
  if(this.playerHealth <= 0) {
    alert(' ai pierdut');
    this.gameIsRunning = false;
}
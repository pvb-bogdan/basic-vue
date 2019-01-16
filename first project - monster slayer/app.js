new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function (){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function (){
      this.monsterHealth -= this.calculateDamage(3, 10);
      if(this.checkWin()){
        return;
      }
      this.playerHealth -= this.calculateDamage(4, 11);
      this.checkWin();
    },
    specialAttack: function (){

    },
    heal: function (){

    },
    giveUp: function (){

    },
    calculateDamage: function (min, max){
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    checkWin: function (){
        if(this.monsterHealth <= 0) {
          if(confirm('Ai castigat! Mai joci un joc?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        } else if (this.playerHealth <= 0) {
          if(confirm('Sorry! ai pierdut. Mai joci un joc?')){
            this.startGame();
          } else {
            this.gameIsRunning = false;
          }
          return true;
        }
        return false;
    }
  }
});
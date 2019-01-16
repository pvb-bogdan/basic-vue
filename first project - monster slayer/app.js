new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function (){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function (){
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer : true,
        text: 'Ai lovit monstru cu puterea : ',
        damage
      })
      if(this.checkWin()){
        return;
      }
      this.monsterAttack();
    },
    specialAttack: function (){
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      if(this.checkWin()){
        return;
      }
      this.turns.unshift({
        isPlayer : true,
        text: 'Ai lovit monstru cu puterea : ',
        damage
      })
      this.monsterAttack();
    },
    monsterAttack: function () {
      let damage = this.calculateDamage(4, 11);
      this.playerHealth -= damage;
      this.checkWin();
      this.turns.unshift({
        isPlayer : false,
        text: 'Ai fost lovit de monstru cu puterea : ',
        damage
      })
    },
    heal: function (){
      if(this.playerHealth <= 90){
        this.playerHealth += 10;
        this.monsterAttack();
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer : true,
        text: 'Te-ai vindecat cu 10 puncte'
      })
    },
    giveUp: function (){
      this.playerHealth = 0;
      this.startGame();
      this.gameIsRunning = false;
      this.turns = [];
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
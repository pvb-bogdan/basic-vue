new Vue({
  el: '#app',
  data: {
    attachRed: false,
    changeClass: 'green'
  },
  computed: {
    switchClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
})
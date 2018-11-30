new Vue ({
  el: '#app',
  data:{
    counter: 0,
    secondCounter: 0,
    link: 'http://www.petrebogdan.com'
  },
  computed: {
    output : function () {
      console.log('computed');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  },
  watch: {
    counter: function(value) {
      // we cannot acces this in a callback so we set inside a variable to catch this
      let vm = this;
      setTimeout(function(){
        vm.counter = 0;
      }, 2000)
    }
  },
  methods: {
    result: function (){
      console.log('method');
      return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
    }
  }
})
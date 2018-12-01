new Vue({
  el: '#exercise',
  data: {
    attachClasses:{
      highlight: false,
      shrink: true,
    },
    color: 'textColor',
    userClass: '',
    myStyles: {
      fontStyle: 'italic',
      borderColor: 'black'
    },
    visible: false,
    progressBar: {
      width: '0px',
      backgroundColor:'green'
    }
  },
  methods: {
    startEffect: function() {
      // console.log('it works');
      let change = this;
      setInterval(function(){
        change.attachClasses.highlight = !change.attachClasses.highlight;
        change.attachClasses.shrink = !change.attachClasses.shrink;
      },1000)
    },
    startProgress: function () {
      console.log('start progres');
      let vm = this;
      let width = 0;
      setInterval(function(){
        width = width + 100;
        vm.progressBar.width = width + 'px';
      },1000);
    }
  }
});

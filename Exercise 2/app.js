new Vue({
  el:"#exercise",
  data:{
    value: ''
  },
  methods: {
    alertMe: function (){
      alert('Show alert');
    },
    getValue: function(e) {
      this.value = e.target.value;
    }
  }
})

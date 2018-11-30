new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function (arg, event) {
      // this.counter ++;
      this.counter += arg;
    },
    updateCoords: function (e){
      this.x = e.clientX ;
      this.y = e.clientY ;
    },
    stopUpdateCoords: function (e){
      e.stopPropagation();
    },
    alertMe: function () {
      alert('hello');
    }
  }
})
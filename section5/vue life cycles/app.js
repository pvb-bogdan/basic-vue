new Vue({
  el: "#app",
  data: {
    title: "Vue life cycle"
  },
  beforeCreate: function() {
    alert("Just start to create the instance");
  },
  created: function() {
    alert("Just created the instance");
    console.log("created()");
  },
  beforeMount: function() {
    alert("Just start to mount the instance");
    console.log("beforeMount()");
  },
  mounted: function() {
    alert("Just mounted the instance");
    console.log("mounted()");
  },
  beforeUpdate: function() {
    alert("Just start to update the instance");
    console.log("beforeUpdate()");
  },
  updated: function() {
    alert("Just updated the instance");
    console.log("updated()");
  },
  beforeDestroy: function() {
    alert("Just start to destroy the instance");
    console.log("beforeDestroy()");
  },
  destroyed: function() {
    alert("Just destroyed the instance");
    console.log("destroyed()");
  },
  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
});

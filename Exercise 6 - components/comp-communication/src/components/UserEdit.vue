<template>
  <div class="component">
    <h3>You may edit the user here</h3>
    <p>Edit me</p>
    <p>User age: {{ userAge }}</p>
    <button class="btn btn-success" @click="changeAge">Change Age</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
export default {
  data: function() {
    return { userAge: 30 };
  },
  methods: {
    changeAge () {
      this.userAge = 35;
      // this.$emit('ageWasEdited', this.userAge)
      // eventBus.$emit('ageWasEdited', this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>

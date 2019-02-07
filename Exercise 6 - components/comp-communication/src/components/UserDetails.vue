<template>
  <div class="component">
    <h3>You may view the user details here</h3>
    <p>Many details</p>
    <!-- <p>Name: {{ name }}</p> -->
    <p>Name: {{ switchName() }}</p>
    <p>User age: {{ userAge }}</p>
    <button class="btn btn-danger" @click="resetName">Reset Name</button>
    <button class="btn btn-danger" @click="resetFn()">Reset Name by Callback Fn</button>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  // props: ["name"],  -- to validate props we made a props obj where i can check/make te prop whatever i want
  props: {
    name: {
      type: String,
      required: true
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    // we can access props the same way as all over the project useing this.
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Bogdan";
      // $emit()
      this.$emit("nameWasReset", this.name);
    }
  },
  created () {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    })
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

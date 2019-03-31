<template>
    <li 
      class="list-group-item"
      @click="serverSelected"  
     >Server #{{ server.id }}</li>
</template>

<script>
import { serverBus } from '../main.js'
export default {
  props: ["server", "status"],
  methods: {
    serverSelected () {
      serverBus.$emit ('serverSelected', this.server);
    }
  }
};
</script>

<style>
</style>

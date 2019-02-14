<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Select a server</p>
    <p v-else> Server no {{ server.id }} selected, Status: {{ server.status }}</p>
    <hr>
    <button @click="changeNormal">Change to normal</button>
  </div>
</template>

<script>
import { serverBus } from '../main.js'
export default {
  data: function () {
    return {
      server: null
    }
  },
  created () {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    })
  },
  methods: {
    changeNormal () {
      this.server.status = 'normal'
    }
  }
};
</script>

<style>
</style>

<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-server-info></app-server-info>
  </div>
</template>

<script>
import Header from "./Shared/Header.vue";
import ServerDetails from "./Servers/ServersDetails.vue";
import ServerInfo from "./Servers/ServerInfo.vue";
import Servers from "./Servers/Servers.vue";

export default {
  components: {
    //we could use different ways to name our comp
    // cammelCasse
    appHeader: Header,
    // normal case
    "app-server-details": ServerDetails,
    "app-server-info": ServerInfo,
    // ES6 case -
    Servers
  }
};
</script>

<style>
</style>

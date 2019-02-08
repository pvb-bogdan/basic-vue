<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-status v-for="comp in comps" :key="comp" :id="comp.id" :status="comp.status"></server-status>
    </ul>
  </div>
</template>

<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  data: function() {
    return {
      comps: [
        { id: 1, status: "Critical" },
        { id: 2, status: "Normal" },
        { id: 3, status: "Unspecified" },
        { id: 4, status: "Unknown" },
        { id: 5, status: "Critical" }
      ]
    };
  },
  components: {
    "server-status": ServerStatus
  }
};
</script>

<style>
</style>

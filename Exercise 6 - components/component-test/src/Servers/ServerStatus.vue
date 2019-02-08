<template>
  <div>
    <li class="list-group-item">Server #{{ id }} - Status : {{ status}}</li>
  </div>
</template>

<script>
export default {
  props: ["id", "status"]
};
</script>

<style>
</style>

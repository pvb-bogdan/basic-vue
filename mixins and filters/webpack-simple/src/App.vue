<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
            <h1>Filters and Mixins</h1>
            <p>{{ text | toUpperCase | to-lowercase}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  data () {
    return {
      text: 'Hello world'
    }
  },
  filters: {
    // filters function always take an arg
    toUpperCase (value) {
      return value.toUpperCase();
    }
  }
}
</script>


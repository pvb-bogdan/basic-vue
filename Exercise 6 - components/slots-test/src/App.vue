<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <hr>
        <button class="btn btn-primary" @click="selectedComp = 'appBlue' ">Load blue tamplate</button>
        <button class="btn btn-success" @click="selectedComp = 'appGreen' ">Load green template</button>
        <button class="btn btn-danger" @click="selectedComp = 'appRed' ">Load red template</button>
        <hr>
        <component :is="selectedComp">
          <h3 slot="blue" class="text-white">{{ someTextBlue }}</h3>
        </component>
        <!-- <app-blue>        
        </app-blue>
        <app-green></app-green>
        <app-red></app-red> -->
      </div>
    </div>
  </div>
</template>

<script>

import Blue from './components/Blue'
import Red from './components/red'
import Green from './components/Green'

export default {
  data:function () {
    return {
      selectedComp: 'appBlue',
      // someTextRed: 'some text content for red',
      // someTextGreen: 'some text content for green',
      someTextBlue: 'some text content for blue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>


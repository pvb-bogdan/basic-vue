<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <hr>
        <button class="btn btn-primary" @click="selectedComp = 'appCitat'">Citat</button>
        <button class="btn btn-warning" @click="selectedComp = 'appAutor'">Autor</button>
        <button class="btn btn-danger" @click="selectedComp = 'appNew'">New</button>
        <p>{{ selectedComp }}</p>
        <hr>
        <component :is="selectedComp">
          <h1 slot="title">{{ citateCelebre }}</h1>
          <p slot="citat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, facilis?</p>
        </component>
        <!-- <app-citat>
           render all in one slot
          <h1>{{ citateCelebre }}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, facilis?</p> 
          
          <h1 slot="title">{{ citateCelebre }}</h1>
          <p slot="citat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, facilis?</p>
        </app-citat>-->
      </div>
    </div>
  </div>
</template>

<script>
import Citat from './components/Citat'
import Autor from './components/Autor'
import New from './components/New'

export default {
  // all js it's happening here, even thou the the data will be compiled in child comp - Citat.vue
  data: function (){
    return {
      citateCelebre: 'CITATE CELEBRE',
      selectedComp: 'appCitat'
    }
  },
  components: {
    appCitat: Citat,
    appAutor: Autor,
    appNew: New
  },
  methods: {

  }
}
</script>

<style>

</style>

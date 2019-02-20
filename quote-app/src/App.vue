<template>
  <div class="container py-3">
    <app-header :countQuote="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @addCitat="newQuote($event)"></app-new-quote>
    <hr>
    <app-quote-grid :quotes="quotes" @citatSters="deleteCitat"></app-quote-grid>
  </div>
</template>

<script>

import QuoteGrid from './components/QuoteGrid';
import NewComp from './components/NewComp';
import Header from './components/Header'

export default {
  data: function () {
    return {
      quotes: [
        'First quote'
      ],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert('ajunge');
      } 
      this.quotes.push(quote);
    },
    deleteCitat (index){
      // console.log(index)
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewComp,
    appHeader: Header

  }
}
</script>

<style>

</style>

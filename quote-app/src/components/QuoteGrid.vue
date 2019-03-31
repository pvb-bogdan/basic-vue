<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="quote" @click.native="stergeCitat(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>

import Quote from './Quote'

export default {
    props:['quotes'],
    components: {
        appQuote : Quote
    },
    methods: {
        stergeCitat(index) {
            // console.log(index)
            this.$emit('citatSters', index);
        }
    }
}
</script>

<style>

</style>

<template>
    <form>
        <div class="row">
            <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 from-group mb-3">
                <label>Citate</label>
                <textarea class="form-control" v-model="quote"></textarea>
            </div>
            
            <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 from-group text-center">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data: function () {
        return{
            quote: ''
        };
    },
    methods: {
        createNew () {
            this.$emit('addCitat', this.quote);
            this.quote = '';
        }
    }
}
</script>

<style>

</style>

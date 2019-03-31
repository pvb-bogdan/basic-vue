<template>
    <div class="shadow-lg p-3 my-5 bg-light rounded text-center">
        <!-- 
            <slot></slot>
        -->
        <slot name="title"></slot>
        <hr>
        <slot name="citat"></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div{
        border:1px solid #ccc;
        box-shadow: #ccc 0px 2px 15px;
    }
    /* scope of compilation - styles are aplied here even the actual html el is in parent component - App.js*/
    h1{
        color:red;
    }
</style>

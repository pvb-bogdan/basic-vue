<template>
    <div>
        <div id="on"
            @click="newValue = schimba(true)"
            :class="{active: !newValue}">
            On
        </div>
        <div id="off"
            @click="newValue = schimba(false)"
            :class="{active: newValue}">
            Off
        </div>
    </div>
</template>

<script>
export default {
    props: ['value'],
    data () {
         return {
            newValue: this.value
        }
    },
    methods: {
        schimba (isOn){
            this.$emit('input', isOn);
        }
    }
}
</script>

<style scoped>
    #on, #off {
        width: 40px;
        height: 20px;
        background-color: lightgray;
        cursor: pointer;
        padding: 5px 10px 7px;
        color: #fff;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        text-align: center;
        text-shadow: 1px 1px 1px #000;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.146);
    }
    #on{
        border-top-left-radius:50px;
        border-bottom-left-radius:50px;
    }
    #off{
        border-top-right-radius:50px;
        border-bottom-right-radius:50px;
    }
    #on:hover, #on.active {
        background-color: purple;
    }
    #off:hover, #off.active {
        background-color: rgb(182, 21, 21);
    }
</style>

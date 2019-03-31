<template>
    <div class="col-md-4 mb-2">
        <div class="card">
            <div class="card-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style>
    .card-body{
        /* font-family: 'Montserrat', sans-serif; */
        font-size:1.2rem;
        color:#424242;
        text-align: center;
        font-style: italic;
    }
    .quote {
        cursor:pointer;
    }
    .quote:hover{
        background-color: aqua;
    }
</style>

<template>

    <div class="row">
        <div class="col-md-12">
            <h3>HEADER</h3>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" area-valuemin="0" area-valuemax="100"
                :style="{width: (countQuote / maxQuotes) * 100 + '%'}">
                    {{ countQuote }} / {{ maxQuotes }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props:['countQuote', 'maxQuotes']
}
</script>

<style>

</style>

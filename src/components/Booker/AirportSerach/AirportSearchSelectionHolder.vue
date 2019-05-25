<template>
    <div class="selection-holder">
        <div class="city"></div>
        <span class="port"></span>
        <span class="port-code"></span>
    </div>
</template>

<script>
export default {
    props:{
        port : {
            type: Object,
            required: true
        } 
    }
}
</script>

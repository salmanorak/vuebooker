<template>  
    <div class="port-search-placeholder">{{title | capitalize}}</div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            required:true
        }
    },
}
</script>

<style lang="scss" scoped>
.port-search-placeholder {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    font-size: 24px;
    transition: all 0.3s;
    left: 5px;
    z-index: 10;
}

</style>




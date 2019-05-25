<template>  
    <div class="port-search-placeholder" :class='{isfocused}'>{{title}}</div>
</template>

<script>
export default {
    computed:{
        isfocused () {return false}
    },
    props:{
        title:{
            type: String,
            required:true
        } 
    }
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
.is-focused{
    font-size: 14px;
    color: blue;
    top: -15px;
    left: 5px;
    transition: all 0.3s;
}
</style>




<template>
    <li class="all-ports result-item" @mousedown="showModal">
        <i class="fas fa-globe"></i>
        <span>Tüm Uçuş Noktalarını Gör</span>
    </li>
</template>

<script>
export default {
    methods:{
        showModal(){
            this.$emit("showModal")
        }
    }
}
</script>

<style lang="scss">
.result-item {  
    list-style: none;
    padding: 5px 0;
    .code{
        display:none;
    }
    span{
        padding-left:5px;
    }
    i{
        color:grey;
        padding-left:30px;
    }
    &.active{
        background:#3685e7;
        color:#fff
    }
    &.active i{
        background:#3685e7;
        color:#fff
    }
}
</style>


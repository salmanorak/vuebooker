<template>
    <li class='result-item' :class="{'active':isActive}" @mousedown="selectPort(port)" @mouseover="toggleActive" @mouseout="toggleActive"> 
        <i class='fas fa-plane'></i> 
        <span> {{port.portName}} ( {{port.portCode}} ) , {{port.cityName}}</span>
	</li>
</template>

<script>
export default {
    data(){
        return {
            isActive:false
        }
    },
    props: {
        port : {
            type:Object
        }
    },
    methods:{
        selectPort(port){
            this.$emit('portSelected',port)
        },
        toggleActive(){
            this.isActive= !this.isActive 
        },
        selectNext(){
            this.el.nextSibling()
        }
    }
}
</script>

<style lang="scss" scoped>
    .result-item{
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


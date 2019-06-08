<template>
    <div class="switcher" :class="{active:isActive}" @click="switcher">
        <i class="fas fa-sync fa-2x"></i>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        switcher() {
        this.isActive = !this.isActive;
        this.$emit('switchPort');
        }
    }
}
</script>

<style lang="scss" scoped>
    .switcher {
        position: absolute;
        top: 50%;
        left: 50%;
        background: black;
        height: 40px;
        width: 40px;
        transform: translate(-50%, -50%) rotate(-180deg);
        border-radius: 50%;
        z-index:20;
        transition: all .3s;
        & i{
            font-size: 27px;
            transform: translate(22%, 22%);
            color:white;
        }
        &.active{
            transform: translate(-50%, -50%) rotate(180deg);
            transition: all .3s;
        }
    }
</style>

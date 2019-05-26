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
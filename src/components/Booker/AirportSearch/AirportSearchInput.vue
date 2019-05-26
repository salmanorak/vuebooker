<template>
    <div>
        <slot></slot>
    </div>
    
</template>

<script>
import SelectionHolder from '@/components/Booker/AirportSearch/AirportSearchSelectionHolder.vue'
import PlaceHolder from '@/components/Booker/AirportSearch/AirportSearchInputPlaceHolder.vue'

export default {
    data(){
        return {
        }
    },
    computed:{
    },
    components:{
    },
    methods:{
    },
}
</script>

<style lang="scss">
.input-wrapper {
    display: inline-block;
    position: relative;
    width: 85%;
    height: 70px;
    top: 30px;
    & input {
        height: 30px;
        padding-left: 5px;
        border: none;
        z-index: 2;
        width: 100%;
        font-size: 24px;
        &:focus {
            outline: none;
        }
    }

}
</style>

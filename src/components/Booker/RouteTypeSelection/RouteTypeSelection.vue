<template>
    <div 
        class="route-type">
        <div>
            <input 
                type="radio" 
                id="oneWay" 
                name="routType" 
                value="oneWay" 
                @click="changeSelection('oneWay')" 
                :checked="isOneWay"
                >
            <label
                :class="{'active':isOneWay}" 
                for="oneWay"
                >oneWay
            </label>
        </div>
        <div>
            <input 
                type="radio" 
                id="roundTrip" 
                name="routType" 
                value="roundTrip" 
                @click="changeSelection('roundTrip')" 
                :checked="!isOneWay"
                >
            <label 
                :class="{'active':!isOneWay}"
                for="roundTrip"
                >roundTrip
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        value: String
    },
    computed:{
        isOneWay(){
            return this.value=='oneWay'
        }
    },
    methods:{
        changeSelection(e){
            this.$emit('input',e)
        }

    }
}
</script>

<style lang="scss" scoped>
.route-type{
    position:absolute;
    top:10px;
    left: 0px;
    color:white
    
}
div {
        display: inline-block;
        margin-left: 10px;
        input{
            visibility:hidden;
            position: relative;
        }
        label{
            padding-bottom: 3px;
            transition: all .3s ease
        }
    }
.active{
    border-bottom: 2px solid red;
    transition: all .3s ease
}

</style>

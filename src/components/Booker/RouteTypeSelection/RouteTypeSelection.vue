<template>
    <div class="route-type">
        <div>
            <input type="radio" id="oneWay" name="routType" value="oneWay" @click="changeSelection('oneWay')" :checked="value=='oneWay'">
            <label for="oneWay">oneWay</label>
        </div>
        <div>
            <input type="radio" id="roundTrip" name="routType" value="roundTrip" @click="changeSelection('roundTrip')" :checked="value=='roundTrip'">
            <label for="roundTrip">roundTrip</label>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        value: String
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
left: 0;
color:white
}
div {
    display: inline-block
}
</style>

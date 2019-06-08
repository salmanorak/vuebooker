<template>
    <div 
        class="datepicker-wrapper" 
        ><date-selection-holder 
            :selectedDate = "_selectedDate" 
            :title = "title" 
        ></date-selection-holder>
    </div>
    
</template>

<script>
import DateSelectionHolder from './DateSelectionHolder'

export default {
    props:['direction','selectedDate'],
    computed : {
        title (){
            return this.direction=='departure' ? 'Gidiş' : 'Dönüş'
        },
        _selectedDate (){
            return this.selectedDate
        }
    },
    components:{
        DateSelectionHolder
    }
}
</script>

<style lang="scss" scoped>
.datepicker-wrapper{
	width:48%;
	height:100px;
	display:inline-block;
	font-size:14px;
	position:relative;
    background-color:#232b38;
	vertical-align:top;
    &:nth-child(2) {
        margin-left: 4%;
    }
}
</style>

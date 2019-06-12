<template>
    <div 
        class = "datepicker-container container" 
        v-click-outside = "closeModal" 
        @click = "openModal"
        @focusin= "openModal"
        @focusout = "closeModal"  >
        <datepicker-item 
            :direction= "'departure'"  
            :selectedDate = "selectedDate.departureDate"
        ></datepicker-item>
        <datepicker-item 
            v-if = "isRoundTrip" 
            :direction= "'arrival'" 
            :selectedDate = "selectedDate.arrivalDate"
        ></datepicker-item>
        <calendar-panel 
            v-show = "isFocus"
            :isRoundTrip = "isRoundTrip" 
            @newDateSelected = "newDateSelected($event)"
        ></calendar-panel>
    </div>
</template>

<script>
import DatepickerItem from './SelectionHolder/DatePickerItem'
import ClickOutside from 'vue-click-outside'
import CalendarPanel from './SelectionPanel/CalenderPanel'

export default {
    data(){
        return {
            isFocus: false,
            selectedDate:{
                departureDate :'',
                arrivalDate : ''
            }
        }
    },
    props:{
        routeType : {
            type: String
        }
    },
    computed:{
        isRoundTrip () {
           return this.routeType == 'roundTrip' ? true : false
        }
    },
    methods:{
        openModal(){
            this.isFocus=true

        },
        closeModal (){
            this.isFocus=false
        },
        newDateSelected(dates){
            this.selectedDate.departureDate= dates.departureDate
            this.selectedDate.arrivalDate= dates.arrivalDate

        }
    },
    components:{
        DatepickerItem,
        CalendarPanel
    },    
    directives: {
        ClickOutside
    }

}
</script>

<style lang="scss" scoped>
.datepicker-container {
	width: 15%;
    background-color:#232b38;
    position: relative;
	display: inline-block;
	height: 100px;
    vertical-align: middle;
    margin-left: 10px;
	margin-top: 40px;
}

</style>

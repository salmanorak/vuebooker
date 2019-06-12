<template>
    <functional-calendar
    @input="changeCalendarData($event)"
    :configs="CalendarConfig"
    :value="calendarData"
    ref="Calendar"
    xyz="_isRoundTrip"
    ></functional-calendar>    
</template>

<script>
import { FunctionalCalendar }  from 'vue-functional-calendar';


export default {
    data(){
        return{
            calendarData:{},
            CalendarConfig: {
                sundayStart : false
                ,dateFormat : "mm/dd/yyyy"
                ,isDateRange : false
                ,isDatePicker : true
                ,isMultiple : true 
                ,calendarsCount : 2 
                ,dayNames:['Pz','Sa','Ça','Pe','Cu','Ct','Pz']
                ,monthNames:['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']
                ,applyStylesheet:true
                ,changeMonthFunction:false
                ,changeYearFunction:false
                ,limits:{min: '06/08/2019', max: '06/08/2020'}

            },
        }
    },
    methods:{
        changeCalendarData(e){
            this.calendarData = e
            this.calendarData.dateRange.start.date= this.calendarData.selectedDate
            this.$emit('newDateSelected', {
                departureDate :this.calendarData.selectedDate
            })
        }
    },
    components:{
        FunctionalCalendar
    }
}
</script>

<style scoped>

</style>



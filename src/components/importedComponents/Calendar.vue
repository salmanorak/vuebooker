<template>
    <functional-calendar
    @input="changeCalendarData($event)"
    :configs="CalendarConfig"
    :value="calendarData"
    ref="Calendar"
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
                ,isDateRange : true
                ,isDatePicker : false
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
    props:{
        isRoundTrip : {
            type: Boolean
        }
    },
    computed:{
        _isRoundTrip(){
            // if(this.isRoundTrip){
            //     console.log(this.$refs.Calendar.$)
            // }else{
            //     console.log(this.$refs.Calendar.input.dateRange.start.date
            //     ,this.$refs.Calendar.$data.input.dateRange.end.date             
            //     ,this.$refs.Calendar.$data.fConfig.isDatePicker)
            // }
            return this.isRoundTrip
        },
    },
    methods:{
        changeCalendarData(e){
            this.calendarData = e
            if (this._isRoundTrip){
                this.$emit('newDateSelected', {
                    departureDate :this.calendarData.dateRange.start.date, 
                    arrivalDate: this.calendarData.dateRange.end.date
                })
            
            }else{
                this.$emit('newDateSelected', {
                    departureDate :this.calendarData.selectedDate
                })
            }
        }
    },
    components:{
        FunctionalCalendar
    }
}
</script>

<style scoped>

</style>



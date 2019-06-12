<template>
    <div class="calendar">
        <!-- <calendar @newDateSelected="newDateSelected($event)" :isRoundTrip="_isRoundTrip"></calendar> -->
        <component :is="SelectedCalender" @newDateSelected="newDateSelected($event)" ></component>
    </div>
</template>

<script>
import Calendar from '../../../importedComponents/Calendar'
import OneWay from '../../../importedComponents/OneWay'
import RoundTrip from '../../../importedComponents/RoundTrip'


export default {
   props:{
        isRoundTrip : {
            type: Boolean
        }

   },
   computed:{
       _isRoundTrip(){
          return this.isRoundTrip
       },
       SelectedCalender(){
           return this.isRoundTrip ? 'RoundTrip' : 'OneWay'
       }
   },
   methods:{
        newDateSelected(dates){
            this.$emit('newDateSelected',dates)    
        }
    },
    components:{
        Calendar,
        OneWay,
        RoundTrip
    }
}
</script>

<style lang="scss">
.calendar {
    position:absolute;
    margin-top:5px;
    width: 600px;
    height: 275%;
    background-color:white;
    right:0;
}

</style>

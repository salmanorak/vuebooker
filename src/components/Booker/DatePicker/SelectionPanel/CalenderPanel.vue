<template>
    <div class="calendar">
        <calendar @newDateSelected="newDateSelected($event)" :isRoundTrip="_isRoundTrip"></calendar>
    </div>
</template>

<script>
import Calendar from '../../../importedComponents/Calendar'

export default {
   props:{
        isRoundTrip : {
            type: Boolean
        }

   },
   computed:{
       _isRoundTrip(){
          return this.isRoundTrip
       }
   },
   methods:{
        newDateSelected(dates){
            this.$emit('newDateSelected',dates)    
        }
    },
    components:{
        Calendar
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

<template>
    <div class="datepicker-item">
        <div 
            class="title"
        >{{title}}</div>
        <div 
            class="datepicker-icon" 
            v-if="!_isDateSelected"
        ></div>
        <div 
            class="day"
            v-if="_isDateSelected" 
        ><div  
            class="day-value"
        >{{_selectedDate | moment("DD") }}</div>
        </div>
        <div 
            class="month"
            v-if="_isDateSelected" 
            ><div 
            class="month-value"
            >{{_selectedDate | moment("MMMM") }}</div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props:['title','selectedDate'],
    computed:{
        _title (){
           return  this.title 
        },
        _isDateSelected() {
            return this.$moment(this.selectedDate, 'mm/dd/yyyy').isValid()
        //   return this.$moment.isValid(this.selectedDate)
        },
        _selectedDate(){

            if(this.$moment(this.selectedDate, 'mm/dd/yyyy').isValid()){
                return  this.selectedDate
            }
        }

    }
}
</script>

<style lang="scss" scoped>
    .datepicker-item {
        color: white; 
        .title{
            width:100%;
            height:20px;
            margin-top:5px;
            font-size:14px;
            }
        .datepicker-icon{
            font-size: 45px;
            position: absolute;
            top: 60%;
            left: 50%;
            height:50px;
            width:50px;
            background-image: url(https://www.turkishairlines.com/theme/img/sprite/sprite-icons-w3.png);
            background-position: -381px -581px;
            transform: translate(-50%, -50%);
        }
        .day{
            width:100%;
            height:40px;
            font-size:40px;
        }
        .month{
            width:100%;
            height:20px;
            font-size:14px;
            margin-top:5px;
            color: #c9c9ca
        }
    }

</style>

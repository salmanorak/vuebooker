<template>
    <div 
        class="selection-panel"
        >
        <div 
            class="panel-title"
            >Kabin ve Yolcu Seçimi
        </div>
        <cabin-picker 
            @cabinTypeChanged="changeCabinType($event)"
            :selectedCabinType="_selectedCabinType"
            >
        </cabin-picker>
        <pax-picker
            :paxList="_paxList"
            :selectedPaxTypes="_selectedPaxTypes"
            @countChanged="changeCount($event)"
            >
        </pax-picker>
    </div>  
</template>
<script>
import CabinPicker from "./CabinPicker/CabinPicker";
import PaxPicker from './PaxPicker/PaxPicker';
export default {
    props:{
        selectedCabinType:{
            type: String
        },
        paxList:{
            type: Array
        },
        selectedPaxTypes:{
            type: Object
        }
    },
    computed:{
        _selectedCabinType(){
            return this.selectedCabinType
        },
        _paxList(){
            return this.paxList
        },
        _selectedPaxTypes(){
            return this.selectedPaxTypes
        }
    },
    methods:{
        changeCabinType(cabinType){
            this.$emit('cabinTypeChanged',cabinType)
        },
        changeCount(data){
            this.$emit('countChanged',data)
        }
    },
    components:{
        CabinPicker,
        PaxPicker
    }
    
}
</script>

<style lang="scss" scoped>
    .selection-panel{
        position:absolute;
        width:300px;
        right:0;
        min-height:300px;
        background-color:white;
        color:black;
        box-shadow: 10px 14px 5px -8px rgba(209, 201, 209, 0.77);
        padding: 20px 10px;
    }
    .panel-title{
    text-align: left;
    font-size: 18px;
    color: #96979a;
    font-weight: 700;
    padding-bottom: 20px;
    }
</style>

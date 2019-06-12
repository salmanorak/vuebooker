<template>
    <div 
        class="paxpicker-container container"
        v-click-outside = "closeModal"
        @click = "openModal"
        @focusin ="openModal"
        @blur="closeModal"
        >
        <cabin-selection-holder
            :selectedCabinType ="selectedCabinType"
            >
        </cabin-selection-holder>
        <pax-picker-selection-holder
            :SelectedPaxTypes ="selectedPaxTypes" 
            :totalPaxCount="totalPaxCount"
            >
        </pax-picker-selection-holder>
        <selection-panel
            v-if="isFocus"
            :selectedCabinType="selectedCabinType"
            :selectedPaxTypes="selectedPaxTypes"
            :paxList ="paxList"
            @cabinTypeChanged="changeCabinType($event)"
            @countChanged="changeCount($event)"
            >
        </selection-panel>

    </div>

</template>

<script>
import PaxPickerSelectionHolder from './SelectionHolder/PaxSelectionHolder'
import CabinSelectionHolder from './SelectionHolder/CabinSelectionHolder'
import SelectionPanel from './SelectionPanel/PaxPickerSelectionPanel'
import ClickOutside from 'vue-click-outside'



export default {
    data(){
        return {
            selectedCabinType: 'ECO',
            paxList:[
                {
                    code:'Adult', 
                    title:'Yetişkin', 
                    count:1, 
                    maxAge:120, 
                    minAge:12, 
                    maxCount:9, 
                    subType:'Infant',
                    upperLimitType:''
                },
                {
                    code:'Child', 
                    title:'Cocuk', 
                    count:0, 
                    maxAge:12, 
                    minAge:2, 
                    maxCount:9, 
                    subType:'',
                    upperLimitType:''
                },
                {
                    code:'Infant', 
                    title:'Bebek', 
                    count:0, 
                    maxAge:2, 
                    minAge:0, 
                    maxCount:9, 
                    subType:'',
                    upperLimitType:'Adult'
                },       
            ],
            selectedPaxTypes : {
                Adult:{count:1},  
                Child:{count:0},     
                Infant:{count:0}
            },  
            isFocus:false
        }
        
    },
    computed:{
        totalPaxCount () {
            return Object.keys(this.selectedPaxTypes).map(
                (key)=>{
                    return this.selectedPaxTypes[key].count
                    }).reduce(
                        (sum, item)=>{
                        return sum + item
                        })
        },
        
    },
    methods:{
        openModal(){
            this.isFocus=true
        },
        closeModal (){
            this.isFocus=false
        },
        changeCabinType(cabinType){
            this.selectedCabinType=cabinType
        },
        changeCount(data){
            this.selectedPaxTypes[data.paxType].count = data.currentCount
            if(this.selectedPaxTypes[data.subType] && this.selectedPaxTypes[data.subType].count >= data.currentCount ){
                this.selectedPaxTypes[data.subType].count = data.currentCount 
                for(let i = 0 ; i <this.paxList.length ; i++){
                    if(this.paxList[i].code==data.subType){
                        this.paxList[i].count= data.currentCount
                        break;
                    }
                }  
            }
        }
    },
    components:{
        PaxPickerSelectionHolder,
        CabinSelectionHolder,
        SelectionPanel
    },
    directives:{
        ClickOutside
    }

    
}
</script>

<style lang="scss">
.paxpicker-container {
    width: 15%;
    height: 100px;
	background-color:#232b38;
    position: relative;
	display: inline-block;
	vertical-align: middle;
    margin-top: 40px;
    margin-left:10px;
    vertical-align:top;
	color:white;
	font-size:14px;
	display:inline-block;
}
</style>

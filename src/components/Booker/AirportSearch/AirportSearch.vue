<template>
    <div 
        class="wrapper port-search-wrapper" 
        :class="classList" 
        @click="activeInput"
        @focusin="activeInput" 
        v-click-outside="close" 
        @focusout="close">
        <div 
            class="port-search-item" 
            :class='direction'>
            <div 
                class="icon">
                <i 
                    class="fas" 
                        :class="'fa-plane-'+route"></i>
            </div>
            <airport-search-input>
                    <div 
                        class="input-wrapper">
                    <input
                        autocomplete="off" 
                        type="text" 
                        :id="direction" 
                        v-model="searchString" 
                        class="port-search-input" 
                        :class="direction" 
                        :ref="'Input'+ direction"
                        @keydown.down="selectNext"
                        @keydown.up="selectPrevious"
                        @keydown.enter="selectActiveItem"

                        />
                    <place-holder 
                        :title="title">
                    </place-holder>
                    <selection-holder 
                        :port="selectedPort" 
                        :direction="direction">
                    </selection-holder>
                </div>
            </airport-search-input>
            <airport-search-result 
                :searchResultList="searchResultList"
                @portSelected="selectPort($event)"
                @showModal="showModal"
                :ref="'resultPanel'"
                >
            </airport-search-result>
        </div>
        <div 
            id="modal" 
            v-if="isShowModal">
            <component 
                :is="'AllLocationModal'" 
                @closeModal="closeModal" 
                :cityList="_cityList" 
                :portList="_portList" 
                @selectPort="selectPort($event)" 
                key="animate">
            </component>
        </div>
    </div>
</template>

<script>
import AirportSearchInput from './SelectionHolder/AirportSearchInput'
import AirportSearchResult from './SelectionPanel/AirportSearchResult'
import SelectionHolder from './SelectionHolder/AirportSearchSelectionHolder'
import PlaceHolder from './SelectionHolder/AirportSearchInputPlaceHolder'
import ClickOutside from 'vue-click-outside'
import { searchHelper } from '@/JS/searchHelper.js'
import AllLocationModal from './AllLocationModal/AllLocationModal'



export default {
    data(){
        return{
            isfocus:false,
            isActive:false,
            selectedPort: {
                portName:"",
                portCode:"",
                cityName:""
            },
            searchString:"",
            maxResultCount: 10,
            isShowModal:false,
        }
    },
    props:{
        direction : {
            type:String,
            required:true
        },
        portList:{
            type: Array
        },
        portMap:{
            type: Map
        },
        cityList:{
            type : Array
        }
    },
    methods:{
        activeInput(status){
                this.isfocus=true;
                this.isActive=true
                this.$refs['Input'+this.direction].focus();
                this.$refs['Input'+this.direction].select();
        },
        close(){
            if(this.selectedPort.portName.length === 0) {
            this.isfocus=false;
            }
            this.isActive=false
            this.searchString = this.selectedPort.cityName;
        },
        selectPort (port){
            this.selectedPort = port;
            this.searchString = this.selectedPort.cityName;
            this.isfocus=true;
            this.close();
            this.isActive=false;
        },
        showModal(){
            this.isShowModal=true
        },
        closeModal(){
            this.isShowModal=false
        },
        hasActiveItem(){
           return document.getElementsByClassName('result-item active').length>0 ? true : false
        },
        getActiveItem(){
            return document.getElementsByClassName('result-item active')[0]
        },
        getFirstResultItem(){
            return document.getElementsByClassName('result-item')[0]
        }
        ,
        selectNext(){
            if (this.hasActiveItem()){
               let  activeElement = this.getActiveItem()
               activeElement.__vue__.isActive=false
               if (activeElement.nextSibling.nextSibling === null ){
                    this.getFirstResultItem().__vue__.isActive=true               
                }else{
                activeElement.nextSibling.__vue__.isActive=true
               }                
            }else{
               this.getFirstResultItem().__vue__.isActive=true
            }
        },
        selectPrevious(){
            if (this.hasActiveItem()){
               let  activeElement = this.getActiveItem()
               activeElement.__vue__.isActive=false
               if (activeElement.previousSibling === null ){
                  this.activeInput();
               }else{
                activeElement.previousSibling.__vue__.isActive=true
               }                
            }else{
                let itemList = this.$refs.resultPanel.$refs.ResultList.$refs.ListItem
                itemList[itemList.length-1].isActive=true
            }
        },
        selectActiveItem(){
            if(this.hasActiveItem()){
                this.selectPort(this.getActiveItem().__vue__.port)
            }
        }
    },
    computed:{
        route(){
            return this.direction == "from" ? "departure"  : "arrival"
        },
        isfocused(){
            return ( this.isfocus || this.selectedPort.portName.length>0 )
        },
        isLoaded () {
            if (this.portList.length > 0) {
                return true;
            }
            return false;
        },
        classList (){
            let classList = [this.direction]
            if(this.isfocused) {
                classList.push('focused')
            }
            if(this.isActive){
                classList.push('active')
            }
            return classList
        },
        title(){
            return this.direction == "from" ? "nereden" : "nereye"
        },
        searchResultList (){
            let result = searchHelper().searchPort(this.searchString,this.portList,this.maxResultCount)
            return result
        },
        reverseDirection (){
            return this.direction == 'from' ? 'to' : 'from'
        },
        _cityList(){
            return this.cityList
        },
        _portList(){
            return this.portList
        }
    },
    components:{
        AirportSearchInput,
        AirportSearchResult,        
        SelectionHolder,
        PlaceHolder,
        AllLocationModal
    },
    directives: {
        ClickOutside,  
    },
}
</script>

<style lang="scss">
.port-search-wrapper {
	background-color: white;
	position: absolute;
	width: 47%;
	height: 100%;
	display: inline-block;
	&.to {
		right: 0;
	}
}
.port-search-item {
    position:relative;
    display: flex;
    align-items: center;
    .icon {
        display: inline-block;
        width: 15%;
        margin-left: 10px;
        margin-top: 20px;
        font-size: 25px;
        font-weight: 100;
    }
}

.port-search-wrapper{
    &.active{
        .result-panel{
            display:block;
        }
        .selection-holder{
            visibility: hidden;
            transition: all 0.1s ease .2s;
        }
    }
    &.focused{
        .port-search-item .input-wrapper .port-search-placeholder{
        font-size: 14px;
        color: blue;
        top: -15px;
        left: 5px;
        transition: all 0.3s;
        }

    }
}

</style>

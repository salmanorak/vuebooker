<template>
    <div class="wrapper port-search-wrapper" :class="classList" @click="activeInput" @focusin="activeInput" v-click-outside="close" @focusout="close">
        <div class="port-search-item" :class='direction'>
            <div class="icon">
                <i class="fas" :class="'fa-plane-'+route"></i>
            </div>
            <airport-search-input>
                    <div class="input-wrapper">
                    <input autocomplete="off" type="text" :id="direction" v-model="searchString" class="port-search-input" :class="direction" :ref="'Input'+ direction"/>
                    <place-holder :title="title"></place-holder>
                    <selection-holder :port="selectedPort" :direction="direction"></selection-holder>
                </div>
            </airport-search-input>
            <airport-search-result :searchResultList="searchResultList" @portSelected="selectPort($event)" @showModal="showModal"></airport-search-result>
        </div>
        <div id="modal" v-if="isShowModal">
            <component :is="'AllLocationModal'" @closeModal="closeModal" :cityList="_cityList" :portList="_portList" @selectPort="selectPort($event)"></component>
        </div>
    </div>
</template>

<script>
import AirportSearchInput from '@/components/Booker/AirportSearch/AirportSearchInput.vue'
import AirportSearchResult from '@/components/Booker/AirportSearch/AirportSearchResult.vue'
import SelectionHolder from '@/components/Booker/AirportSearch/AirportSearchSelectionHolder.vue'
import PlaceHolder from '@/components/Booker/AirportSearch/AirportSearchInputPlaceHolder.vue'
import ClickOutside from 'vue-click-outside'
import { searchHelper } from '@/JS/searchHelper.js'
import AllLocationModal from '@/components/Booker/AirportSearch/AllLocationModal/AllLocationModal.vue'



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
            console.log(port);
            this.selectedPort = port;
            this.searchString = this.selectedPort.cityName;
            this.close();
        },
        showModal(){
            this.isShowModal=true
        },
        closeModal(){
            this.isShowModal=false

        }
    },
    computed:{
        route(){
            return this.direction == "from" ? "departure"  : "arrival"
        },
        
        isLoaded () {
            if (this.portList.length > 0) {
                return true;
            }
            return false;
        },
        classList (){
            let classList = [this.direction]
            if(this.isfocus) {
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
	width: 48%;
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

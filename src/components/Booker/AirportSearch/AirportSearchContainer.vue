<template>
    <div 
        class="port-search-container container"
        >
        <airport-search 
            direction="from" 
            :portList="portList"  
            :portMap="portMap" 
            ref="airportFrom" 
            :cityList="cityList"
            >
        </airport-search>
        <airport-search 
            direction="to" 
            :portList="portList" 
            :portMap="portMap" 
            ref="airportTo" 
            :cityList="cityList"
            >
        </airport-search>
        <switcher 
            @switchPort="switchPort"
            >
        </switcher>
    </div>
</template>

<script>
import AirportSearch from './AirportSearch'
import Switcher from './Switcher'
import { diacriticsHelper } from '@/JS/diacritics.js'
import { mockPortList } from '../../../mockData/portList'


export default {
    data(){
        return {
            portList:[],
            blackListKeys : ["Havalimanı","Airport","International","Uluslararası"],
            portMap : new Map(),
            cityList:[],
            mock:true,
        }
    },
    components : {
        AirportSearch,
        Switcher
    },
    methods:{
        switchPort () {
            let selectedFromPort =  this.$refs['airportFrom'].selectedPort
            let selectedToPort =  this.$refs['airportTo'].selectedPort
            this.$refs['airportFrom'].selectedPort = selectedToPort
            this.$refs['airportTo'].selectedPort = selectedFromPort
        }
    },
    created(){
        
        if (this.mock){
            this.portList= mockPortList
            //prepareKey List
            this.portList.forEach((item,i)=>{
                let keyList = [];
                keyList.push(item.portCode,...item.cityName.split(" "),...item.portName.split(" "));
                keyList = keyList.filter(function(item, i, ar){ return ar.indexOf(item) === i; })
                    keyList= keyList.filter(key=>{
                        return !this.blackListKeys.includes(key)
                    })
                this.portList[i].keyList = keyList
            })

            // prepare CityList
            this.portList.forEach((port)=>{
                this.cityList.push(port.cityName)
            })
            this.cityList = this.cityList.filter(function(city,i,arr){return arr.indexOf(city)==i})
            this.cityList.sort(function(a, b){  
                let x = diacriticsHelper().removeDiacritics(a).toLocaleLowerCase("en");
                let y = diacriticsHelper().removeDiacritics(b).toLocaleLowerCase("en");
                return (x!== y) ? (x < y) ? -1 : 1 : 0
            });

        }
        else{
            this.$http.get('https://vue-tutorials-orak.firebaseio.com/portList.json')
            .then(response=>{
                this.portList = response.body
            }).then(()=>{
                this.portList.forEach((item,i)=>{
                    let keyList = [];
                    keyList.push(item.portCode,...item.cityName.split(" "),...item.portName.split(" "));
                    keyList = keyList.filter(function(item, i, ar){ return ar.indexOf(item) === i; })
                        keyList= keyList.filter(key=>{
                            return !this.blackListKeys.includes(key)
                        })
                    this.portList[i].keyList = keyList
                })
            }
            )
            .then(()=>{
                this.portList.reduce((portMap, port) => {
                    this.portMap[port.portCode] = port
                })
            })
            .then(()=>{
                this.portList.forEach((port)=>{
			        this.cityList.push(port.cityName)
		        })
		        this.cityList = this.cityList.filter(function(city,i,arr){return arr.indexOf(city)==i})
		        this.cityList.sort(function(a, b){  
                    let x = diacriticsHelper().removeDiacritics(a).toLocaleLowerCase("en");
			        let y = diacriticsHelper().removeDiacritics(b).toLocaleLowerCase("en");
                    return (x!== y) ? (x < y) ? -1 : 1 : 0
                });
            })
        }
        
    },
    
}
</script>

<style lang="scss" scoped>
    .port-search-container {
        position: relative;
        width: calc(60% - 50px);
        text-align: left;
        background-color: transparent;
	    display: inline-block;
	    height: 100px;
	    vertical-align: middle;
    }
    .container {
	position: relative;
	display: inline-block;
	height: 100px;
	vertical-align: middle;
	margin-top: 40px;
	&:not(:first-child) {
		margin-left: 10px;
    }
    }

</style>


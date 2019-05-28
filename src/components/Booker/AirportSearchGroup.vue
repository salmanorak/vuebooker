<template>
    <div class="port-search-container container">
        <airport-search direction="from" :portList="portList"  :portMap="portMap" ref="airportFrom" :cityList="cityList"></airport-search>
        <airport-search direction="to" :portList="portList" :portMap="portMap" ref="airportTo" :cityList="cityList"></airport-search>
        <switcher @switchPort="switchPort"></switcher>
    </div>
</template>

<script>
import AirportSearch from '@/components/Booker/AirportSearch/AirportSearch.vue'
import Switcher from '@/components/Booker/Switcher.vue'
import { diacriticsHelper } from '@/JS/diacritics.js'


export default {
    data(){
        return {
            portList:[],
            blackListKeys : ["Havalimanı","Airport","International","Uluslararası"],
            portMap : new Map(),
            cityList:[],
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
                return (x!== y) ? (x < y) ? -1 : 1 : 0});
        }

        )
    },
    
}
</script>

<style lang="scss">

</style>


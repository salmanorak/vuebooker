<template>
    <div class="port-search-container container">
        <airport-search direction="from" :portList="portList" :blackListKeys="blackListKeys" :portMap="portMap" ref="airportFrom"></airport-search>
        <airport-search direction="to" :portList="portList" :blackListKeys="blackListKeys" :portMap="portMap" ref="airportTo"></airport-search>
        <switcher @switchPort="switchPort"></switcher>
    </div>
</template>

<script>
import AirportSearch from '@/components/Booker/AirportSearch/AirportSearch.vue'
import Switcher from '@/components/Booker/Switcher.vue'

export default {
    data(){
        return {
            portList:[],
            blackListKeys : ["Havalimanı","Airport","International","Uluslararası"],
            portMap : new Map()
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
    },
    
}
</script>

<style lang="scss">

</style>


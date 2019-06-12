<template>
    <ul class="result-list" >
        <list-item 
            v-for="port in searchResultList" 
            :key="port.portCode" 
            :port="port" 
            @portSelected="portSelected($event)"
            ref="ListItem"
            >
        </list-item>
        <default-item 
            v-if="!hasResult" 
            @showModal="showModal">
        </default-item>
    </ul>
</template>

<script>
import ListItem from './AirportSearchResultListItem'
import DefaultItem from './AirportSearcResultListAllPortsItem'


export default {
    props:{
        searchResultList : {
            type: Array
        }
    },
    computed:{
        hasResult () {
            return this.searchResultList && this.searchResultList.length >0 ? true : false
        }
    },
    methods:{
        portSelected(port){
            this.$emit('portSelected',port)
        },
        showModal(){
            this.$emit("showModal")
        },
    },
    components:{
        ListItem,
        DefaultItem
    },

    
}
</script>

<style lang="scss">
    .result-list{
        padding:0;
        margin:0 -10px;
        .title{
            font-size:14px;
            font-weight:500;
        }
    }
</style>

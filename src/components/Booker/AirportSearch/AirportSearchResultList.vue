<template>
    <ul class="result-list">
        <list-item v-for="port in searchResultList" :key="port.portCode" :port="port" @portSelected="portSelected($event)">
        </list-item>
        <default-item v-if="!hasResult"></default-item>
    </ul>
</template>

<script>
import ListItem from '@/components/Booker/AirportSearch/AirportSearchResultListItem.vue'
import DefaultItem from '@/components/Booker/AirportSearch/AirportSearcResultListAllPortsItem.vue'


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
    components:{
        ListItem,
        DefaultItem
    },
    methods:{
        portSelected(port){
            this.$emit('portSelected',port)
        }
    }

    
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

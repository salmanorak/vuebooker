<template>
    <div class="result-panel">
        <div class="title">Havalimanı</div>
        <result-list :searchResultList="searchResultList" @portSelected="portSelected($event)" @showModal="showModal"></result-list>
    </div>
</template>

<script>
import ResultList from '@/components/Booker/AirportSearch/AirportSearchResultList.vue'


export default {
    components:{
        ResultList,
    },
    props:{
        searchResultList:{
            type: Array
        }
    },
    methods:{
        portSelected(port){
            this.$emit('portSelected',port)
        },
        showModal(){
            this.$emit("showModal")
        }
    }
}
</script>

<style lang="scss" >
.result-panel {
    min-height:65px;
    font-size:14px;
    position: absolute;
    top: 105px;
    width: 150%;
    display: none;
    background-color: white;
    padding: 10px;
    box-shadow: 10px 14px 5px -8px rgba(209, 201, 209, 0.77);
    z-index:2;
    ul{
        padding:0;
        margin:0 -10px;
    }
    .title{
        font-size:14px;
        font-weight:500;
    }
}
</style>

<template>
    <div
        @click="openModal"
        class="submit-container container">
        <div 
            class="search-icon">
            <i 
                class="fas fa-chevron-right"
            ></i>
        </div>
        <span 
            class="search-text"
            >Search flight
        </span>
        <div id="modal" v-if="isShowModal">
            <component :is="'ResultModal'" @closeModal="closeModal"></component>
        </div>
    </div>
</template>

<script>
import ResultModal from './ResultModal'

export default {
    data (){
        return {
            isShowModal : false
        }
    },
    methods:{
        closeModal(){
            this.isShowModal=false
        },
        openModal(){
            this.isShowModal = true
        }
    },
    components:{
        ResultModal
    }
}
</script>

<style lang="scss" scoped>
    .submit-container{
        width: 10%;
        position: relative;
        display: inline-block;
        height: 100px;
        vertical-align: middle;
        margin-top: 20px;
        margin-left: 10px;
        background-color:#E81932;
        .search-icon{
            font-size:60px;
            color:white;
            display:flex;
            align-items: center;
            justify-content: center;
            height:100%;
        }
        .search-text{
            display:none;
        }
    }
</style>

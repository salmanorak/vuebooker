<template>
    <div class="port-section">
		<div class="title"> Havalimanı listesi</div>
        <div class="port-list list">
            <ul>
			<port-list-item v-for="port in _portList" :key="port.portCode" :port="port" @selectPort="selectPort($event)"></port-list-item>
            </ul>
        </div>
	</div>
</template>

<script>
import PortListItem from "@/components/Booker/AirportSearch/AllLocationModal/AllLocationPortListItem"

export default {
    props:{
        portList:{
            type: Array
        }
    },
    computed:{
        _portList(){
            return this.portList
        }
    },
    methods:{
        selectPort(port){
            this.$emit('selectPort',port)
        }
    },
    components:{
        PortListItem
    }
}
</script>

<style lang="scss" scoped>
	.title{
		font-size:18px;
		padding:5px;
		border-bottom: 1px solid black;
		background-color: #c9c9ca;
	}
    .port-section {
        display:inline-block;
        width:49%;
        .list{
            overflow-x:scroll;
            height: 500px;
            &::-webkit-scrollbar {
                -webkit-appearance: none;
                width: 5px;
                }
            &::-webkit-scrollbar-track {
                background-color: rgb(255, 255, 255);
                -webkit-border-radius: 1px;
                }
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: rgba(12, 12, 12, 0.92);
                -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
                }
        ul{
            padding:0;
            margin:0;
            text-align:left;
            li{
                padding: 10px 5px;
                list-style:none;
                &:hover{
                    background-color:#f2f2f2;
                    }
                }
            }
        }
    }
</style>


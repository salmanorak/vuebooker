<template>
    <div class="city-section">
		<div class="title"> Şehir listesi</div>
        <div class="cityList list">
            <ul>
			<city-list-item v-for="city in _cityList" :key="city" :city="city" @selectCity="selectCity($event)"></city-list-item>
            </ul>
        </div>
	</div>
</template>

<script>
import CityListItem from "@/components/Booker/AirportSearch/AllLocationModal/AllLocationCityListItem"

export default {
    props:{
        cityList:{
            type: Array
        }
    },
    computed : {
        _cityList(){
            return this.cityList
        }
    },
    methods:{
        selectCity(city){
            this.$emit('selectCity',city)
        }
    },
    components:{
        CityListItem
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
   
   .city-section{
        .title{
		font-size:18px;
		padding:5px;
		border-bottom: 1px solid black;
		background-color: #c9c9ca;
	    }   
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
                .port-code{
                    display:none;	
                    }
                }
            }
        }
    }
</style>


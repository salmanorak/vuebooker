<template>
	<general-modal @closeModal="closeModal" @selectCity="filterPorts($event)" @selectPort="selectPort($event)">
		<city-list :cityList="_cityList" @selectCity="selectCity($event)">
		</city-list>				
		<port-list :portList="filteredPortList" @selectPort="selectPort($event)">
		</port-list>
	</general-modal>

</template>

<script>
import CityList from "@/components/Booker/AirportSearch/AllLocationModal/AllLocationCityList"
import PortList from "@/components/Booker/AirportSearch/AllLocationModal/AllLocationPortList"
import GeneralModal from "@/components/BaseComponents/GeneralModal.vue"
import { searchHelper } from '@/JS/searchHelper.js'


export default {
	data (){
		return{
			filteredPortList:[]
		}
	},
	props:{
			cityList:{
				type: Array
			},
			portList:{
				type: Array
			}
		},
		computed :{
			_cityList(){
				return this.cityList
			},
			_portList(){
				return this.portList
			},
		},
		methods:{
			selectPort(port){
				console.log(port)
			},
			closeModal(){
				this.$emit('closeModal')
			},
			filterPorts(city){
				this.filteredPortList = searchHelper().searchPortByCityName(this.portList,city)
			},
			selectCity(city){
				this.filterPorts(city)
			},
			selectPort(port){
				this.$emit('selectPort',port)
			}		
		},
		components:{
			GeneralModal,
			CityList,
			PortList		
		}

}
</script>

<style lang="scss" >

</style>

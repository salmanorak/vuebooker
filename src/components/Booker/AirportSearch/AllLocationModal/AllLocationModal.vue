<template>
	<general-modal @closeModal="closeModal">
		<city-list :cityList="_cityList" @selectCity="filterPorts($event)">
		</city-list>				
		<port-list :portList="filteredPortList" @selectPort="selectPort($event)">
		</port-list>
	</general-modal>
</template>

<script>
import CityList from "./AllLocationCityList"
import PortList from "./AllLocationPortList"
import GeneralModal from "../../../BaseComponents/GeneralModal"
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
				this.closeModal()
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

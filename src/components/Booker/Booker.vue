<template>
    <div class="booker-section">
        <div class="booker-container">
			<!--<route-type v-model="routeType"></route-type>  -->	
            <airport-search>
			</airport-search>
			<date-picker 
				:routeType="routeType"
				>
			</date-picker>
			<pax-and-cabin-picker
				>
			</pax-and-cabin-picker>
			<submit></submit>
        </div> 
    </div> 
</template>

<script>
import RouteType from './RouteTypeSelection/RouteTypeSelection'
import AirportSearch from '../Booker/AirportSearch/AirportSearchContainer'
import DatePicker from '../Booker/DatePicker/DatePickerContainer'
import PaxAndCabinPicker from './PaxAndCabinPicker/PaxAndCabinPickerContainer'
import Submit from './SubmitButton/SubmitButton'



export default {
	data () {
		return {
			routeType : 'roundTrip',
		}
	},
    components:{
		AirportSearch,
		DatePicker,
		PaxAndCabinPicker,
		RouteType,
		Submit
    }
}
</script>


<style lang="scss">
.booker-section {
	position: relative;
	height: 500px;
	width: 100%;
	background-image: url("https://turkishairlines.ssl.cdn.sdlmedia.com/636866809060120078CY.jpg");
	background-repeat: no-repeat;
	background-position: center;
}

.booker-container {
	position: relative;
	top: 50%;
	display: block;
	margin: 0 auto;
	min-width: 1000px;
	max-width: 1200px;
	background-color: rgba(35, 43, 55, 0.6);
	height: 140px;
	text-align: center;
	padding: 0 10px;
	cursor:pointer;
}


@media screen and (max-width: 1000px) {
    .booker-section{
		height:600px;
	}
    .booker-container{
		width:100%;
		top:0;
		padding-top:75px;
		height:100%;
	}
}

</style>

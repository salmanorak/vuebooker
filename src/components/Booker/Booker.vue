<template>
    <div class="booker-section">
        <div class="booker-container">
            <airport-search-group></airport-search-group>
        </div> 
    </div> 
</template>

<script>
import AirportSearchGroup from '@/components/Booker/AirportSearchGroup.vue'
export default {
    components:{
        AirportSearchGroup
    }
}
</script>


<style lang="scss">
body {
	font-size: 0;
	background-color:gray;
	height:3000px;
	font-family: 'Muli', sans-serif;
	&.modal-in{
		position:fixed;
		width:100%;
	}
}
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
.port-search-container {
	position: relative;
	width: calc(60% - 30px);
	text-align: left;
    background-color: transparent;
	.switcher {
		position: absolute;
		top: 50%;
		left: 50%;
		background: black;
		height: 40px;
		width: 40px;
		transform: translate(-50%, -50%) rotate(-180deg);
		border-radius: 50%;
		z-index:20;
		transition: all .3s;
		& i{
			font-size: 27px;
			transform: translate(22%, 22%);
			color:white;
		}
		&.active{
			transform: translate(-50%, -50%) rotate(180deg);
			transition: all .3s;
		}
	}
}
.container {
	position: relative;
	display: inline-block;
	height: 100px;
	vertical-align: middle;
	margin-top: 20px;
	&:not(:first-child) {
		margin-left: 10px;
	}
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

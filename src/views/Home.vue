<template>
    <booker></booker>
</template>

<script>
import Booker from '@/components/Booker/Booker.vue'
 export default {
components:{
	Booker
}
}
</script>


<style lang="scss">
body{
	padding:0;
	margin:0;
	font-size : 0;
	background-color : gray;
	height : 3000px;
	font-family : 'Muli', sans-serif;
	&.modal-in{
		position:fixed;
        width:100%;
        height: 100%;
	}
}
* {
	box-sizing: border-box;
}
</style>

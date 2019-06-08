<template>
    <div 
        class="cabin-selection-holder"
        ><div 
            class="title"
            >Kabin
        </div>
        <div 
            class="cabincode"
            >{{selectedCabinType}}
        </div>
        <div 
            class="classDef"
            >Sınıf
        </div>
	</div>
</template>

<script>
export default {
    props:{
        selectedCabinType:{
            type: String
        }
    }
}
</script>

<style lang="scss">
    .cabin-selection-holder{
    margin-top:5px;
    width:40%;
    display:inline-block;
    height:100px;
        .cabincode{
            font-size: 35px;
        }
        .classDef{
            margin-top:3px;
        }
    }
</style>



<template>
    <div class="cabin-selection">
        <div 
            class="cabintype"
            @click="changeCabinType('eco')"
            >
            <input 
                type="radio" 
                name="cabin" 
                value="ECO"
                id="eco"
                :checked="isEco"							
                >
            <label 
                for="eco" 
                >Ekonomi Class
            </label>
        </div>
        <div 
            class="cabintype"
            @click="changeCabinType('bus')"
            >
            <input 
                type="radio" 
                name="cabin" 
                value="BUS"
                id="bus"	
                :checked="!isEco"							
                >
            <label 
                for="bus"
                >Business Class
            </label>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cabinTypes:{
                eco : 'ECO',
                bus : 'BUS'
            }
        }
    },
    props:{
        selectedCabinType :{
            type:String
        }
    },
    computed:{
        isEco(){
            return this.selectedCabinType == 'ECO'
        }
    },
    methods:{
        changeCabinType(type){
            this.$emit('cabinTypeChanged',this.cabinTypes[type])
        }
    }
    
}
</script>

<style lang="scss" scoped>
.cabin-selection{
	margin-bottom:20px;
    text-align:left;
	.cabintype{
        padding: 5px 0;
        display:inline-block;
	}
	.cabintype:nth-child(2){
	margin-left:10px;	
	}
}
</style>

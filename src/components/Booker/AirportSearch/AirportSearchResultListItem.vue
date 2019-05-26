<template>
    <li class='result-item' @click.stop="selectPort(port)"> 
        <i class='fas fa-plane'></i> 
        <span> {{port.portName}} ( {{port.portCode}} ) , {{port.cityName}}</span>
	</li>
</template>

<script>
export default {
    props: {
        port : {
            type:Object
        }
    },
    methods:{
        selectPort(port){
            this.$emit('portSelected',port)
        }
    }
}
</script>


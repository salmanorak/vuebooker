<template>
    <li class="all-airport-port-item" @mousedown.stop="selectPort()">
        {{ port.portName | capitalize }} ( {{port.portCode  }} )
    </li>
</template>

<script>
export default {
    props:{
        port:{
            type: Object
        }
    },
    methods:{
        selectPort(){
            this.$emit('selectPort',this.port)
}
    }
}
</script>



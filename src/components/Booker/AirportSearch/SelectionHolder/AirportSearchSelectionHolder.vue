<template>
    <div class="selection-holder" v-if="isSelected" >
        <div class="city">{{port.cityName}}</div>
        <div>
            <span class="port">{{port.portName}}</span>
            <span class="port-code">({{port.portCode}})</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        port : {
            type: Object,
        } ,
        direction:{
            type: String
        }
    },
    computed:{
        isSelected (){
           return (this.port && this.port.portName.length>0) ? true : false
        }
    }
}
</script>

<style lang="scss">
.selection-holder {
    background-color: white;
    height: 90%;
    width: 100%;
    padding-left: 5px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    visibility:visible;
    align-items:top;
    .city{
        font-size:24px;
        font-weight:600;
    }
    .port{
        display:inline-block;
        font-size:14px;
        color:#99a5b4;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width:75%;
        overflow: hidden;
    }
    .port-code{
        display:inline-block;
        font-size:14px;
        color:#99a5b4;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding-left:5px;

    }
}

</style>


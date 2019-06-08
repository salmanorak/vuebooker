<template>
    <div class="pax-selection-holder">
        <div class="total-pax-count">{{totalPaxCount}}</div>
        <div class="pax-icon">
            <pax-icon v-for="i in _totalCount" :key="i"></pax-icon>
            <div v-if="isMaxCount" class="plus">+</div>
        </div>

    </div>
</template>

<script>
import paxIcon from './paxIcon'

export default {
    data (){
        return {
            isMaxCount : false
        }
    },
    props:{
        SelectedPaxTypes : {
            type: Object
        },
        totalPaxCount:{
            type: Number
        },
    },
    computed:{
        _totalCount (){
        if (this.totalPaxCount > 3){
            this.isMaxCount = true
            return 3
        }else{
            this.isMaxCount= false
            return this.totalPaxCount
        }
        }
    },
    components : {
        paxIcon

    }
    
}
</script>

<style lang="scss">
.pax-selection-holder{
display:inline-block;
vertical-align: top;
width:50%;
height:100px;
padding-top: 15px;
font-size: 24px;
    .pax-icon{
        font-size:40px;
        color:#dfe6f196;
    .icon{
        margin-top:20px;
        height:35px;
        width:11px;
        display:inline-block;
        background-image: url(https://www.turkishairlines.com/theme/img/sprite/sprite-icons-w3.png);
        background-position: -406px -467px;
        transform: translate(-50%, -50%);
    }
    .plus{
        display:inline-block;
        position:relative;
        top:-20px;
    }
    }
}
</style>

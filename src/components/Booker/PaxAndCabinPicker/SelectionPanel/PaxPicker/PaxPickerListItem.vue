<template>
    <div 
        id="pax.paxCode" 
        class="pax-item">
        <div 
            class="pax-type">
            <div 
                class="pax-title"
                >{{pax.title}}
            </div>
            <div 
                class="age-limits"
                >{{pax.minAge}} - {{pax.maxAge}}
            </div>
        </div>
        <div 
            class="pax-count">
            <div 
                class="down counter"
                :class="{enable:enableDown}"
                @click="countDown(pax.code)">
            </div>
            <div 
                class="count"
                >{{pax.count}}
            </div>
            <div    
                class="up counter"
                :class="{disable:_isMaxCount}"
                @click="countUp(pax.code)"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
        pax : this.paxItem,
        isMaxCount : false
        }
    },
    props:{
        paxItem:{
            type: Object
        },
        upperLimit:{
            type: Number
        }
    },
    computed:{
        enableDown(){
            return this.pax.count > 0
        },
        _isMaxCount (){
            if(this.pax.count == this.pax.maxCount || this.pax.count==this.upperLimit){
               return true
            }
        }
    },
    methods:{
        countUp (type){
            if(this.pax.count == this.pax.maxCount || this.pax.count==this.upperLimit ){
            }else{
                this.pax.count ++
                this.$emit('countChanged',{paxType:this.pax.code, currentCount: this.pax.count})
                if(this.pax.count == this.pax.maxCount || this.pax.count==this.upperLimit){
                }

            }
        },
        countDown (type){
             if(this.pax.count > 0) {
                this.pax.count --
                this.$emit('countChanged',{paxType:this.pax.code, currentCount: this.pax.count, subType:this.pax.subType})
            }
        }
    }



    
}
</script>

<style lang="scss" scoped>
.pax-item{
		border-bottom:1px solid #e6e8ee;
	&:not(:first-child){
		margin-top:10px;
	}
		.pax-type{
		width:50%;
		display:inline-block;
		text-align:left;
		height:50px;
	 vertical-align:middle;
		.pax-title{
			font-size:18px;
			font-weight:700;
			padding-bottom:3px;
		}
		.age-limits{
			color:#788594;
			font-weight:300;
		}
	}
	.pax-count{
		width:50%;
		height:50px;
		display:inline-block;
		vertical-align:middle;
	}
		&:last-child{
			border-bottom:none;
		}
	.counter{
		background-color:#ebeeef;
		display:inline-block;
		padding:20px;
		box-shadow:0 0 6px #ccc;
		position:relative;
		text-align:center;
		opacity:0.4;
		&:after{
			content:"-";
			position:absolute;
			top:0;
			left:50%;
			font-size:30px;
			transform: translateX(-50%);
			color:#858689;
		}
		&.up{
			opacity:1;
			&:after{
			 content:"+";
		}
		}
		&.enable{
			opacity:1;
        }
        &.disable{
            opacity: 0.4;
        }

	}
	.count{
		display:inline-block;
		padding: 0 20px;
		vertical-align:middle;
		height:100%;
	}
	}
</style>

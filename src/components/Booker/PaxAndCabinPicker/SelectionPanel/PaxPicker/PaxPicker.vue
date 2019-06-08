<template>
    <div 
        class="pax-selection"
        >
        <pax-list v-if="_paxList">
            <pax-list-item
                v-for="pax in _paxList"
                :key="pax.code"
                :paxItem="pax"
                @countChanged="changeCount($event)"
                :upperLimit="upperLimit(pax)"
                >
            </pax-list-item>
        </pax-list>
	</div>
</template>

<script>
import PaxList from './PaxPickerList'
import PaxListItem from './PaxPickerListItem'

export default {
    props:{
        paxList:{
            type: [Array, Boolean]
        },
        selectedPaxTypes:{
            type: Object
        }
    },
    computed:{
        _paxList(){
            return this.paxList
        },
        _selectedPaxType(){
            return this.selectedPaxTypes
        }
    },
    methods:{
        changeCount(data){
            this.$emit('countChanged',data)
        },
        upperLimit(pax){
            if(pax.upperLimitType != '' && typeof(pax.upperLimitType)!= 'undefined'){
                return  this._selectedPaxType[pax.upperLimitType].count
            }else{
                return pax.maxCount
            }
            
        }
    },
    components:{
        PaxList,
        PaxListItem
    }
}
</script>

<style lang="scss" scoped>

</style>


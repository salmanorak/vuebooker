<template>
	<base-modal
        :alignItem="'left'"
        modalTitle="Result"
        @closeModal="closeModal">
        <json-formatter
            :data = this.data
            :showLength="true"
            >
        </json-formatter>
	</base-modal>
</template>

<script>
import BaseModal from '../../BaseComponents/GeneralModal'
import JsonFormatter from 'vue-json-pretty'

export default {
    data (){
        return {
            data: {
                departure:'IST',
                Arrival:'ADA',
                departureDate:'2019/08/07', 
                returnDate:"2019/09/08", 
                paxType:{
                    Adult:{count:2},
                    Infant:{count:1},
                    Child:{count:2}
                }
            }
        }
    },
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    },
    components:{
        BaseModal,
        JsonFormatter
    }
}
</script>

<style lang="scss">

</style>

<template>
    <li class="all-airport-city-item" @mousedown.stop="selectCity()">
        {{ city | capitalize }}
    </li>
</template>

<script>
export default {
    props:{
        city:{
            type: String
        }
    },
    methods:{
        selectCity(){
            this.$emit('selectCity',this.city)
}
    }
}
</script>



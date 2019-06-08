<template>
<div>
    <slot>
    </slot>    
</div>
</template>

<script>
export default {
    props:{
        paxList:{
            type: [Array]
        },
        selectedPaxTypes:{
            type: Object
        }
    }
}
</script>

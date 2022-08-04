<template lang="">
    <div class="background" :style="bgUrl">
    
    <div class="slider">
        <div class="intro">
            <slot></slot>
        </div>
    </div>
</div>
</template>
<script>
export default {
    components:{
    
    },
    props:['bgUrl']
    
}
</script>
<style lang="">
    
</style>

<template lang="">
    <div class="background" style="min-height:81vh;" :style="bgUrl">
    
    <div class="slider"  style="min-height:81vh;">
        <div class="intro col-8 mx-auto">
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

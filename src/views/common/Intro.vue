<template lang="">
    <div class="background" :style="bgUrl">
    <NavBar />
    
    <div class="slider" style="height:75vh;">
        <div class="intro">
            <slot></slot>
        </div>
    </div>
</div>
</template>
<script>
import NavBar from './NavBar'
export default {
    components:{
        NavBar
    },
    props:['bgUrl']
    
}
</script>
<style lang="">
    
</style>
<template>
  <div  class="page-wrapper">
    <NavBar/>
    <router-view></router-view>
    <Footer></Footer>
    <NavMobile></NavMobile>
  </div>
</template>


<script>
import Footer from './views/common/Footer';
import NavMobile from './views/common/NavMobile';
import NavBar from './views/common/NavBar';
export default {
    components:{
    Footer,
    NavMobile,
    NavBar
    
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
/*
nav a.router-link-exact-active {
  color: #42b983;
}*/
.main-nav a.router-link-active{
  color: #8386ff !important;
}
.megamenu-container a{
  color: #fff !important;
}
</style>

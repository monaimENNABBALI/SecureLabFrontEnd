<template>
  <VueCookieAcceptDecline
  :debug="false"
  :disableDecline="false"
  :showPostponeButton="false"
  @clicked-accept="cookieClickedAccept"
  @clicked-decline="cookieClickedDecline"
  @clicked-postpone="cookieClickedPostpone"
  @removed-cookie="cookieRemovedCookie"
  @status="cookieStatus"
  elementId="myPanel1"
  position="bottom-left"
  ref="myPanel1"
  transitionName="slideFromBottom"
  type="floating"
  >
  <!-- Optional -->
  <template #postponeContent>&times;</template>

  <!-- Optional -->
  <template #message>
    Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site Web.
    <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
  </template>

  <!-- Optional -->
  <template #declineContent class="btn btn-danger">Refuser</template>

  <!-- Optional -->
  <template #acceptContent>Accepter!</template>
  
</VueCookieAcceptDecline>

  <div  class="page-wrapper">
    <NavBar/>
    <router-view></router-view>
    <Footer></Footer>
    <NavMobile></NavMobile>
  </div>

        

</template>


<script>
import Footer from '@/components/common/Footer';
import NavMobile from '@/components/common/NavMobile';
import NavBar from '@/components/common/NavBar';
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
export default {
    components:{
    Footer,
    NavMobile,
    NavBar,
    VueCookieAcceptDecline
    
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
#myPanel1 {
  margin: 1rem;
  font-size: large;
}
#myPanel1 button{
  margin: 1rem;
  padding: 0.7rem ;
  color: #fff;
  background-color: #00d3c5;
  border-color: #00d3c5;
  box-shadow: none;
  border-radius: 0.4rem;
}

</style>

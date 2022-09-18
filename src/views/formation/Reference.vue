<template lang="">
    <div class="background mb-5" style="min-height:81vh;background-image: url('/images/Formation/reference.jpg');" >
      
      <div class="slider"  style="min-height:81vh;">
          <div class="intro col-8 mx-auto">
            <div class="title">
                  <h3>By Securelabs</h3>
              </div>
              <div class="content">
                  <h4>Formation RGPD</h4>
              </div>
              <div class="action">
                  <a href="#contenu">Découvrez maintenant</a>
              </div>
          </div>
      </div>
  </div>
  <div class="row mt-4 pb-5">
                    <h1 class="title-color-primary py-4">Nos références : </h1><!-- End .title text-center mb-2 -->
                
                    <div id="carouselExampleDark" class="carousel carousel-dark slide col-12 col-md-10 col-lg-8 mx-auto "  data-bs-ride="carousel">
                        
                        <div class="carousel-inner d-flex align-items-center" style="height:50vh;">
                          <div class="carousel-item"  data-bs-interval="2000" v-for="(brand,index) in brands" :class="{ 'active': index === 0  }">
                            <img class="mx-auto" style="width:25rem;"  :src="brand.image" alt="">
                            <h1 class="mx-auto ">{{brand.title}}</h1>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                      </div>
                </div>
                <div class="row">
                <h3 class="heading-title title-color-primary pt-4">Vous êtes intéressé par une formation ? Demandez un devis !</h3>
                <div class="activity-box-icon-container">
                <img class="activity-box-icon mt-3" style="width:15%" src="images/AvezVousQuestion2.jpeg">
                <router-link class="btn btn-secondary mt-3 mb-5" :to="{name:'Contact'}">Contactez nos experts</router-link>
                </div>
            </div>
</template>
<script>
import Intro from '@/components/Intro'
import reference from './db.json'
export default {
    components:{
        Intro
    },
    data(){
        return{
            brands: reference.brands
        }
    }
    
}
</script>
<style lang="">
    
</style>
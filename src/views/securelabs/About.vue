<template lang="">
    <Intro bgUrl="background-image: url('images/about.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Découvrez SECURELABS</h3>
            </div>
            <div class="content">
                <h4>Pour votre conformité RGPD</h4>
            </div>
            <div class="action">
                <a href="#main">Découvrez Maintenant</a>
            </div>
    </Intro>
    <main class="main mt-6" id="main">
        <div class="page-content pb-0">
            <div class="container">
                <div class="col-lg-10 offset-lg-1 border-bottom pb-5">
                    <div class="about-text text-center mt-3">
                        <h1 class="title-color-primary py-4">A propos de nous</h1><!-- End .title text-center mb-2 -->
                        <p class="text-big">
                            La sécurisation des systèmes d’information et la  protection des données personnelles, sont aujourd’hui des sujets sine qua non dans la stratégie de chaque organisation. C’est à ce titre qu’un corpus législatif, réglementaire et normatif ont été définis et qu’il est en perpétuelle évolution.
                            <br/>
                            <br/>
                            SECURELABS est un cabinet de conseil spécialisé en sécurité de l’information et en protection des données personnelles. Créé en 2021 par Soufiane ZAHID, son objet est d’accompagner les organisations de toutes tailles et de tous secteurs dans la mise en place d’une réelle gouvernance en lien avec ses stratégies.
                            <br/>
                            <br/>
                            SECURELABS participe de manière active à la sécurisation de votre système d’information tout en démocratisant l’accès et la gestion des données personnelles par les entreprises. 
                            <br/>
                            <br/>
                            Conseil, accompagnement, formation, externalisation de la fonction de DPO et de RSSI… SECURELABS répond à tous vos besoins en matière de sécurité de l’information et de protection des données, de manière adaptée. 
                        </p>
                    </div><!-- End .about-text -->
                </div>
                <div class="row mt-4 border-bottom">
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
                <div class="row mt-4">
                    <h1 class="title-color-primary py-4">Nos Partenaires: </h1><!-- End .title text-center mb-2 -->
                    <div class="col-12 col-md-4 col-lg-4 mx-auto mb-5 py-5" style="height:30vh;"  v-for="partenaire in partenaires">
                        <a :href="partenaire.url" target="_blank" >
                            <img class="mx-auto" style="height:100%;"  :src="partenaire.image" alt="">
                            <p class="mx-auto text-big">{{partenaire.title}}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div><!-- End .page-content -->
    </main><!-- End .main -->
</template>
<script>
import Intro from '@/components/Intro'
import securelabs from './db.json'
export default {
    components:{
        Intro
    },
    data(){
        return{
            brands: securelabs.brands,
            partenaires:securelabs.partenaires
        }
    }
    
}
</script>
<style lang="">
    
</style>

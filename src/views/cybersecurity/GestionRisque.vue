<template lang="">

    <Intro bgUrl="background-image: url('images/cyber/gestionRisque.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Par Securelabs</h3>
            </div>
            <div class="content">
                <h4>Gestion des risques prestataires </h4>
            </div>
            <div class="action">
                <a href="#main-page">découvrez maintenant</a>
            </div>
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-3" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">

                    <div  class="col-10 mx-auto" >
                        <div id="first" class="heading pt-4 mt-0">
                            <h1 class="mb-5 title-color-primary" style="font-weight: 200;">Évaluation du niveau de maturité des prestataires en matière de cybersécurité et de conformité </h1>
                            <p class="activity-listing-subtitle">
                                Dans le cadre des relations contractuelles avec les prestataires sous-entendant souvent l’interconnexion des différents systèmes informatiques et le partage d’informations (parfois sensibles), il est important d’évaluer le niveau de maturité des prestataires ainsi que le respect des bonnes pratiques en matière de cybersécurité et de conformité pour éviter tout risque.
                            </p>

                        </div>
                        
                    </div>
                <div class="pb-4">
                    <div class="heading pt-4 pb-2 mt-0">
            			<h3 class="heading-title title-color-primary col-10 mx-auto" >SECURELABS vous accompagne dans la prévention et le pilotage des risques cyber que les prestataires peuvent incomber :   </h3>
                    </div>
                    <div class="container mt-4 pt-4">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4" v-for="methodologie in methodologies">
                                <div class="activity-item">
                                    <div class="row">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-icon-container">
                                                    <img class="activity-box-icon" :alt="methodologie.alt" :src="methodologie.image">
                                                </div>
                                            </div>
                                        <div class="activity-listing-subtitle">{{methodologie.content}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>                     
            </div><!-- End .page-content -->
    </main>
</template>
<script>
import Intro from '@/components/Intro'
export default {
    components:{
        Intro
    },
    data() {
        return {
            
            methodologies:[
                {
                    id:1,
                    content:"Identification de la nature et de la criticité du prestataire et des risques",
                    image:"images/cyber/gestionRisque/identify.png",
                    alt:"Icon made by www.flaticon.com"
                },
                {
                    id:2,
                    content:"Elaboration d’un plan d’assurance sécurité",
                    image:"images/cyber/gestionRisque/presentation.png",
                    alt:"Icon made by www.flaticon.com"
                },
                {
                    id:3,
                    content:"Elaboration d’un plan de traitement des risques liés aux prestataires",
                    image:"images/cyber/gestionRisque/presentation 2.png",
                    alt:"Icon made by www.flaticon.com"
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>

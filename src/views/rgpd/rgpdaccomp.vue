<template lang="">

 <Intro bgUrl="background-image: url('images/intro-rgpdaccomp.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>By Securelabs</h3>
            </div>
            <div class="content">
                <h4> Délégué à la protection des données externalisé</h4>
            </div>
            <div class="action">
                <a href="#main-page">Découvrez maintenant</a>
            </div>
        
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-4" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">

                    <div  class="col-10 mx-auto" >
                        <div id="first" class="heading pt-4 mt-0">
                            <h2 class="mb-5 title-color-primary" style="font-weight: 200;">La fonction de DPO, un gain de temps considérable dans sa gouvernance RGPD </h2>
                            <p class="activity-listing-subtitle">
                                                            Le Délégué à la protection des données (DPO) est le chef d’orchestre de la mise en conformité au RGPD : 
                            <ul class="list-box col-md-10 col-lg-9 mx-auto">
                                <li>Il accompagne le responsable du traitement dans la mise en oeuvre des différentes obligations imposées par le RGPD ; </li>
                                <li>Permet de bénéficier d’une flexibilité dans la mise en place du RGPD ; </li>
                                <li>Définit et assure le suivi du registre ainsi que de la cartographie des traitements de données ; </li>
                                <li>Sensibilise les collaborateurs ; </li>
                                <li>Assiste les métiers à la réalisation des analyses d’impact (PIA) ; </li>
                                <li>Gère les relations avec la CNIL ; </li>
                                <li>Réalise une veille juridique ; </li>
                                <li>Participe aux comités de direction ; </li>
                             </ul>
                                <p class="text-big">La fonction de DPO est obligatoire pour les responsables et sous-traitants : </p>
                            <ul class="list-box col-md-10 col-lg-9 mx-auto">
                                <li>du secteur public ; </li>
                                <li>ayant mis en œuvre un traitement à grande échelle exigeant un suivi régulier et systématique des personnes concernées ;</li>
                                <li>ayant mis en œuvre un traitement à grande échelle contenant des catégories particulières de données ; </li>
                            </ul>

                            </p>

                        </div>
                        
                    </div>
                <div class="pb-4">
                    <div class="heading pt-4 pb-2 mt-0">
            			<h3 class="heading-title title-color-primary">Le DPO externe - un allié de confiance </h3>
                        <p class="activity-listing-subtitle col-lg-10 mx-auto">
                                                    Le Délégué à la protection des données est chargé d’assurer le pilotage de la conformité RGPD. L’externaliser sera bénéfique pour votre entreprise, vous permettra de libérer des ressources et d’apporter une réelle valeur ajoutée via un accompagnement d’expert.
                                                    Pour assurer ses missions de DPO, SECURELABS dispose à la fois de compétences juridiques (protection des données) et de compétences en gouvernance de la sécurité des données.
                                                    La désignation du DPO sera donc obligatoire dans les cas cités ci-dessus et nous pouvons vous accompagner dans ce sens.

                                                    </p>
                    </div>
                    <div class="container mt-4 pt-4">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4" v-for="methodologie in methodologies">
                                <div class="activity-item">
                                    <div class="row">
                                        <a href="#" data-role="activity-box-link">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-icon-container">
                                                    <img class="activity-box-icon" :src="methodologie.image">
                                                    
                                                </div>
                                                <div class="activity-item-title" role="heading" aria-level="2">
                                                    {{methodologie.title}}
                                                </div>
                                            </div>
                                        </a>
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
           
        }
    },
    
}
</script>
<style lang="">
    
</style>

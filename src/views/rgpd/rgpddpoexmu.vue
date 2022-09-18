<template lang="">

    <Intro bgUrl="background-image: url('images/intro-rgpddpoexmu.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>By Securelabs</h3>
            </div>
            <div class="content">
                <h4> Réalisation d’Analyse d’Impact</h4>
            </div>
            <div class="action">
                <a href="#main-page">Découvrez maintenant</a>
            </div>
        
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-4" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">

                    <div  class="col-10 mx-auto" >
                        <div id="first" class="heading pt-4 mt-0">
                            <h1 class="mb-5 title-color-primary" style="font-weight: 200;">Une méthodologie d’analyse d’impact consacrée par la CNIL </h1>
                            <p class="activity-listing-subtitle">
                                 L’étude d’impact sur la vie privée (EIVP) est consacré par l’article 35 du RGPD qui consacre l’obligation de mener une étude d’impact sur la vie privée lorsque le traitement de données personnelles engendre ou est susceptible d’engendrer un risque élevé pour les droits et libertés des personnes concernées.
                                 La Commission nationale de l’informatique et des libertés (CNIL) a publié une liste référentielle recensant l’ensemble des traitements de données pour lesquels une analyse d’impact est obligatoire.
                                 A ce titre, SECURELABS mettra à disposition son expertise conjointe en protection des données et en SSI pour vous accompagner dans cette démarche. Cette démarche reposera sur une analyse documentaire du traitement qui nous va nous permettre d’étudier les 4 étapes composant une analyse d’impact : 

                            </p>

                        </div>
                        
                    </div>
                <div class="pb-4">
                    <div class="heading pt-4 pb-2 mt-0">
            			<h3 class="heading-title title-color-primary">Découvrez nos services audit</h3>
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
            
            methodologies:[
                {
                    id:1,
                    title:"Description",
                    content:"Description détaillée du traitement mis en œuvre sur les aspects techniques et organisationnel (contexte, finalités données traitées, supports, logiciels, matériels, etc…)",
                    image:"images/Description.png"
                },
                {
                    id:2,
                    title:"Analyse juridique",
                    content:"Évaluation de la conformité juridique du traitement et du respect des principes fondamentaux de la protection de la vie privée. ",
                    image:"images/juridique.png"
                },
                {
                    id:3,
                    title:" Analyse technique et organisationnelle",
                    content:"Évaluation des failles techniques et organisationnelles portant sur votre organisation. ",
                    image:"images/analyse.png"
                },
                {
                    id:4,
                    title:" ",
                    content:"",
                    image:""
                },
                {
                    id:5,
                    title:" Analyse des risques",
                    content:"Évaluation et appréciation des risques pesant sur la vie privée des personnes pour chaque type de risque (accès illégitime aux données, modification non-désirée et disparition des données).Un plan d’action corrective vous sera remis à l’issue des analyses recensant les mesures complémentaires à mettre en œuvre pour diminuer les risques.Suite à cela, il conviendra d’effectuer une validation finale pour évaluer l’acceptabilité des risques résiduels, des mesures choisies et du plan d’action.",
                    image:"images/risques.png"
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>

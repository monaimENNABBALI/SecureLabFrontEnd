<template lang="">
    <Intro bgUrl="background-image: url('images/homeIntro.jpg');">
             <!-- we will get this using -->
            <div class="content mb-2 col-10 mx-auto">
                <h4>Faites appels à des spécialistes pour vous accompagner dans vos stratégies cybersécurité et conformité</h4>
            </div>
            <div class="title">
                <h3>SECURELABS vous accompagne dans la sécurisation de votre système d’information contre les cybermenaces et vous garanti une consolidation de vos référentiels de conformité (RGPD, CCPA, SAPIN 2, LPM, NIS, NIS 2, PCI-DSS, DORA, ISO 27001, SOLVENCY, BALE…). </h3>
            </div>
            <div class="action">
                <a href="#choiceUs">découvrez maintenant</a>
            </div>
    </Intro>


     <main id="main" style="background-color: #f5f5f5;">
                <div id="choiceUs" class="pb-4" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">
                    <div class="heading pt-4 pb-2 mt-0">
            			<h3 class="heading-title title-color-primary" >NOTRE METHODOLOGIE </h3>
            			<!-- <p class="heading-cat" style="color:#fff;" >La société Securelabs est reconnue comme experte dans le domaine de la protection des données à caractère personnel.
                            Depuis son origine, elle conseille les responsables de traitement et les DPO dans leur stratégie de mise en conformité RGPD.</p>
            		-->
                    </div>
                    <div class="container mt-4 pt-4">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4" v-for="methodologie in methodologies">
                                <div class="activity-item">
                                    <div class="row">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-icon-container">
                                                    <img  class="activity-box-icon"  :alt="methodologie.alt"
                                                        :src="methodologie.image">
                                                </div>
                                                <div class="activity-item-title" role="heading" aria-level="2">
                                                    {{methodologie.title}}
                                                </div>
                                            </div>
                                        <div class="activity-listing-subtitle">{{methodologie.content}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            
            <div class="row">
                    <div class="heading">
	            		<!-- <p class="heading-cat">favourite from every category</p> -->
	            		<h3 class="heading-title title-color-primary pt-4">SECURELABS intervient dans de nombreux secteurs d’activité : </h3>
	            	</div>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4" v-for="activity in activities">
                                <div class="activity-item">
                                                        
                                    <div class="row">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-image-container">
                                                    <img class="activity-box-image" :src="activity.image">

                                                </div>
                                                <div class="activity-item-title" role="heading" aria-level="2">
                                                    {{activity.title}}
                                                </div>


                                            </div>
                                    </div>
                                
                            
                                </div>
                            </div>
                        
                        </div>
                    </div>
            </div>
            <div class="row">
                <h3 class="heading-title title-color-primary pt-4">Pour tout renseignement sur nos audits RGPD...</h3>
                <div class="activity-box-icon-container">
                <img class="activity-box-icon mt-3" style="width:15%" src="images/AvezVousQuestion2.jpeg">
                <router-link class="btn btn-secondary mt-3 mb-5" :to="{name:'Contact'}">Contactez nos experts</router-link>
                </div>
            </div>
        </main>
</template>
<script>
import Intro from '@/components/Intro'
export default {
    components:{
        Intro
    },
    data(){
        return{
            activities:[
                {
                    id:1,
                    title:'Collectivités Territoriales',
                    image:'images/activity/territorial.jpg'
                },
                {
                    id:2,
                    title:'Banque et finance',
                    image:'images/activity/finance.jpg'
                },
                
                {
                    id:3,
                    title:'Enseignement',
                    image:'images/activity/enseignement.jpg'
                },
                {
                    id:4,
                    title:'Santé/e-Santé/ Médico-Social',
                    image:'images/activity/health.jpg'
                },
                {
                    id:5,
                    title:'Assurance/Mutuelle',
                    image:'images/activity/asurance.jpg'
                },
                {
                    id:6,
                    title:'Transport public/Aéroportuaire',
                    image:'images/activity/transport.png'
                }
            ],
            methodologies:[
                {
                    id:1,
                    title:"Apprécier la réalité opérationnelle",
                    content:"et l’écosystème de chaque client pour déployer les meilleures stratégies et anticiper les besoins.",
                    image:"images/home/reality.png",
                    alt:"Icon made by Freepik from www.flaticon.com"
                },
                {
                    id:2,
                    title:"Être réaliste et pragmatique",
                    content:"dans notre approche pour proposer des solutions opérationnelles adaptées aux clients via la combinaison de nos expertises juridiques, techniques et de notre expérience opérationnelle.",
                    image:"images/home/pragmatique.png",
                    alt:"Icon made by Freepik from www.flaticon.com"

                },
                {
                    id:3,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"images/home/sengager.png",
                    alt:"Icon made by Muhammad_Usman from www.flaticon.com"

                },
            ]
        }
    }
    
}
</script>
<style lang="" scoped>
</style>

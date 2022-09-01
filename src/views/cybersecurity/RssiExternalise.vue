<template lang="">
    <Intro bgUrl="background-image: url('images/homeIntro.jpg');">
             <!-- we will get this using -->
            <div class="content mb-2 col-10 mx-auto">
                <h4>Par Securelabs</h4>
            </div>
            <div class="title">
                <h3>RSSI externalisé et assistance RSSI</h3>
            </div>
            <div class="action">
                <a href="#first">découvrez maintenant</a>
            </div>
    </Intro>


     <main style="background-color: #f5f5f5;">
                <div id="first" class="heading pt-4 pb-2 mt-0 col-10 mx-auto">
                    <div class="activity-box-icon-container mx-auto">
                        <img class="activity-box-icon" style="width:15%" src="images/icon-test.png">
                    </div>
                    <div class="heading-title" style="color: #ff0505;">
                        Fonction du RSSI externe
                    </div>
                    <div class="activity-listing-subtitle  col-6 text-center mx-auto">
                        le RSSI externe est le garant de la Sécurité des Systèmes d'information. En tant que responsable de la sécurité, il apporte une expertise et une culture de la sécurité et pilote l’amélioration continue de la sécurité.     
                    </div>
                </div>
                <div class="heading pt-4 pb-2 mt-0 col-10 mx-auto">
                    <div class="activity-box-icon-container mx-auto">
                        <img class="activity-box-icon" style="width:15%" src="images/icon-test.png">
                    </div>
                    <div class="heading-title" style="color: #ff0505;">
                        Mission du RSSI externe
                    </div>
                    <div class="activity-listing-subtitle  col-6 text-center mx-auto">
                        En tant que garant de la sécurité, le RSSI endosse plusieurs rôles *                    </div>
                </div>
                    
                    <div class="container">
                        <div class="row mx-auto">
                            <div class="col-sm-12 col-md-6 col-lg-3" v-for="rssiExtern in rssiExterns">
                                <div class="activity-item">
                                                        
                                    <div class="row">
                                        <a href= "#" class="cursor-default" data-role="activity-box-link">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-icon-container">
                                                    <img class="activity-box-icon" :src="rssiExtern.image">

                                                </div>
                                                <div class="activity-item-title" role="heading" aria-level="2">
                                                    {{rssiExtern.title}}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                
                            
                                </div>
                            </div>
                        
                        </div>
            
                    </div>
                    <div class="d-flex align-items-center p-4" style=" background-image: url('images/methodologie.jpg');">
                        <div  class="col-10 p-4 m-4" >
                            <div class="text-big text-left">
                                SECURELABS vous accompagne en tant que “référent sécurité”. L’objectif est d’assurer la fonction de RSSI, pour votre compte, à temps partiel ou à temps complet ! 
                                <br><br>
                                <b>
                                    Cet accompagnement peut présenter plusieurs avantages : 
                                </b>
                                <ul style="padding-left: 2rem;list-style:inside;">
                                    <li>Pertinent pour les petites structures</li>
                                    <li>Pratique dans l’attente du recrutement d’un RSSI</li>
                                    <li>Optimisation des coûts pour initier les projets cybersécurité</li>
                                    <li>Planification ergonomique des besoins et des interventions</li>
                                </ul>
                                <br>
                                Cet accompagnement permet d’établir un socle de sécurité (processus, organisation, maturité, planification…), en attendant une stratégie mieux ficelée ou des moyens supérieurs. Des profils pour piloter la gouvernance de la cybersécurité sont fréquemment sollicités, d’autres plus techniques peuvent soutenir les équipes pour le déploiement de mesures de sécurité.
                                <br>
                                <br>
                                <b>
                                    Accompagnement du RSSI
                                </b>
                                <br>
                                SECURELABS accompagne également votre RSSI dans l’objectif de le guider, de l’assister et/ou, éventuellement, de le monter en compétence dans le contexte d’une prise de fonction par exemple.
                                <br>
                                <br>
                                <b>
                                    L’accompagnement du RSSI se compose d’une présence physique dans le but : 
                                </b>

                                <div class="row mt-4 ml-5 pl-5 text-center">
                                    <div class="col-sm-12 col-md-6 col-lg-2" v-for="accompagnement in accompagnements">
                                        <div class="activity-item">
                                            <div class="row">
                                                <a href="#" data-role="activity-box-link">
                                                    <div class="col-lg-12 p-0">
                                                        <!-- activity Image, Name & Subtitle (everyone) -->
                                                        <div class="activity-box-icon-container">
                                                            <img class="activity-box-icon" :src="accompagnement.image">
                                                        </div>
                                                        <!-- <div class="activity-item-title" role="heading" aria-level="2">
                                                            {{accompagnement.title}}
                                                        </div> -->
                                                    </div>
                                                </a>
                                                <div class="activity-listing-subtitle">{{accompagnement.content}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
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
            rssiExterns:[
                {
                    id:1,
                    title:'Définition de la stratégie de maîtrise des risques et pilotage des plans d’actions sécurité ',
                    image:"images/cyber/icons/physique.png"
                },
                {
                    id:2,
                    title:'Actions de sensibilisation et de formation ',
                    image:"images/cyber/icons/physique.png"
                },
                {
                    id:3,
                    title:'Lanceur d’alerte en interne ',
                    image:"images/cyber/icons/physique.png"
                },
                {
                    id:4,
                    title:'Actions de contrôle et reporting auprès de la direction ',
                    image:"images/cyber/icons/physique.png"
                },
                {
                    id:5,
                    title:'Elaboration et pilotage des tableaux de bord',
                    image:"images/cyber/icons/physique.png"
                },
                {
                    id:6,
                    title:'Rédaction de la documentation sécurité ',
                    image:"images/cyber/icons/physique.png"
                },
                {
                    id:7,
                    title:'Mise en oeuvre des comités de pilotage sécurité ',
                    image:"images/cyber/icons/physique.png"
                },
            ],
            accompagnements:[
                {
                    id:1,
                    content:"D’assurer des échanges et des entretiens avec votre RSSI mais également un suivi personnalisé des projets en cours ;",
                    image:"images/icon-test.png"
                },
                {
                    id:2,
                    content:"De soutenir la rédaction de la documentation sécurité ;",
                    image:"images/icon-test.png"
                },
                {
                    id:3,
                    content:"De soutenir la mise en oeuvre d’un comité de pilotage sécurité ;",
                    image:"images/icon-test.png"
                },
                {
                    id:4,
                    content:"De conseiller, assister, sensibiliser et former le RSSI dans le cadre de ses missions ; ",
                    image:"images/icon-test.png"
                },
                {
                    id:5,
                    content:"D’assurer un suivi de projet avec la Haute Direction ; ",
                    image:"images/icon-test.png"
                },
            ]
        }
    }
    
}
</script>
<style lang="" scoped>
    
</style>

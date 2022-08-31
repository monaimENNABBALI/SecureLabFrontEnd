<template lang="">

    <Intro bgUrl="background-image: url('images/cyber/repriseActivity.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>By Securelabs</h3>
            </div>
            <div class="content">
                <h4>Certification ISO27001</h4>
            </div>
            <div class="action">
                <a href="#main-page">découvrez maintenant</a>
            </div>
        
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-3" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">
                <div class="pb-4">
                    <div class="container mt-4 pt-4">
                        <div class="row d-flex justify-content-center">
                            <div class="col-sm-12 col-md-8 col-lg-6" v-for="methodologie in methodologies">
                                <div class="activity-item">
                                    <div class="row">
                                        <a href="#" data-role="activity-box-link">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-icon-container">
                                                    <img class="activity-box-icon" style="width:20%;" :src="methodologie.image">
                                                </div>
                                                <div class="activity-item-title col-10 mx-auto" style="min-height:7rem;line-height: normal;" role="heading" aria-level="2">
                                                    {{methodologie.title}}
                                                </div>
                                            </div>
                                        </a>
                                        <div class="activity-listing-subtitle col-10 mx-auto text-justify">{{methodologie.content}}</div>
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
                    title:"En quoi consiste la certification ISO27001 ? ",
                    content:"La certification ISO27001 détaille la méthodologie de mise en place d’un Système de Management de la Sécurité de l’information (SMSI). C’est un standard international de sécurité de l’information évoquant des recommandations relatives aux bonnes pratiques de gestion de la sécurité de l’information.La certification ISO 27001 permet à un organisme d’obtenir la validation de ses bonnes pratiques en la matière par un tiers reconnu, et d’en faire la communication auprès de l’ensemble de ses parties prenantes, notamment ses clients et prospects. Il y a donc un réel enjeu de sécurité d’une part, et business d’autre part. Également, la certification permet d’inspirer la confiance des clients, des prestataires et des fournisseurs.",
                    image:"images/icon-test.png"
                },
                {
                    id:2,
                    title:" SECURELABS vous accompagne durant chaque phase du projet et vous aide à maximiser les chances d’obtention de cette certification.",
                    content:"Dans la démarche de certification ISO27001, nous proposons un état des lieux afin d’identifier les écarts entre votre SMSI actuel et les objectifs à atteindre, énoncés dans la norme ISO27001, afin de vous proposer un plan d’actions détaillé et pratique.SECURELABS évaluera les 14 thématiques sécurité présentes dans la norme ISO27002 et vous assistera dans l’obtention de votre certification. L’accompagnement ISO 27001 peut se conclure par un audit à blanc pour évaluer le degré de conformité de mise en œuvre.",
                    image:"images/icon-test.png"
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>

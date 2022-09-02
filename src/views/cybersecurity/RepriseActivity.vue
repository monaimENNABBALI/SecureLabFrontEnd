<template lang="">

    <Intro bgUrl="background-image: url('images/cyber/repriseActivity.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Par Securelabs</h3>
            </div>
            <div class="content">
                <h4>Continuité et reprise d’activité </h4>
            </div>
            <div class="action">
                <a href="#main-page">découvrez maintenant</a>
            </div>
        
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-3" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">

                    <div  class="col-10 mx-auto" >
                        <div id="first" class="heading pt-4 mt-0">
                            <h1 class="mb-5 title-color-primary" style="font-weight: 600;">Dans quelles mesures réaliser un plan de continuité d’activité (PCA) ou plan de reprise d’activité (PRA) ?  </h1>
                            <p class="activity-listing-subtitle">
                                Une organisation peut connaître une panne ou un arrêt de son activité suite à un incident quelconque. L’organisation devra alors mettre en œuvre et déployer des mesures techniques et organisationnelles afin de reprendre ou de continuer l’activité là où elle s’est arrêtée.
                                Il sera donc nécessaire d’anticiper ces situations probables, en amont, via la rédaction d’un plan de reprise d’activité (PRA)  ou d’un plan de continuité d’activité (PCA) afin de minimiser l’indisponibilité et les impacts y afférents.
                            </p>
                        </div>
                        
                    </div>
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
                                                <div class="activity-item-title" role="heading" aria-level="2">
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
                    title:"Le Plan de Reprise d’Activité (PRA)",
                    content:"Un PRA est défini dans le but de prévoir, en urgence,  la restauration des systèmes, des applications et données y afférentes et de limiter la perte de données. Il convient dans cet exercice de déterminer le bon équilibre entre le coût des pertes potentielles et celui des solutions mises en place.",
                    image:"images/cyber/repriseActivity/1.png"
                },
                {
                    id:2,
                    title:"le Plan de Continuité d’Activité (PCA)",
                    content:"Un PCA est défini dans le but de basculer l’exploitation de systèmes, applications et données y afférentes  dans un autre environnement sans perte de données et avec une indisponibilité des services très courte. Il vise à garantir la continuité de l’activité pendant ou après un sinistre et d’éviter toute perte de données.SECURELABS vous accompagne dans l’élaboration d’une stratégie visant à la détermination d’une solution adaptée à vos besoins eu égard à votre budget et à votre réalité opérationnelle ! ",
                    image:"images/cyber/repriseActivity/2.png"
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>

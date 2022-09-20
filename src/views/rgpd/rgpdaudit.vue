<template lang="">

     <Intro bgUrl="background-image: url('images/intro-rgpdaudit.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>By Securelabs</h3>
            </div>
            <div class="content">
                <h4>Les audits de conformité RGPD </h4>
            </div>
            <div class="action">
                <a href="#main-page">Découvrez maintenant</a>
            </div>
        
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-3" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">

                    <div  class="col-10 mx-auto" >
                        <div id="first" class="heading pt-4 mt-0">
                            <h1 class="mb-5 title-color-primary" style="font-weight: 200;">Dans quel cadre mettre en œuvre un audit de conformité RGPD ? </h1>
                            <p class="activity-listing-subtitle">
                                 Un organisme souhaitant mettre en œuvre une stratégie de gouvernance des données personnelles va rencontrer la nécessité d'auditer l’ensemble des traitements de données présents dans sa structure.
                               La réglementation et les bonnes pratiques étant particulièrement strictes, l’audit de conformité vous permettra de mesurer votre niveau de conformité tout en maintenant une cartographie des traitements de données claire et limpide.
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
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-icon-container">
                                                    <img class="activity-box-icon" :alt="methodologie.alt" :src="methodologie.image">
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
                    title:"Audit de maturité RGPD",
                    content:"Il s’agira d’analyser et de mesurer le niveau de maturité des contrôles et des process de sécurité en place dans votre organisation. L’idée étant d’élaborer un rapport sur les écarts de maturité de votre organisation ainsi que les mesures à déployer pour les réduire.",
                    image:"images/rgpd/audit/1.png",
                    alt:"Icon made by surang from www.flaticon.com"
                },
                {
                    id:2,
                    title:"Audit de Site Web",
                    content:"Analyse des vulnérabilités- Gestion des cookies et du consentement -Analyse des CGV/CGU -Analyse de conformité eu égard aux préconisations de la CNIL",
                    image:"images/rgpd/audit/2.png",
                    alt:"Icon made by Freepik from www.flaticon.com"
                },
                {
                    id:3,
                    title:"Audit des sous-traitants",
                    content:"Dans le cadre du RGPD, un responsable de traitement doit se prémunir contre les risques et la conformité liés à ses sous-traitants. SECURELABS audit vos sous-traitant en analysant un certain nombre de paramètres dont : Contrôle des risques liés aux fuites de données - Contrôle de sa réputation - Contrôle des risques liés aux fuites de données  - Contrôle des déclarations et des autorisations ",
                    image:"images/rgpd/audit/3.png",
                    alt:"Icon made by Bert Flint from www.flaticon.com"
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>

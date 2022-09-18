<template lang="">

    <Intro bgUrl="background-image: url('images/cyber/auditOrganisationnel.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Par Securelabs</h3>
            </div>
            <div class="content">
                <h4>Audit organisationnel et physique </h4>
            </div>
            <div class="action">
                <a href="#main-page">découvrez maintenant</a>
            </div>
        
    </Intro>
    <main>
        <div id="main-page" class="page-content pt-3" style="min-height: 90vh; background-image: url('images/methodologie.jpg');">

                    <div  class="col-10 mx-auto" >
                        <div id="first" class="heading pt-4 mt-0">
                            <h1 class="mb-5 title-color-primary" style="font-weight: 250;">L’importance de réaliser un audit de sécurité organisationnel et physique : </h1>
                            <p class="activity-listing-subtitle">
                                La protection et la sécurisation physique d’un site constitue un élément fondamental dans la protection et la sécurisation de vos informations et se révèle être une des meilleures pratiques de sécurité de l’information.
                                SECURELABS réalise un audit à la fois global et précis sur l’écosystème de l’organisme (organisation, ressources, documentation et dispositif en place). A fortiori, l’audit reposera sur une méthodologie que nous utilisons afin de mesurer les processus et les contrôles encadrant la gestion de la sécurité de l’information et la conformité aux lois, règlements, aux normes de sécurité mais également aux recommandations de l’ANSSI en la matière.
                            </p>

                        </div>
                        
                    </div>
                <div class="pb-4">
                    <div class="heading pt-4 pb-2 mt-0">
            			<h3 class="heading-title title-color-primary">SECURELABS utilise une méthodologie d’audit reposant sur trois expertises distinctes :  </h3>
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
                    title:"Une section organisationnelle",
                    content:"Dans cette section, il s’agira d’analyser et de mesurer le niveau de maturité des contrôles et des process de sécurité en place dans votre organisation. L’idée étant d’élaborer un rapport sur les écarts de maturité de votre organisation ainsi que les mesures à déployer pour les réduire.",
                    image:"images/cyber/auditOrganisationel/organisationnel.png"
                },
                {
                    id:2,
                    title:"Une section technique",
                    content:"Dans cette section, il s’agira d’analyser et de mesurer le niveau de sécurité des implémentations techniques face aux éventuelles tentatives d’intrusions informatiques externes.",
                    image:"images/cyber/auditOrganisationel/technique.png"
                },
                {
                    id:3,
                    title:"Une section physique",
                    content:"Dans cette section, il s’agira d’analyser et de mesurer le niveau de protection physique de votre site par des visites physiques, permettant de découvrir les vulnérabilités existantes et d’élaborer un plan stratégique de résolution de celles-ci.",
                    image:"images/cyber/auditOrganisationel/physique.jpeg"
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>

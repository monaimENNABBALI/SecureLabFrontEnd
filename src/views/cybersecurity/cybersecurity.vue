<template lang="">

    <Intro bgUrl="background-image: url('images/cyber.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>By Securelabs</h3>
            </div>
            <div class="content">
                <h4><i>Service de PIA / AIPD</i></h4>
            </div>
            <div class="action">
                <a href="#first">discover now</a>
            </div>
    </Intro>
    <main>
        <div class="page-content">

                    <div  class="mt-6 col-10 mx-auto" >
                        <div id="first" class="heading pt-4">
                            <h1 class="mb-5">Évaluer la vraisemblance et la gravite des risques & définir un plan d'actions</h1>
                            <h3 class="mb-3">Les audits de sécurité dans le cadre du RGPD</h3>
                            <p class="heading-cat">
                                L’article 35 du RGPD prévoit la conduite d’une analyse d’impact relative à la protection des données, lorsqu’un traitement de données personnelles est susceptible d’engendrer un risque élevé pour les droits et libertés des personnes concernées.
                                <br/>
                                <br/>
                                La CNIL a publié une liste de traitements de données pour lesquels une analyse d’impact est obligatoire, que vous pouvez télécharger dans la rubrique ci-dessous
                            </p>

                        </div>
                        
                    </div>
                    <div class="row justify-content-center" style="background-color: #ecedee;">
                        <div class="heading pt-4 col-10 mx-auto">
                            <h1 class="mb-3">Si vous devez réaliser une analyse d’impact (PIA) ...                            </h1>
                            <p class="heading-cat">
                                Celle-ci doit être idéalement réalisée AVANT la mise en oeuvre du traitement de données concerné. Un PIA comporte 4 rubriques essentielles qui vous permettront d’évaluer les risques résiduels relatifs à la mise en oeuvre du traitement et d’aider le responsable des traitements dans sa prise de décision.
                            </p>

                        </div>
                        <div class="row col-10 col-auto">
                            <div class="col-lg-6 col-12">
                                <div class="icon-box icon-box-sm text-center p-5">
                                    <span class="icon-box-icon mb-5">
                                        <i class="icon-puzzle-piece" style="font-size: 10rem;"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title" style="font-size: 3.5rem;">Description</h3><!-- End .icon-box-title -->
                                        <p style="font-size: 1.6rem;">Tout d’abord, commencez par décrire de façon détaillée le traitement concerné avec ses aspects techniques et organisationnels.</p>
                                    </div><!-- End .icon-box-content -->
                                </div><!-- End .icon-box -->
                            </div><!-- End .col-lg-4 col-sm-6 -->
                            
                            <div class="col-lg-6 col-12">
                                <div class="icon-box icon-box-sm text-center p-5">
                                    <span class="icon-box-icon mb-5">
                                        <i class="icon-star-o" style="font-size: 10rem;"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title" style="font-size: 3.5rem;">Evaluation juridique</h3><!-- End .icon-box-title -->
                                        <p style="font-size: 1.6rem;">Evaluez la conformité juridique du traitement concerné par rapport aux obligations nées du règlement sur la protection des données.</p>
                                    </div><!-- End .icon-box-content -->
                                </div><!-- End .icon-box -->
                            </div><!-- End .col-lg-4 col-sm-6 -->
    
                            <div class="col-lg-6 col-12">
                                <div class="icon-box icon-box-sm text-center p-5">
                                    <span class="icon-box-icon mb-5">
                                        <i class="icon-info-circle" style="font-size: 10rem;"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title" style="font-size: 3.5rem;">Evaluation technique</h3><!-- End .icon-box-title -->
                                        <p style="font-size: 1.6rem;">Déterminez les failles potentielles liées à l’organisation structurelle du SI et évaluez la gravité et la vraisemblance des évènements redoutés.
                                            </p> 
                                    </div><!-- End .icon-box-content -->
                                </div><!-- End .icon-box -->
                            </div><!-- End .col-lg-4 col-sm-6 -->
                            
                            <div class="col-lg-6 col-12">
                                <div class="icon-box icon-box-sm text-center p-5">
                                    <span class="icon-box-icon mb-5">
                                        <i class="icon-info-circle" style="font-size: 10rem;"></i>
                                    </span>
                                    <div class="icon-box-content">
                                        <h3 class="icon-box-title" style="font-size: 3.5rem;">Evaluation organisationnelle</h3><!-- End .icon-box-title -->
                                        <p style="font-size: 1.6rem;">N’oubliez pas de rechercher les failles organisationnelles, source des fuites de données à origine humaine (salariés, intervenants, prestataires…)</p> 
                                    </div><!-- End .icon-box-content -->
                                </div><!-- End .icon-box -->
                            </div><!-- End .col-lg-4 col-sm-6 -->
                        </div>
                    </div>                    
            </div><!-- End .page-content -->
    </main>
</template>
<script>
import Intro from '../common/Intro'
export default {
    components:{
        Intro
    }
    
}
</script>
<style lang="">
    
</style>
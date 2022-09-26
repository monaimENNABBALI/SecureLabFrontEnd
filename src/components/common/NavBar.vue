<template lang="">
    <header class="header" id="page-nav" >
        <div class="header-top">

            <div class="header-right my-2">
                <ul class="top-menu">
                    <li>
                        <a href="#">Links</a>
                        <ul>
                            <li><a href="tel:+33(0)650729813"><i class="icon-phone"></i>Appelez: +33(0)650729813</a></li>
                            <li><router-link :to="{name:'Contact'}">Contactez nous</router-link></li>
                        </ul>
                    </li>
                </ul><!-- End .top-menu -->
            </div><!-- End .header-right -->
        </div><!-- End .header-top -->

        <div class="header-middle sticky-header"  >
            <div class="header-left">
                <button class="mobile-menu-toggler">
                    <span class="sr-only">Toggle mobile menu</span>
                    <i class="icon-bars"></i>
                </button>

                <router-link :to="{name: 'Home'}" class="logo">
                    <img src="images/logo2.png" alt="Logo">
                </router-link>
            </div><!-- End .header-left -->

            <div class="header-center">
                <nav class="main-nav">
                    <ul class="menu sf-arrows" style="max-width: 90%;display: inline-flex;">
                        <li class="megamenu-container">
                            <router-link :to="{name: 'Home'}">Home</router-link>
                        </li>
                            <!-- Cybersécurité -->
                    
                        <!-- Cybersécurité -->
                        <li>
                            <router-link :to="{name: 'AuditOrganisationnel'}" class="sf-with-ul">Cybersécurité</router-link>
                            <ul>
                                <li><router-link :to="{name: 'AuditOrganisationnel'}">Audit organisationnel et physique </router-link></li>
                                <li><router-link :to="{name: 'AnalyseRisque'}">Analyse de risques cybersécurité</router-link></li>
                                <li><router-link :to="{name: 'GestionRisque'}"> Gestion des risques prestataires</router-link></li>
                                <li><router-link :to="{name: 'RepriseActivity'}">Continuité et reprise d’activité</router-link></li>
                                <li><router-link :to="{name: 'PolitiqueSecurity'}">Politique de sécurité</router-link></li>
                                <li><router-link :to="{name: 'RssiExternalise'}">RSSI externalisé et assistance RSSI</router-link></li>
                                <li><router-link :to="{name: 'Certification'}">Certification ISO27001</router-link></li>
                            </ul>
                        </li>
                        
                        <!-- Services -->
                        <li>
                            <router-link :to="{name: 'rgpdaudit'}" class="sf-with-ul">Rgpd</router-link>
                            <ul>
                                <li><router-link :to="{name: 'rgpdaudit'}">Audits de conformité RGPD</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoex'}">Cartographie des traitements de données</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoexmu'}">Réalisation d’Analyse d’Impact</router-link></li>
                                <li><router-link :to="{name: 'rgpdaccomp'}">Délégué à la protection des données externalisé</router-link></li>
                                
                            </ul>
                        </li>
                            <!-- Formation -->
                        <li >
                            <router-link :to="{name: 'FormationCyber'}" class="sf-with-ul">Formation</router-link>
                            <ul>
                                <li><router-link :to="{name: 'FormationCyber'}">Cybersécurité</router-link></li>
                                <li><router-link :to="{name: 'FormationRgpd'}">RGPD</router-link></li>
                                <li><router-link :to="{name: 'FormationReference'}">Reference</router-link></li>
                            </ul>
                            
                        </li>
                        
                        
                        <!-- about -->
                        <li class="megamenu-container">
                            <router-link :to="{name:'About'}">Securelabs</router-link>
                            
                        </li>
                        
                        <!-- Blog -->
                        <!-- <li  class="megamenu-container">
                            <router-link :to="{name:'Blog'}">Actu</router-link>
                        </li> -->

                    </ul><!-- End .menu -->
                </nav><!-- End .main-nav -->
            </div>
    
        </div><!-- End .header-middle -->
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
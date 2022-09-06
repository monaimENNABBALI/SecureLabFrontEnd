<template lang="">
    <!-- Mobile Menu -->
    <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

    <div class="mobile-menu-container">
        <div class="mobile-menu-wrapper">
            <span class="mobile-menu-close"><i class="icon-close"></i></span>
            <nav class="mobile-nav">
                <ul class="mobile-menu">
                    <li >
                            <router-link :to="{name: 'Home'}">Home</router-link>
                        </li>
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
                            <router-link :to="{name: 'rgpdaudit'}">Rgpd</router-link>
                            <ul>
                                <li><router-link :to="{name: 'rgpdaudit'}">Audits de conformité RGPD</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoex'}">Cartographie des traitements de données</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoexmu'}">Réalisation d’Analyse d’Impact</router-link></li>
                                <li><router-link :to="{name: 'rgpdaccomp'}">Délégué à la protection des données externalisé</router-link></li>
                            
                            </ul>
                        </li>
                            <!-- Formation -->
                        <li>
                            <router-link :to="{name: 'FormationCyberSecurity'}">Formation</router-link>
                            <ul>
                                <li><router-link :to="{name: 'FormationCyberSecurity'}">Cybersécurité</router-link></li>
                                <li><router-link :to="{name: 'Formationrgpd'}">RGPD</router-link></li>
                            </ul>
                        </li>
                        <!-- about -->
                        <li >
                            <router-link :to="{name:'About'}">Securelabs</router-link>
                            <ul>
                                
                               <li><router-link :to="{name: 'qui'}">Qui sommes nous?</router-link></li>
                               <li><router-link :to="{name: 'ref'}">Références</router-link></li>
                               <li><router-link :to="{name: 'part'}">Partenaires</router-link></li>
                             
                            </ul>
                        </li>
                        <!-- Blog -->
                        <li  >
                            <router-link :to="{name:'Blog'}">Blog</router-link>                           
                        </li>
                </ul>
            </nav><!-- End .mobile-nav -->

            <div class="social-icons">
                <a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
                <a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
                <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
                <a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
            </div><!-- End .social-icons -->
        </div><!-- End .mobile-menu-wrapper -->
    </div><!-- End .mobile-menu-container -->
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
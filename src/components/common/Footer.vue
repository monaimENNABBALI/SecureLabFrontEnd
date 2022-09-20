<template lang="">
    <footer class="footer">
        	<div class="footer-middle border-0">
	            <div class="container">
	            	<div class="row">
					
	            		<div class="col-sm-6 col-lg-4">
	            			<div class="widget widget-about">
								<img src="images/logo2.png" style="width: 10rem;" class="footer-logo mx-auto" alt="Footer Logo">
	            				<p>Faites appels à des spécialistes pour vous accompagner dans vos stratégies cybersécurité et conformité. </p>
								<div class="social-icons">
									<a href="https://www.linkedin.com/in/soufiane-zahid-a1baa0116/" class="social-icon" target="_blank" title="Linkedin"><i class="icon-linkedin"></i></a>
									<a href="https://twitter.com/SECURELABS_" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
                        		</div><!-- End .soial-icons -->
	            			</div><!-- End .widget about-widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-2">
	            			<div class="widget">
	            				<h4 class="widget-title">CYBERSÉCURITÉ</h4><!-- End .widget-title -->
	            				<ul class="widget-list">
	            					<li><router-link :to="{name: 'AuditOrganisationnel'}">Audit organisationnel et physique </router-link></li>
	            					<li><router-link :to="{name: 'AnalyseRisque'}">Analyse de risques cybersécurité</router-link></li>
	            					<li><router-link :to="{name: 'GestionRisque'}"> Gestion des risques prestataires</router-link></li>
	            					<li><router-link :to="{name: 'RepriseActivity'}">Continuité et reprise d’activité</router-link></li>
									<li><router-link :to="{name: 'PolitiqueSecurity'}">Politique de sécurité</router-link></li>
									<li><router-link :to="{name: 'RssiExternalise'}">RSSI externalisé et assistance RSSI</router-link></li>
									<li><router-link :to="{name: 'Certification'}">Certification ISO27001</router-link></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-2">
	            			<div class="widget">
	            				<h4 class="widget-title">RGPD</h4><!-- End .widget-title -->
	            				<ul class="widget-list">
                                <li><router-link :to="{name: 'rgpdaudit'}">Audits de conformité RGPD</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoex'}">Cartographie des traitements de données</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoexmu'}">Réalisation d’Analyse d’Impact</router-link></li>
                                <li><router-link :to="{name: 'rgpdaccomp'}">Délégué à la protection des données externalisé</router-link></li>
                                	<!-- <li><router-link :to="{name: 'rgpdpia'}">PIA / AIPD</router-link></li> -->
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-2">
	            			<div class="widget">
	            				<h4 class="widget-title">FORMATION</h4><!-- End .widget-title -->
	            				<ul class="widget-list">
	            					<li><router-link :to="{name: 'FormationCyber'}">Cybersécurité</router-link></li>
                                	<li><router-link :to="{name: 'FormationRgpd'}">RGPD</router-link></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div>
						<div class="col-sm-6 col-lg-2">
	            			<div class="widget">
	            				<h4 class="widget-title">Legal</h4><!-- End .widget-title -->
	            				<ul class="widget-list">
	            					<li><router-link :to="{name: 'FormationCyber'}">Mentions Légales</router-link></li>
                                	<li><router-link :to="{name: 'FormationRgpd'}">Politique de Confidentialité</router-link></li>
                                	<li><router-link :to="{name: 'FormationRgpd'}">Conditions d'utilisation du Site</router-link></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->
	            	</div><!-- End .row -->
	            </div><!-- End .container -->
	        </div><!-- End .footer-middle -->

	        <div class="footer-bottom">
	        	<div class="container">
	        		<p class="footer-copyright">Copyright © 2022 Securelabs. Tous les droits sont réservés.</p><!-- End .footer-copyright -->
	        		
	        	</div><!-- End .container -->
	        </div><!-- End .footer-bottom -->
        </footer><!-- End .footer -->
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>

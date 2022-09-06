<template lang="">
    <footer class="footer">
        	<div class="footer-middle border-0">
	            <div class="container">
	            	<div class="row">
					
	            		<div class="col-sm-6 col-lg-3">
	            			<div class="widget widget-about">
								<img src="images/sl-new-logo-vertical.png" style="width: 10rem;" class="footer-logo mx-auto" alt="Footer Logo">
	            				<p>Faites appels à des spécialistes pour vous accompagner dans vos stratégies cybersécurité et conformité. </p>
								<div class="social-icons">
									<a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
									<a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
									<a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
									<a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
									<a href="#" class="social-icon" target="_blank" title="Pinterest"><i class="icon-pinterest"></i></a>
                        		</div><!-- End .soial-icons -->
	            			</div><!-- End .widget about-widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->

	            		<div class="col-sm-6 col-lg-3">
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

	            		<div class="col-sm-6 col-lg-3">
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

	            		<div class="col-sm-6 col-lg-3">
	            			<div class="widget">
	            				<h4 class="widget-title">FORMATION</h4><!-- End .widget-title -->
	            				<ul class="widget-list">
	            					<li><router-link :to="{name: 'FormationCyberSecurity'}">Cybersécurité</router-link></li>
                                	<li><router-link :to="{name: 'Formationrgpd'}">RGPD</router-link></li>
	            				</ul><!-- End .widget-list -->
	            			</div><!-- End .widget -->
	            		</div><!-- End .col-sm-6 col-lg-3 -->
	            	</div><!-- End .row -->
	            </div><!-- End .container -->
	        </div><!-- End .footer-middle -->

	        <div class="footer-bottom">
	        	<div class="container">
	        		<p class="footer-copyright">Copyright © 2022 Securelabs. All Rights Reserved.</p><!-- End .footer-copyright -->
	        		
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

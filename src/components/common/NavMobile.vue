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
                            <a href="#" >Cybersécurité</a>
                            <ul>
                                <li><a href="#">Cybersécurité 1</a></li>
                                <li><a href="#">Cybersécurité 2</a></li>
                                <li><a href="#">Cybersécurité 3</a></li>
                                <li><a href="#">Cybersécurité 4</a></li>
                            </ul>
                        </li>
                        <!-- Services -->
                        <li>
                            <a href="#" >Rgpd</a>
                            <ul>
                                <li><a href="#">Audits de conformité RGPD</a></li>
                                <li><a href="#">DPO / DPD externe</a></li>
                                <li><a href="#">DPO / DPD externe et mutualisé</a></li>
                                <li><a href="#">Accompagnement RGPD</a></li>
                            </ul>
                        </li>
                            <!-- Formation -->
                        <li>
                            <a href="#" >Formation</a>
                            <ul>
                                <li><a href="#">Formation 1</a></li>
                                <li><a href="#">Formation 2</a></li>
                                <li><a href="#">Formation 3</a></li>
                                <li><a href="#">Formation 4</a></li>
                            </ul>
                        </li>
                        <!-- Expertise -->
                        <li>
                            <a href="#" >Expertise</a>
                            <ul>
                                <li><a href="#">Expertise 1</a></li>
                                <li><a href="#">Expertise 2</a></li>
                                <li><a href="#">Expertise 3</a></li>
                                <li><a href="#">Expertise 4</a></li>
                            </ul>
                        </li>
                        <!-- about -->
                        <li >
                            <router-link :to="{name:'About'}">Securelabs</router-link>
                            <ul>
                                <li><a href="#">Securelabs 1</a></li>
                                <li><a href="#">Securelabs 2</a></li>
                                <li><a href="#">Securelabs 3</a></li>
                                <li><a href="#">Securelabs 4</a></li>
                            </ul>
                        </li>
                        <!-- Blog -->
                        <li  >
                            <a href="#">actualitié</a>
                           
                        </li>
                        <!-- Faq -->
                        <li  >
                            <router-link :to="{name:'Faqs'}">Faqs</router-link>
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
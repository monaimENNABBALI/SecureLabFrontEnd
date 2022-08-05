<template lang="">
    <header class="header" id="page-nav">
        <div class="header-top">

            <div class="header-right my-2">
                <ul class="top-menu">
                    <li>
                        <a href="#">Links</a>
                        <ul>
                            <li><a href="tel:#"><i class="icon-phone"></i>Call: +0123 456 789</a></li>
                            <li><router-link :to="{name:'About'}">About Us</router-link></li>
                            <li><router-link :to="{name:'Contact'}">Contact Us</router-link></li>
                            <li><router-link :to="{name:'Faqs'}" >Faqs</router-link></li>
                        </ul>
                    </li>
                </ul><!-- End .top-menu -->
            </div><!-- End .header-right -->
        </div><!-- End .header-top -->

        <div class="header-middle sticky-header">
            <div class="header-left">
                <button class="mobile-menu-toggler">
                    <span class="sr-only">Toggle mobile menu</span>
                    <i class="icon-bars"></i>
                </button>

                <router-link :to="{name: 'Home'}" class="logo">
                    <img src="images/sl-new-logo-horizontal.png" alt="Molla Logo">
                </router-link>
            </div><!-- End .header-left -->

            <div class="header-center">
                <nav class="main-nav">
                    <ul class="menu sf-arrows" style="max-width: 90%;display: inline-flex;">
                    
                        <!-- Cybersécurité -->
                        <li>
                            <router-link :to="{name: 'CyberSecurity'}" class="sf-with-ul">Cybersécurité</router-link>
                            <ul>
                                <li><router-link :to="{name: 'CyberSecurity'}">PIA / AIPD</router-link></li>
                                <li><router-link :to="{name: 'Audit'}">Audits de Sécurité</router-link></li>
                            </ul>
                        </li>
                        
                        <!-- Services -->
                        <li>
                            <a href="#" class="sf-with-ul">Rgpd</a>
                            <ul>
                                <li><router-link :to="{name: 'rgpdaudit'}">Audits de conformité RGPD</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoex'}">DPO / DPD externe</router-link></li>
                                <li><router-link :to="{name: 'rgpddpoexmu'}">DPO / DPD externe et mutualisé</router-link></li>
                                <li><router-link :to="{name: 'rgpdaccomp'}">Accompagnement RGPD</router-link></li>
                                <li><router-link :to="{name: 'rgpdpia'}">PIA / AIPD</router-link></li>
                            </ul>
                        </li>
                        
                        <!-- Formation -->
                        <li>
                            <router-link :to="{name: 'Formation'}" class="sf-with-ul">Formation</router-link>
                        </li>
                        
                        <!-- Logiciel -->
                        <li class="megamenu-container">
                             <router-link to="/logiciel">Logiciel</router-link>
                        </li>
                        
                        <!-- Expertise -->
                        <li>
                             <router-link :to="{name: 'Expertise'}" class="sf-with-ul">Expertise</router-link>
                            <ul>
                                <li><a href="#">Expertise 1</a></li>
                                <li><a href="#">Expertise 2</a></li>
                                <li><a href="#">Expertise 3</a></li>
                                <li><a href="#">Expertise 4</a></li>
                            </ul>
                        </li>
                        
                        <!-- about -->
                        <li>
                            <router-link class="sf-with-ul" :to="{name:'About'}">Securelabs</router-link>
                            <ul>
                                <li><a href="#">Securelabs</a></li>
                                <li><a href="#">Securelabs 2</a></li>
                                <li><a href="#">Securelabs 3</a></li>
                                <li><a href="#">Securelabs 4</a></li>
                            </ul>
                        </li>
                        
                        <!-- Blog -->
                        <li>
                            <router-link class="sf-with-ul" :to="{name:'Blog'}">Blog</router-link>
                           
                        </li>

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

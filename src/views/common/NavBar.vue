<template lang="">
    <header class="header">
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

                <a href="index.html" class="logo">
                    <img src="images/Logo2.png" alt="Molla Logo" width="110" height="25">
                </a>
            </div><!-- End .header-left -->

            <div class="header-center">
                <nav class="main-nav">
                    <ul class="menu sf-arrows" style="max-width: 90%;display: inline-flex;">
                        <li class="megamenu-container">
                            <router-link :to="{name: 'Home'}" class="sf-with-ul">Home</router-link>
                        </li>
                            <!-- Cybersécurité -->
                            <li>
                                <router-link :to="{name: 'Services'}" class="sf-with-ul">Services</router-link>
                            
                        </li>
                        <li>
                            <router-link :to="{name: 'CyberSecurity'}" class="sf-with-ul">Cybersécurité</router-link>
                            <ul>
                                <li><a href="#">Cybersécurité 1</a></li>
                                <li><a href="#">Cybersécurité 2</a></li>
                                <li><a href="#">Cybersécurité 3</a></li>
                                <li><a href="#">Cybersécurité 4</a></li>
                            </ul>
                        </li>
                        <!-- Services -->
                        <li>
                            <a href="#" class="sf-with-ul">Rgpd</a>
                            <ul>
                                <li><a href="#">Audits de conformité RGPD</a></li>
                                <li><a href="#">DPO / DPD externe</a></li>
                                <li><a href="#">DPO / DPD externe et mutualisé</a></li>
                                <li><a href="#">Accompagnement RGPD</a></li>
                                <li><a href="#">PIA / AIPD</a></li>
                            </ul>
                        </li>
                            <!-- Formation -->
                        <li>
                                <router-link :to="{name: 'Formation'}" class="sf-with-ul">Formation</router-link>
                            
                        </li>
                        <!-- Formation -->
                        <li>
                            
                             <router-link to="/logiciel" class="sf-with-ul">Logiciel</router-link>
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
                        <li >
                            <router-link class="sf-with-ul" :to="{name:'About'}">Securelabs</router-link>
                            <ul>
                                <li><a href="#">Securelabs</a></li>
                                <li><a href="#">Securelabs 2</a></li>
                                <li><a href="#">Securelabs 3</a></li>
                                <li><a href="#">Securelabs 4</a></li>
                            </ul>
                        </li>
                        <!-- Blog -->
                        <li  class="megamenu-container">
                            <router-link class="sf-with-ul" :to="{name:'Blog'}">Blog</router-link>
                           
                        </li>
                        <!-- Faq -->
                        <li  class="megamenu-container">
                            <router-link :to="{name:'Faqs'}">Faqs</router-link>

                            
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
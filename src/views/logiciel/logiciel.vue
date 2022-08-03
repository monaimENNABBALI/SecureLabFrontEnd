<template lang="">
    <Intro bgUrl="background-image: url('images/logiciel.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Le logiciel par excelence</h3>
            </div>
            <div class="content">
                <h4><i>Conçue Cpécialement Pour les DPO</i></h4>
            </div>
            <div class="action">
                <a href="#main">discover now</a>
            </div>
    </Intro>
    <main id="main">
        <div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
        	<div class="container">
        		<h1 class="page-title">Un ensemble complet de fonctionnalités …</h1>
        	</div><!-- End .container -->
        </div>
            <div class="row align-items-center" style="margin:6rem;">
                            <div class="col-12 col-md-8">
                                <img src="images/cybersecurity-03.jpg" alt="image desc" style="border-radius: 50px;" >
                            </div><!-- End .col-md-4 -->

                            <div class="col-12 col-md-4">
                                <div class="entry-body text-start">

                                    <h2 class="entry-title">
                                        Indicateurs de complétude et de conformité RGPD
                                    </h2><!-- End .entry-title -->

                                    <!-- <div class="entry-cats">
                                        in <a href="#">Lifestyle</a>,
                                        <a href="#">Shopping</a>
                                    </div> -->
                                    <!-- End .entry-cats -->

                                    <div class="entry-content">
                                        <p>Suivez la complétude et la conformité de vos traitements : 
                                            </p>
                                            <ul class="list-group list-group-flush">
                                                <li style="border-width:0 0 2px;" class="list-group-item">
                                                    Analysez en temps réel la conformité de vos traitements (licence pro)
                                                </li>
                                                <li style="border-width:0 0 2px;" class="list-group-item">
                                                    Ciblez les traitements prioritaires
                                                </li>
                                                <li style="border-width:0 0 2px;" class="list-group-item">
                                                    Pilotez la conformité de vos contrats.
                                                </li>
                                            </ul>
                                        <!-- <a href="single.html" class="read-more">Continue Reading</a> -->
                                    </div><!-- End .entry-content -->
                                </div><!-- End .entry-body -->
                            </div><!-- End .col-md-8 -->
                        </div>

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
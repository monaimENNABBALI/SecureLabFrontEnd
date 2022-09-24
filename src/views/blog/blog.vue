<template lang="">
<Intro bgUrl="background-image: url('images/homeIntro.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Découvrez toutes l’actualité </h3>
            </div>
            <div class="content">
                <h4>Cybersécurité et Data Protections</h4>
            </div>
            <div class="action">
                <a href="category.html">discover now</a>
            </div>
    </Intro>
   <main class="main">
    <div class="container mt-4 pt-4">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-4" v-for="methodologie in methodologies">
                                <div class="activity-item">
                                    <div class="row">
                                        <a href="#" data-role="activity-box-link">
                                            <div class="col-lg-12 p-0">
                                                <!-- activity Image, Name & Subtitle (everyone) -->
                                                <div class="activity-box-blog-container">
                                                    <img class="activity-box-blog" :src="methodologie.image">
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
        </main><!-- End .main -->
</template>
<script>
import Intro from '@/components/Intro'
import blog from './db.json'
export default {
    components:{
        Intro
    },
    data(){
        return{
            methodologies: blog.blogs
        }
    }
    
}
</script>
<style lang="">
    
</style>

<template lang="">
<Intro bgUrl="background-image: url('images/homeIntro.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Faites appel à des spécialistes</h3>
            </div>
            <div class="content">
                <h4>Pour votre conformité RGPD</h4>
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
                                                <div class="activity-box-icon-container">
                                                    <img class="activity-box-icon" :src="methodologie.image">
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
export default {
    components:{
        Intro
    },
    data(){
        return{
            methodologies:[
                {
                    id:1,
                    title:"Apprécier la réalité opérationnelle",
                    content:"et l’écosystème de chaque client pour déployer les meilleures stratégies et anticiper les besoins.",
                    image:"assets/images/blog/masonry/4cols/post-1.jpg"
                },
                {
                    id:2,
                    title:"Être réaliste et pragmatique",
                    content:"dans notre approche pour proposer des solutions opérationnelles adaptées aux clients via la combinaison de nos expertises juridiques, techniques et de notre expérience opérationnelle.",
                    image:"assets/images/blog/masonry/4cols/post-2.jpg"
                },
                {
                    id:3,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-3.jpg"
                },
                {
                    id:4,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-4.jpg"
                },
                {
                    id:5,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-5.jpg"
                },
                {
                    id:6,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-6.jpg"
                },
                {
                    id:7,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-7.jpg"
                },
                {
                    id:8,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-8.jpg"
                },
                {
                    id:9,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-9.jpg"
                },
                {
                    id:10,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-10.jpg"
                },
                {
                    id:11,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-11.jpg"
                },
                {
                    id:12,
                    title:"S’engager",
                    content:"à sécuriser votre organisation en endossant pleinement notre rôle de conseil et d’interlocuteur tout en construisant une relation durable avec vous.",
                    image:"assets/images/blog/masonry/4cols/post-12.jpg"
                }
            ]
        }
    }
    
}
</script>
<style lang="">
    
</style>

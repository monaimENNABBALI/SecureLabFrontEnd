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
   <main class="main mt-6">
	<div class="container mb-5">
        <form ref="form" @submit="sendEmail">
          <label>Name</label>
          <input 
            type="text" 
            name="name"
			required
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            name="email"
			required
            placeholder="Your Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            cols="30" rows="5"
			required
            placeholder="Message">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
            
        </main><!-- End .main -->
            
</template>

<script>
import Intro from '@/components/Intro'
import emailjs from 'emailjs-com';
export default {
    components:{
        Intro
    },
  data() {
    return {
      
    }
  },
  methods: {
    sendEmail(e) {
		
      try {
        emailjs.sendForm('service_f6cy6q9', 'template_6gsamld',this.$refs.form,'vPAiznZO5lFv-5O0z')
      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
    
}
</script>
<style scoped>
	* {box-sizing: border-box;}
	
	.container {
	  display: block;
	  margin:auto;
	  text-align: center;
	  border-radius: 5px;
	  background-color: #f2f2f2;
	  padding: 20px;
	  width: 50%;
	}
	
	label {
	  float: left;
	}
	
	input[type=text], [type=email], textarea {
	  width: 100%;
	  padding: 12px;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  box-sizing: border-box;
	  margin-top: 6px;
	  margin-bottom: 16px;
	  resize: vertical;
	}
	
	input[type=submit] {
	  background-color: #4CAF50;
	  color: white;
	  padding: 12px 20px;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	}
	
	input[type=submit]:hover {
	  background-color: #45a049;
	}
	</style>

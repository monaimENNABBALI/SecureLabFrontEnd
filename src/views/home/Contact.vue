<template lang="">
	<Intro bgUrl="background-image: url('images/contactUs.jpg');">
             <!-- we will get this using -->
            <div class="title">
                <h3>Avez vous des questions </h3>
            </div>
            <div class="content">
                <h4>Contactez Nous</h4>
            </div>
            <div class="action">
                <a href="#contact-form">Envoyez Un Message</a>
            </div>
    </Intro>
   <main class="main mt-6">
	<div class="container mb-5" id="contact-form">
        <form ref="form" @submit="sendEmail">
          <label>Nom</label>
          <input 
            type="text" 
            name="name"
			required
            placeholder="Votre Nom"
          >
          <label>Email</label>
          <input 
            type="email" 
            name="email"
			required
            placeholder="Votre Email"
            >
          <label>Message</label>
          <textarea 
            name="message"
            cols="30" rows="5"
			required
            placeholder="Message"></textarea>
          
          <input type="submit" value="Envoyer">
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
        emailjs.sendForm('service_0k66n5x', 'template_1b47i2i',this.$refs.form,'vPAiznZO5lFv-5O0z')
        console.log(this.$refs.form);
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
	    margin-bottom: 0.5rem;
    	font-size: 1.75rem;
    	font-weight: 700;
    	color: #566a7f;

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

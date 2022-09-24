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
            <label for="secteur">Choisissez votre secteur d'activité</label>
            <select name="secteur" id="secteur">
            <option value="Agroalimentaire">Agroalimentaire</option>
            <option value="Automobile">Automobile</option>
            <option value="Avocats / comptabilité / notaires">Avocats / comptabilité / notaires</option>
            <option value="Banque / assurance">Banque / assurance</option>
            <option value="BTP">BTP</option>
            <option value="Collectivité / association">Collectivité / association</option>
            <option value="Communication / marketing / médias">Communication / marketing / médias</option>
            <option value="Distribution / retail">Distribution / retail</option>
            <option value="Energie / environnement">Energie / environnement</option>
            <option value="E-santé">E-santé</option>
            <option value="Immobilier">Immobilier</option>
            <option value="Industrie">Industrie</option>
            <option value="Informatique / technologique / ESN">Informatique / technologique / ESN</option>
            <option value="Médico-social">Médico-social</option>
            <option value="Santé">Santé</option>
            <option value="Tourisme / loisirs">Tourisme / loisirs</option>
            <option value="Transport">Transport</option>
            <option value="Autre">Autre</option>
            </select>
          <label>Message</label>
          <textarea 
            name="message"
            cols="30" rows="5"
			required
            placeholder="Message"></textarea>
          
          <input type="submit" value="Envoyer">
        </form>
        
    </div>
    <p class="w-75 mx-auto my-5">
          Les informations recueillies par Securelabs en tant que responsable de traitement font l’objet 
          d’un traitement informatisé destiné à traiter votre demande. Les destinataires de vos données sont 
          les personnels habilités à répondre à votre demande. Vos données personnelles sont conservées pour 
          une durée de deux ans à compter du dernier contact avec vous. Vos données sont susceptibles d’être 
          soumises à une durée de conservation plus longue en vue de respecter les dispositions légales applicables.
           A défaut, elles font l’objet d’une suppression. Conformément à la loi « Informatique et Libertés » du 6
            janvier 1978 modifiée et du Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, 
            vous bénéficiez d’un droit d’accès, de rectification, de suppression, de limitation, de portabilité 
            (lorsqu’il s’applique) et d’opposition aux informations qui vous concernent. Vous pouvez exercer ces
             droits en vous adressant au service DPO du siège aux coordonnées suivantes : 9 rue Léon Salembien, 
             59200, Tourcoing ou à l’adresse dpo(at)Securelabs.fr. Pour plus d’informations, vous pouvez consulter notre politique de confidentialité
        </p>
            
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
	
	input[type=text], [type=email], textarea ,select{
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

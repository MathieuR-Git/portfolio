<template>
  <div>
    <h1>Contactez Moi !</h1>
    <p v-if="errors.length">
    <b>Veuillez remplir les champs vides:</b>
    <ul>
      <li v-for="error in errors" :key="error" class="errors">{{ error }}</li>
    </ul>
    </p>
    <form   
>
      <label for="name">Nom <span title="Requis">*</span></label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Votre nom..."
        v-model="name"
        required
      />

      <label for="mail">Email <span title="Requis">*</span></label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Votre email..."
        v-model="email"
        required
      />

      <label for="society">Entreprise <span title="Requis">*</span></label>
      <input
        type="text"
        id="society"
        name="society"
        placeholder="Votre entreprise..."
        v-model="society"
        required
      />

      <label for="subject">Sujet <span title="Requis">*</span></label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Je vous laisse écrire.."
        style="height:200px"
        v-model="subject"
        required
      />

              <p v-if="success">Message envoyé !</p>
      <button v-else type="submit" @click="contactForm">Envoyer</button>


      <p v-if="errorSend">Erreur lors de l'envoi.</p>
    </form>
  </div>
</template>

<script>

export default {
  name: "ContactPage",
  data: () => ({
    name: "",
    email: "",
    society: "",
    subject: "",
    errors: [],
    success:false,
    errorSend:false
  }),

  methods: {
    contactForm: function(e) {
      e.preventDefault();

      this.errors = [];
      if(this.name === '') {
        this.errors.push("Nom requis.");
        }
      if(this.email === '') {
        this.errors.push("Email requis.");
        }
      if(!this.validEmail(this.email)){
        this.errors.push("Format de l'email incorrect")
      }
      if(this.society === '') {
        this.errors.push("Nom de la société requis.");
        }
      if(this.subject === '') {
        this.errors.push("Sujet requis.");
        }
      if(this.name.length>0 && this.email.length>0 && this.validEmail(this.email) && this.society.length>0 && this.subject.length>0){

        let data = JSON.stringify({name: this.name, email: this.email, society: this.society, subject : this.subject})

      fetch('//formspree.io/xvowaege', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
        },
        body: data
        })
        .then(function(res){
          return res.json(); //error here
        })
        .then(function(data){
          console.log(data);
        }) 
        .catch(err => {

          console.log("Error Reading data " + err);
        });
      }else(console.log("Error occurs !"))
    },

    validEmail: function (email) {
          //eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)

    },

  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=PT+Serif&display=swap");


@media screen and (min-width: 40em) { 
  form{  
    /* background: url('../../public/contact.jpg');  
    background-size: cover;
    filter: invert(1); */
    background-color:#E0E0E0;
    height:65vh; 
    margin-top:5vh;
    margin-left:15vw;
    margin-right:15vw;
    padding:60px;
    display:flex;
    flex-direction: column;
    border-radius:5px;
  }
#name, #email{
  display:flex;
  flex-direction: row;
}
  button{
  width:80px;
  margin-top:40px;
  margin-left:auto;
  margin-right:auto;
  /* border:none; */
  background:#17181A;
  color:white;
}
  button:hover{
    transform:scale(1.1);
  background:rgba(23,24,26,0.7);
  color:#E0E0E0;
}


}
div{
  margin-top:40px;
  text-align: center;
}
h1{
    font-family: "PT Serif", serif;
  color:white;
}
label{  
  font-family: "PT Serif", serif;
  color:black;
}
.errors{
  color:red;
}
input, textarea {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px; 
    padding-right: 18px;
    height: 46px;
    width: 70%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    line-height: 40px;
    /* background:transparent; */
    /* background-color: #eee; */
    border-width: 2px;
    /* border-top-style: inset;
    border-left-style: inset; */
    border-right-style: outset;
    border-bottom-style: outset;
        /* border-width:5px;  
     border-style:outset; */
     /*box-shadow: 4px -4px teal;*/
     box-shadow: 3px 3px 1px 1px #17181a;
}


button, input, textarea{
    border-radius:5px;
}

label{
  font-style: italic;
  font-size: 1.1em;
}

span{
  cursor:pointer;
}

::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}


@media screen and (max-width: 40em) {
  form{  
  height:65vh; 
  margin-top:5vh;

   margin-left:3vw;
  margin-right:3vw;
  padding:none;
  display:flex;
  flex-direction: column;
  border:none;
  padding:20px;
  background: rgb(95, 73, 100);
  border-radius: 4px;
}
  input, textarea {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 10px;
      margin-bottom: 10px; 
      padding-right: 18px;
      height: 46px;
      width: 80%;
      /* width: 400px; */
      border: none;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      line-height: 40px;
      background:white;
  }

  button{
    width:80px;
    margin-top:40px;
    margin-left:auto;
    margin-right:auto;
  }
}
</style>

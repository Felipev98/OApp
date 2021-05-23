<template>
  <div>
      <div id="fondo">
            <v-card

  >
    <v-app-bar  absolute width="100%" bar flat color="transparent">
      <v-btn id="boton-registro">
     <router-link to="/registro">Registrate</router-link>
      </v-btn>
    </v-app-bar>
  </v-card>
          <v-container style="height:90%" align-center d-flex>

        <v-row>

            <v-col cols="12" align="center" >
                <img src="../assets/login.png" alt="fondo">
      <form @submit.prevent="ingresoUsuario({email:$v.email.$model, password: $v.pass.$model})">
    <v-text-field label="Ingresar email"  type="email" v-model="$v.email.$model" class="input" color="error"></v-text-field>
    <small v-if="!$v.email.required">Campo Requerido</small>
     <small v-if="!$v.email.email">Email no valido</small>
     

    <v-text-field label="Ingresar contraseña" v-model="$v.pass.$model" type="password" class="input" color="error"></v-text-field>
    <small v-if="!$v.pass.required">Campo Requerido</small>
    <small v-if="!$v.pass.minLength">Minimo 6 carácteres</small>


<v-btn depressed elevation="2" large raised  type="submit" id="boton" :disabled="$v.$invalid">ENTRAR</v-btn>


      </form>
      <p v-if="error=== 'auth/user-not-found'">Usuario  incorrecto</p>
    <p v-if="error=== 'auth/wrong-password'">Contraseña incorrecta</p>

      </v-col>
      </v-row>
      </v-container>
  </div>
  </div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
import { required,minLength,email } from 'vuelidate/lib/validators'
export default {
    name:'Login',
    data() {
        return {
            email:'',
            pass:'' ,
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario'])
    },
    computed:{
        ...mapState(['error'])
    },
    validations:{
        email: {required,email},
        pass:{required,minLength:minLength(6)}
    }
}
</script>

<style  >
.v-application a{
    color: white  !important;
    text-decoration: none;
    font-family: 'Roboto', sans-serif ;
    font-weight: 500;
} 

#boton-registro{
background-color: #3E22B6;
color: white;
left: 85%;
}

img{
    width: 13%;
}

v-row{
    height: 100vh;
}
#fondo{
    background-image: url('../assets/Fondo-min.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}
#boton{
background-color:#0E1CE1;
color: white;
font-family: 'Roboto', sans-serif; 
font-weight: 500;
}
.input{
    width: 35%;
    
}
.v-label .theme--light{
    color: white  !important;
}
.theme--light.v-label{
    color: white  !important;
}

small{
    color: #ff5252;
    display: block;
    font-size: 0.6rem;
    text-align: left;
    margin-bottom: 1rem;
    width: 35%;
}
 p{
color: #ff5252;
}

.theme--light.v-input input{
    color: white  !important;
}
.v-text-field > .v-input__control > .v-input__slot {
margin-bottom: 0;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
border-color: white  !important;
}      

/* Media Queries */
@media screen and (max-width:700px) {
#boton-registro{
    left:60%;
}
} 
@media screen and (max-width:500px) {
.input{
    width: 60%;
}
small{
    width: 60%;
    font-size: 0.8rem;
}
img{
    width: 25%;
}

} 



</style>
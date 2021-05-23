<template>
  <div>
      <div id="registro-f">
          <v-container style="height:90%" align-center d-flex>
              <v-row>
                  <v-col  cols="12" align="center">
                      <img src="../assets/registro.png" alt="registro">
      <form @submit.prevent="crearUsuario({email:email,password:pass1})">
         <v-text-field label="Ingresar email"  type="email" v-model="$v.email.$model"  color="error" class="registro"></v-text-field>
             <small v-if="!$v.email.required">Campo Requerido</small>
             <small v-if="!$v.email.email">Email no valido</small>


        <v-text-field label="Ingresar contraseña" v-model="$v.pass1.$model" type="password" class="registro" color="error"></v-text-field>
                     <small v-if="!$v.pass1.required">Campo Requerido</small>

        <small v-if="!$v.pass1.minLength">Mínimo 6 carácteres</small>

         <v-text-field label="Repetir contraseña" v-model="pass2" type="password" class="registro" color="error"></v-text-field>

         <v-btn depressed elevation="2" large raised  type="submit" id="boton-registrar" :disabled='!desactivar'>REGISTRARSE</v-btn>
      </form>
      <p v-if="error === 'auth/email-already-in-use'">Email ya registrado</p>
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
    name: 'Registro',
    data() {
        return {
            email: '',
            pass1: '',
            pass2: ''
        }
    },
    created(){

    },
    methods:{
        ...mapActions(['crearUsuario'])
    },
    computed:{
        ...mapState(['error']),
        desactivar(){
            return  this.pass1 === this.pass2 && this.pass1.trim() !== '' && this.pass1.length > 5
        }
    },
    validations:{
        email:{email,required},
        pass1:{minLength:minLength(6),required},
    }

}
</script>

<style >
img{
    width: 13%;
}
#registro-f{
    background-image: url('../assets/registro.jpg');
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
}
#boton-registrar{
background-color:  #0E1CE1 !important ;
color: white;
}
.theme--light.v-label {
color: white !important;
} 
.registro{
    width:35%;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
    color: white ;
}
.theme--light.v-input input{
    color: white  !important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
border-color: white  !important;
}    
small{
    color: #df323b;
    display: block;
    font-size: 0.6rem;
    text-align: left;
    margin-bottom: 1rem;
    width: 35%;
}
  
p{
    color: #df323b;
}
/* Media Queries */

@media screen and (max-width:500px) {
.registro{
    width: 60%;
}
small{
    width: 60%;
    font-size: 0.8rem;
}
p{
    font-size: 0.8rem;
}
img{
    width: 25%;
}

} 
</style>
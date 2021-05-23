<template>
  <div>
      <div class="agregar">
          <v-container style="height:90%" align-center d-flex>
              <v-row>
                  <v-col cols="12" align="center" >
                  <h1>AGREGAR OBJETIVO</h1>
      <form @submit.prevent="agregarObjetivo({Nombre:$v.Nombre.$model, Descripcion:$v.Descripcion.$model,Numero:$v.Numero.$model})">
          
    <v-text-field label="Ingresar Objetivo"   v-model="$v.Nombre.$model" class="input" color="error"></v-text-field>
        <small v-if="!$v.Nombre.required">Campo Requerido</small>

    <v-text-field label="Ingresar Descripcion"   v-model="$v.Descripcion.$model" class="input" color="error"></v-text-field>
            <small v-if="!$v.Descripcion.required">Campo Requerido</small>
        <v-text-field label="Ingresar Numero de intentos"   v-model="$v.Numero.$model" class="input" color="error" type="number"></v-text-field>
     <small v-if="!$v.Numero.required">Campo Requerido</small>
    <v-btn  depressed elevation="2" large raised  type="submit" id="boton-personalizar" :disabled="$v.$invalid" >AÑADIR</v-btn>


      </form>
                  </v-col>
              </v-row>
          </v-container>
    
            </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
     name: 'Agregar',
     data() {
         return {
                Nombre:'',
                Descripcion:'',
                Numero: ''
                
         }
     },
     created(){

     },
     methods:{
         ...mapActions(['agregarObjetivo'])
         
     },
     validations:{
         Nombre:{required},
         Descripcion:{required},
         Numero:{required}
         
     }
}
</script>

<style>
h1{
    color: white;
    font-family: 'Roboto', sans-serif;

}
.agregar{
    background-color: #1C0344;
    height: 100vh;
    font-weight: 500;
    font-size: 1.4rem;

}
#boton-personalizar{
    background-color: #4D0658  !important;
    color: white !important;
    width: 20%;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
    border-color: white  !important;
}

label.v-label.theme--light{
    color:#DFDFDF;
}
.input{
    width: 35%;
}
.theme--light.v-input input{
    color: white  !important;
}
.v-input__slot{
    margin-bottom: 0  !important;
}
small{
    color: #df323b;
    display: block;
    font-size: 0.6rem;
    text-align: left;
    margin-bottom: 1rem;
    width: 35%;

}
/* Media Queries */
@media screen and (max-width:500px) {
.input{
    width: 60%;
}
h1{
    font-size: 2rem;
}
small{
    width: 60%;
    font-size: 0.8rem;
}


}

</style>
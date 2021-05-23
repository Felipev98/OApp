<template>
  <div>
      <div  id="fondo-editar">
    <v-container  style="height:90%" align-center d-flex>
        <v-row>
            <v-col cols="12" align="center" >
                <h1>EDITAR OBJETIVO</h1>
         <form @submit.prevent=" editarObjetivo(objetivo)">
                 <v-text-field label="Editar objetivo"  type="text" v-model="objetivo.Nombre" class="input" color="success"></v-text-field>
                <small v-if="!$v.objetivo.Nombre.required" >Campo Requerido</small>
              <v-text-field label="Editar Descripción"  type="text" v-model="objetivo.Descripcion" class="input" color="success" id="campo-descripcion"></v-text-field>
            <small v-if="!$v.objetivo.Descripcion.required" >Campo Requerido</small>
            <v-text-field label="Editar Número"  type="number" v-model="objetivo.Numero" class="input" color="success"></v-text-field>
            <small v-if="!$v.objetivo.Numero.required" >Campo Requerido</small>
            <v-btn depressed elevation="2" large raised  type="submit" id="boton-editar" :disabled="$v.objetivo.$invalid">EDITAR</v-btn>

      </form>
            </v-col>
        </v-row>
                  </v-container>


      </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getObjetivo(this.id)
    },
    methods:{
        ...mapActions(['getObjetivo','editarObjetivo'])
    },
    computed:{
        ...mapState(['objetivo'])
    },
validations:{
objetivo:{
Nombre:{required},
Descripcion: {required},
Numero: {required}
             }
     }
}
</script>

<style >
h1{
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 3rem  !important;
}
#fondo-editar{
    background-color: #1C0344;
    height: 100vh;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
    border-color: white  !important;
}
.theme--light.v-input input, .theme--light.v-input textarea{
    color: white  !important;
}

label.v-label.theme--light{
    color:#DFDFDF;
}
.input{
    width: 35%;
}

#boton-editar{
     background-color: #4D0658  !important;
    color: white !important;
    width: 20%;
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
@media screen and (max-width:500px) {
.input{
    width: 60%;
}

small{
    width: 60%;
    font-size: 0.8rem;
}

}



</style>
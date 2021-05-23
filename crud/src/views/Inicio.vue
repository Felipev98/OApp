<template>
  <div>
    <div>
          <Navbar/>

    </div>
    <router-link to="/agregar">
        <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    </router-link>
            <div class="text-center" v-if="carga">
    <v-progress-circular
      indeterminate
      color="#1C0344"
    ></v-progress-circular>
      </div>
     <v-simple-table  v-if="!carga" >
      <thead>
        <tr>
          <th class="text-center">
            Objetivos
          </th>
           <th class="text-center" id="descripcion-h">
            Descripción 
          </th>
           <th class="text-center">
            Numero de intentos
          </th>
           <th class="text-center">
            Acciones 
          </th>
        </tr>
      </thead>
      
      <tbody>
        <tr
        v-for="(item,index) in objetivos" :key="index"
        >
          <td class="text-center">{{item.Nombre}} </td>
          <td class="text-center" id="descripcion">{{item.Descripcion}} </td>
          <td class="text-center">{{item.Numero}} </td>


          <td class="text-center">  <router-link :to="{name: 'Editar', params:{id: item.id}}" ><v-btn
      class="mx-2"
      fab
      dark
      large
      color="#1C0344"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn></router-link>
    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="#C10F0F"
      @click="eliminarObjetivo(item.id)"
    >
      <v-icon dark>
        mdi-delete
      </v-icon>
    </v-btn></td>
        </tr>
      </tbody>
  </v-simple-table>
          

    </div>

</template>

<script>
import Navbar from '../components/Navbar'
import {mapActions,mapState} from 'vuex'
export default {
    name:'Inicio',
    created(){
      this.getObjetivos()
    },
    methods:{
      ...mapActions(['getObjetivos','eliminarObjetivo'])

      
    },
    computed:{
      ...mapState(['usuario','objetivos','carga']),


    },
    components:{
      Navbar
    }

}
</script>

<style>
.v-application a{
  color: transparent;
}
.v-btn--fab.v-size--large{
  margin-bottom: 1rem;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th{
  font-size: 0.9rem;
  font-weight: 500;
  color: black;
  font-family: 'Roboto', sans-serif ;
}
.v-btn--fab.v-size--default{
  margin-top: 0.8rem;
  left: 45%;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > thead > tr:last-child > th {
padding-right: 0;

}
/* Media Queries */
@media screen and (max-width:500px) {
.v-btn--icon.v-size--large .v-icon, .v-btn--fab.v-size--large .v-icon {
font-size: 1.3rem;
}
.v-btn--fab.v-size--large{
  height: 40px;
  width: 40px;
}

}
</style>
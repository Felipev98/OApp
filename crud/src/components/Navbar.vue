<template>
<div>
  <v-toolbar> 
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
            Mis objetivos
        </v-toolbar-title>
        <v-spacer></v-spacer>
      <v-btn v-if="existeUsuario" @click="cerrarSesion" id="cerrar-sesion">
         Cerrar Sesión
      </v-btn>

  </v-toolbar>
  <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      src="../assets/Fondo-min.jpg"

    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title id="titulo">{{usuario.email}}</v-list-item-title>
          </v-list-item-content>
           </v-list-item >
            <v-divider></v-divider>
            <v-list-item v-for="item in items"
          :key="item.title" id="lista">
            <v-list-item-icon>
            <v-icon class="icono">{{item.icon}}</v-icon>
          </v-list-item-icon>


          <v-list-item-content>
            <v-list-item-title class="titulo-perfil">{{item.title}}</v-list-item-title>
          </v-list-item-content>
                  </v-list-item>


          </v-navigation-drawer>
  </div>
  
  
  
</template>

<script>
import {mapActions,mapGetters,mapState} from 'vuex'
export default {
    data() {
        return {
            drawer:false,
            items: [
          { title: 'Mi perfil', icon: 'mdi-account-circle' }
            ]
        }
    },

    methods:{
    ...mapActions(['cerrarSesion'])
    },

    computed:{
    ...mapGetters(['existeUsuario']),
    ...mapState(['usuario'])
    },
}
</script>

<style scoped >
.theme--light.v-toolbar.v-sheet{
    background-color:#291F34  !important; 
    color: white;
}

#cerrar-sesion{
    background-color: #C10F0F;
    color: white;
    transition: all 0.3s ease-in;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 500;
}
#cerrar-sesion:hover{
    transform: scale(1.1);
}
.v-btn--icon{
    color: white  !important;
}
#titulo{
  color: white;
  font-size: 0.rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}
.icono{
  color: white  !important;
  font-size: 2.5rem  !important;
}
.titulo-perfil{
  color: white  !important;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
#lista{
  margin-top: 1rem;
}
/* Media Queries */
@media screen and (max-width: 500px){

#cerrar-sesion {
font-size: 0.8rem;
padding: 0.2rem;
}
.v-toolbar__title{
  font-size: 0.9rem;
}
}

</style>
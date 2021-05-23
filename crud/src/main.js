import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import 'animate.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
import {auth} from './firebase'
auth.onAuthStateChanged(user =>{
  if(user){
    const detectoUsuario ={
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario',detectoUsuario)
  }else{
    store.dispatch('detectarUsuario',user)

  }
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
  
})


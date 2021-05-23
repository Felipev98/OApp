import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase' 
import router from '../router'
import {auth} from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    objetivos: [],
    objetivo: {nombre: '', id: '',descripcion: '', Numero: Number },
    usuario: null,
    error:null,
    carga: false,

  },
  mutations: {
    setObjetivos(state,payload){
      state.objetivos = payload
    },
    setObjetivo(state,payload){
      state.objetivo = payload
    },
    setEliminarObjetivo(state,payload){
      const objetivosFiltrados =  state.objetivos.filter(item => item.id !== payload)
      state.objetivos = objetivosFiltrados
    },
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state,payload){
      state.error = payload
    },
    cargarObjetivos(state,payload){
      state.carga = payload
    } 
  },
  actions: {
    getObjetivos({commit,state}){
      commit('cargarObjetivos',true)
      const objetivos = []
      db.collection(state.usuario.email).get()
      .then(res => {
          res.forEach(doc => {
            let objetivo = doc.data()
                objetivo.id = doc.id
                objetivo.descripcion = doc.descripcion
                objetivos.push(objetivo)
                commit('cargarObjetivos',false)
          })
          commit('setObjetivos', objetivos)
      })
    },
    getObjetivo({commit,state},idObjetivo){
      db.collection(state.usuario.email).doc(idObjetivo).get()
      .then(doc =>{
        let objetivo = doc.data()
        objetivo.id = doc.id
        commit('setObjetivo',objetivo)
      })
    },
    editarObjetivo({commit,state},objetivo){
      db.collection(state.usuario.email).doc(objetivo.id).update({
        Nombre: objetivo.Nombre,
        Descripcion:objetivo.Descripcion,
        Numero: objetivo.Numero
      })
      .then(() =>{
        router.push('/')
      })
    },
    agregarObjetivo({commit,state},Nombre){
      db.collection(state.usuario.email).add({
        Nombre: Nombre.Nombre,
        Descripcion: Nombre.Descripcion,
        Numero: Nombre.Numero
      })
      .then(doc =>{
        router.push('/')
      })
    },
    eliminarObjetivo({commit,state},idObjetivo){
      db.collection(state.usuario.email).doc(idObjetivo).delete()
      .then(() =>{
        commit('setEliminarObjetivo',idObjetivo)
      })
    },
    crearUsuario({commit},usuario){
      auth.createUserWithEmailAndPassword(usuario.email,usuario.password)
      .then(res =>{
        const nuevoUsuario ={
          email: res.user.email,
          uid: res.user.uid 
        }
        db.collection(res.user.email).add({
          Nombre: 'Objetivo de ejemplo',
          Descripcion: 'Descripcion de ejemplo',
          

        }).then(doc =>{
          commit('setUsuario',nuevoUsuario)
          router.push('/')
        })
      })
      .catch(error =>{
        commit('setError',error.code)
      })
    },
    ingresoUsuario({commit},usuario){
      auth.signInWithEmailAndPassword(usuario.email,usuario.password)
      .then(res =>{
        const usuarioLogin ={
          email: res.user.email,
          uid: res.user.uid 
        }
        commit('setUsuario',usuarioLogin)
        router.push('/')
      })
      .catch(error =>{
        commit('setError',error.code)
      })
    },
    cerrarSesion({commit}){
      auth.signOut()
      .then(() =>{
        router.push('/login')
      })
    },
    detectarUsuario({commit},usuario){
      commit('setUsuario',usuario)
    }

  },
  getters:{
    existeUsuario(state){
      if(state.usuario === null){
        return false
      }else{
        return true
      }
    }
  },
  modules: {
  }
})

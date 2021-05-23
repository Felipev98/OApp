<template>
  <v-app>    
    <v-main>
      <transition mode="out-in" enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
      <router-view/>
      </transition>
    </v-main>

  </v-app>
  
</template>

<script>
export default {
  name: 'App',

  data: () => ({
  }),
  methods:{
  },
  computed:{
  }
};
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
</style>
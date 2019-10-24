<template>
  
  <div class="about">
    <Header></Header>
    <v-layout class="m-10 pa-50">
        <v-container class="pa-20 cont">
          <p class="display-3">Contacts</p>
        </v-container>
    </v-layout>
    
  </div>
</template>

<script>
import Header from '../components/header.vue'
export default {
  components: {
    Header
  },
}

</script>

<style scoped>
.m-10 {
    display: flex;
    justify-content: flex-end;
    margin-left: -35rem !important;
}

.cont {
  width: 25%;
  padding-top: 3.2rem;
}  

.display-3 {
    width: 80%;
    font-family: 'Satisfy', cursive !important;
    border-bottom: 3px solid #EF9A9A;
    padding-bottom: 1.3rem;
}

</style>
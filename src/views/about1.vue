<template>
  
  <div class="about">
    <Header></Header>
    <v-layout class="m-10 pa-50">
        <v-container class="cont">
          <v-img :src="potrait" class="pa-20"></v-img>
        </v-container>
        <v-container class="cont">
          <p class="display-3 font-wieght-medium cont-title">{{ name }}</p>
          <v-layout row wrap>
            <v-flex>
              <v-card  flat class="ma-3">
                <v-card-text>{{ bio }}</v-card-text>
                <v-card-title class="contact">Contacts</v-card-title>
                <v-card-text>{{ contacts }}</v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
         
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
  
  data: () => ({
      // img: 'https://www.pexels.com/photo/chocolate-cake-with-white-icing-and-strawberry-on-top-with-chocolate-69817/'
      width: 200,
      height: 200,
      potrait: '/potrait.jpg',
      name: 'Grace',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam, excepturi, quisquam tempore cum quibusdam tenetur exercitationem odit nesciunt quis saepe explicabo quaerat fugiat eos eveniet, provident ea! Vero quo perspiciatis at quam similique quod excepturi tempore culpa nulla itaque dignissimos non cumque quaerat magnam delectus amet earum facere nobis ad voluptas veniam, ipsum omnis. Labore, debitis? Commodi, eum. Laborum expedita distinctio, nesciunt necessitatibus rem suscipit perferendis, tempora et cumque nobis corrupti sapiente qui deleniti asperiores commodi labore ut reiciendis.',
      contacts: 'Lorem ipsum dolor',

      team: [
        {name: 'Jack Stockton', role: 'Co-Founder/CEO', avatar: '/jack.jpg'},
        {name: 'Jane Oloo', role: 'Head Pastry Chef', avatar: '/jane.jpg'}
      ],

    //   person: [
    //       {name: }
    //   ]
      
  })
}

</script>

<style scoped>
.pa-20 {
    height: 30rem !important;
}

.cont {
  width: 30%;
  padding-top: 3.2rem;
}  

.cont-title {
    font-family: 'Satisfy', cursive !important;
    border-bottom: 3px solid #EF9A9A;
    padding-bottom: 1.3rem;
}

.contact {
    color: #EF9A9A !important;
}

.toolbar-item:active,
.toolbar-item:hover
 {
   text-decoration: underline !important;
   text-decoration-color: #EF9A9A !important;
}

.theme--light.v-application {
    background-color: white !important;
    /* color: rgba(0, 0, 0, 0.87); */
}

</style>
<template>
  
  <div class="about">
    <Header></Header>
    <v-layout>
        <v-container class="cont image-cont">
          <v-img :src="potrait" class="image"></v-img>
        </v-container>

        <v-container class="cont contact-cont">
          <p class="display-3">{{ name }}</p>
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
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/header.vue'
import Footer from '../components/footer5.vue'
export default {
  components: {
    Header,
    Footer
  },
  
  data: () => ({
      width: 200,
      height: 200,
      potrait: '/portrait1.jpg',
      name: 'Mwendwa',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laboriosam, excepturi, quisquam tempore cum quibusdam tenetur exercitationem odit nesciunt quis saepe explicabo quaerat fugiat eos eveniet, provident ea! Vero quo perspiciatis at quam similique quod excepturi tempore culpa nulla itaque dignissimos non cumque quaerat magnam delectus amet earum facere nobis ad voluptas veniam, ipsum omnis. Labore, debitis? Commodi, eum. Laborum expedita distinctio, nesciunt necessitatibus rem suscipit perferendis, tempora et cumque nobis corrupti sapiente qui deleniti asperiores commodi labore ut reiciendis.',
      contacts: 'Lorem ipsum dolor',      
  })
}
</script>

<style scoped>
.image {
    height: 30rem !important;
}

.cont {
  width: 30%;
  padding-top: 3.2rem;
  
}  

.image-cont {
  position: relative;
  left: 4%;
  top: 2rem;
}

.contact-cont{
    position: relative;
    right: 4%;
}

.display-3 {
    font-family: 'Satisfy', cursive !important;
    border-bottom: 3px solid #EF9A9A;
    padding-bottom: 1.3rem;
    width: 80%;
}

.contact {
    color: #EF9A9A !important;
}

</style>
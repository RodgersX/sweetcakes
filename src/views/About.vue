<template>
  
  <div class="about">
    <Header></Header>
    <v-layout>
        <v-container class="cont">
          <p class="display-3">About</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, 
            labore odit sed sint impedit vero? Quisquam voluptatem, nobis porro nihil quidem,
            ratione ex quos sed facilis hic dicta maiores ipsa velit et unde iusto impedit ipsum.
            Assumenda commodi quia perspiciatis quae, in ab veniam facilis ipsum laudantium dignissimos, 
            necessitatibus ea consequuntur reprehenderit ullam deserunt neque?
            cupiditate sunt at fuga saepe necessitatibus possimus veritatis odio rerum corrupti quia dolore assumenda, 
            voluptas voluptatibus temporibus nostrum? Sint?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sint debitis sunt, facere eum, architecto ipsa, at enim itaque 
            exercitationem possimus nostrum repellendus. Repellat, 
            quae vero est sit magni, mollitia saepe, nemo repellendus rerum 
            at consequuntur eaque ea et dolorem odio quaerat natus. 
            unde sunt aliquam modi doloribus, velit officia nisi. 
            Accusamus temporibus ipsa voluptates voluptate 
            neque culpa quas dolorem laboriosam!</p>
        </v-container>

        <v-container class="cont">
          <p class="display-3">Team</p>
          
          <v-layout row wrap>
            <v-flex v-for="person in team" :key="person.name">
              <v-card flat :height="height" :width="width" class="ma-3">
                <v-img :height="height" :width="width" :src="person.avatar"></v-img>
                <v-btn text class="red--text" :to="person.href">{{ person.name }}</v-btn>
                <v-card-text>{{ person.role }}</v-card-text>
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
      width: 200,
      height: 200,

      team: [
        {name: 'Jane Oloo', role: 'Co-Founder/CEO', avatar: '/potrait.jpg', href: '/about1'},
        {name: 'Janice Mwendwa', role: 'Head Pastry Chef', avatar: '/portrait1.jpg', href: '/about2'}
      ]
  })
}

</script>

<style scoped>
.cont {
  width: 40%;
  padding-top: 50px;
}  

.red--text {
  text-transform: capitalize !important;
}

.display-3 {
    font-family: 'Satisfy', cursive !important;
    border-bottom: 3px solid #EF9A9A;
    padding-bottom: 20px;
    width: 70%;
}

.person-detail {
    color: transparent;
}
</style>
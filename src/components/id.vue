<template>
  <v-content>
   <div class="view-details" v-for="(cake,index) in cakes" :key="index">
     <v-layout v-if="cakeId == item.Id">
      <v-flex xs12 fluid>
        <v-img :src="cake.picture">
          <v-content>
           <router-link to="/" class="link">
          <v-btn color="transparent" class="elevation-0 font-weight-bold" dark>
        
          Go back home
          </v-btn>
        </router-link>
            <img/>
          </v-content>
        </v-img>
        <v-layout column align-center py-4>
           <div class='display-1 font-weight-medium '>
            {{ cake.name }}
           </div>
        </v-layout>
    <v-layout column>
        <v-flex xs10 md4 ma-4>
          <v-layout column text-xs-left style="margin-left:2%">
            <div class="title">
              {{ cake.recipe }}
            </div>
           </v-layout>
        </v-flex>
        <v-flex xs10 md4 ma-4>
          <v-layout column align-center>
            <iframe width="650" height="415" :src="item.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
          </v-layout>
        </v-flex>
      </v-layout>
          </v-flex>
        </v-layout>
   </div>
 </v-content>
</template>

<script>
export default {
    data() {
        return { 
            cakeId:this.$route.params.Pid,

            cakes: [
                    {id: 001, picture: '/cake.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 002, picture: '/cake1.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 003, picture: '/cake2.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 004, picture: '/cake1.jpg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 005, picture: '/cake3.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 006, picture: '/cupcake.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 007, picture: '/cake5.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    //{_id: 008, picture: '/cake4.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    //{_id: 009, picture: '/cake6.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: 010, picture: '/cake7.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'}

                ]
        }
    }
}
</script>

<style>

</style>
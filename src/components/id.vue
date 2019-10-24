<template>
  <v-content>
   <div class="view-details" v-for="(item,index) in items" :key="index">
     <Header></Header>
     <v-layout v-if="Id == item.Id">
        <v-flex xs12 fluid>
          <v-img :src="item.picture" class="image">
            <v-content>
              <router-link class="link">
                <v-btn class="elevation-0 font-weight-bold" dark to="/Recipe">
                  Go back home
                </v-btn>
              </router-link>
            </v-content>
          </v-img>
          
          <v-layout align-center py-4 class="recipe">
            <div class='display-1'>
              {{ item.name }}
            </div>
          </v-layout>

          <v-layout column class="recipe">
            <v-flex xs10 md4 ma-4>
              <v-layout column>
                <div class="title">
                  {{ item.recipe }}
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
   </div>
 </v-content>
</template>

<script>
import Header from '../components/header2.vue'
export default {

  components: {
    Header
  },

  name: 'cake',
    data() {
        return { 
            Id:this.$route.params.Pid,

            items: [
                    {id: '001', picture: '/cake.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '002', picture: '/cake1.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '003', picture: '/cake2.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '004', picture: '/cake1.jpg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '005', picture: '/cake3.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '006', picture: '/cupcake.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '007', picture: '/cake5.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '008', picture: '/cake4.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '009', picture: '/cake6.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'},
                    {id: '010', picture: '/cake7.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero? Quisquam voluptatem'}

                ]
        }
    }
}
</script>

<style scoped>
  .image {
      height: 20rem;
      width: 30%;
  }

  .recipe  {
    margin-left: 40%; 
    margin-top: -2%;
    background: #FFCDD2 !important;
    border-radius: 6px;
    padding: 10px !important;
    width: 40% !important;
    padding-bottom: 5px !important;
  }
</style>


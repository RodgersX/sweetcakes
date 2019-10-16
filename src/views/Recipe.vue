<template>
    <div class="recipe">
        <Header></Header>
        <p class="pt-5 display-3 font-wieght-medium cont-title">Recipes</p>
        <v-container class="my-5">
            <v-layout row wrap>
                <v-flex v-for="cake in cakes" :key="cake.name" dense class="flex-cont ma-2 pa-3"> 
                    <v-card flat :height="height" :width="width" class="card ma-5 pa-2" @click="toCake(cake.Id)">
                        <v-img :height="height" :width="width" :src="cake.picture" class="images"></v-img>
                        <div class="red--text">{{ cake.name }}</div>
                        <div>
                            <v-card-actions class="pa-0">
                                <!-- <v-card-text>Lorem ipsum dolor sit amet...</v-card-text> -->
                                <v-btn text v-on:click="cake.isHidden = false" width="100%">See More
                                    <v-btn icon>
                                        <v-icon>{{ show ? 'mdi-chevron-right' : 'mdi-chevron-down' }}</v-icon>
                                    </v-btn>
                                </v-btn>
                            </v-card-actions>
                        </div>
                        
                        <div class="flexgrow-1"></div>
                        <v-expand-transition>
                            <div>
                                <v-card-text v-if="isHidden">{{ cake.recipe }}</v-card-text>
                            </div>
                        </v-expand-transition>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Header from '../components/header.vue'
    export default {
        components: {
            Header
        }, 

        data() {
            return{
                height: 150,
                width: 200,

                cakes: [
                    {id: '001', picture: '/cake.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '002', picture: '/cake1.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '003', picture: '/cake2.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '004', picture: '/cake3.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '005', picture: '/cake4.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '006', picture: '/cake5.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '007', picture: '/cake6.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '008', picture: '/cake7.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '009', picture: '/cake1.jpg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: false},
                    {id: '010', picture: '/cupcake.jpeg', name: 'Lorem Ipsum', recipe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque nesciunt qui, labore odit sed sint impedit vero?', isHidden: true}

                ]
            }
        },

        methods: {
            toCake(cakeId) {
                this.$router.push({name:'cake', params:{Pid:cakeId}})
             },
        }


    }
</script>

<style scoped>
.cont-title {
    font-family: 'Satisfy', cursive !important;
    border-bottom: 3px solid #EF9A9A;
    padding-bottom: 20px;
}

.flex-cont {
    flex: none;
}

.card {
    background: transparent;
}

.images {
    border: 1px solid #EF9A9A;
    border-radius: 3px;
}

</style>
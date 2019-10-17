<template>
    <v-toolbar flat>
        <v-toolbar-title>Sweet Cakes</v-toolbar-title>
        <v-icon>mdi-google</v-icon>
        <v-spacer></v-spacer>
        <v-toolbar-items class="mr-10 tool_items">
        <v-btn text class="toolbar-item" to="/">Home</v-btn>
        <v-btn text class="toolbar-item" to="/about">About</v-btn>
        <v-btn text class="toolbar-item" to="/recipe">Recipes</v-btn>
        <v-btn text class="toolbar-item" to="/contacts">Contacts</v-btn>
        </v-toolbar-items>

        <v-btn fab depressed small color="brown lighten-2" class="mr-2 white--text">F</v-btn>
        <v-btn fab depressed small color="brown lighten-2" class="mr-2 white--text">G</v-btn>
        <v-btn fab depressed small color="brown lighten-2" class="mr-4 white--text">T</v-btn>
    </v-toolbar>
</template>

<style scoped>
.tool_items {
    background: #FFCDD2;
    border-radius: 7px;
}

.tool_item {
  text-transform: capitalize !important;
}

.toolbar-item:active,
.toolbar-item:hover
 {
   text-decoration: underline !important;
   text-decoration-color: #EF9A9A !important;
}

</style>
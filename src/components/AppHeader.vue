<template>
<div class="ui secondary pointing menu">
  
        <router-link to="/" class="item active">Image Storage</router-link>
        
        <div class="right menu">
          <div v-if="isLoggedIn" class="ui item" >
          <router-link class="ui item" to="/">Galleries</router-link>
          <router-link class="ui item" to="/upload">Upload</router-link>
          <a class="ui item" @click="logout">Logout</a>
          </div>

         <a v-if="!isLoggedIn" href="#" class="ui item" @click="login">Log In</a>
        </div>
</div> 

</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  methods: mapActions(["login", "logout","imagelist"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>

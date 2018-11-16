// 109 number Video
<template>
<div class="ui secondary pointing menu">
  
        <a class="item active">
          <h2>Image Storage</h2>
        </a>
        
        <div class="right menu">
          <div v-if="isLoggedIn" class="ui item" >
          <a class="ui item" >Galleries</a>
          <a class="ui item" >Upload</a>
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
  methods: mapActions(["login", "logout"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>

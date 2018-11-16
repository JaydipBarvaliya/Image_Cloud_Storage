
<template>
<div class="ui secondary pointing menu">
  
  <a class="item active">
    Image Storage
  </a>
   
  <div class="right menu">
    <div v-if="isLoggedIn" class="ui item" >
    Galleries

    upload               

    logout

    </div>

   
     <a v-if="!isLoggedIn" href="#" class="ui item" @click="login">Log In</a>
  

  </div>
</div> 

</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  methods: mapActions(["login"]),
  computed: mapGetters(["isLoggedIn"])
};
</script>


<template>
<div class="ui secondary pointing menu">
  
  <a class="item active">
    Image Storage
  </a>
  
   
  <div class="right menu">

    <a href="#" class="ui item" @click="login">Log In</a>
    <a href="#" class="ui item" @click="logout">LogOut</a>

  </div>
</div> 

</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AppHeader",
  methods: mapActions(["login"], ["logout"])
};
</script>

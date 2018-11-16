// Client ID:2b3a13c32f27df9
// Client secret: fca5241c2b1884485b2e77b7f2a1a655056b3900


<template>
<div>
    <AppHeader></AppHeader>
    <router-view></router-view>
</div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>


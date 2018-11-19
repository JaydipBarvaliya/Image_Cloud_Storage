<template>

    <div >
        <!-- <img v-for="image in allimages" v-bind:src="image.link"/> -->
    </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",

  methods: mapActions(["fetchImages"]),
  computed: mapGetters(["allimages"]),
  created() {
    this.fetchImages();
  }
};
</script>
 
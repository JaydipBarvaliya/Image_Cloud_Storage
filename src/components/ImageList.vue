<template>

    <div>
        Image List 
        {{ allimages.length }}
    </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ImageList',

    methods: mapActions(['fetchImages']),
    computed: mapGetters(['allimages']),
    created() { this.fetchImages(); }
};
</script>

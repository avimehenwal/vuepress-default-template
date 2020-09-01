<template>
  <section>
    <figure v-for="image in images" :key="image">
      <img :src="image" :alt="image">
    </figure>
  </section>
</template>

<script>
const path = require('path');
const fs = require('fs');

export default {
  props: {
    loc: {
      type: String,
      default: "assets",
    },
  },
  data: () => ({
    images: "",
  }),
  mounted() {
    console.log("IMAGE LOC: " + this.loc);
    this.images = this.importAll(
      require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
      /**
       * FIXME Error in mounted hook:
       * "TypeError: __webpack_require__(...).context is not a function"
       */
      // require.context(this.loc, false, /\.(png|jpe?g|svg)$/)
    );
    console.log(this.images);
  },
  methods: {
    importAll(r) {
      return r.keys().map(r);
    },
  },
};
</script>

<style>
</style>
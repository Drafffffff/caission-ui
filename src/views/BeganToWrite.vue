<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title my-4">
        <v-btn
          class="mx-5 my-2 back"
          fab
          color="gray"
          @click="$router.push({ name: 'CustomInterface' })"
        >
          <v-icon dark>mdi-arrow-left </v-icon>
        </v-btn>
        <p>{{ title }}</p>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
export default {
  data: () => ({
    title: "图案定制",
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
#inspire {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  max-width: 450px;
}

.content {
  overflow: hidden;
  .title {
    width: 100vw;
    // position: absolute;
    .back {
      position: absolute;
    }
    p {
      text-align: center;
      padding: 1rem 0;
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 0.0125em;
      line-height: 2rem;
    }
  }
  .cards {
    position: relative;
    // top: 20vh;

    margin: auto;
  }
}
</style>

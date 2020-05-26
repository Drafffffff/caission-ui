<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title my-4">
        <v-btn
          class="mx-5 my-2 back"
          fab
          color="gray"
          @click="$router.push('/recommendeddaily')"
        >
          <v-icon>mdi-arrow-left </v-icon>
        </v-btn>
        <p class="maintitle">{{ title }}</p>
      </div>
      <vue-card-stack
        :cards="cards"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="stackHeight * 0.8"
        class="cards my-7"
        v-if="params == 'daily'"
      >
        <template v-slot:card="{ card }">
          <div
            style="width: 100%; height: 100%; border-radius :20px"
            :style="{ background: card.background }"
          ></div>
        </template>
      </vue-card-stack>
    </v-content>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
import VueCardStack from "vue-card-stack";
export default {
  components: { VueCardStack },
  data: () => ({
    menu: false,
    params: "",
    pullUp: false,
    cards: [
      { background: "#00659d" },
      { background: "#00abbc" },
      { background: "#e2c58a" },
      { background: "#fc8890" },
      { background: "#b35d7f" },
    ],
    dailys:[
      {}
    ]
  }),
  methods: {},
  beforeMount() {
    this.params = this.$route.params.type;
    if (this.params == "daily") {
      let d = new Date();
      let month = d.getMonth();
      let day = d.getDate();
      this.title = ` ${month + 1}月${day}日`;
    }
    this.stackWidth = window.innerWidth;
    this.stackHeight = window.innerHeight;
  },
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
      letter-spacing: 0.25rem;
      line-height: 2rem;
    }
  }
  .cards {
    position: relative;
    // top: 20vh;
    top: -20px;
    margin: auto;
  }
}
</style>

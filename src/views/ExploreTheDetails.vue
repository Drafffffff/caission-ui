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
        :maxVisibleCards="5"
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
      <vue-card-stack
        :cards="colors"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="stackHeight * 0.8"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'color'"
      >
        <template v-slot:card="{ card }">
          <div style="width: 100%; height: 100%; border-radius :20px">
            <img :src="card.img" class="cardImg" />
          </div>
        </template>
      </vue-card-stack>

      <vue-card-stack
        :cards="dynastys"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="stackHeight * 0.8"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'dynasty'"
      >
        <template v-slot:card="{ card }">
          <div style="width: 100%; height: 100%; border-radius :20px">
            <img :src="card.img" class="cardImg" />
          </div>
        </template>
      </vue-card-stack>

      <vue-card-stack
        :cards="forms"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="stackHeight * 0.8"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'form'"
      >
        <template v-slot:card="{ card }">
          <div style="width: 100%; height: 100%; border-radius :20px">
            <img :src="card.img" class="cardImg" />
          </div>
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
    cards:[],
    colors: [
      { img: require("../assets/recommend/card/color1.jpg") },
      { img: require("../assets/recommend/card/color2.jpg") },
      { img: require("../assets/recommend/card/color3.jpg") },
      { img: require("../assets/recommend/card/color4.jpg") },
      { img: require("../assets/recommend/card/color5.jpg") },
      { img: require("../assets/recommend/card/color6.jpg") },
    ],
    dynastys: [
      { img: require("../assets/recommend/card/dynasty1.jpg") },
      { img: require("../assets/recommend/card/dynasty2.jpg") },
      { img: require("../assets/recommend/card/dynasty3.jpg") },
      { img: require("../assets/recommend/card/dynasty4.jpg") },
      { img: require("../assets/recommend/card/dynasty5.jpg") },
      { img: require("../assets/recommend/card/dynasty6.jpg") },
      { img: require("../assets/recommend/card/dynasty7.jpg") },
      { img: require("../assets/recommend/card/dynasty8.jpg") },
      { img: require("../assets/recommend/card/dynasty9.jpg") },
      { img: require("../assets/recommend/card/dynasty10.jpg") },
      { img: require("../assets/recommend/card/dynasty11.jpg") },
      { img: require("../assets/recommend/card/dynasty12.jpg") },
    ],
    forms: [
      { img: require("../assets/recommend/card/form1.jpg") },
      { img: require("../assets/recommend/card/form2.jpg") },
      { img: require("../assets/recommend/card/form3.jpg") },
      { img: require("../assets/recommend/card/form4.jpg") },
      { img: require("../assets/recommend/card/form5.jpg") },
      { img: require("../assets/recommend/card/form6.jpg") },
      { img: require("../assets/recommend/card/form7.jpg") },
      { img: require("../assets/recommend/card/form8.jpg") },
      { img: require("../assets/recommend/card/form9.jpg") },
      { img: require("../assets/recommend/card/form10.jpg") },

    ],

    dailys: [{}],
  }),
  methods: {},
  beforeMount() {
    this.params = this.$route.params.type;
    if (this.params == "daily") {
      let d = new Date();
      let month = d.getMonth();
      let day = d.getDate();
      this.title = ` ${month + 1}月${day}日`;
    } else if (this.params == "color") {
      this.title = ` 颜色`;
    } else if (this.params == "dynasty") {
      this.title = ` 朝代`;
    } else if (this.params == "form") {
      this.title = ` 形式`;
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
.cardImg {
  width: 100%;
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

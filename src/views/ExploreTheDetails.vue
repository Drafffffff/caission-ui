<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title my-4">
        <v-btn
          class="mx-5 my-2 back"
          fab
          color="gray"
          @click="$router.push('/')"
        >
          <v-icon>mdi-arrow-left </v-icon>
        </v-btn>
        <p class="maintitle">{{ title }}</p>
      </div>
      <vue-card-stack
        :cards="dailys"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="700"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'daily'"
      >
        <template v-slot:card="{ card }">
          <div
            style="width: 100%; height: 100%; border-radius :20px;overflow:scroll;"
          >
            <img :src="card.img" class="cardImg" style="padding:10px 0;"/>
          </div>
        </template>
      </vue-card-stack>

      <vue-card-stack
        :cards="colors"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="700"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'color'"
      >
        <template v-slot:card="{ card }">
          <div
            style="width: 100%; height: 100%; border-radius :20px;overflow:hidden;"
          >
            <img :src="card.img" class="cardImg" />
          </div>
        </template>
      </vue-card-stack>

      <vue-card-stack
        :cards="dynastys"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="700"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'dynasty'"
      >
        <template v-slot:card="{ card }">
          <div
            style="width: 100%; height: 100%; border-radius :20px;overflow:hidden;"
          >
            <img :src="card.img" class="cardImg" />
          </div>
        </template>
      </vue-card-stack>

      <vue-card-stack
        :cards="forms"
        :stack-width="stackWidth"
        :card-width="stackWidth - 55"
        :cardHeight="700"
        :maxVisibleCards="5"
        class="cards my-7"
        v-if="params == 'form'"
      >
        <template v-slot:card="{ card }">
          <div
            style="width: 100%; height: 100%; border-radius :20px;overflow:hidden;"
          >
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
    dailys: [
      { img: require("../assets/recommend/card1.png") },
      { img: require("../assets/recommend/card2.png") },
      { img: require("../assets/recommend/card3.png") },
    ],
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
  }),
  methods: {
    SectionToChinese(section) {
      var chnNumChar = [
        "零",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
      ];
      var chnUnitChar = ["", "十", "百", "千", "万", "亿", "万亿", "亿亿"];
      var strIns = "",
        chnStr = "";
      var unitPos = 0;
      var zero = true;
      while (section > 0) {
        var v = section % 10;
        if (v === 0) {
          if (!zero) {
            zero = true;
            chnStr = chnNumChar[v] + chnStr;
          }
        } else {
          zero = false;
          strIns = chnNumChar[v];
          strIns += chnUnitChar[unitPos];
          chnStr = strIns + chnStr;
        }
        unitPos++;
        section = Math.floor(section / 10);
      }
      return chnStr;
    },
  },
  beforeMount() {
    this.params = this.$route.params.type;
    if (this.params == "daily") {
      let d = new Date();
      let month = d.getMonth();
      let day = d.getDate();
      this.title = ` ${this.SectionToChinese(
        month + 1
      )}月${this.SectionToChinese(day)}日`;
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
  background-color: #f4f3f0;
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

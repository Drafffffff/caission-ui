<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title">
        <p>{{ title }}</p>
      </div>

      <p class="date">
        {{ date }}
      </p>

      <v-card class="card" elevation="0" @click="dailyClickHandle">
        <div class="white--text align-end card-img">
          <v-img
            src="../assets/recommend/recomded.png"
            class="align-end card-img"
            id="scale"
          >
          </v-img>
          <v-card-title class="card-title">了解详情</v-card-title>
        </div>
      </v-card>

      <div class="pull-panel" elevation="20">
        <div class="patten" @click="toggleUp">
          <img src="../assets/recommend/button.png" alt="" />
        </div>
        <div class="item-list" @click="cardClickHandle('color')">
          <div class="color">
            <div class="bg"></div>
            <div class="text">
              <p class="main">{{ items[0].title }}</p>
              <p class="more">了解详情</p>
            </div>
          </div>
          <div class="dynasty" @click="cardClickHandle('dynasty')">
            <div class="bg"></div>
            <div class="text">
              <p class="main">{{ items[1].title }}</p>
              <p class="more">了解详情</p>
            </div>
          </div>
          <div class="form" @click="cardClickHandle('form')">
            <div class="bg"></div>
            <div class="text">
              <p class="main">{{ items[2].title }}</p>
              <p class="more">了解详情</p>
            </div>
          </div>
          <p class="endline">更多精彩敬请期待</p>
        </div>
        <div class="end"></div>
      </div>
    </v-content>
    <div class="menu">
      <mainmenu current="RecommendedDaily" />
    </div>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
import mainmenu from "../components/menu";
export default {
  components: { mainmenu },
  data: () => ({
    menu: false,
    title: "每日推荐",
    pullUp: false,
    items: [
      {
        src: "../assets/recommend/1.png",
        title: "从【颜色】开始探索聚焦藻井千年盛彩",
      },
      {
        src: "../assets/recommend/2.png",
        title: "从【朝代】开始探索十余个朝代的藻井艺术",
      },
      {
        src: "../assets/recommend/3.png",
        title: "从【形式】开始探索走进藻井结构演变过程",
      },
    ],
  }),
  methods: {
    toggleUp() {
      if (!this.pullUp) {
        let el = document.querySelector(".title");
        let el2 = document.querySelector(".pull-panel");
        let height =
          parseInt(anime.get(el, "top", "px").slice(0, -2)) -
          parseInt(anime.get(el2, "top", "px").slice(0, -2)) +
          110;
        anime({
          targets: ".pull-panel",
          translateY: height,
        });
        this.pullUp = true;
        document.querySelector(".color").style.marginTop = "3rem";

        document.querySelector(".item-list").style.overflow = "scroll";
        this.title = "探索";
      }
    },
    toggleDown() {
      if (this.pullUp) {
        console.log("d");
        anime({
          targets: ".pull-panel",
          translateY: 0,
          easing: "easeInOutQuad",
          duration: 300,
        });
        this.pullUp = false;
        document.querySelector(".color").style.marginTop = "1rem";
        document.querySelector(".item-list").style.overflow = "hidden";
        this.title = "每日推荐";
      }
    },
    toggleMenu() {
      if (!this.menu) {
        console.log("toggle Menu");
        anime({
          targets: "#recommedmain",
          translateX: -150,
          easing: "linear",
          duration: 200,
        });
        anime({
          targets: ".menu",
          translateX: -150,
          opacity: 1,
          // delay: 200,
          duration: 400,
          easing: "linear",
        });
        this.menu = true;
      }
    },
    toggleBackMenu() {
      if (this.menu) {
        console.log("toggle Menu back");
        anime({
          targets: "#recommedmain",
          translateX: 0,
          easing: "linear",
          duration: 400,
        });

        anime({
          targets: ".menu",
          translateX: 0,
          opacity: 0,
          easing: "linear",
          duration: 400,
        });
        this.menu = false;
      }
    },
    dailyClickHandle() {
      this.$router.push({
        name: "ExploreDetails",
        params: { type: "daily" },
      });
      this.hammertime.destroy();
      this.hammerBody.destroy();
    },
    cardClickHandle(title) {
      this.$router.push({
        name: "ExploreDetails",
        params: { type: title },
      });
      this.hammertime.destroy();
      this.hammerBody.destroy();
    },
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
  created() {
    let d = new Date();
    let month = d.getMonth();
    let day = d.getDate();
    this.date = ` ${this.SectionToChinese(month + 1)}月${this.SectionToChinese(day)}日`;
  },
  mounted() {
    let bodyEl = document.querySelector(".app");
    this.hammerBody = new Hammer(bodyEl);
    let el = document.querySelector(".pull-panel");
    this.hammertime = new Hammer(el);
    this.hammertime.on("swipeup", (ev) => {
      this.toggleUp();
      // console.log(ev);
    });
    this.hammertime.on("swipedown", (ev) => {
      this.toggleDown();
      // console.log(ev);
    });
    this.hammerBody.on("swipeleft", (ev) => {
      this.toggleMenu();
      // console.log(ev);
    });
    this.hammerBody.on("swiperight", (ev) => {
      this.toggleBackMenu();
      // console.log(ev);
    });
    this.hammertime.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
  },
  beforeDestroy() {
    this.hammertime.destroy();
    this.hammerBody.destroy();
  },
};
</script>

<style lang="scss" scoped>
.date {
  position: absolute;
  top: 10vh;
  text-align: center;
  z-index: 10;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  margin: auto;
  letter-spacing: 0.4rem;
  text-shadow: 3px 3px 5px gray;
  animation: fontScale 8s;
  animation-direction: alternate;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
#inspire {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  max-width: 450px;
  background-color: #f4f3f0;
}
.menu {
  position: absolute;
  top: 0;
  right: -150px;
  height: 100vh;
  width: 150px;
  z-index: 0;

  // opacity: 0;
  .menu-list {
    display: flex;
    flex-direction: column;
  }
  .menu-item {
    width: 5rem;
    height: 5rem;
    background-color: gray;
    margin: 10px auto;
    border-radius: 50%;
    &:first-child {
      margin-top: 100px;
    }
  }
}

.content {
  overflow: hidden;
  .title {
    width: 100vw;
    position: absolute;
    p {
      text-align: center;
      padding: 1rem 0;
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 0.0125em;
      line-height: 2rem;
    }
  }
  .card {
    position: relative;
    width: 90%;
    margin: 5%;
    top: 6vh;
    border-radius: 20px;
    .card-img {
      width: 100%;
      #scale {
        animation: scale 8s;
        animation-direction: alternate;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
      }
      overflow: hidden;
    }
    .card-title {
      position: absolute;
      bottom: 0px;
      text-shadow: 3px 3px 5px gray;
    }
  }
  .card-container {
    z-index: 20;
    width: 100%;
    background-color: #fff;
    .showcard {
      width: 100%;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .endline {
    width: 100%;
    text-align: center;
    margin-top: 4px;
    font-size: 0.9rem;
    color: #ac845d;
  }

  .pull-panel {
    position: absolute;
    top: 60vh;
    z-index: 10;
    background-color: rgb(221, 205, 169);
    width: 100vw;
    height: 120vh;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px -5px 30px rgb(179, 179, 179);
    .patten {
      width: 80px;
      // background-color: rgb(221, 205, 169);
      height: 80px;
      position: relative;
      margin: auto;
      border-radius: 10px;
      top: -40px;
      transform: rotate(45deg);
    }
    .item-list {
      // overflow: hidden;
      // background-color: rgb(221, 205, 169);

      height: 76vh;
      display: flex;
      flex-direction: column;
      & > div {
        .bg {
          height: 150px;
          background-position: center center;
          transition: all 0.3s ease-in-out;
          filter: brightness(70%);
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(117, 91, 62, 0.295);
          background-size: cover;
          &:hover {
            box-shadow: 0 5px 20px rgba(117, 91, 62, 0.432);
          }
        }
        .text {
          // position: absolute;
          transform: translateY(-150px);
          width: 90%;
          // float: left;
          p {
            display: block;
            // height: 300px;
          }
          p.main {
            color: rgb(236, 236, 236);
            margin: 1rem 0.5rem;
            font-size: 1.4rem;

            // display: block;
          }
          p.more {
            color: rgba(255, 255, 255, 0.651);
            margin: 1rem 0.6rem;
            font-size: 1rem;
          }
        }
      }

      .color {
        margin: 1rem 1.5rem;
        height: 150px;
        .bg {
          // flex: 1;
          background-image: url("../assets/recommend/1.png");
        }
      }

      .dynasty {
        margin: 1rem 1.5rem;
        height: 150px;
        .bg {
          // flex: 1;
          background-image: url("../assets/recommend/2.png");
        }
      }
      .form {
        margin: 1rem 1.5rem;
        height: 150px;
        .bg {
          // flex: 1;
          background-image: url("../assets/recommend/3.png");
        }
      }
    }
    .end {
      height: 100px;
    }
  }
}
@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.25);
  }
}
@keyframes fontScale {
  from {
    font-size: 1.2rem;
    // letter-spacing: 0.2rem;
    text-shadow: 3px 3px 1px gray;
  }
  to {
    font-size: 1.2rem;
    letter-spacing: 0.4rem;
    text-shadow: 3px 3px 5px gray;
  }
}
</style>

<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title ">
        <p>{{ title }}</p>
      </div>

      <v-card class="card">
        <div class="card-img ">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../assets/custom/show1.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/custom/show2.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/custom/show3.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img src="../assets/custom/show4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </v-card>
      <div class="card-title">
        <p v-if="imgi == 0">藻井结构示意</p>
        <p v-if="imgi == 1">垂幔层</p>
        <p v-if="imgi == 2">边饰层</p>
        <p v-if="imgi == 3">井心层</p>
      </div>

      <div class="pull-panel" elevation="20">
        <div class="patten">
          <img src="../assets/recommend/button.png" alt="" />
        </div>
      </div>

      <div class="button-card">
        <div class="write-button" elevation="1" @click="writeClickHandle">
          <div icon>
            <img class="icon" src="../assets/custom/dingzhi.png" alt="" />
          </div>
          <div class="text">
            开始<br />
            定制
          </div>
        </div>
        <div class="doodle-button" elevation="1" @click="doodleClickHandle">
          <div icon>
            <img class="icon" src="../assets/custom/tuya.png" alt="" />
          </div>
          <div class="text">开始<br />涂鸦</div>
        </div>
      </div>
    </v-content>
    <div class="menu">
      <mainmenu current="CustomInterface" />
    </div>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
import mainmenu from "../components/menu";
import Swiper from "swiper";
import "../assets/custom/swiper.css";

export default {
  components: {
    mainmenu,
    // swiper,
  },
  data: () => ({
    menu: false,
    title: "定制",
    imgi: 0,
  }),
  methods: {
    toggleMenu() {
      if (!this.menu) {
        console.log("toggle Menu");
        anime({
          targets: "#recommedmain",
          translateX: -100,
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
    writeClickHandle() {
      this.$router.push("write");
      this.hammerBody.destroy();
    },
    doodleClickHandle() {
      this.$router.push("doodle");
      this.hammerBody.destroy();
    },
  },
  mounted() {
    const self = this;
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      on: {
        slideChangeTransitionStart: function() {
          self.imgi = this.activeIndex;
        },
      },
    });
    let bodyEl = document.querySelector(".app");
    this.hammerBody = new Hammer(bodyEl);
    this.hammerBody.on("swipeleft", ev => {
      this.toggleMenu();
      // console.log(ev);
    });
    this.hammerBody.on("swiperight", ev => {
      this.toggleBackMenu();
      // console.log(ev);
    });
  },
  beforeDestroy() {
    this.hammerBody.destroy();
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
    z-index: 100;
    color: #fff;
    font-weight: bolder;
    letter-spacing: 1rem;
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
    width: 80%;
    margin: 10%;
    z-index: 20;
    top: 6vh;
    border-radius: 20px;
    overflow: hidden;

    .card-img {
      // margin: 50px;
      width: 300px;
      height: 300px;
      overflow: hidden;
      img {
        width: 300px;
      }
    }
  }
  .card-title {
    position: absolute;
    top: 52vh;
    z-index: 20;
    width: 100vw;
    p {
      width: 100%;
      text-align: center;
      font-size: 1.2rem;
      color: #fff;
      font-weight: bolder;
      letter-spacing: 0.6rem;
    }
  }
  .pull-panel {
    position: absolute;
    top: 0;
    z-index: 10;
    width: 100vw;
    height: 66vh;
    border-radius: 0 0 20px 20px;
    background-color: rgb(221, 205, 169);
    box-shadow: 0px 5px 30px rgb(179, 179, 179);
    .patten {
      width: 80px;
      height: 80px;
      background-color: rgb(206, 206, 206);
      position: relative;
      top: 66vh;
      margin: 0 auto;
      border-radius: 10px;
      transform: translateY(-40px) rotate(45deg);
    }
  }
  .button-card {
    position: absolute;
    bottom: 5vh;
    width: 100%;
    height: 25vh;
    display: flex;
    & > div {
      flex: 1;
      margin: 40px 0;
      border-radius: 20px;
      background-color: #f4f3f0;
    }
    & > div:first-child {
      margin-left: 20px;
      margin-right: 15px;
      display: flex;
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50px;
        }
      }

      .text {
        padding-left: 0rem;
      }
    }
    & > div:last-child {
      margin-right: 20px;
      display: flex;
      div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50px;
        }
      }

      .text {
        padding-left: 0rem;
      }
    }
  }
}
</style>

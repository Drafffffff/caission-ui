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
    <div class="panel" id="canvas">
      <div class="">
        <div class="canvas" id="maincanvas">
          <div class="main" :class="bg[active]" id="svg"></div>
        </div>
      </div>

      <div class="swiper-container parttenPanel " id="swiper-container">
        <div class="nav">
          <span :class="active == 0 ? 'active' : ''">颜色</span>
          <span :class="active == 1 ? 'active' : ''">垂幔</span>
          <span :class="active == 2 ? 'active' : ''">边饰</span>
          <span :class="active == 3 ? 'active' : ''">井心</span>
        </div>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="selector1">
              <div :class="color == 0 ? 'active' : ''" @click="changeColor(0)">
                <img src="../assets/custom/color/6.svg" alt="" />
              </div>
              <div :class="color == 1 ? 'active' : ''" @click="changeColor(1)">
                <img src="../assets/custom/color/5.svg" alt="" />
              </div>

              <div :class="color == 2 ? 'active' : ''" @click="changeColor(2)">
                <img src="../assets/custom/color/4.svg" alt="" />
              </div>
            </div>
            <div class="selector2">
              <div :class="color == 3 ? 'active' : ''" @click="changeColor(3)">
                <img src="../assets/custom/color/3.svg" alt="" />
              </div>

              <div :class="color == 3 ? 'active' : ''" @click="changeColor(4)">
                <img src="../assets/custom/color/2.svg" alt="" />
              </div>

              <div :class="color == 3 ? 'active' : ''" @click="changeColor(5)">
                <img src="../assets/custom/color/1.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="selector1">
              <div
                :class="layer.outer == 2 ? 'active' : ''"
                @click="outerChange(2)"
              >
                <img src="../assets/custom/outer/SVG/1.svg" alt="" />
              </div>
              <div
                :class="layer.outer == 6 ? 'active' : ''"
                @click="outerChange(6)"
              >
                <img src="../assets/custom/outer/SVG/2.svg" alt="" />
              </div>

              <div
                :class="layer.outer == 1 ? 'active' : ''"
                @click="outerChange(1)"
              >
                <img src="../assets/custom/outer/SVG/3.svg" alt="" />
              </div>
            </div>
            <div class="selector2">
              <div
                :class="layer.outer == 3 ? 'active' : ''"
                @click="outerChange(3)"
              >
                <img src="../assets/custom/outer/SVG/4.svg" alt="" />
              </div>

              <div
                :class="layer.outer == 5 ? 'active' : ''"
                @click="outerChange(5)"
              >
                <img src="../assets/custom/outer/SVG/5.svg" alt="" />
              </div>

              <div
                :class="layer.outer == 4 ? 'active' : ''"
                @click="outerChange(4)"
              >
                <img src="../assets/custom/outer/SVG/6.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="selector1">
              <div
                :class="layer.midder.indexOf(5) > -1 ? 'active' : ''"
                @click="midderChange(5)"
              >
                <img src="../assets/custom/midder/SVG/1.svg" alt="" />
              </div>
              <div
                :class="layer.midder.indexOf(6) > -1 ? 'active' : ''"
                @click="midderChange(6)"
              >
                <img src="../assets/custom/midder/SVG/2.svg" alt="" />
              </div>

              <div
                :class="layer.midder.indexOf(1) > -1 ? 'active' : ''"
                @click="midderChange(1)"
              >
                <img src="../assets/custom/midder/SVG/3.svg" alt="" />
              </div>
            </div>
            <div class="selector2">
              <div
                :class="layer.midder.indexOf(3) > -1 ? 'active' : ''"
                @click="midderChange(3)"
              >
                <img src="../assets/custom/midder/SVG/4.svg" alt="" />
              </div>

              <div
                :class="layer.midder.indexOf(4) > -1 ? 'active' : ''"
                @click="midderChange(4)"
              >
                <img src="../assets/custom/midder/SVG/5.svg" alt="" />
              </div>

              <div
                :class="layer.midder.indexOf(2) > -1 ? 'active' : ''"
                @click="midderChange(2)"
              >
                <img src="../assets/custom/midder/SVG/6.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="selector1">
              <div
                :class="layer.inner == 3 ? 'active' : ''"
                @click="innerChange(3)"
              >
                <img src="../assets/custom/inner/SVG/1.svg" alt="" />
              </div>
              <div
                :class="layer.inner == 2 ? 'active' : ''"
                @click="innerChange(2)"
              >
                <img src="../assets/custom/inner/SVG/2.svg" alt="" />
              </div>

              <div
                :class="layer.inner == 1 ? 'active' : ''"
                @click="innerChange(1)"
              >
                <img src="../assets/custom/inner/SVG/3.svg" alt="" />
              </div>
            </div>
            <div class="selector2">
              <div
                :class="layer.inner == 6 ? 'active' : ''"
                @click="innerChange(6)"
              >
                <img src="../assets/custom/inner/SVG/4.svg" alt="" />
              </div>

              <div
                :class="layer.inner == 4 ? 'active' : ''"
                @click="innerChange(4)"
              >
                <img src="../assets/custom/inner/SVG/5.svg" alt="" />
              </div>

              <div
                :class="layer.inner == 5 ? 'active' : ''"
                @click="innerChange(5)"
              >
                <img src="../assets/custom/inner/SVG/6.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nextbutton" @click="$router.push('ProductDetails')">
        <p>下一步</p>
      </div>
    </div>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
import drawShape from "../assets/shapes.js";
import { SVG } from "@svgdotjs/svg.js";
import Swiper from "swiper";
import "../assets/custom/swiper.css";
export default {
  data: () => ({
    title: "图案定制",
    mySwiper: {},
    shapes: {},
    step: 1,
    layer: {
      outer: 0,
      midder: [0, 0, 0],
      inner: 0,
    },
    active: 0,
    color: "",
    bg: ["bg", "bgout", "bgmid", "bgin"],
  }),
  methods: {
    outerChange(n) {
      this.layer.outer = n;
      this.updateSVG();
    },
    midderChange(n) {
      this.layer.midder.push(n);
      this.layer.midder = this.layer.midder.splice(1, 3);
      this.shapes.midder0();
      this.updateSVG();
    },
    innerChange(n) {
      this.layer.inner = 0;
      this.layer.inner = n;
      this.updateSVG();
    },
    cleanSVG() {
      this.layer.outer = 0;
      this.layer.inner = 0;
      this.layer.midder = [0, 0, 0];
      this.updateSVG();
    },
    updateSVG() {
      let drawOuter = "outer" + this.layer.outer.toString();
      let drawInner = "inner" + this.layer.inner.toString();
      let drawMidder = [];
      for (let i = 0; i < 3; i++) {
        drawMidder.push("midder" + this.layer.midder[i].toString());
      }
      for (let i = 0; i < 3; i++) {
        this.shapes[drawMidder[i]]();
      }
      this.shapes[drawInner]();
      this.shapes[drawOuter]();
    },
    changeColor(n) {
      this.shapes.colors = this.shapes.themes[n];
      this.color = n;
      this.updateSVG();
    },
  },
  mounted() {
    const self = this;
    this.shapes = new drawShape(
      SVG()
        .addTo("#svg")
        .size(this.width, this.width)
    );
    this.shapes.width = this.width;
    document.getElementById("maincanvas").style.width =
      (this.width + 40).toString() + "px";
    document.getElementById("maincanvas").style.height =
      (this.width + 40).toString() + "px";
    // this.shapes.outer6();
    this.mySwiper = new Swiper(".swiper-container", {
      // autoplay: true, //可选选项，自动滑动
      on: {
        slideChangeTransitionStart: function() {
          self.active = this.activeIndex;
        },
      },
    });
  },
  computed: {
    width: function() {
      return document.getElementById("canvas").offsetWidth * 0.9 - 40;
    },
  },
};
</script>

<style lang="scss" scoped>
#inspire {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  max-width: 450px;
}
.panel {
  width: 100%;
  height: 100%;
  // background-color: gray;
  .canvas {
    margin: auto;
    background-color: #f4f3f0;
    // box-shadow: 0 5px 10px gray;
    border-radius: 20px;
    padding: 20px;

    #svg {
      width: 100%;
      height: 100%;
      // background-color: #999;

      background-size: cover;
    }
    .bg {
      background-image: url("../assets/custom/bg.png");
    }
    .bgin {
      background-image: url("../assets/custom/bgin.png");
    }
    .bgmid {
      background-image: url("../assets/custom/bgmid.png");
    }
    .bgout {
      background-image: url("../assets/custom/bgout.png");
    }
  }

  .parttenPanel {
    // height: 100%;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    border-radius: 20px;
    padding: 20px;
    background-color: #f4f3f0;
    .nav {
      height: 25px;

      & > span {
        font-size: 0.8rem;
        height: 30px;
        padding: 0 5px;
        color: gray;
        transition: all 0.3s ease-in-out;
        &.active {
          font-size: 1.2rem;
          color: #ac845d;
        }
      }
      margin-bottom: 10px;
    }
    .selector1 {
      display: flex;
      justify-content: space-around;

      div {
        width: 70px;
        height: 70px;
        border-radius: 10px;
        background-color: #fff;
        padding: 10px;
        transition: all 0.3s ease-in-out;
      }
      & > .active {
        border: 3px solid #ac845d;
      }
    }
    .selector2 {
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
      div {
        border-radius: 10px;
        width: 70px;
        height: 70px;

        background-color: #fff;
        padding: 10px;
        transition: all 0.3s ease-in-out;
      }
      & > .active {
        border: 3px solid #ac845d;
      }
    }
  }
  .nextbutton {
    width: 90%;
    margin: 20px auto;
    height: 80px;
    border-radius: 20px;
    background-color: #f4f3f0;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      margin: 0;
    }
  }
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
}
</style>

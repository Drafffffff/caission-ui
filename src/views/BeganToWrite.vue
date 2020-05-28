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
          <div class="main" id="svg"></div>
        </div>
      </div>
      <div class="colorPanel"></div>
      <div class="parttenPanel">
        <div class="selector1">
          <div class="">
            <img src="../assets/custom/outer/SVG/1.svg" alt="" />
          </div>
          <div class="">
            <img src="../assets/custom/outer/SVG/2.svg" alt="" />
          </div>

          <div class="">
            <img src="../assets/custom/outer/SVG/3.svg" alt="" />
          </div>
        </div>
        <div class="selector2">
          <div class="">
            <img src="../assets/custom/outer/SVG/4.svg" alt="" />
          </div>

          <div class="">
            <img src="../assets/custom/outer/SVG/5.svg" alt="" />
          </div>

          <div class="">
            <img src="../assets/custom/outer/SVG/6.svg" alt="" />
          </div>
        </div>
        <div class="nextButton"></div>
      </div>
    </div>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
export default {
  data: () => ({
    title: "图案定制",
    shapes: {},
    step: 1,
    layer: {
      outer: 0,
      midder: [0, 0, 0],
      inner: 0,
    },
  }),
  methods: {},
  mounted() {
    console.log(this.width);
    document.getElementById("maincanvas").style.width =
      this.width * (0.9).toString() + "px";
    document.getElementById("maincanvas").style.height =
      this.width * (0.9).toString() + "px";
  },
  computed: {
    width: function() {
      return document.getElementById("canvas").offsetWidth;
    },
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
.panel {
  width: 100%;
  height: 100%;
  // background-color: gray;
  .canvas {
    margin: auto;
    background-color: #f4f3f0;
    box-shadow: 0 5px 10px gray;
    border-radius: 20px;
    padding: 20px;

    #svg {
      width: 100%;
      height: 100%;
      background-color: #000;
    }
  }
  .colorPanel {
    width: 90%;
    margin: 20px auto;
    height: 80px;
    border-radius: 20px;
    background-color: #f4f3f0;
  }
  .parttenPanel {
    // height: 100%;
    width: 90%;
    margin: auto;
    border-radius: 20px;
    padding: 20px;
    background-color: #f4f3f0;
    .selector1 {
      display: flex;
      justify-content: space-around;

      div {
        width: 70px;
        border-radius: 10px;
        background-color: #fff;
        padding: 10px;
      }
    }
    .selector2 {
      display: flex;
      justify-content: space-around;
      margin-top: 5px;
      div {
        border-radius: 10px;
        width: 70px;
        background-color: #fff;
        padding: 10px;
      }
    }
    .nextButton {
      height: 80px;
      margin-top: 5px;
      background-color: rgb(221, 205, 169);
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

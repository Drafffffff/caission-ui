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
      <div class="bg" >
        <!-- <img src="../assets/custom/bgin.png" alt=""> -->
        <div class="canvas" id="maincanvas"  :class="bg[flag.processFlag]">
          <vue-p5 @setup="setup" @draw="draw"> </vue-p5>
        </div>
      </div>

      <div class="swiper-container parttenPanel " id="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="selector1">
              <div @click="changeFLag(1)" :class="flag.processFlag==1?'active':''">
                <img src="../assets/custom/outer.png" alt="" />
              </div>
              <div @click="changeFLag(2)" :class="flag.processFlag==2?'active':''">
                <img src="../assets/custom/midder.png" alt="" />
              </div>

              <div@click="changeFLag(3)" :class="flag.processFlag==3?'active':''">
                <img src="../assets/custom/inner.png" alt="" />
              </div>
            </div>
            <div class="selector2">
              <div style="background-color:#95C7B6" @click="changeColor(0)" :class="flag.curColor==0?'active':''"></div>
              <div style="background-color:#F0D680" @click="changeColor(1)" :class="flag.curColor==1?'active':''"></div>
              <div style="background-color:#E1B45E" @click="changeColor(2)" :class="flag.curColor==2?'active':''"></div>
              <div style="background-color:#B46530" @click="changeColor(3)" :class="flag.curColor==3?'active':''"></div>
              <div style="background-color:#A74923" @click="changeColor(4)" :class="flag.curColor==4?'active':''"></div>
              <div style="background-color:#8AB1D7" @click="changeColor(5)" :class="flag.curColor==5?'active':''"></div>
              <div style="background-color:#E7BE99" @click="changeColor(6)" :class="flag.curColor==6?'active':''"></div>
            </div>
          </div>
        </div>
      </div>
            <div class="nextbutton" @click="save=true">
        <p>保存</p>
      </div>
    </div>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
import VueP5 from "vue-p5";
// import collide2D from "../assets/p5c.js";
export default {
  data: () => ({
    title: "涂鸦",
    flag: {
      processFlag: 1,
      curColor: 0,
    },
    save:false,
    colors: ["#95C7B6", "#F0D680", "#E1B45E", "#B46530", "#A74923", "#8AB1D7", "#E7BE99"],
    color: "",
        bg: ["","bgout", "bgmid", "bgin"],
  }),
  methods: {
    setup(sketch) {
      sketch.createCanvas(this.width, this.width);
      // sketch.text("Hello p5!", 40, 40);
        document.querySelector('.canvas > div').className = " bgout"
      // sketch.background(220);
      sketch.frameRate(200);
    },
    draw(sketch) {
      if (this.flag.processFlag === 1) {
        this.drawOuter(sketch);
      }
      if (this.flag.processFlag === 2) {
        this.drawMidder(sketch);
      }
      if (this.flag.processFlag === 3) {
        this.drawInner(sketch);
      }
      if(this.save){
        sketch.saveCanvas('myCanvas','png');
        sketch.print('a');
        this.save = false;
      }
    },
    changeFLag(n) {
      console.log(n)
      this.flag.processFlag = n;
      if(n==1){
        document.querySelector('.canvas > div').className = " bgout"
      }
      if(n==2){
          document.querySelector('.canvas > div').className = " bgmid"

      }
      if(n==3){
         document.querySelector('.canvas > div').className = " bgin"
      }

    },
    changeColor(n){
      this.flag.curColor=n;
    },
    drawOuter(sketch) {
      sketch.push();
      sketch.translate(sketch.width / 2, sketch.height / 2);
      let mx = sketch.mouseX - sketch.width / 2;
      let my = sketch.mouseY - sketch.height / 2;
      let pmx = sketch.pmouseX - sketch.width / 2;
      let pmy = sketch.pmouseY - sketch.height / 2;
      if (sketch.mouseIsPressed) {
        sketch.strokeWeight(1);
        if (
          this.collidePointRect(
            sketch.mouseX,
            sketch.mouseY,
            0,
            0,
            sketch.width / 3.7,
            sketch.width / 3.7
          ) ||
          this.collidePointRect(
            sketch.mouseX,
            sketch.mouseY,
            sketch.width - sketch.width / 3.7,
            0,
            sketch.width,
            sketch.width / 3.7
          ) ||
          this.collidePointRect(
            sketch.mouseX,
            sketch.mouseY,
            0,
            sketch.width - sketch.width / 3.7,
            sketch.width / 3.7,
            sketch.width,
          ) ||
          this.collidePointRect(
            sketch.mouseX,
            sketch.mouseY,
            sketch.width - sketch.width / 3.7,  
            sketch.width - sketch.width / 3.7,
            sketch.width,
            sketch.width
          )
        ) {
          sketch.strokeWeight(4);
          sketch.stroke(this.colors[this.flag.curColor]);
          for (let i = 0; i < 4; i++) {
            sketch.rotate(sketch.PI / 2);
                        let d = sketch.dist(mx, my, pmx, pmy);
            let sw = sketch.map(d, 0, 20, 14, 1);
            sketch.strokeWeight(sw);
            sketch.line(mx, my, pmx, pmy);
          }
          // line(mx, my, pmx, pmy);
        }
      }
      sketch.pop();
    },
    drawMidder(sketch) {
      sketch.push();
      sketch.translate(sketch.width / 2, sketch.height / 2);
      let mx = sketch.mouseX - sketch.width / 2;
      let my = sketch.mouseY - sketch.height / 2;
      let pmx = sketch.pmouseX - sketch.width / 2;
      let pmy = sketch.pmouseY - sketch.height / 2;
      if (sketch.mouseIsPressed) {
        sketch.strokeWeight(1);
        if (
          this.collidePointEllipse(
            sketch.mouseX,
            sketch.mouseY,
            sketch.width / 2,
            sketch.height / 2,
            sketch.width / 1.2,
            sketch.width / 1.2
          )
        ) {
          if (
            !this.collidePointEllipse(
              sketch.mouseX,
              sketch.mouseY,
              sketch.width / 2,
              sketch.height / 2,
              80,
              80
            )
          ) {
            sketch.stroke(this.colors[this.flag.curColor]);
            sketch.strokeWeight(4);
            for (let i = 0; i < 6; i++) {
              sketch.rotate(sketch.TWO_PI / 6);
                          let d = sketch.dist(mx, my, pmx, pmy);
            let sw = sketch.map(d, 0, 20, 14, 1);
            sketch.strokeWeight(sw);
              sketch.line(mx, my, pmx, pmy);
            }
          }
          // line(mx, my, pmx, pmy);
        }
      }
      sketch.pop();
    },
    drawInner(sketch) {
      sketch.push();
      sketch.translate(sketch.width / 2, sketch.height / 2);
      let mx = sketch.mouseX - sketch.width / 2;
      let my = sketch.mouseY - sketch.height / 2;
      let pmx = sketch.pmouseX - sketch.width / 2;
      let pmy = sketch.pmouseY - sketch.height / 2;
      if (sketch.mouseIsPressed) {
        sketch.strokeWeight(1);
        if (
          this.collidePointEllipse(
            sketch.mouseX,
            sketch.mouseY,
            sketch.width / 2,
            sketch.height / 2,
            80,
            80
          )
        ) {
          sketch.stroke(this.colors[this.flag.curColor]);
          sketch.strokeWeight(4);
          for (let i = 0; i < 12; i++) {
            sketch.rotate(sketch.TWO_PI / 12);
            let d = sketch.dist(mx, my, pmx, pmy);
            let sw = sketch.map(d, 0, 20, 14, 1);
            sketch.strokeWeight(sw);
            sketch.line(mx, my, pmx, pmy);
          }

          // line(mx, my, pmx, pmy);
        }
      }
      sketch.pop();
    },
    collidePointRect(pointX, pointY, x, y, xW, yW) {
      //2d
      if (
        pointX >= x && // right of the left edge AND
        pointX <= x + xW && // left of the right edge AND
        pointY >= y && // below the top AND
        pointY <= y + yW
      ) {
        // above the bottom
        return true;
      }
      return false;
    },
    collidePointEllipse(x, y, cx, cy, dx, dy) {
      //2d
      var rx = dx / 2,
        ry = dy / 2;
      // Discarding the points outside the bounding box
      if (x > cx + rx || x < cx - rx || y > cy + ry || y < cy - ry) {
        return false;
      }
      // Compare the point to its equivalent on the ellipse
      var xx = x - cx,
        yy = y - cy;
      var eyy = (ry * Math.sqrt(Math.abs(rx * rx - xx * xx))) / rx;
      return yy <= eyy && yy >= -eyy;
    },
  },
  mounted() {
    const self = this;
    document.getElementById("maincanvas").style.width =
      (this.width + 40).toString() + "px";
    document.getElementById("maincanvas").style.height =
      (this.width + 40).toString() + "px";
    // this.shapes.outer6();
  },
  computed: {
    width: function() {
      return document.getElementById("canvas").offsetWidth * 0.9 - 40;
    },
  },
  components: {
    VueP5,
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
    // box-shadow: 0 5px 10px gray;
    // background-color: #000;
    border-radius: 20px;
    padding: 20px;
    div{
      background-size: cover;
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
  
#canvas{
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
        & > img {
          width: 100%;
        }
      }
      & > .active {
        border: 3px solid #ac845d;
      }
    }
    .selector2 {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;
      div {
        border-radius: 10px;
        width: 30px;
        height: 30px;

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

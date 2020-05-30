<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="goods">
        <div class="categroy">
          <div class="title">
            杯垫系列
          </div>
          <div class="items">
            <div class="item">
              <img src="../assets/store/1.png" alt="" />
              <p>item1</p>
            </div>
            <div class="item">
              <img src="../assets/store/2.png" alt="" />
              <p>item2</p>
            </div>
            <div class="item">
              <img src="../assets/store/3.png" alt="" />
              <p>item3</p>
            </div>
            <div class="item">
              <img src="../assets/store/4.png" alt="" />
              <p>item4</p>
            </div>
          </div>
        </div>
        <div class="categroy">
          <div class="title">
            冰箱贴系列
          </div>
          <div class="items">
            <div class="item">
              <img src="../assets/store/5.png" alt="" />
              <p>item1</p>
            </div>
            <div class="item">
              <img src="../assets/store/6.png" alt="" />
              <p>item2</p>
            </div>
            <div class="item">
              <img src="../assets/store/7.png" alt="" />
              <p>item3</p>
            </div>
            <div class="item">
              <img src="../assets/store/8.png" alt="" />
              <p>item4</p>
            </div>
          </div>
        </div>

        <div class="categroy">
          <div class="title">
            钥匙扣系列
          </div>
          <div class="items">
            <div class="item">
              <img src="../assets/store/11.png" alt="" />
              <p>item1</p>
            </div>
            <div class="item">
              <img src="../assets/store/12.png" alt="" />
              <p>item2</p>
            </div>
          </div>
        </div>

        <div class="categroy">
          <div class="title">
            火漆印章系列
          </div>
          <div class="items">
            <div class="item">
              <img src="../assets/store/9.png" alt="" />
              <p>item1</p>
            </div>
            <div class="item">
              <img src="../assets/store/10.png" alt="" />
              <p>item2</p>
            </div>
          </div>
        </div>
        <div class="categroy">
          <div class="title">
            贴纸系列
          </div>
          <div class="items">
            <div class="item">
              <img src="../assets/store/13.png" alt="" />
              <p>item1</p>
            </div>
            <div class="item">
              <img src="../assets/store/14.png" alt="" />
              <p>item2</p>
            </div>
          </div>
        </div>
      </div>
    </v-content>
    <div class="menu">
      <mainmenu current="AboutMe" />
    </div>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
import mainmenu from "../components/menu";
export default {
  components: {
    mainmenu,
  },
  data: () => ({
    menu: false,
    title: "商店",
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
  },
  mounted() {
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
  background-color: #f5f4f1;
}
.goods {
  padding-right: 20px;
  overflow: scroll;
  height: 88vh;
  .categroy {
    margin-bottom: 20px;
    display: flex;
    
    .title {
      flex: 1;
      padding-left: 35px;
      writing-mode: vertical-lr;
      color:#ac845d;
      font-size: 0.5rem;
    }
    .items {
      flex: 5;
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 50%;
        // background-color:aquamarine;
        padding: 10px;
        padding-top: 0;
        img {
          width: 100%;
        }
        p {
          text-align: center;
        }
      }
    }
  }
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
    // position: absolute;
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

<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="myprofile">
        <div class="avatar">
          <img src="../assets/aboutme/avatar.svg" alt="" />
          <p>浅子</p>
        </div>
        <div class="detail">
          <div class="item">
            <img src="../assets/aboutme/make.svg" alt="" />
            <p>我的创作</p>
          </div>
          <div class="item">
            <img src="../assets/aboutme/draw.svg" alt="" />
            <p>我的涂鸦</p>
          </div>
          <div class="item">
            <img src="../assets/aboutme/re.svg" alt="" />
            <p>我的推荐</p>
          </div>
          <div class="item">
            <img src="../assets/aboutme/goods.svg" alt="" />
            <p>我的单品</p>
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
    title: "我的",
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
    let bodyEl = document.querySelector("#inspire");
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
  // overflow: scroll;
  .myprofile {
    .avatar {
      padding: 20px;
      display: flex;
      flex-direction: column;
      img {
        height: 70px;
        width: 70px;
        margin: 0 auto;
      }
      p {
        margin-top: 20px;
        text-align: center;
      }
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
      border-bottom: 1.2px solid #ac845d;
      background-color: rgb(221, 205, 169);
    }
    .detail {
      background-color: #f5f4f1;

      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .item {
        margin: 0 20px;
        margin-top: 20px;
        padding: 25px 20px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        background-color: rgb(221, 218, 210);
        p {
          font-size: 1.1rem;
          margin: 0;
          letter-spacing: 0.3rem;
          display: inline;
          margin-left: 40px;
        }
        img {
          margin-left: 20px;
          height: 40px;
        }
      }
    }
  }
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

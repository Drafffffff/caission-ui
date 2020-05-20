<template>
  <v-app id="inspire">
    <v-content class="content" id="recommedmain" max-width="400">
      <div class="title">
        <p>{{ title }}</p>
      </div>
    </v-content>
    <div class="menu">
      <mainmenu current="Store" />
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
          translateX: -150,
          // easing: "linear",
          duration: 400,
        });
        anime({
          targets: ".menu",
          translateX: -150,
          opacity: 1,
          duration: 400,
          delay: 400,
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
          easing: "easeInOutSine",
          duration: 600,
        });

        anime({
          targets: ".menu",
          translateX: 0,
          opacity: 0,
          easing: "easeInOutSine",
          duration: 600,
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
}
</style>

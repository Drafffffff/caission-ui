<template>
  <v-app id="inspire">
    <v-content class="content " max-width="400">
      <div class="title">
        <p>每日推荐</p>
      </div>

      <v-card class="card" elevation="0">
        <div class="white--text align-end card-img">
          <v-img
            src="http://placehold.it/400x400"
            class="align-end card-img"
            id="scale"
          >
          </v-img>
          <v-card-title class="card-title"
            >Top 10 Australia n beaches</v-card-title
          >
        </div>
      </v-card>

      <div class="pull-panel" elevation="20">
        <div class="patten" @click="toggleUp"></div>

        <div class="item-list">
          <v-container>
            <v-row dense>
              <v-col cols="12">
                <v-card color="#385F73" dark>
                  <v-card-title class="headline"
                    >Unlimited music now</v-card-title
                  >

                  <v-card-subtitle
                    >Listen to your favorite artists and albums whenever and
                    wherever, online and offline.</v-card-subtitle
                  >

                  <v-card-actions>
                    <v-btn text>Listen Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col v-for="(item, i) in items" :key="i" cols="12">
                <v-card :color="item.color" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.title"
                      ></v-card-title>

                      <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="125" tile>
                      <v-img :src="item.src"></v-img>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
          <div class="end"></div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
export default {
  props: {
    source: String,
  },
  data: () => ({
    pullUp: false,
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
  methods: {
    toggleUp() {
      if (!this.pullUp) {
        let el = document.querySelector(".title");
        let height = parseInt(anime.get(el, "height", "px").slice(0, -2)) - 450;
        anime({
          targets: ".pull-panel",
          translateY: height,
        });
        this.pullUp = true;
        document.querySelector(".item-list").style.overflow="scroll";
      }
    },
    toggleDown() {
      if (this.pullUp) {
        let el = document.querySelector(".title");
        let height = parseInt(anime.get(el, "height", "px").slice(0, -2)) - 450;
        console.log("d");
        anime({
          targets: ".pull-panel",
          translateY: 0,
        });
        this.pullUp = false;
        document.querySelector(".item-list").style.overflow="hidden";
      }
    },
  },
  mounted() {
    let el = document.querySelector(".pull-panel");
    let hammertime = new Hammer(el);
    hammertime.on("swipeup", ev => {
      this.toggleUp();
      console.log(ev);
    });
    hammertime.on("swipedown", ev => {
      this.toggleDown();
      console.log(ev);
    });
    hammertime.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
  },
};
</script>

<style lang="scss" scoped>
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
    }
  }
  .pull-panel {
    position: absolute;
    top: 60vh;
    z-index: 10;
    background-color: brown;
    width: 100vw;
    height: 120vh;
    border-radius: 20px 20px 0 0;
    .patten {
      width: 80px;
      background-color: teal;
      height: 80px;
      position: relative;
      margin: auto;
      border-radius: 10px;
      top: -40px;
      transform: rotate(45deg);
    }
    .item-list {
      overflow: hidden;
      background-color: burlywood;
      height: 80vh;
      display: flex;
    }
    .end{
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
</style>

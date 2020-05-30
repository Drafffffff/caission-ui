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
      <div class="card">
        <img src="../assets/productdetail/product.jpg" alt="" />
      </div>
      <div class="iconpanel" v-if="step == 0">
        <div class="icon">
          <img src="../assets/productdetail/1.png" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/productdetail/2.png" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/productdetail/3.png" alt="" />
        </div>
        <div class="icon">
          <img src="../assets/productdetail/4.png" alt="" />
        </div>
      </div>
      <div class="button" @click="handleClick">
        <p>{{ text[step] }}</p>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import hammer from "hammerjs";
import anime from "animejs/lib/anime.es.js";
export default {
  data: () => ({
    menu: false,
    params: "",
    title: "产品预览",
    text: ["下一步", "确认"],
    step: 0,
  }),
  methods: {
    handleClick() {
      if (this.step == 0) {
        this.step++;
      } else {
        this.$router.push("/");
        this.title = "确认产品";
      }
    },
  },
  beforeMount() {},
};
</script>

<style lang="scss" scoped>
#inspire {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  max-width: 450px;
  background-color: #fff;
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
  .card {
    width: 84vmin;
    height: 84vmin;
    margin: 8vmin;
    border-radius: 20px;
    background-color: #f4f3f0;
    padding: 15px;
    img {
      width: 100%;
    }
  }
  .iconpanel {
    width: 84vmin;
    margin: 8vmin;
    // height: 100px;
    margin-top: 0px;
    border-radius: 20px;
    padding: 10px 0;
    background-color: #f4f3f0;
    display: flex;
    div {
      flex: 1;
      padding: 10px;
      img {
        padding: 3px;
        width: 100%;
      }
    }
  }
  .button {
    width: 84vmin;
    margin: 8vmin;
    position: absolute;
    height: 80px;
    bottom: 0px;
    margin-top: 0px;
    border-radius: 20px;
    padding: 10px 0;
    background-color: #f4f3f0;
    display: flex;
    align-items: center;
    p {
      width: 100%;
      text-align: center;
      margin: 0;
    }
  }
}
</style>

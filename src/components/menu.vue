<template>
  <div>
    <div class="menu">
      <div class="menu-list">
        <div class="menu-item RecommendedDaily" @click="push1">
          <img src="../assets/menu/homepage.png" alt="" />
          <p>首页</p>
        </div>
        <div class="menu-item CustomInterface" @click="push2">
          <img src="../assets/menu/make.png" alt="" />
          <p>定制</p>
        </div>
        <div class="menu-item Store" @click="push3">
          <img src="../assets/menu/shop.png" alt="" />
          <p>商店</p>
        </div>
        <div class="menu-item AboutMe" @click="push4">
          <img src="../assets/menu/me.png" alt="" />
          <p>我的</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    current: String,
  },
  methods: {
    push1() {
      console.log(this.current);
      if (this.current !== "RecommendedDaily") {
        this.$router.push({ name: "RecommendedDaily" });
      }
    },
    push2() {
      console.log(this.current);
      if (this.current !== "CustomInterface") {
        this.$router.push({ name: "CustomInterface" });
      }
    },
    push3() {
      console.log(this.current);
      if (this.current !== "Store") {
        this.$router.push({ name: "Store" });
      }
    },
    push4() {
      console.log(this.current);
      if (this.current !== "AboutMe") {
        this.$router.push({ name: "AboutMe" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  right: -150px;
  height: 100vh;
  width: 100px;
  z-index: 0;
  .menu-list {
    display: flex;
    flex-direction: column;
  }
  .menu-item {
    width: 4rem;
    height: 4rem;
    // background-color: gray;
    margin: 1.3rem auto;
    border-radius: 50%;
    &:first-child {
      margin-top: 100px;
    }
    img {
      width: 100%;
    }
    p{
      text-align: center;
    }
  }
}
</style>

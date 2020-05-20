<template>
  <div>
    <div class="menu">
      <div class="menu-list">
        <div class="menu-item RecommendedDaily">
          <v-btn
            class="mx-5 my-2 back"
            fab
            
            large
            color="gray"
            @click="push1"
          >
            <v-icon dark>mdi-arrow-left </v-icon>
          </v-btn>
        </div>
        <div class="menu-item CustomInterface">
          <v-btn
            class="mx-5 my-2 back"
            fab
            
            large
            color="gray"
            @click="push2"
          >
            <v-icon dark>mdi-arrow-left </v-icon>
          </v-btn>
        </div>
        <div class="menu-item Store">
          <v-btn
            class="mx-5 my-2 back"
            fab
            
            large
            color="gray"
            @click="push3"
          >
            <v-icon dark>mdi-arrow-left </v-icon>
          </v-btn>
        </div>
        <div class="menu-item AboutMe">
          <v-btn
            class="mx-5 my-2 back"
            fab
            
            large
            color="gray"
            @click="push4"
          >
            <v-icon dark>mdi-arrow-left </v-icon>
          </v-btn>
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
  width: 150px;
  z-index: 0;
  .menu-list {
    display: flex;
    flex-direction: column;
  }
  .menu-item {
    width: 5rem;
    height: 5rem;
    // background-color: gray;
    margin: 10px auto;
    border-radius: 50%;
    &:first-child {
      margin-top: 100px;
    }
  }
}
</style>

<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <img src="../assets/custom/show1.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/custom/show2.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/custom/show3.png" alt="" />
    </swiper-slide>
    <swiper-slide>
      <img src="../assets/custom/show4.png" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-space-between",
  title: "Space between slides",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    background-color: white;
    background-color: gray;
    img {
      width: 105%;
      margin-bottom: 20px;
    }
  }
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #c29c76 !important;
}
</style>

<template>
  <v-app id="inspire">
    <v-content class="content">
      <v-img class="building" src="http://placehold.it/400x400"> </v-img>
      <div class="title">
        <p class="">印象藻井</p>
      </div>

      <v-card class="card" max-width="400" elevation="20">
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

        <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

        <v-card-text class="text--primary card-detail">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
};
</script>

<style lang="scss" scoped>
.content {
  .building {
    z-index: 1;
    position: absolute;
  }
  .title {
    width: 100vw;
    position: absolute;
    z-index: 20;
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
    z-index: 10;
    position: relative;
    margin: 20px;
    top: 35vh;
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
      bottom: 110px;
    }
  }
  .title {
    z-index: 100;
  }
}
.card-detail {
  padding-bottom: 2rem;
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

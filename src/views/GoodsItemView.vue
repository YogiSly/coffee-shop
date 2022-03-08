<template>
  <main>
    <div
      class="banner"
      :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big" v-if="card">{{ card.name }}</h1>
      </div>
    </div>

    <section class="shop">
      <div class="container">
        <div class="row" v-if="!isLoading">
          <div class="col-lg-5 offset-1">
            <img
              class="shop__girl"
              alt="coffee_item"
              :src="product.product.image"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__point">
              <span>Country:</span>
              {{ product.product.country }}
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{ product.product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{ card.price }}</span>
            </div>
          </div>
        </div>
        <spinner-component v-else></spinner-component>
      </div>
    </section>
  </main>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import SpinnerComponent from "@/components/SpinnerComponent.vue";

export default {
  components: {
    NavBarComponent,
    SpinnerComponent,
  },
  computed: {
    product() {
      return this.$store.getters["getProductData"];
    },
    pageName() {
      return this.$route.name;
    },
    card() {
      return this.$store.getters["getProductById"](this.$route.params.id);
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  getters: {},
  beforeMount() {
    this.$store.dispatch("setProductData", {});

    this.$store.dispatch("setIsLoading", true);
  },
  mounted() {
    fetch(
      `http://localhost:3000/${this.pageName}/${this.$route.params.id}`
    ).then((res) =>
      res.json().then((data) => {
        this.$store.dispatch("setProductData", data);
      })
    );
    setTimeout(() => {
      this.$store.dispatch("setIsLoading", false);
    }, 500);
  },

  destroyed() {
    this.product = null;
  },
};
</script>

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
        <h1 class="title-big" v-if="product">{{ product.name }}</h1>
      </div>
    </div>
    <section class="shop" v-if="product">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 offset-0 offset-lg-1">
            <img
              class="shop__girl"
              :src="product.image"
              style="width: 100%;"
              alt="coffee_item"
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
              {{ product.country }}
            </div>
            <div class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price: </span>
              <span class="shop__point-price">{{
                product.price
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
  components: { NavBarComponent },
  data() {
    return {
      product: null
    };
  },
  mounted() {
    fetch(`http://localhost:3000/coffee/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
  },
  destroyed() {
    this.product = null
  },
  computed: {
    pageName() {
      return this.$route.name;
    },
    card() {
      const pageGetter =
        this.pageName === "coffee" ? "getCoffeeById" : "getGoodsById";
      return this.$store.getters[pageGetter](this.$route.params.id);
    },
  },
};
</script>

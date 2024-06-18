<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">Our Coffee</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_girl.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn">Brazil</button>
                <button class="shop__filter-btn">Kenya</button>
                <button class="shop__filter-btn">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <images-component
                classItem="shop__item"
                :name="best_coffee[0].name"
                :price="best_coffee[0].price"
                :image="best_coffee[0].image"
              />
              <images-component
                classItem="shop__item"
                :name="best_coffee[1].name"
                :price="best_coffee[1].price"
                :image="best_coffee[1].image"
              />
              <images-component
                classItem="shop__item"
                :name="best_coffee[2].name"
                :price="best_coffee[2].price"
                :image="best_coffee[2].image"
              />
              <images-component
                classItem="shop__item"
                :name="best_coffee[3].name"
                :price="best_coffee[3].price"
                :image="best_coffee[3].image"
              />
              <images-component
                classItem="shop__item"
                :name="best_coffee[4].name"
                :price="best_coffee[4].price"
                :image="best_coffee[4].image"
              />
              <images-component
                classItem="shop__item"
                :name="best_coffee[5].name"
                :price="best_coffee[5].price"
                :image="best_coffee[5].image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ImagesComponent from "@/components/ImagesComponent.vue";
export default {
  components: { NavBarComponent, ImagesComponent },
  data() {
    return {
      best_coffee: [
        {
          id: "0",
          image: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: "10.73",
        },
        {
          id: "1",
          image: "coffee-2.jpg",
          name: "Presto Coffee Beans 1kg",
          price: "15.99",
        },
        {
          id: "2",
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
        {
          id: "3",
          image: "coffee-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          price: "10.73",
        },
        {
          id: "4",
          image: "coffee-2.jpg",
          name: "Presto Coffee Beans 1kg",
          price: "15.99",
        },
        {
          id: "5",
          image: "coffee-3.jpg",
          name: "AROMISTICO Coffee 1kg",
          price: "6.99",
        },
      ],
    };
  },
};
</script>

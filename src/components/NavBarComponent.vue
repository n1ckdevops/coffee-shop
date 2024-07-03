<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <router-link :to="links[0].link">
          <img
            :src="require(`@/assets/logo/${links[0].icon}`)"
            :alt="links[0].icon"
        /></router-link>
      </li>
      <nav-item
        classLink="header__item"
        :link="links[1].link"
        :text="links[1].text"
      />
      <nav-item
        classLink="header__item"
        :link="links[2].link"
        :text="links[2].text"
      />
      <nav-item
        classLink="header__item"
        :link="links[3].link"
        :text="links[3].text"
      />
    </ul>
  </header>
</template>

<script>
import NavItem from "@/components/NavItem.vue";
export default {
  components: { NavItem },
  data() {
    return {
      links: [
        {
          id: 0,
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/goods",
        },
        {
          id: 3,
          text: "Contact Us",
          link: "/contacts",
        },
      ],
    };
  },
};
</script>

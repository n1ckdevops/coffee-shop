<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-item :link="links.header.link" classLink="header__item">
        <img
          :src="require(`@/assets/logo/${links.header.icon}`)"
          :alt="links.header.icon"
      /></nav-item>

      <nav-item
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        classLink="header__item"
      />
    </ul>
  </header>
</template>

<script>
import NavItem from "@/components/NavItem.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { NavItem },
  data() {
    return {
      links: {
        header: {
          id: uuidv4(),
          link: "/",
          icon: "Logo.svg",
        },
        other: [
          {
            id: uuidv4(),
            text: "Our coffee",
            link: "/our-coffee",
          },
          {
            id: uuidv4(),
            text: "For your pleasure",
            link: "/goods",
          },
          {
            id: uuidv4(),
            text: "Contact Us",
            link: "/contacts",
          },
        ],
      },
    };
  },
};
</script>

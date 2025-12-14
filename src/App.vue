<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="fixed transparent center-align min">
    <div class="margin" style="align-items: center">
      <nav class="toolbar">
        <RouterLink :to="item.to" v-for="(item, index) in items" :key="index">
          <i :class="item.icon"></i>
          <div class="tooltip bottom">{{ item.title }}</div>
        </RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer class="center-align margin">
    <p>Copyleft 🄯 Forever dUnion</p>
    <p>This website does not constitute any investment advice. Always do your own research.</p>
    <p>
      <a href="https://github.com/0xdUnion" target="_blank">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="https://x.com/0xdUnion" target="_blank">
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      |
      <a href="https://n2p.dunion.net" target="_blank">
        <i class="fa fa-file"></i>
      </a>
      <RouterLink to="/connect"><i class="fa fa-wallet"></i></RouterLink>
      <RouterLink to="/links"><i class="fa fa-link"></i></RouterLink>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          to: '/',
          icon: 'fa fa-house',
        },
        {
          title: 'Values',
          to: '/values',
          icon: 'fa fa-message',
        },
        {
          title: 'Departments',
          to: '/departments',
          icon: 'fa fa-gear',
        },
        {
          title: 'On-chain',
          to: '/on-chain',
          icon: 'fa-brands fa-ethereum',
        },
      ],
    }
  },
}
</script>

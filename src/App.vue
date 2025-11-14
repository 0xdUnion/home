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
    <p>Copyleft <i class="mdi mdi-copyleft small"></i> Forever dUnion</p>
    <p>This website does not constitute any investment advice. Always do your own research.</p>
    <p>
      <a href="https://github.com/0xdUnion" target="_blank">
        <i class="mdi mdi-github large"></i>
      </a>
      <a href="https://x.com/0xdUnion" target="_blank">
        <i class="mdi mdi-twitter large"></i>
      </a>
      |
      <RouterLink to="/connect"><i class="mdi mdi-wallet large"></i></RouterLink>
      <RouterLink to="/links"><i class="mdi mdi-earth large"></i></RouterLink>
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
          icon: 'mdi mdi-home',
        },
        {
          title: 'Values',
          to: '/values',
          icon: 'mdi mdi-message-badge',
        },
        {
          title: 'Departments',
          to: '/departments',
          icon: 'mdi mdi-cube',
        },
        {
          title: 'On-chain',
          to: '/on-chain',
          icon: 'mdi mdi-ethereum',
        },
      ],
    }
  },
}
</script>

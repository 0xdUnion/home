<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="div-central">
    <img class="logo" src="/public/images/logo/logo_w.svg" alt="dUnion" />
    <h1>dUnion</h1>
    <p>Decentralize(d) Union</p>
    <div>
      <a href="https://github.com/0xdUnion" target="_blank">
        <button class="large">
          <i class="fa-brands fa-github"></i>
          Projects
        </button>
      </a>
      <RouterLink to="/join">
        <button class="border large">
          <i class="fa fa-plus"></i>
          Join now
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>

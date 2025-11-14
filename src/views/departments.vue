<template>
  <div v-for="(item, index) in items" :key="index" class="center div-central div-banner-list">



    <article class="no-padding">
      <img class="responsive medium" :src="item.banner">
      <div class="absolute bottom left right padding bottom-shadow white-text">
        <nav>
          <h4><i :class="item.icon"></i> {{ item.name }}</h4>
          <div class="max"></div>
        </nav>
      </div>
    </article>
    <p>{{ item.describe }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'BC Dev',
          describe: 'Write the fastest smart contracts with minimal gas!',
          icon: 'fa fa-code',
          banner: '/images/banner/banner_bcdev.png'
        },
        {
          name: 'Trading Club',
          describe: 'Gain market insights, analyze sentiment',
          icon: 'fa-solid fa-bitcoin-sign',
          banner: '/images/banner/banner_tradingclub.png'
        },
        {
          name: 'Project Backup',
          describe: 'Save before disappear',
          icon: 'fa-solid fa-floppy-disk',
          banner: '/images/banner/banner_pb.png'
        },


      ],
    }
  },
}
</script>

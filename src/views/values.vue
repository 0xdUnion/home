<template>
  <div v-for="(item, index) in items" :key="index" class="div-central">
    <h1>{{ item.name }}</h1>
    <p>{{ item.describe }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Open', describe: 'Copyleft & Make OSS great again' },
        { name: 'Research', describe: 'Where progress begins' },
        { name: 'Decentralize', describe: 'Strength belongs to everyone' },
      ],
    }
  },
}
</script>

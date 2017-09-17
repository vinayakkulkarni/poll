<template>
  <div class="container">
    <!-- <div class="box" v-for="option in results.frameworks" :key="option.title">
      {{ option.title }} - {{ option.votes }}
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'results',
  props: ['frameworks'],
  firebase: {
    frameworks: this.frameworks,
  },
};
</script>
<style scoped>
[v-cloak] { display: none; }
</style>
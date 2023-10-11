<template>
  <div id="app">
    <Head />
    <div class="head"></div>
    <router-view />

    <div>
      <Bottom />
    </div>

  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Bottom from '@/components/Bottom.vue'
export default {
  name: 'App',
  components: {
    Head,
    Bottom
  },
}
</script>

<style lang="scss" scoped>
.head{
  height: 76px;
}
</style>

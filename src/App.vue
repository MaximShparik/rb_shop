<template>
  <div id="app">
    <LayoutBroker
      :layouts="$options.layouts"
      :current="$route.meta.layout"
    />
  </div>
</template>
<script>
import LayoutBroker from 'vue-layout-broker'
import layouts from '@/layouts'
export default {
  name: 'App',
  components: {
    LayoutBroker
  },
  layouts
}
</script>
<style scoped>
#app {
  padding-top: 136px;
}
@media screen and (max-width: 768px) {
  #app {
    padding-top: 70px;
  }
}
</style>

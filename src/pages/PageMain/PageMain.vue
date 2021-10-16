<template>
  <div class="main">
    <Carousel />
    <div class="view_all">
      <router-link
        :to="{name: 'page-goods'}"
        class="nav__item-link"
      >
        VIEW ALL
      </router-link>
    </div>
    <ItemsLine
      :title="'sneaker'"
      :items="items.filter(item => item.style === 'sneaker').slice(0, 6)"
    />
    <ItemsLine
      :title="'streetwear'"
      :items="items.filter(item => item.style === 'streetwear').slice(0, 6)"
    />
    <PromoItems />
  </div>
</template>
<script>
import Carousel from './carousel'
import ItemsLine from '@/components/items-line'
import PromoItems from './promo-items'
import { items } from '@/utils/stuff'
export default {
  name: 'PageMain',
  components: {
    Carousel,
    ItemsLine,
    PromoItems
  },
  data () {
    return {
      items
    }
  }
}
</script>
<style scoped>
.main {
  max-width: 100vw;
}
.view_all {
  text-align: center;
  margin: 35px;
}
.view_all a {
  color: black;
}
</style>

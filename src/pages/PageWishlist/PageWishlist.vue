<template>
  <div class="wishlist">
    <TitlePage
      title="Wishlist"
    />
    <WishList />
  </div>
</template>
<script>
import TitlePage from '@/components/title-page'
import WishList from './wish-list'
export default {
  name: 'PageWishlist',
  data () {
    return {
    }
  },
  components: {
    TitlePage,
    WishList
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style scoped>
</style>

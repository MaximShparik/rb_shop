<template>
  <div class="goods">
    <TitlePage
      :title="this.$route.query.search ? this.$route.query.search.toUpperCase() : 'ALL'"
    />
    <div class="goods__content">
      <MobileFilters
        v-if="width <= 768"
        ref="filterMobile"
        :sizes="sizes"
        :colors="colors"
        :brands="brands"
      />
      <Filters
        v-else
        ref="filter"
        :sizes="sizes"
        :colors="colors"
        :brands="brands"
      />
      <Items
        :items="items"
      />
    </div>
  </div>
</template>
<script>
import { items } from '@/utils/stuff'
import Filters from './filters'
import MobileFilters from './mobile-filters'
import Items from './items'
import TitlePage from '@/components/title-page'
export default {
  name: 'PageMain',
  components: {
    Items,
    Filters,
    TitlePage,
    MobileFilters
  },
  data () {
    return {
      isMounted: false,
      width: window.innerWidth
    }
  },
  computed: {
    allItems () {
      if (!this.$route.query.search) return items
      return items.filter(item => item.style === this.$route.query.search)
    },
    items () {
      if (this.isMounted) {
        var items = this.allItems
        if (this.width <= 768) {
          if (this.$refs.filterMobile.brands_checklist.length !== 0) {
            items = items.filter(item => item.brands.some(brand => this.$refs.filterMobile.brands_checklist.includes(brand)))
          }
          if (this.$refs.filterMobile.colours_checklist.length !== 0) {
            items = items.filter(item => item.colors.some(color => this.$refs.filterMobile.colours_checklist.includes(color)))
          }
          if (this.$refs.filterMobile.sizes_checklist.length !== 0) {
            items = items.filter(item => item.sizes_prices.map(el => el.size).some(size => this.$refs.filterMobile.sizes_checklist.includes(size)))
          }
          return items
        } else {
          if (this.$refs.filter.brands_checklist.length !== 0) {
            items = items.filter(item => item.brands.some(brand => this.$refs.filter.brands_checklist.includes(brand)))
          }
          if (this.$refs.filter.colours_checklist.length !== 0) {
            items = items.filter(item => item.colors.some(color => this.$refs.filter.colours_checklist.includes(color)))
          }
          if (this.$refs.filter.sizes_checklist.length !== 0) {
            items = items.filter(item => item.sizes_prices.map(el => el.size).some(size => this.$refs.filter.sizes_checklist.includes(size)))
          }
        }
        return items
      }
      // if (this.isMounted && this.$refs.filter.sizes_checklist.length !== 0) {
      //   return this.allItems.filter(item => item.brands.some(brand => this.$refs.filter.brands_checklist.includes(brand)))
      // }
      return this.allItems
    },
    sizes () {
      var sizes = []
      this.allItems.map(el => el.sizes_prices).forEach(item => {
        sizes = sizes.concat(item.map(el => el.size))
      })
      // console.log([...new Set(sizes)]))
      return [...new Set(sizes)].sort()
    },
    brands () {
      var brands = []
      this.allItems.map(el => el.brands).forEach(item => {
        brands = brands.concat(item)
      })
      return [...new Set(brands)]
    },
    colors () {
      var colors = []
      this.allItems.map(el => el.colors).forEach(item => {
        colors = colors.concat(item)
      })
      return [...new Set(colors)]
    }
  },
  mounted () {
    this.isMounted = true
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
}
</script>
<style scoped>
.goods__content {
  display: grid;
  grid-template-columns: 2fr 9fr;
  max-width: 1570px;
  margin: 0 auto;
  padding: 30px 15px;
  grid-gap: 40px
}
@media screen and (max-width: 768px) {
  .goods__content {
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 15px 15px 20px;
  }
}
</style>

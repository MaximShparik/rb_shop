<template>
  <div class="wishlist__items">
    <div
      v-for="item in items"
      :key="item.id"
      class="wishlist__item"
    >
      <el-carousel
        :autoplay="false"
      >
        <el-carousel-item
          v-for="(img, i) in item.photos"
          :key="i"
        >
          <img
            :src="img"
            alt="photo"
            class="wishlist__img"
          >
        </el-carousel-item>
      </el-carousel>
      <div class="wishlist__info">
        <p class="wishlist__info-name">{{item.name}}</p>
        <p class="wishlist__info-style">{{item.colors.join(', ')}}</p>
        <p class="wishlist__info-price">
          From {{
            item.sizes_prices[item.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, item.sizes_prices.map(el => el.price)))].price
          }} $
          <i
            class="el-icon-star-on"
            @click="removeWishlist(item.id)"
          ></i>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { profile, items } from '@/utils/stuff'
export default {
  name: 'WishList',
  data () {
    return {
      profile,
      items: this.wishlistItems
    }
  },
  components: {
  },
  computed: {
    wishlistItems () {
      return items.filter(el => {
        if (profile.wishlist.includes(el.id)) {
          return el
        }
      })
    }
  },
  methods: {
    removeWishlist (id) {
      this.items = this.items.filter(el => el.id !== id)
    }
  },
  mounted () {
    this.items = this.wishlistItems
  }
}
</script>
<style scoped>
.wishlist__items {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 25px 15px;
  /* padding-top: 25px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
}
.wishlist__item {
  border: 1px solid rgb(204, 204, 204);
  padding: 15px;
}
.wishlist__img {
  width: 100%;
}
.wishlist__info {
  position: relative;
}
.wishlist__info p {
  margin: 8px 0;
}
.wishlist__info p:last-child {
  margin-bottom: 0;
}
.wishlist__info .el-icon-star-on {
  cursor: pointer;
  position: absolute;
  right: 0px;
  font-size: 40px;
  bottom: 0px;
}
@media screen and (max-width: 1200px) {
  .wishlist__items {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .wishlist__items {
    grid-template-columns: 1fr;
  }
}
</style>

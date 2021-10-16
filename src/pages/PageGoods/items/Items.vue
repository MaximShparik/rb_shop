<template>
  <div class="items">
    <div class="sort">
      <p class="sort__title">{{items.length}} products</p>
      <el-dropdown @command="sort">
        <span class="el-dropdown-link sort__title">
          Sort<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu
          slot="dropdown"
          class="sort__list"
        >
          <el-dropdown-item
            icon="el-icon-top"
            class="sort__item"
            command="lowToHigh"
          >Price low to high</el-dropdown-item>
          <el-dropdown-item
            icon="el-icon-bottom"
            class="sort__item"
            command="highToLow"
          >Price high to low</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    </div>
    <div class="table__wrapper">
      <div class="table">
        <div
          v-for="item in items"
          :key="item.id"
          class="table__item"
        >
          <el-carousel
            :autoplay="false"
            arrow="never"
          >
            <el-carousel-item v-for="(photo, i) in item.photos" :key="i">
              <img :src="photo" alt="photo">
            </el-carousel-item>
          </el-carousel>
          <div class="info">
            <router-link :to="{ name: 'page-item', params: { id: item.id}}">
              <p class="name">{{item.name}}</p>
            </router-link>
            <p class="color">{{item.colors[0]}}</p>
            <el-tooltip
              class="popup__text"
              placement="top"
              content="10% discount for first order"
            >
              <p class="price">From {{
                item.sizes_prices[item.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, item.sizes_prices.map(el => el.price)))].price
              }} $</p>
            </el-tooltip>
          </div>
        </div>
      </div>
      <div
        class="btn"
        @click="$emit('load')"
      >Load more</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Items',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      computedItems: this.items
    }
  },
  methods: {
    sort (command) {
      console.log(command)
      if (command === 'lowToHigh') {
        this.computedItems = this.computedItems.sort((a, b) => (a.sizes_prices[a.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, a.sizes_prices.map(el => el.price)))].price > b.sizes_prices[b.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, b.sizes_prices.map(el => el.price)))].price) ? 1 : ((b.sizes_prices[b.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, b.sizes_prices.map(el => el.price)))].price > a.sizes_prices[a.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, a.sizes_prices.map(el => el.price)))].price) ? -1 : 0))
      } else if (command === 'highToLow') {
        this.computedItems = this.computedItems.sort((a, b) => (a.sizes_prices[a.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, a.sizes_prices.map(el => el.price)))].price < b.sizes_prices[b.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, b.sizes_prices.map(el => el.price)))].price) ? 1 : ((b.sizes_prices[b.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, b.sizes_prices.map(el => el.price)))].price < a.sizes_prices[a.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, a.sizes_prices.map(el => el.price)))].price) ? -1 : 0))
      }
    }
  }
}
</script>
<style scoped>
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 0 auto;
}
.table a {
  text-decoration: none;
}
.table p {
  margin: 7px 0;
  color: black;
  width: fit-content;
}
.table__item {
  display: grid;
  grid-template-rows: 3fr 1fr;
}
.name {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* max-height: 42px; */
}
.name:hover {
  color: grey;
}
.table p.color {
  color: grey;
}
.price {
  font-size: 14px;
}
.table img {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}
.btn {
  margin-top: 20px;
}
.sort {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
.sort__title {
  font-size: 20px;
  font-weight: bolder;
  margin: 0;
}
.sort__item {
  font-size: 14px;
}
@media screen and (max-width: 1400px) {
  .table__item {
    display: grid;
    grid-template-rows: 5fr 2fr;
  }
}
@media screen and (max-width: 1200px) {
  .table__item {
    display: grid;
    grid-template-rows: 5fr 3fr;
  }
}
@media screen and (max-width: 1000px) {
  .table {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .table {
    grid-template-columns: 1fr 1fr;
  }
  .name {
    font-size: 16px;
  }
  .sort__title {
    font-size: 18px;
  }
}
</style>

<template>
  <div class="table">
    <div class="table__title" v-if="title">
      <router-link :to="{name: 'page-goods', query: { search: title }}">
        {{title}}
      </router-link>
    </div>
    <div
      class="table__grid"
    >
      <!-- <a
        v-for="(item, i) in items"
        :key="i"
        :href="item.itemExternalUrl"
        target="_blank"
      > -->
      <router-link
        v-for="item in items"
        :key="item.id"
        :to="{ name: 'page-item', params: { id: item.id}}"
      >
        <div class="table__grid-img">
          <img :src="item.photos[0]" alt="">
        </div>
        <p class="name">{{item.name}}</p>
        <!-- <p class="color">{{item.colors.join(', ')}}</p> -->
        <el-tooltip
          class="popup__text"
          placement="top"
          content="10% discount for first order"
        >
          <p class="price">From {{
            item.sizes_prices[item.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, item.sizes_prices.map(el => el.price)))].price
          }} $</p>
        </el-tooltip>
      <!-- </a> -->
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemsSame',
  props: {
    title: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.table {
  width: calc(100% - 30px);
  max-width: 1400px;
  margin: 15px auto 35px;
  padding: 0 15px;
  padding-bottom: 10px;
  overflow: auto;
}
.table__title {
  text-transform: uppercase;
  font-size: 16px;
  margin: 0 0px 20px 0px;
}
.table__grid {
  display: flex;
}
.table__grid-img {
  width: 150px;
  margin-top: auto;
}
.table__grid a {
  text-decoration: none;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.table__grid p {
  margin: 7px 0;
  color: black;
  width: fit-content;
}
.name {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 42px;
}
.name:hover {
  color: grey;
}
.table__grid p.color {
  color: grey;
}
.price {
  font-size: 14px;
}
.table__grid img {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}
</style>

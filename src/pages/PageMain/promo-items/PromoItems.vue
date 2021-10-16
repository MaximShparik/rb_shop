<template>
  <div class="table">
    <a
      v-for="item in promos"
      :key="item.id"
      :href="item.photo"
      target="_blank"
    >
      <img :src="item.photo" alt="promo photo">
      <p class="name">{{item.title}}</p>
      <el-tooltip
        class="popup__text"
        placement="top"
        :content="item.title"
      >
        <p class="price">{{item.subtitle}}</p>
      </el-tooltip>
    </a>
  </div>
</template>
<script>
import { promos } from '@/utils/stuff'
export default {
  name: 'PromoItems',
  data () {
    return {
      promos
    }
  }
}
</script>
<style scoped>
.table {
  width: 100%;
  max-width: 1230px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  margin: 30px auto;
  padding: 0 30px;
}
.table a {
  text-decoration: none;
}
.table p {
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
.table p.color {
  color: grey;
}
.price {
  font-size: 14px;
}
.table img {
  width: 100%;
}
@media screen and (max-width: 680px) {
  .table {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

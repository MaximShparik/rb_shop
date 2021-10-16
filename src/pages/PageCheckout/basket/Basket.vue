<template>
  <div class="basket">
    <div class="items__list">
      <div
        v-for="(item, i) in items.slice(1, 5)"
        :key="i"
        class="item"
      >
        <div class="item__img">
          <img :src="item.photos[0]" alt="item">
        </div>
        <div class="item__info">
          <span class="name">{{item.name}}</span>
          <span class="color">{{item.colors.join(', ')}}</span>
          <span class="size">9.5</span>
          <span class="amount">QTY 1</span>
          <span class="price">123 $</span>
          <i
            class="el-icon-delete icon"
            @click="deleteItem(item.id)"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { items } from '@/utils/stuff'
export default {
  name: 'Basket',
  data () {
    return {
      code: null,
      promoVisible: false,
      items
    }
  },
  methods: {
    deleteItem (id) {
      console.log(id)
    }
  }
}
</script>
<style scoped>
.items__list {
  border-bottom: 1px solid rgb(220, 220, 220);
}
.basket {
  padding-left: 50px;
  padding-right: 50px;
}
.item {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 20px;
}
.item__img img {
  width: 100%;
}
.item__info {
  font-size: 14px;
  display: grid;
  grid-template-areas:
    "a a a a"
    "b b b b"
    "c d e p";
}
.name {
  grid-area: a;
}
.color {
  grid-area: b;
  font-size: 12px;
  color: grey;
}
.icon {
  cursor: pointer;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .basket {
    padding-left: 0;
    margin-bottom: 10px;
  }
  .items__list {
    border-bottom: none;
  }
}
</style>

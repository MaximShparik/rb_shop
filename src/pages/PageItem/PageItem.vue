<template>
  <div class="item">
    <div
      class="carousel"
    >
      <img
        v-for="(img, i) in item.photos"
        :key="i"
        :src="img"
        alt="photo"
        class="carousel__img"
      >
    </div>
    <!-- <div
      class="carousel"
      v-else
    >
      <img
        :src="item.photos[0]"
        alt="photo"
        class="carousel__img"
      >
    </div> -->
    <div class="content">
      <div class="content__block">
        <p class="content__name">{{item.name}}</p>
        <p class="content__colour">{{item.colors.join(', ')}}</p>
        <p class="content__price">From {{
            item.sizes_prices[item.sizes_prices.map(el => el.price).indexOf(Math.min.apply(null, item.sizes_prices.map(el => el.price)))].price
          }} $</p>
        <div class="content__card">
          <div class="card__sizes">
            <div
              v-for="(item, i) in item.sizes_prices"
              :key="i"
              class="card__size"
            >
              <p class="card__size-size">{{item.size}}</p>
              <p class="card__size-price">{{item.price}} $</p>
            </div>
          </div>
          <div class="card__btns">
            <div
              class="card__btns-add"
              @click="addCard(item.id)"
            >Add to card</div>
            <div
              class="card__btns-wish"
              @click="addWish(item.id)"
            >Add to wishlist</div>
          </div>
        </div>
        <el-tabs
          v-model="activeDescrTab"
          class="content__desr"
        >
          <el-tab-pane label="Description" name="Description">Palm Angels and Missoni join forces for AW21 to create an unlikely yet natural Italian-fuelled capsule rooted in heritage sportswear and vintage knits. This crew is made in Italy from pure cotton with dropped shoulders for a truly retro look and comes detailed with seasonal MIND text on the front and the duo’s co-branded logo embroidered on the back that was inspired by Missoni’s rich archive.</el-tab-pane>
          <el-tab-pane label="Sizing" name="Sizing">Palm Angels and Missoni join forces for AW21 to create an unlikely yet natural Italian-fuelled capsule rooted in heritage sportswear and vintage knits. This crew is made in Italy from pure cotton with dropped shoulders for a truly retro look and comes detailed with seasonal MIND text on the front and the duo’s co-branded logo embroidered on the back that was inspired by Missoni’s rich archive.</el-tab-pane>
          <el-tab-pane label="Shipping" name="Shipping">Palm Angels and Missoni join forces for AW21 to create an unlikely yet natural Italian-fuelled capsule rooted in heritage sportswear and vintage knits. This crew is made in Italy from pure cotton with dropped shoulders for a truly retro look and comes detailed with seasonal MIND text on the front and the duo’s co-branded logo embroidered on the back that was inspired by Missoni’s rich archive.</el-tab-pane>
          <el-tab-pane label="Returns" name="Returns">Palm Angels and Missoni join forces for AW21 to create an unlikely yet natural Italian-fuelled capsule rooted in heritage sportswear and vintage knits. This crew is made in Italy from pure cotton with dropped shoulders for a truly retro look and comes detailed with seasonal MIND text on the front and the duo’s co-branded logo embroidered on the back that was inspired by Missoni’s rich archive.</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <ItemsSame
      class="items__same"
      :items="itemsSame"
    />
  </div>
</template>
<script>
import { items } from '@/utils/stuff'
import ItemsSame from '@/components/items-same'
export default {
  name: 'PageItem',
  data () {
    return {
      item: items.filter(el => el.id === this.$route.params.id)[0],
      itemsSame: items.slice(0, 8),
      activeDescrTab: 'Description'
    }
  },
  components: {
    ItemsSame
  },
  computed: {
  },
  updated () {
    console.log('update')
  },
  created () {
    console.log(this.item)
  }
}
</script>
<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1570px;
  margin: 0 auto;
  padding: 0 15px;
}
.items__same {
  margin: 70px auto 30px;
  grid-column-start: 1;
  grid-column-end: 3;
}
.carousel {
  /* height: 400px; */
  /* margin-top: 10vh; */
}
.carousel__item {
  height: 100%;
}
.carousel__img {
  width: 100%;
  margin-top: 100px;
}
.content {
  width: 100%;
}
.content__block {
  margin-top: 50px;
  position: sticky;
  top: 186px;
  /* min-height: 100vh; */
}
.content__name, .content__colour, .content__price {
  text-align: center;
}
.content__name {
  font-size: 25px;
}
.content__colour {
  font-size: 18px;
}
.content__price {
  font-size: 18px;
  margin: 35px 0;
}
.content__card {
  display: grid;
  grid-template-rows: 1fr 50%;
  grid-gap: 25px;
}
.card__sizes {
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* border: 1px solid rgb(242, 242, 242); */
}
.card__size {
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  border: 1px solid rgb(242, 242, 242);
}
.card__size p {
  margin: 10px 0;
}
.card__btns {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}
.card__btns div {
  text-transform: uppercase;
  font-weight: bolder;
  height: 44px;
  text-align: center;
  line-height: 44px;
  cursor: pointer;
}
.card__btns-add {
  background-color: rgb(65, 65, 65);
  color: white;
  margin-bottom: 20px;
}
.card__btns-add:hover {
  background-color: rgb(8, 8, 8);
}
.card__btns-wish {
  background-color: rgb(245, 245, 245);
  color: rgb(51, 51, 51);
}
.card__btns-wish:hover {
  color: rgb(0, 0, 0);
}
.content__desr {
  width: 100%;
  max-width: 600px;
  margin: 30px auto 0;
}
@media screen and (max-width: 768px) {
  .item {
    grid-template-columns: 1fr;
  }
  .carousel {
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    overflow: auto;
  }
  .content__card {
    grid-template-rows: none;
  }
  .carousel__img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .content__block {
    margin-top: 20px;
  }
  .content__name {
    font-size: 20px;
    margin: 20px 0 15px;
  }
  .content__colour {
    font-size: 15px;
    margin: 15px 0;
  }
  .content__price {
    font-size: 15px;
    margin: 15px 0;
  }
  .card__size {
    font-size: 12px;
  }
  .card__size p {
    margin: 7px 0;
  }
  .items__same {
    margin: 30px auto;
  }
}
</style>

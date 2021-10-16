<template>
  <div class="filters">
    <!-- <div class="filters__price filters__block">
      <div class="filters__title">
        <p>Price</p>
      </div>
      <div class="filters__title">
        <p class="current__price">{{price_range[0]}} $</p>
        <p class="current__price">-</p>
        <p class="current__price">{{price_range[1]}} $</p>
      </div>
      <el-slider
        v-model="price_range"
        range
        :max="2500">
      </el-slider>
    </div> -->
    <div class="filters__size filters__block">
      <p class="filters__title">Size US</p>
      <div class="sizes__list">
        <div
          v-for="(size, i) in sizes"
          :key="i"
          @click="checkSize(size)"
          class="sizes__item"
          :class="!sizes_checklist.includes(size) ? '' : 'active'"
        >
          {{size}}
        </div>
      </div>
    </div>
    <div class="filters__brands filters__block">
      <p class="filters__title">Brands</p>
      <el-checkbox-group
        v-model="brands_checklist"
        class="brands__list"
      >
        <el-checkbox
          v-for="(brand, i) in brands"
          :key="i"
          :label="brand"
          class="brands__item"
        >
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="filters__colour filters__block">
      <p class="filters__title">Colour</p>
      <el-checkbox-group
        v-model="colours_checklist"
        class="brands__list"
      >
        <el-checkbox
          v-for="(colour, i) in colors"
          :key="i"
          :label="colour"
          class="brands__item"
        >
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Filters',
  props: {
    sizes: {
      type: Array
    },
    colors: {
      type: Array
    },
    brands: {
      type: Array
    }
  },
  data () {
    return {
      brands_checklist: [],
      colours_checklist: [],
      sizes_checklist: [],
      price_range: [0, 2500]
    }
  },
  methods: {
    checkSize (size) {
      if (this.sizes_checklist.includes(size)) {
        this.sizes_checklist.splice(this.sizes_checklist.indexOf(size), 1)
      } else {
        this.sizes_checklist.push(size)
      }
    }
  }
}
</script>
<style scoped>
.filters {
  position: sticky;
  top: 164px;
  height: fit-content;
}
.filters__title {
  margin: 0;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bolder;
}
.brands__list {
  max-height: 250px;
  overflow: auto;
}
.brands__item {
  width: 100%;
  margin: 0;
}
.filters__block {
  margin: 25px 0;
}
.filters__block:first-child {
  margin-top: 0;
}
.current__price {
  font-size: 14px;
}
.filters__price .filters__title {
  display: flex;
  justify-content: space-between;
}
.filters__price .filters__title p {
  margin: 0;
}
.sizes__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.sizes__item {
  text-align: center;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgb(242, 242, 242);
  font-size: 14px;
  cursor: pointer;
}
.sizes__item.active {
  background: rgb(100, 100, 100);
  color: rgb(200, 200, 200);
}
</style>

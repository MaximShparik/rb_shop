<template>
  <div class="filters__mobile">
    <div class="filters__mobile-btns">
      <div
        @click="openFilter"
        class="filter__btn"
      >
        Filter
      </div>
    </div>
    <div
      class="filters__mobile-menu"
      :class="activeMenu ? 'active' : ''"
    >
      <div class="menu__control">
        <div
          v-if="activeBrands === false
            && activeColour === false
            && activeSizes === false"
          @click="closeFilters"
          class="menu__control-close"
        >
           <i class="el-icon-close"></i>
        </div>
        <div
          v-else
          @click="activeBrands = false,
            activeColour = false,
            activeSizes = false"
          class="menu__control-back"
        >
           <i class="el-icon-back"></i>
        </div>
        <div class="menu__control-title">
          Filter
        </div>
        <div
          @click="resetFilter"
          class="menu__control-refresh"
        >
           <i class="el-icon-refresh"></i>
        </div>
      </div>
      <div
        class="menu__items"
        :style="'height: calc(' + windowHeight + 'px - 54px);'"
      >
        <div
          class="menu__item"
          @click="activeBrands = true"
        >
          <div class="title">Brands</div>
          <div class="variants">
            {{brands_checklist.length === 0 ? 'All' : brands_checklist.join(', ')}}
          </div>
          <div class="icon">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div
          class="menu__item"
          @click="activeSizes = true"
        >
          <div class="title">Size</div>
          <div class="variants">
            {{sizes_checklist.length === 0 ? 'All' : sizes_checklist.join(', ')}}
          </div>
          <div class="icon">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div
          class="menu__item"
          @click="activeColour = true"
        >
          <div class="title">Colour</div>
          <div class="variants">
            {{colours_checklist.length === 0 ? 'All' : colours_checklist.join(', ')}}
          </div>
          <div class="icon">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
        <div
          class="btn show"
          @click="closeFilters"
        >
          Show
        </div>
      </div>
    </div>
    <div
      class="search__filters"
      :class="activeBrands ? 'active' : ''"
      :style="'height: calc(' + windowHeight + 'px - 140px);'"
    >
      <el-checkbox-group
        v-model="brands_checklist"
        class="filter__list"
      >
        <el-checkbox
          v-for="(brand, i) in brands"
          :key="i"
          :label="brand"
          class="filter__item"
        >
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <div
      class="search__filters"
      :class="activeColour ? 'active' : ''"
      :style="'height: calc(' + windowHeight + 'px - 140px);'"
    >
      <el-checkbox-group
        v-model="colours_checklist"
        class="filter__list"
      >
        <el-checkbox
          v-for="(color, i) in colors"
          :key="i"
          :label="color"
          class="filter__item"
        >
        </el-checkbox>
      </el-checkbox-group>
    </div>
    <div
      class="search__filters"
      :class="activeSizes ? 'active' : ''"
      :style="'height: calc(' + windowHeight + 'px - 140px);'"
    >
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
  </div>
</template>
<script>
export default {
  name: 'MobileFilters',
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
      price_range: [0, 2500],
      activeMenu: false,
      activeBrands: false,
      activeColour: false,
      activeSizes: false,
      windowHeight: Math.max(document.documentElement.clientHeight, window.innerHeight)
    }
  },
  methods: {
    openFilter () {
      this.activeMenu = true
      document.querySelector('body').style.overflow = 'hidden'
    },
    closeFilters () {
      this.activeMenu = false
      this.activeBrands = false
      this.activeColour = false
      this.activeSizes = false
      document.querySelector('body').style.overflow = 'auto'
    },
    resetFilter () {
      this.brands_checklist = []
      this.colours_checklist = []
      this.sizes_checklist = []
    },
    checkSize (size) {
      if (this.sizes_checklist.includes(size)) {
        this.sizes_checklist.splice(this.sizes_checklist.indexOf(size), 1)
      } else {
        this.sizes_checklist.push(size)
      }
    },
    setHeight () {
      this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)
    }
  },
  computed: {
  },
  created () {
    window.addEventListener('resize', this.setHeight())
  },
  destroyed () {
    window.removeEventListener('resize', this.setHeight)
  }
}
</script>
<style scoped>
.filters__mobile {
  margin: 5px 0;
}
.filters__mobile-btns {
  display: flex;
  width: 100%;
  justify-content: center;
}
.filter__btn {
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  width: 100%;
  border: 1px solid;
  cursor: pointer;
}
.filters__mobile-menu {
  transition: 0.3s;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: white;
  z-index: 1000;
  top: 0;
  left: 100vw;
}
.filters__mobile-menu.active {
  left: 0;
}
.menu__items {
  height: calc(100vh - 54px);
  display: flex;
  flex-direction: column;
}
.menu__control {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
}
.menu__control-close,
.menu__control-refresh,
.menu__control-back {
  font-size: 30px;
  padding: 10px;
}
.menu__control-title {
  font-size: 20px;
  line-height: 53px;
}
.menu__item {
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-template-rows: 1fr 1fr;
  border-bottom: 1px solid;
  padding: 12px;
  grid-gap: 10px;
}
.menu__item .variants {
  font-weight: 100;
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis;
}
.menu__item .icon {
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  line-height: 46px;
  font-size: 20px;
  text-align: end;
}
.search__filters {
  transition: 0.3s;
  height: calc(100vh - 110px);
  position: fixed;
  width: 100vw;
  top: 54px;
  left: 100vw;
  background: white;
  z-index: 10000;
}
.search__filters.active {
  left: 0;
}
.filter__list {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 20px;
  overflow: auto;
}
.btn.show {
  margin: auto auto 25px;
  border: 1px solid;
}
.sizes__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  grid-gap: 15px;
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

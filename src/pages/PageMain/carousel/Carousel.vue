<template>
  <el-carousel
    trigger="click"
    :interval="600000"
    height="75vh"
  >
    <el-carousel-item
      v-for="(slide, i) in carouselData"
      :key="i"
    >
      <div
        :style="[{ 'background-image': 'url(' + slide.slideUrl + ')' },
          {'background-position': slide.position + '%'}]"
        class="img__block"
      >
        <div
          :class="'absolute block__' + (slide.btnPOsition)"
          :style="'color:' + slide.color"
        >
          <h3 v-if="slide.titleText">{{slide.titleText}}</h3>
          <p v-if="slide.subtitleText">{{slide.subtitleText}}</p>
          <div v-if="slide.btnText">{{slide.btnText}}</div>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { carouselData } from './stuff'
export default {
  name: 'Carousel',
  data () {
    return {
      carouselData
    }
  }
}
</script>
<style scoped>
.el-carousel__item {
  /* display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; */
  /* width: 70vw; */
  /* left: -10vw; */
}
.el-carousel__item .img__block {
  /* object-fit: cover; */
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
  position: relative;
}
.absolute {
  position: absolute;
  width: fit-content;
  /* padding: 10px 25px; */
  /* background-image: linear-gradient(90deg, rgba(253,252,251, 0.2) 0%, rgba(226,209,195, 0.9) 100%); */
  /* border-radius: 20px; */
  /* box-shadow: 0 0 32px 2px grey; */
}
.absolute h3 {
  font-size: 30px;
  margin-top: 0;
  margin-bottom: 15px;
}
.absolute p {
  font-size: 20px;
  margin: 10px 0;
}
.absolute div {
  /* width: 100%; */
  /* padding: 10px 0; */
  /* background: aliceblue; */
  /* text-align: center; */
  /* font-size: 20px; */
}
.block__1 {
  top: 25%;
  left: 10%;
}
.block__2 {
  right: 0px;
  transform: translateX(-50%);
  bottom: 40%;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .block__1 {
    top: 10%;
    left: 5%;
  }
  .block__2 {
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
    text-align: center;
  }
}
</style>

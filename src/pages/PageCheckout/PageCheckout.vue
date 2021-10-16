<template>
  <div class="page__checkout">
    <Checkout />
    <Basket />
    <Overview />
    <div
      v-if="width <= 768"
      class="terms"
    >
      By placing order you agree to our
      <a
        href="https://www.endclothing.com/ru/terms-and-conditions"
        target="_blank"
      >Terms & Conditions</a>
    </div>
    <div
      v-if="width <= 768"
      class="submit"
    >
      <div class="btn">PLACE ORDER</div>
    </div>
  </div>
</template>
<script>
import Basket from './basket'
import Checkout from './checkout'
import Overview from './overview'
export default {
  name: 'PageCheckout',
  data () {
    return {
      width: window.innerWidth
    }
  },
  components: {
    Basket,
    Checkout,
    Overview
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style scoped>
.page__checkout {
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1000px;
  margin: 30px auto;
}
.checkout {
  grid-row-start: 1;
  grid-row-end: 10;
}
.terms {
  margin-bottom: 30px;
}
@media screen and (max-width: 768px) {
  .page__checkout {
    grid-template-columns: 90vw;
    /* grid-gap: 30px; */
    margin: 30px 5vw;
  }
  .basket {
    grid-row-start: 1;
  }
  .checkout {
    grid-row-start: 2;
  }
}
</style>

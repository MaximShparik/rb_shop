<template>
  <div class="checkout">
    <div class="checkout__block">
      <div class="title">
        <i class="el-icon-shopping-cart-1 icon__checkout"></i>
        <span>SHIPPING INFO</span>
        <el-button
          v-if="isAuthenticated() && !!profile.shipping.length"
          @click="showShippingForm = !showShippingForm"
          class="add__btn"
        >{{showShippingForm ? 'Hide' : 'Add'}}</el-button>
      </div>
      <div
        v-if="isAuthenticated() && !!profile.shipping.length && !showShippingForm"
        class="info__items"
      >
        <div
          v-for="(profile, i) in profile.shipping"
          :key="profile.id"
          class="info__item"
        >
          <p>Name: {{profile.name}}</p>
          <p>Address: {{profile.address}}</p>
          <p>Phone: {{profile.phone}}</p>
          <p>City: {{profile.city}}</p>
          <p>ZIP: {{profile.zip}}</p>
          <p>Country: {{profile.country}}</p>
          <el-button
            icon="el-icon-edit"
            @click="editShipping(i)"
            class="edit__btn"
          ></el-button>
          <el-button
            @click="useShipping(i)"
            class="default__btn"
            :class="profile.default ? 'active' : ''"
          >Use</el-button>
        </div>
      </div>
      <FormCheckout
        v-if="!isAuthenticated() || profile.shipping.length === 0 || showShippingForm"
        :data="profile !== null && indexOfUpdatingShipping !== null ? profile.shipping[indexOfUpdatingShipping] : null"
      />
    </div>

    <div class="checkout__block">
      <div class="title">
        <i class="el-icon-notebook-1 icon__checkout"></i>
        <span>BILLING INFO</span>
      </div>
      <div
        class="info"
        :style="!billingSameShipping ? 'padding-bottom: 0' : ''"
      >
        <el-checkbox v-model="billingSameShipping">
          SAME AS SHIPPING
        </el-checkbox>
      </div>
      <FormCheckout v-if="!billingSameShipping" />
    </div>

    <div class="checkout__block">
      <div class="title">
        <i class="el-icon-bank-card icon__checkout normal"></i>
        PAYMENT INFO
      </div>
      <div class="payment">
        YANDEX PAY FORM
      </div>
    </div>
    <div
      v-if="width > 768"
      class="terms"
    >
      By placing order you agree to our
      <a
        href="https://www.endclothing.com/ru/terms-and-conditions"
        target="_blank"
      >Terms & Conditions</a>
    </div>
    <div
      v-if="width > 768"
      class="submit"
    >
      <div class="btn">PLACE ORDER</div>
    </div>
  </div>
</template>
<script>
import FormCheckout from '@/components/form-checkout'
import { isAuthenticated } from '@/services/auth'
import { profile } from '@/utils/stuff'
import { randomInteger } from '@/utils'
export default {
  name: 'Checkout',
  components: {
    FormCheckout
  },
  props: {
  },
  data () {
    return {
      width: window.innerWidth,
      showShippingForm: false,
      showBillingForm: false,
      indexOfUpdatingShipping: null,
      billingSameShipping: true,
      profile
    }
  },
  methods: {
    isAuthenticated,
    editShipping (index) {
      this.indexOfUpdatingShipping = index
      this.showShippingForm = true
    },
    updateShipping (data) {
      if (this.indexOfUpdatingShipping !== null) {
        this.profile.shipping[this.indexOfUpdatingShipping] = data
        this.indexOfUpdatingShipping = null
      } else {
        this.profile.shipping.push({
          id: randomInteger(1, 100000),
          ...data
        })
      }
      this.$refs.dialogSetShipping.close()
    },
    useShipping (index) {
      var data = this.profile.shipping
      data.forEach(el => {
        el.default = false
      })
      data[index].default = true
      this.$set(this.profile, 'shipping', data)
    }
  },
  computed: {
  }
}
</script>
<style scoped>
.checkout__block {
  border: 1px solid rgb(220, 220, 220);
  border-radius: 2px;
  margin-bottom: 20px;
}
.checkout__block .title {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid rgb(220, 220, 220);;
}
.title i {
  margin-right: 10px;
}
.title span {
  line-height: 30px;
}
.info {
  padding: 20px;
  display: flex;
}
.payment {
  padding: 20px;
}
.terms {
  margin-bottom: 30px;
}
.info__items p {
  margin: 5px;
  font-size: 14px;
}
.info__items {
  padding: 30px 20px;
  padding-bottom: 20px;
  display: flex;
  overflow: auto;
}
.info__item {
  position: relative;
  min-width: 250px;
  max-width: 250px;
  border: 1px solid rgb(204, 204, 204);
  padding: 10px;
  margin-right: 20px;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  .checkout {
    grid-row-start: 2;
  }
}
</style>

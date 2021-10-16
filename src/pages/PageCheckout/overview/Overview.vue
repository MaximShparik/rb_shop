<template>
  <div class="overview">
    <div class="promocode">
      <div
        class="promocode__title"
        @click="promoVisible = !promoVisible"
      >
        <span>PROMOCODE</span>
        <span>{{promoVisible ? '-' : '+'}}</span>
      </div>
      <div
        v-if="promoVisible"
        class="promocode__input"
      >
        <FormField
          class="form__filed"
        >
          <el-input
            placeholder="Enter code"
            v-model="code"
            clearable
          >
          </el-input>
        </FormField>
        <div class="promocode__btns">
          <div class="btn">APPLY</div>
        </div>
      </div>
    </div>
    <div class="result">
      <div class="subltotal">
        <span>Subtotal:</span>
        <span>{{123900}}</span>
      </div>
      <div class="shipping">
        <span>Shipping:</span>
        <span>{{123900}}</span>
      </div>
      <div class="total">
        <span>Total:</span>
        <span>{{123900}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import FormField from '@/components/form-field'
export default {
  name: 'Overview',
  data () {
    return {
      code: null,
      promoVisible: false
    }
  },
  components: {
    FormField
  },
  methods: {
    deleteItem (id) {
      console.log(id)
    }
  }
}
</script>
<style scoped>
.overview {
  padding-left: 50px;
  padding-right: 50px;
}
.promocode {
  padding: 20px 0;
  border-bottom: 1px solid rgb(220, 220, 220);
}
.promocode__title {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.promocode__title span:last-child {
  font-size: 25px;
  line-height: 18px;
}
.promocode__input {
  margin-top: 20px;
}
.promocode__btns {
  margin-top: 20px;
}
.result {
  padding-top: 20px;
}
.result div {
  display: flex;
  justify-content: space-between;
}
.subltotal {
  margin-bottom: 10px;
}
.subltotal span, .shipping span {
  font-size: 13px;
}
.shipping {
  margin-bottom: 20px;
}
.total span {
  font-weight: bolder;
}
.icon {
  cursor: pointer;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .overview {
    padding: 0;
    margin-bottom: 30px;
  }
}
</style>

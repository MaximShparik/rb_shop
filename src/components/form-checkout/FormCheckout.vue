<template>
  <form
    @submit.prevent="submit()"
    class="form"
  >
    <FormField
      label="NAME"
      :messages="validationErrors.name"
      class="form__filed"
    >
      <el-input
        placeholder="Write your name"
        v-model="fields.name"
        clearable>
      </el-input>
    </FormField>
    <FormField
      label="ADDRESS"
      :messages="validationErrors.address"
      class="form__filed"
    >
      <el-input
        placeholder="Write your address"
        v-model="fields.address"
        clearable>
      </el-input>
    </FormField>
    <FormField
      label="PHONE"
      :messages="validationErrors.phone"
      class="form__filed"
    >
      <el-input
        placeholder="Write your phone"
        v-model="fields.phone"
        clearable>
      </el-input>
    </FormField>
    <FormField
      label="CITY"
      :messages="validationErrors.city"
      class="form__filed"
    >
      <el-input
        placeholder="Write your city"
        v-model="fields.city"
        clearable>
      </el-input>
    </FormField>
    <FormField
      label="ZIP"
      :messages="validationErrors.zip"
      class="form__filed"
    >
      <el-input
        placeholder="Write your zip-code"
        v-model="fields.zip"
        clearable>
      </el-input>
    </FormField>
    <FormField
      label="COUNTRY"
      :messages="validationErrors.country"
      class="form__filed"
    >
      <el-input
        placeholder="Write your country"
        v-model="fields.country"
        clearable>
      </el-input>
    </FormField>
    <el-checkbox v-model="fields.save">
      Save for next time
    </el-checkbox>
  </form>
</template>
<script>
import { isAuthenticated } from '@/services/auth'
import FormField from '@/components/form-field'
import validationRules from './validationRules'
import { mixForm } from '@/utils/form'
export default {
  validationRules,
  name: 'FormCheckout',
  mixins: [mixForm],
  components: {
    FormField
  },
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      fields: {
        name: null,
        address: null,
        city: null,
        zip: null,
        country: null,
        phone: null,
        save: false
      }
    }
  },
  methods: {
    isAuthenticated
  },
  mounted () {
    if (this.data) this.fields = this.data
  }
}
</script>
<style scoped>
.form {
  padding: 20px;
}
.form__filed {
  margin-bottom: 10px;
}
</style>

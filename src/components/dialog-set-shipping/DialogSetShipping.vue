<template>
  <el-dialog
    class="login__dialog"
    :title="title ? title : 'Add new shipping address'"
    :visible.sync="opened"
  >
    <form
      @submit.prevent="submit()"
      class="login__form"
    >
      <FormField
        label="Name"
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
        label="Address"
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
        label="Phone"
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
        label="City"
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
        label="Zip"
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
        label="Country"
        :messages="validationErrors.country"
        class="form__filed"
      >
        <el-input
          placeholder="Write your country"
          v-model="fields.country"
          clearable>
        </el-input>
      </FormField>
      <button
        type="submit"
        class="form__submit"
      >Save</button>
    </form>
  </el-dialog>
</template>
<script>
import FormField from '@/components/form-field'
import validationRules from './validationRules'
import { mixForm } from '@/utils/form'
export default {
  validationRules,
  name: 'DialogSetShipping',
  mixins: [mixForm],
  components: {
    FormField
  },
  props: {
    title: {
      type: String
    },
    data: {
      type: Object
    }
  },
  data () {
    return {
      opened: false,
      fields: {
        name: null,
        address: null,
        city: null,
        zip: null,
        country: null,
        phone: null,
        default: false
      }
    }
  },
  methods: {
    open () {
      this.opened = true
      if (this.data) {
        this.fields = this.data
        // console.log(this.data)
      }
    },
    close () {
      this.opened = false
      this.fields = {
        name: null,
        address: null,
        city: null,
        zip: null,
        country: null,
        phone: null,
        default: false
      }
      this.$v.$reset()
    }
  }
}
</script>
<style scoped>
.login__dialog {
  width: 100%;
}
.form__submit {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  margin-left: 50%;
  transform: translateX(-50%);
}
.form__filed {
  margin-bottom: 15px;
}
</style>

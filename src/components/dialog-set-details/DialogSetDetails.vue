<template>
  <el-dialog
    class="login__dialog"
    title="Write new info"
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
        label="Password"
        :messages="validationErrors.password"
        class="form__filed"
      >
        <el-input
          placeholder="Write new password"
          v-model="fields.password"
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
  name: 'DialogSetDetails',
  mixins: [mixForm],
  components: {
    FormField
  },
  data () {
    return {
      opened: false,
      fields: {
        name: null,
        password: null
      }
    }
  },
  methods: {
    open () {
      this.opened = true
    },
    close () {
      this.opened = false
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

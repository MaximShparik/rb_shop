<template>
  <el-dialog
    class="login__dialog"
    :title="!fields.registartion ? 'Login' : 'Registration'"
    :visible.sync="opened"
  >
    <form
      @submit.prevent="submit()"
      class="login__form"
    >
      <FormField
        v-if="fields.registartion"
        :messages="validationErrors.username"
        class="form__filed-login"
      >
        <el-input
          placeholder="Name"
          v-model="fields.username"
          clearable>
        </el-input>
      </FormField>
      <FormField
        :messages="validationErrors.email"
        class="form__filed-login"
      >
        <el-input
          placeholder="Email"
          v-model="fields.email"
          clearable>
        </el-input>
      </FormField>
      <FormField
        :messages="validationErrors.password"
      >
        <el-input
          placeholder="Password"
          v-model="fields.password"
          clearable>
        </el-input>
      </FormField>
      <p
        style="margin-bottom: 0; cursor: pointer"
        v-if="!fields.registartion"
        @click="fields.registartion = true"
      >
        If you dont have account, click here.
      </p>
      <p
        style="margin-bottom: 0; cursor: pointer"
        v-if="fields.registartion"
        @click="fields.registartion = false"
      >
        Back to login.
      </p>
      <button
        type="submit"
        class="form__submit"
      >{{fields.registartion ? 'Register' : 'Войти'}}</button>
    </form>
  </el-dialog>
</template>
<script>
import FormField from '@/components/form-field'
import validationRules from './validationRules'
import { mixForm } from '@/utils/form'
export default {
  validationRules,
  name: 'DialogLogin',
  mixins: [mixForm],
  components: {
    FormField
  },
  data () {
    return {
      opened: false,
      fields: {
        registartion: false,
        username: null,
        email: null,
        password: null
      }
    }
  },
  methods: {
    open () {
      this.opened = true
      this.fields = {
        registartion: false,
        username: null,
        email: null,
        password: null
      }
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
  margin-top: 20px;
}
.form__filed-login {
  margin-bottom: 15px;
}
</style>

import { required } from 'vuelidate/lib/validators'

export default () => {
  return {
    email: {
      required: { validator: required, message: 'Поле обязательно' }
    },
    password: {
      required: { validator: required, message: 'Поле обязательно' }
    }
  }
}

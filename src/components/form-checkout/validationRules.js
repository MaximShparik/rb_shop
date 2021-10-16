import { required } from 'vuelidate/lib/validators'

export default () => {
  return {
    name: {
      required: { validator: required, message: 'Поле обязательно' }
    },
    address: {
      required: { validator: required, message: 'Поле обязательно' }
    },
    city: {
      required: { validator: required, message: 'Поле обязательно' }
    },
    zip: {
      required: { validator: required, message: 'Поле обязательно' }
    },
    country: {
      required: { validator: required, message: 'Поле обязательно' }
    }
  }
}

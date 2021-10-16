<template>
  <div>
    <HeadNavigation />
    <Navigation />
    <DialogLogin
      ref="dialogLogin"
      @submit="onSubmit"
    />
    <slot/>
  </div>
</template>
<script>
import DialogLogin from '@/components/dialog-login'
import HeadNavigation from '@/components/head-nav'
import Navigation from '@/components/nav'
import { login } from '@/services/auth'
export default {
  name: 'LayoutDefault',
  components: {
    DialogLogin,
    Navigation,
    HeadNavigation
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    async onSubmit ({ username, email, password, registartion }) {
      try {
        if (registartion) {
          const res = await this.$async.register.$perform({
            data: { username, email, password }
          })
          if (res.status === 200 || res.status === 201) {
            this.$message.success('Successful register')
            login(res.data)
            this.$refs.dialogLogin.close()
          } else {
            this.$message.error(res.data.message)
          }
          console.log(res)
        } else {
          const res = await this.$async.login.$perform({
            data: { email, password }
          })
          if (res.status === 200 || res.status === 201) {
            this.$message.success('Successful login')
            login(res.data)
            this.$refs.dialogLogin.close()
          } else {
            this.$message.error(res.data.message)
          }
          console.log(res)
        }
      } catch (e) {
        if (!registartion) this.$message.error('Invalid credential')
        if (registartion) this.$message.error(e.message)
        console.log(e)
      }
    }
  },
  async: {
    login (request) {
      return this.$api.login(request)
    },
    register (request) {
      return this.$api.register(request)
    }
  }
}
</script>

<template>
  <div class="profile">
    <TitlePage
      title="Profile"
    />
    <div class="profile__info">
      <div class="ordered">
        <p class="profile__info-title">Recent Orders</p>
        <div class="ordered__list">
          <div
            v-for="(order, i) in profile.recentOrders"
            :key="i"
            class="ordered__item"
          >
            <img
              :src="order.order_img"
              alt=""
              class="ordered__item-img"
            >
            <div class="ordered__info">
              <el-button type="success">{{order.status}}</el-button>
              <p>{{order.name}}</p>
              <p>Order: {{order.id}}</p>
              <p>Order Date: {{order.order_date}}</p>
              <!-- <p></p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="profile__creds">
        <div class="profile__infos">
          <p class="profile__info-title">My Details</p>
          <!-- <el-button
            type="info"
            @click="open(0)"
          >Edit</el-button> -->
          <el-button
            icon="el-icon-edit"
            @click="open(0)"
            circle
            class="profile__info-edit"
          ></el-button>
        </div>
        <div class="info__items">
          <p>Name: {{profile.details.name}}</p>
          <p>Login: {{profile.details.login}}</p>
          <p>**************</p>
        </div>
      </div>
      <div class="shipping__creds">
        <div class="profile__infos">
          <p class="profile__info-title">Shipping Address</p>
          <el-button
            type="success"
            icon="el-icon-plus"
            circle
            @click="open(1)"
          ></el-button>
        </div>
        <div
          v-if="!!profile.shipping.length"
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
              @click="open(1), editShipping = i"
              class="edit__btn edit"
            ></el-button>
            <el-button
              icon="el-icon-delete"
              @click="remove(1, i)"
              class="edit__btn"
            ></el-button>
            <el-button
              @click="setDefault(1, i)"
              class="edit__btn default"
              :class="profile.default ? 'active' : ''"
            >Default</el-button>
          </div>
        </div>
      </div>
      <!-- <div class="billing__creds">
        <div class="profile__infos">
          <p class="profile__info-title">Billing Address</p>
          <el-button
            type="success"
            icon="el-icon-plus"
            circle
            @click="open(2)"
          ></el-button>
        </div>
        <div
          v-if="!!profile.billing.length"
          class="info__items"
        >
          <div
            v-for="(profile, i) in profile.billing"
            :key="i"
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
              @click="open(2), editSBilling = i"
              class="edit__btn edit"
            ></el-button>
            <el-button
              icon="el-icon-delete"
              @click="remove(2, i)"
              class="edit__btn"
            ></el-button>
            <el-button
              @click="setDefault(2, i)"
              class="edit__btn default"
              :class="profile.default ? 'active' : ''"
            >Default</el-button>
          </div>
        </div>
      </div> -->
    </div>
    <DialogSetDetails
      ref="dialogSetDetails"
      @submit="setDetails"
    />
    <DialogSetShipping
      ref="dialogSetShipping"
      @submit="setShipping"
    />
    <!-- <DialogSetBilling
      ref="dialogSetBilling"
      @submit="setBilling"
    /> -->
  </div>
</template>
<script>
import TitlePage from '@/components/title-page'
import DialogSetDetails from '@/components/dialog-set-details'
// import DialogSetBilling from '@/components/dialog-set-billing'
import DialogSetShipping from '@/components/dialog-set-shipping'
import { profile } from '@/utils/stuff'
import { randomInteger } from '@/utils'
export default {
  name: 'PageProfile',
  data () {
    return {
      profile,
      editShipping: null,
      editSBilling: null
    }
  },
  components: {
    TitlePage,
    DialogSetDetails,
    DialogSetShipping
    // DialogSetBilling
  },
  computed: {
  },
  methods: {
    open (index) {
      if (index === 0) {
        this.$refs.dialogSetDetails.open()
      } else if (index === 1) {
        this.$refs.dialogSetShipping.open()
      } else if (index === 2) {
        // this.$refs.dialogSetBilling.open()
      }
    },
    remove (key, profileNum) {
      var data
      if (key === 1) {
        data = this.profile.shipping
        data.splice(profileNum, 1)
        this.$set(this.profile, 'shipping', data)
      } else if (key === 2) {
        // data = this.profile.billing
        // data.splice(profileNum, 1)
        // this.$set(this.profile, 'billing', data)
      }
    },
    setDefault (key, profileNum) {
      var data
      if (key === 1) {
        data = this.profile.shipping
        data.forEach(el => {
          el.default = false
        })
        data[profileNum].default = true
        this.$set(this.profile, 'shipping', data)
      } else if (key === 2) {
        // data = this.profile.billing
        // data.forEach(el => {
        //   el.default = false
        // })
        // data[profileNum].default = true
        // this.$set(this.profile, 'billing', data)
      }
    },
    setShipping (data) {
      data.id = randomInteger(100000, 999999)
      if (this.editShipping === null) {
        this.profile.shipping.push(data)
        this.$refs.dialogSetShipping.close()
      } else {
        this.$set(this.profile.shipping, this.editShipping, data)
        // console.log(this.profile.shipping[this.editShipping])
        this.editShipping = null
        this.$refs.dialogSetShipping.close()
      }
    },
    // setBilling (data) {
    //   data.id = randomInteger(100000, 999999)
    //   if (this.editSBilling === null) {
    //     this.profile.billing.push(data)
    //     this.$refs.dialogSetBilling.close()
    //   } else {
    //     this.$set(this.profile.billing, this.editSBilling, data)
    //     this.editSBilling = null
    //     this.$refs.dialogSetBilling.close()
    //   }
    // },
    setDetails () {
    }
  }
}
</script>
<style scoped>
.ordered, .profile__creds, .shipping__creds {
  border-bottom: 1px solid rgb(242, 242, 242);
}
.profile__infos {
  display: flex;
}
.profile__info {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
.ordered__list {
  display: flex;
  overflow: auto;
  padding-bottom: 20px;
}
.ordered__item {
  width: 250px;
  margin-right: 35px;
  border: 1px solid rgb(204, 204, 204);
  padding: 30px;
  padding-top: 0;
}
.ordered__info {
  font-size: 14px;
}
.ordered__info p:last-child {
  margin-bottom: 0;
}
.ordered__item-img {
  width: 100%;
}
.info__items p {
  margin: 5px;
  font-size: 14px;
}
.profile__info-title {
  margin: 30px 0;
}
.info__items {
  margin-bottom: 20px;
}
.billing__creds .info__items, .shipping__creds .info__items {
  padding-top: 20px;
  padding-bottom: 10px;
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
  .profile__info {
    padding: 0 10px;
  }
}
</style>

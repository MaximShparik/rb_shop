<template>
  <div class="nav__box">
    <div
      v-if="width > 768"
      class="nav"
    >
      <el-dropdown @command="profileClick">
        <span class="el-dropdown-link">
          <i class="el-icon-user"></i>
        </span>
        <el-dropdown-menu
          slot="dropdown"
          v-if="isAuthenticated()"
        >
          <el-dropdown-item command="profile">Profile</el-dropdown-item>
          <el-dropdown-item command="logout">Logout</el-dropdown-item>
        </el-dropdown-menu>
        <el-dropdown-menu
          slot="dropdown"
          v-else
        >
          <el-dropdown-item command="login">Login</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <div>
        <i
          class="el-icon-search"
          @click="activeSearch = !activeSearch"
        ></i>
        <el-autocomplete
          v-if="activeSearch"
          class="searchGoods__input"
          v-model="searchGoods"
          :fetch-suggestions="querySearch"
          placeholder="Search goods..."
          @select="handleSelect"
          clearable
        ></el-autocomplete>
      </div> -->
      <div>
        <router-link
          :to="{name: 'page-main'}"
        >
          <img src="@/assets/img/logo.png" alt="logo">
        </router-link>
        <!-- KICKZ_DEALZ -->
      </div>
      <div>
        <router-link
          :to="{name: 'page-wishlist'}"
        >
          <i
            v-if="isWishlistItems"
            class="el-icon-star-on"
          ></i>
          <i
            class="el-icon-star-off"
            v-else
          ></i>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{name: 'page-checkout'}"
        >
          <i class="el-icon-goods"></i>
        </router-link>
      </div>
    </div>
    <div
      v-else
      class="nav"
      v-click-outside="closeMobileNav"
    >
      <div>
        <!-- <i class="el-icon-goods"></i> -->
        <router-link
          :to="{name: 'page-checkout'}"
        >
          <i class="el-icon-goods"></i>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{name: 'page-wishlist'}"
          @click.native="activeHamburger = false"
        >
          <i
            v-if="isWishlistItems"
            class="el-icon-star-on"
          ></i>
          <i
            class="el-icon-star-off"
            v-else
          ></i>
        </router-link>
      </div>
      <div>
        <router-link
          :to="{name: 'page-main'}"
          @click.native="activeHamburger = false"
          tag="div"
        >
          <img src="@/assets/img/logo.png" alt="logo">
        </router-link>
        <!-- KICKZ_DEALZ -->
      </div>
      <div
        class="mobile__nav-hamburger"
        :class="activeHamburger ? 'active' : ''"
        @click="activeHamburger = !activeHamburger"
      >
        <span class="mobile__nav-bar"></span>
        <span class="mobile__nav-bar"></span>
        <span class="mobile__nav-bar"></span>
      </div>
    </div>
    <div
      class="mobile__nav-items"
      :class="activeHamburger ? 'active' : ''"
    >
      <router-link
        v-for="(item, i) in nav"
        :key="i"
        tag="div"
        :to="item.search ? { name: item.routeName, query: { search: item.search }} : { name: item.routeName }"
        class="mobile__nav-item"
        @click.native="activeHamburger = false"
      >{{item.name}}</router-link>
      <router-link
        v-if="isAuthenticated()"
        tag="div"
        :to="{ name: 'page-profile' }"
        class="mobile__nav-item"
        @click.native="activeHamburger = false"
      >Profile</router-link>
      <div
        v-if="!isAuthenticated()"
        class="mobile__nav-item"
        @click="profileClick('login')"
      >
        LogIn
      </div>
      <div
        v-if="!isAuthenticated()"
        class="mobile__nav-item"
        @click="profileClick('register')"
      >
        Register
      </div>
      <div
        v-if="isAuthenticated()"
        class="mobile__nav-item"
        @click="logout"
      >
        Log Out
      </div>
    </div>
    <!-- <DialogLogin
      ref="dialogLogin"
      @submit="login"
    /> -->
  </div>
</template>
<script>
// import DialogLogin from '@/components/dialog-login'
import { isAuthenticated, logout } from '@/services/auth'
import { isWishlistItems } from '@/plugins/stuff'
export default {
  name: 'HeadNavigation',
  components: {
    // DialogLogin
  },
  data () {
    return {
      isWishlistItems,
      width: window.innerWidth,
      activeHamburger: false,
      nav: [
        {
          routeName: 'page-goods',
          name: 'All Goods'
        },
        {
          routeName: 'page-goods',
          name: 'Sneaker',
          search: 'sneaker'
        },
        {
          routeName: 'page-goods',
          name: 'Streetwear',
          search: 'streetwear'
        },
        {
          routeName: 'page-news',
          name: 'News'
        }
      ]
    }
  },
  methods: {
    isAuthenticated,
    logout,
    profileClick (command) {
      if (command === 'profile') {
        this.$router.push({ name: 'page-profile' })
      } else if (command === 'logout') {
        logout()
      } else if (command === 'login') {
        this.$parent.$refs.dialogLogin.open()
      }
    },
    // login (data) {
    //   window.localStorage.setItem('refreshToken', data.login)
    //   this.$refs.dialogLogin.close()
    //   window.location.reload(false)
    // },
    closeMobileNav () {
      this.activeHamburger = false
    }
    // querySearch (queryString, cb) {
    //   var links = this.links
    //   var results = queryString ? links.filter(this.createFilter(queryString)) : links
    //   // call callback function to return suggestions
    //   cb(results)
    // },
    // loadAll () {
    //   return [
    //     { value: 'vue', link: 'https://github.com/vuejs/vue' },
    //     { value: 'element', link: 'https://github.com/ElemeFE/element' },
    //     { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    //     { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    //     { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    //     { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    //     { value: 'babel', link: 'https://github.com/babel/babel' }
    //   ]
    // },
    // handleSelect (item) {
    //   alert(item.link)
    // }
  },
  directives: {
    'click-outside': {
      bind: (el, binding, vNode) => {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}'` }
          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },
      unbind: (el, binding) => {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      }
    }
  },
  mounted () {
    // console.log(this.isAuthenticated())
    window.onresize = () => {
      this.width = window.innerWidth
    }
  }
}
</script>
<style scoped>
.nav__box {
  width: 100vw;
  position: fixed;
  background: white;
  z-index: 1000;
  top: 0;
  height: 90px;
}
.nav {
  width: calc(100% - 50px);
  display: flex;
  line-height: 90px;
  max-width: 1570px;
  margin: 0 auto;
}
.nav>div {
  width: 30px;
  height: 90px;
}
.nav>div i {
  cursor: pointer;
  font-size: 30px;
  padding-top: 30px;
}
.nav>div:nth-child(1) {
  margin-right: 60px;
}
/* .nav>div:nth-child(2) {
  display: flex;
} */
.nav>div:nth-child(4) {
  margin-left: 30px;
}
.nav>div:nth-child(2) {
  margin: auto;
  width: 90px;
}
.nav>div:nth-child(2) img {
  cursor: pointer;
  width: 100%;
}
.mobile__nav-items {
  display: none;
}
@media screen and (max-width: 768px) {
  .nav__box {
    box-shadow: 0 -4px 12px 3px grey;
  }
  .mobile__nav-items {
    display: block;
    transition: 0.3s;
    position: fixed;
    top: 70px;
    width: 100vw;
    left: 100vw;
    background: white;
    border-top: 1px solid;
    text-align: center;
    box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.9);
  }
  .mobile__nav-items.active {
    left: 0;
  }
  .mobile__nav-item {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid;
  }
  .mobile__nav-item:first-child {
    border-top: none;
  }
  .nav>div {
    height: 70px;
  }
  .nav__box {
    height: 70px;
  }
  .nav {
    line-height: 70px;
  }
  .nav>div:nth-child(1) {
    margin-right: 0;
  }
  .nav>div:nth-child(2) {
    margin: 0;
    width: 30px;
    margin-left: 30px;
  }
  .nav>div:nth-child(3) {
    width: 70px;
    margin: 0 auto;
  }
  .nav>div:nth-child(3) img {
    cursor: pointer;
    width: 100%;
  }
  .nav>div:nth-child(4) {
    margin-left: 60px;
  }
  .nav>div i {
    padding-top: 20px;
  }
  .mobile__nav-hamburger {
    padding-top: 25px;
    cursor: pointer;
    width: 76px;
  }
  /* .mobile__nav-item:last-child {
    border-bottom: 1px solid rgb(156, 156, 156);
  } */
  .mobile__nav-hamburger.active .mobile__nav-bar:nth-child(2) {
    opacity: 0;
  }
  .mobile__nav-hamburger.active .mobile__nav-bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .mobile__nav-hamburger.active .mobile__nav-bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
  .mobile__nav-bar {
    display: block;
    width: 25px;
    height: 3px;
    margin-bottom: 5px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: black;
  }
}
</style>

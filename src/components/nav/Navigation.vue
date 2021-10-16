<template>
  <ul>
    <li
      v-for="(item, i) in navData"
      :key="i"
    >
      <router-link
        :to="item.route"
      >
        {{item.name}}
      </router-link>
    </li>
  </ul>
</template>
<script>
import { navData } from './stuff.js'
export default {
  name: 'Navigation',
  data () {
    return {
      navData
    }
  }
}
</script>
<style scoped>
ul {
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  z-index: 1000;
  top: 90px;
  display: flex;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgb(242, 242, 242);
  border-bottom: 1px solid rgb(242, 242, 242);
  height: 45px;
}
li {
  list-style: none;
  line-height: 45px;
  margin: 0 15px;
  width: 100px;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 300;
}
li:first-child {
  margin-left: auto;
}
li:last-child {
  margin-right: auto;
}
a {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  ul {
    display: none;
  }
}
</style>

<template>
  <h1>{{title}}</h1>
</template>
<script>
export default {
  name: 'TitlePage',
  props: {
    title: {
      type: String,
      default: null
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 32px;
  text-align: center;
  margin: 0px auto;
  padding: 40px 0;
  /* border-top: 1px solid rgb(242, 242, 242); */
  border-bottom: 1px solid rgb(242, 242, 242);
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 26px;
    padding: 20px 0;
  }
}
</style>

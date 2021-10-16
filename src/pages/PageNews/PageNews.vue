<template>
  <div class="news">
    <TitlePage
      title="News"
    />
    <div class="news__content">
      <div class="new__block">
        <div class="new__block-head">
          <p class="head__title">My Details</p>
        </div>
        <div class="new__block-body">
          <div class="body__text">
            <p>Name: vebkj jnelkf ljnblkn</p>
          </div>
          <div class="body__img">
            <img src="" alt="photo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitlePage from '@/components/title-page'
export default {
  name: 'PageNews',
  data () {
    return {
    }
  },
  components: {
    TitlePage
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style scoped>
.news__content {
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px 30px;
}
.new__block {
  border-bottom: 1px solid rgb(242, 242, 242);
}
.head__title {
  margin: 30px 0;
}
.new__block-body {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>

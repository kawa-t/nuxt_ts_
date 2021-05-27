<template>
  <div class="">
    <h1>記事一覧</h1>
    <ui
      ><li v-for="(c, index) in content" :key="index">
        <nuxt-link :to="c.path">{{ c.title }}</nuxt-link>
      </li></ui
    >
  </div>
</template>
<script>
export default {
  // asyncDataはサーバ側の処理
  async asyncData({ $content }) {
    const content = await $content('articles')
      .only(['title', 'path'])
      .sortBy('createdAt', 'desc')
      .skip(0)
      .limit(15)
      .fetch()

    return {
      content,
    }
  },
}
</script>

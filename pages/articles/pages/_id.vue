<template>
  <div class="">
    <h1>記事一覧</h1>
    <ul>
      <li v-for="(c, index) in content" :key="index">
        <nuxt-link :to="c.path">{{ c.title }}</nuxt-link>
      </li>
    </ul>
    <ul class="p-pagenation-container">
      <li class="c-pagenation-unit" v-for="pg in num" :key="pg.num">
        <nuxt-link
          v-if="pg.pg"
          :to="'/articles/page/' + pg.num"
          :class="current == pg.num ? 'is-current' : ''"
        >
          {{ pg.num }}
        </nuxt-link>
        <span v-else>
          {{ pg.num }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  validate({ redirect, params }) {
    if (/[0-9]+/.test(params.id)) return true
    return redirect('/articles')
  },
  async asyncData({ store, $content, params }) {
    const count = await $content('articles').only('title').fetch()
    const current = params.id
    if (current > Math.ceil(count.length / store.state.indexPerPage))
      redirect('/articles')

    const from = store.state.indexPerPage * (params.id - 1)
    const to = store.state.indexPerPage * params.id

    const content = await $content('articles')
      .only(['title', 'path'])
      .sortBy('createdAt', 'desc')
      .skip(from)
      .limit(to)
      .fetch()

    return {
      content,
      current,
      count: count.length,
    }
  },
  computed: {
    max() {
      return Math.ceil(this.$route.params.id / 15)
    },
    num() {
      let tmp = []
      for (let n = 1; n <= this.max; n++) {
        if (n == 1 || n == this.max) {
          tmp.push({ pg: true, num: n })
          continue
        }
        if (this.current - 2 <= n && n <= this.current + 2) {
          tmp.push({ pg: true, num: n })
          continue
        }
        if (this.current - 2 - 1 == n || n == this.current + 2 + 1) {
          tmp.push({ pg: false, num: '...' })
          continue
        }
      }
      return tmp
    },
  },
}
</script>

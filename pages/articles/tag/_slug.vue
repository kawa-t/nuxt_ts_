<template>
  <div>
    <h1>タグ一覧</h1>
    <article-tag-list :tags="tags" />
    <h2>
      タグ<span>tags: {{ slug }}</span>
    </h2>
    <p v-if="!articles.length">
      上記で絞られたタグに関連する記事は見つかりませんでした
    </p>
    <div class="mt-5 mb-8 text-right">
      <nuxt-link :to="{ name: 'articles' }">すべての記事一覧を見る</nuxt-link>
    </div>
  </div>
</template>
<script>
import { tags } from '~/utils/tags'

export default {
  validate({ params }) {
    return /^[a-z]+$/.test(params.slug)
  },
  async asyncData({ $content, params }) {
    const contents = await $content('articles', { deep: true }).fetch()

    const slug = params.slug || ''
    const articles = await $content('articles', { deep: true })
      .where({ tags: { $contains: slug } })
      .sortBy('date', 'desc')
      .fetch()

    return {
      tags: tags(contents),
      articles,
      slug,
    }
  },
  head() {
    return {
      title: `タグ: ${this.slug} での記事一覧`,
    }
  },
}
</script>

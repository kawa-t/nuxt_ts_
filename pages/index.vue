<template>
  <div class="p-main-container">
    <!-- <div class="p-main-wrapper"> -->
    <HomeContainer />
    <!-- メインのエリア -->
    <!-- <div id="l-center-area"> -->
    <!-- サムネイル -->
    <!-- <img
          v-if="thumbnail"
          class="c-article-thumbnail"
          :src="thumbnail"
          :alt="content.title"
        /> -->

    <!-- タグとカテゴリーのバッチ -->
    <!-- <div class="p-article-badge p-badge-container"> -->
    <!-- <nuxt-link
            class="c-tag-badge u-blue"
            v-for="(c, index) in content.category"
            :key="'category-' + index"
            :to="'/category/' + c"
          >
            <span>{{ $store.getters['getCategoryTextBySlug'](c) }}</span>
          </nuxt-link>
          <nuxt-link
            class="c-tag-badge"
            v-for="(t, index) in content.tag"
            :key="'tag-' + index"
            :to="'/tag/' + t"
          >
            <span>{{ $store.getters['getTagTextBySlug'](t) }}</span>
          </nuxt-link> -->
    <!-- </div> -->

    <!-- <h1 class="c-article-header">{{ content.title }}</h1> -->

    <!-- 更新一時など -->
    <!-- <div class="p-articler-date"> -->
    <!-- <span class="c-date"
            ><fa-icon :icon="['fa', 'history']" />{{ updateAt }}</span
          >
          <span class="c-date"
            ><fa-icon :icon="['far', 'clock']" />{{ createdAt }}</span
          > -->
    <!-- </div> -->

    <!-- マークダウンのレンダリング箇所 -->
    <!-- <nuxt-content :document="content" /> -->
    <!-- <article-list :articles="articles" /> -->
    <!-- <ul>
      <li v-for="doc in docs" :key="doc.path">
        {{ createdAt(doc.date) }}
        <nuxt-link :to="doc.path">{{ doc.title }}</nuxt-link> -->
    <!-- </li> -->
    <!-- </ul> -->
    <!-- </div> -->
    <!-- サイドメニュー -->
    <!-- <sidemenu /> -->
    <!-- </div> -->
  </div>
</template>
<script>
import { defineComponent } from '@nuxtjs/composition-api'
import HomeContainer from '../containers/Home/index.vue'

export default defineComponent({
  components: {
    HomeContainer,
  },
})
</script>

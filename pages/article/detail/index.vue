<template>
    <div style="text-align: center;margin: auto 5%;">
      <h1>{{ article.title }}</h1>
      <div style="font-size: small;color: grey;">
        <span>{{ article.author }}</span>
        <span>&nbsp;&bull;&nbsp;</span>
        <span>{{ article.updatedAt | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
      </div>
      <Divider />
      <div style="text-align: left" v-html="article.contentHtml"></div>
      <Divider dashed />
      <div style="margin-bottom: 5%">
        <span v-for="(tag) in article.tags.data" :key="tag.id">
          <nuxt-link :to="{name: 'articleTagPages', params: {tagId: tag.id, page: 1}}">{{tag.name}}</nuxt-link>&nbsp;&#124;
        </span>
        &spades;
      </div>
    </div>
</template>

<script>
import parseTime from '~/plugins/filters/parseTime.js'

export default {
    filters: {
      parseTime
    },
    data() {
      return {
        articleId: this.$route.params.id, 
        article: null,
      }
    },
    async asyncData(context) {
      let params = '?include=tags'
      let { data: articleResp } = await context.$axios.get(`/api/blog/articles/${context.params.id}/${params}`)
      return {
        article: articleResp.content.data
      }
    }
}
</script>

<style>

</style>
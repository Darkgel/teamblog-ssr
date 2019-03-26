<template>
    <div>
      <h1>标签: <span style="color: green;">{{ tag.name }}</span></h1><br/>
      <hr/>
      <template v-for="(item) in articleList">
        <ListItem :article-item="item" :key="item.id"></ListItem>
      </template>
      <div style="text-align: center;margin-top: 1%;margin-bottom: 3%">
        <Page :total="pagination.total" :current="pagination.currentPage" :page-size="pagination.perPage" show-total show-elevator @on-change="changePage"/>
      </div>
    </div>
</template>

<script>
import ListItem from '~/components/article/ListItem.vue';
export default {
  components: {ListItem},
  data() {
      return {
        page: this.$route.params.page || 1,
        tag: null,
        articleList: null,
      }
    },
  async asyncData(context) {
    let tagId = context.params.tagId || 0
    let currentPage = parseInt(context.params.page) || 1
    let perPage = 10
    let params = '?pageNum='+currentPage+'&pageSize='+perPage+'&include=tags'

    let {data: articlesResp} = await context.$axios.get(`/api/blog/articles/tagged/${tagId}/${params}`)
    let total = articlesResp.content.meta.pagination.total
    let totlaPages = articlesResp.content.meta.pagination.total_pages
    let articles = articlesResp.content.data
    let count = articlesResp.content.meta.pagination.count

    let {data: tagResp} = await context.$axios.get(`/api/blog/tags/${tagId}`)

    return {
      pagination: {
        total: total,
        count: count,
        perPage: perPage,
        currentPage: currentPage,
        totlaPages: totlaPages
      },
      articleList: articles,
      tag: tagResp.content.data,
    }
  },
  methods: {
    changePage: function (page){
      this.$router.push({name: 'articleTagPages', params: {tagId: this.tagId, page: page}});
    }
  }
}
</script>

<style>

</style>
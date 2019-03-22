<template>
    <div>
      <Menu ref="yearMenu" mode="horizontal" theme="light" :active-name="year+''">
        <MenuItem name="2018">
          <nuxt-link :to="{name: 'articleArchivePages', params: {year: 2018, page: 1}}">2018</nuxt-link>
        </MenuItem>
        <MenuItem name="2017">
          <nuxt-link :to="{name: 'articleArchivePages', params: {year: 2017, page: 1}}">2017</nuxt-link>
        </MenuItem>
        <MenuItem name="2016">
          <nuxt-link :to="{name: 'articleArchivePages', params: {year: 2016, page: 1}}">2016</nuxt-link>
        </MenuItem>
        <MenuItem name="2015">
          <nuxt-link :to="{name: 'articleArchivePages', params: {year: 2015, page: 1}}">2015</nuxt-link>
        </MenuItem>
        <MenuItem name="2014">
          <nuxt-link :to="{name: 'articleArchivePages', params: {year: 2014, page: 1}}">2014</nuxt-link>
        </MenuItem>
      </Menu>
      <div>
        <template v-for="(item) in articleList">
          <ListItem :article-item="item" :key="item.id"></ListItem>
        </template>
        <div style="text-align: center;margin-top: 1%;margin-bottom: 3%">
          <Page :total="pagination.total" :current="pagination.currentPage" :page-size="pagination.perPage" show-total show-elevator @on-change="changePage"/>
        </div>
      </div>
    </div>
</template>

<script>
import ListItem from '~/components/article/ListItem.vue';
export default {
  components: {ListItem},
  data() {
      return {
        year: this.$route.params.year || new Date().getFullYear(),
        page: this.$route.params.page || 1,
      }
    },
  async asyncData(context) {
    let {data: articlesResp} = await context.$axios.get(`/api/blog/articles`)
    console.log(articlesResp)

    let year = (context.params.year || new Date().getFullYear()) + '';
    let articleList = aritcleByYear[year]

    let currentPage = parseInt(context.params.page) || 1;
    let total = 100;
    let perPage = 3;
    let totlaPages = 34;
    let tmp = (currentPage % 2);
    let data = articleList.splice(tmp * 3 , tmp *3 + 3);
    let count = data.length;

    return {
      pagination: {
        total: total,
        count: count,
        perPage: perPage,
        currentPage: currentPage,
        totlaPages: totlaPages
      },
      articleList: data
    }
  },
  methods: {
    changePage: function (page){
      this.$router.push({name: 'articleArchivePages', params: {year: this.year, page: page}});
    }
  }
}
</script>

<style>

</style>
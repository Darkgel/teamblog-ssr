<template>
    <div>
      <h1>文章列表页</h1><br/>
      <hr/>
      <template v-for="(item) in articleList">
        <ListItem :articleItem="item" :key="item.id"></ListItem>
      </template>
      <Page :total="pagination.total" :current="pagination.currentPage" :page-size="pagination.perPage" show-total show-elevator @on-change="changePage"/>
    </div>
</template>

<script>
import ListItem from '~/components/article/ListItem.vue';
export default {
  components: {ListItem},
  data() {
    return {

    };
  },
  async asyncData(context) {
    let articleList = [
      {
        id: 1,
        title: 'aritcle 1a',
        author: 'darkgel',
        updateTime: Date.now(),
        summary: 'this is summary',
        tags: [
          {
              id: 1,
              name: '算法'
          },
          {
              id: 2,
              name: 'AI'
          },
          {
              id: 3,
              name: 'JAVA'
          },
          {
              id: 4,
              name: 'PHP'
          }
        ]
      },
      {
        id: 2,
        title: 'aritcle 2',
        author: 'darkgel_q',
        updateTime: Date.now(),
        summary: 'this is summary',
        tags: [
          {
              id: 1,
              name: '算法'
          },
        ]
      },
      {
        id: 3,
        title: 'aritcle 3',
        author: 'darkgel_q',
        updateTime: Date.now(),
        summary: 'this is summary',
        tags: [
          {
              id: 1,
              name: '算法'
          },
          {
              id: 2,
              name: 'AI'
          }
        ]
      },
      {
        id: 4,
        title: 'aritcle 4',
        author: 'darkgel',
        updateTime: Date.now(),
        summary: 'this is summary',
        tags: [
          {
              id: 3,
              name: 'JAVA'
          },
          {
              id: 4,
              name: 'PHP'
          }
        ]
      },
      {
        id: 5,
        title: 'aritcle 5',
        author: 'darkgel',
        updateTime: Date.now(),
        summary: 'this is summary',
        tags: [
          {
              id: 2,
              name: 'AI'
          },
          {
              id: 3,
              name: 'JAVA'
          },
          {
              id: 4,
              name: 'PHP'
          }
        ]
      },
      {
        id: 6,
        title: 'aritcle 6',
        author: 'darkgel_q',
        updateTime: Date.now(),
        summary: 'this is summary',
        tags: [
          {
              id: 4,
              name: 'PHP'
          }
        ]
      }
    ];

    let currentPage = context.params.page || 1;
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
      this.$router.push({name: 'articleList', params: {page: page}});
    }
  }
}
</script>

<style>

</style>

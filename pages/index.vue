<template>
    <div>
      <h1>最新文章列表页</h1>
      <hr/>
      <template v-for="(item) in articleList">
        <ListItem :articleItem="item" :key="item.id"></ListItem>
      </template>
    </div>
</template>

<script>
import ListItem from '~/components/article/ListItem.vue';
export default {
    components: {ListItem},
    data() {
      return {
        articleList: [
          {
            id: 1,
            title: 'aritcle 1',
            author: 'darkgel',
            updateTime: Date(),
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
            updateTime: Date(),
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
            updateTime: Date(),
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
            updateTime: Date(),
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
            updateTime: Date(),
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
            updateTime: Date(),
            summary: 'this is summary',
            tags: [
              {
                  id: 4,
                  name: 'PHP'
              }
            ]
          }
        ]
      }
    }
}
</script>

<style>

</style>

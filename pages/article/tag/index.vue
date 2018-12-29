<template>
    <div>
      <h1>标签: <span style="color: green;">{{ tagId }}</span></h1><br/>
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
        tagId: parseInt(this.$route.params.tagId),
        page: this.$route.params.page || 1,
      }
    },
  async asyncData(context) {
    let aritcleByTag = {
      1: [
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
      ],
      2: [
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
      ],
      3: [
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
      ],
      4: [
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
        }
      ],
      5: [
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
      ],
    }

    let tagId = parseInt(context.params.tagId);
    let articleList = aritcleByTag[tagId];

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
      this.$router.push({name: 'articleTagPages', params: {tagId: this.tagId, page: page}});
    }
  }
}
</script>

<style>

</style>
<template>
    <div style="background:#eee;padding: 10px" :key="articleItem.id">
          <Card :bordered="false">
              <nuxt-link :to="{path: '/a/'+ articleItem.id + '.html'}"><h1>{{articleItem.title}}</h1></nuxt-link>
              <Divider dashed />
              <div style="font-size: small;color: grey;">
                <span>{{articleItem.author}}</span>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>{{articleItem.updateTime}}</span>
              </div>
              <div style="margin:1% 0">
                <p>{{articleItem.summary}}</p>
                <Divider orientation="left">
                  <span v-for="(tag) in articleItem.tags" :key="tag.id">
                    <nuxt-link to="/">{{tag.name}}</nuxt-link>&nbsp;&#124;
                  </span>
                  &spades;
                </Divider>
              </div>
          </Card>
        </div>
</template>
<script>
export default {
    props: ['articleItem']
}
</script>
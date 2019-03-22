<template>
    <div style="background:#eee;padding: 10px" :key="articleItem.id">
          <Card :bordered="false">
              <nuxt-link :to="{path: '/a/'+ articleItem.id + '.html'}"><h1>{{articleItem.title}}</h1></nuxt-link>
              <Divider dashed />
              <div style="font-size: small;color: grey;">
                <span>{{articleItem.author}}</span>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>创建时间 {{articleItem.createdAt | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
                <span>&nbsp;&bull;&nbsp;</span>
                <span>更新时间 {{articleItem.updatedAt | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
              </div>
              <div style="margin:1% 0">
                <p>{{articleItem.summary}}</p>
                <Divider orientation="left">
                  <span v-for="(tag) in articleItem.tags.data" :key="tag.id">
                    <nuxt-link :to="{name: 'articleTagPages', params: {tagId: tag.id, page: 1}}">{{tag.name}}</nuxt-link>&nbsp;&#124;
                  </span>
                  &spades;
                </Divider>
              </div>
          </Card>
        </div>
</template>
<script>
import parseTime from '~/plugins/filters/parseTime.js'

export default {
    props: ['articleItem'],
    filters: {
      parseTime
    }
}
</script>
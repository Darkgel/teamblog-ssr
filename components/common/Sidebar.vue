<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu theme="dark" width="auto">
          <MenuGroup>
              <MenuItem name="title">
                <nuxt-link to="/" :style="{color:'white'}">
                  <h1>技术博客</h1>
                </nuxt-link>
              </MenuItem>
            <MenuItem name="empty"></MenuItem>
          </MenuGroup>
          <hr style="border:0;background-color:black;height:2px;"/>
          <MenuGroup title="">
            <MenuItem name="empty-1"></MenuItem>
            <MenuItem name="1">
              <nuxt-link to="/">
                <Icon type="md-document" />最新文章
              </nuxt-link>
            </MenuItem>
            <MenuItem name="2">
              <nuxt-link to="/archive.html">
                <Icon type="md-archive" />文章归档
              </nuxt-link>
            </MenuItem>
            <MenuItem name="3">
              <nuxt-link to="/about.html">
                <Icon type="md-chatbubbles" />关于我们
              </nuxt-link>
            </MenuItem>
          </MenuGroup>
          <MenuGroup :style="{position: 'fixed', bottom: '0'}">
            <MenuItem name="footer" :style="{fontSize: 'small'}">
              <div>© 2018 Darkgel 技术团队</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;All rights reserved.</div>
            </MenuItem>
          </MenuGroup>
      </Menu>
  </Sider>
</template>

<script>
export default {
  
}
</script>

<style>

</style>

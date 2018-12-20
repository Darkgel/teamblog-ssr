<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu active-name="1" theme="dark" width="auto">
          <MenuGroup active-name="2">
              <MenuItem name="title">
                <h1><nuxt-link to="/" :style="{color:'white'}">技术博客</nuxt-link></h1>
              </MenuItem>
              <MenuItem name="2"></MenuItem>
          </MenuGroup>
          <hr style="border:0;background-color:black;height:2px;"/>
          <MenuGroup title="">
            <MenuItem name="1">
                <Icon type="md-document" /><nuxt-link to="/">最新文章</nuxt-link>
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" /><nuxt-link to="/archive.html">文章归档</nuxt-link>
            </MenuItem>
            <MenuItem name="3">
                <Icon type="md-chatbubbles" /><nuxt-link to="/about.html">关于我们</nuxt-link>
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

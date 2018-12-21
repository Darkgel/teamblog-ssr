<template>
    <div>文章归档{{year}}-{{page}}</div>
</template>

<script>
export default {
    data() {
      return {
        year: this.$route.params.year || new Date().getFullYear(),
        page: this.$route.params.page || 1,
      }
    }
}
</script>

<style>

</style>
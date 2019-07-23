<template>
  <div class="act-form">
    <iframe :src="src" ref="iframe"></iframe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      src: '你的src'
    }
  },
  mounted () {
    // 这里就拿到了iframe对象
    console.log(this.$refs.iframe)
    // 这里就拿到了iframe的window对象
    console.log(this.$refs.iframe.contentWindow)
  }
}
</script>

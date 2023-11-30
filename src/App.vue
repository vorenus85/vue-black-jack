<template lang="pug">
div
  img(alt="Vue logo" src="./assets/logo.png")
  Split(@split="handleSplit")
</template>

<script>
  import Split from './components/Split.vue';

  export default {
    name: 'App',
    components: {
      Split,
    },
    methods: {
      handleSplit() {
        console.log('handleSplit');
      },
    },
  };
</script>

<style lang="sass">
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>

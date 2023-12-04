<template lang="pug">
.card.m-2
  .front(v-if="!isBack")
  .back(v-else)
</template>
<script>
  export default {
    props: {
      isBack: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
<style lang="css">
  .back {
    background: white;
    background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.5) 50%, transparent 0),
      linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0);
    background-size: 10px 10px;
  }
</style>
<style lang="sass">
  .card
    height: 12rem
    width: 8rem
    padding: .25rem
  .front,
  .back
    height: 100%
    border-radius: .25rem
    overflow: hidden
</style>

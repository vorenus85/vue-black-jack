<template lang="pug">
section.dealer-side
  .row.align-items-center.justify-content-center
    Card(:isBack="true")
    Card
</template>
<script>
  import Card from './Card.vue';

  export default {
    components: { Card },
  };
</script>

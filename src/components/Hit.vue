<template lang="pug">
BJButton.hit-btn(@click="$emit('hit')") Hit
</template>
<script>
  import BJButton from './BJButton.vue';
  export default {
    name: 'hit',
    components: { BJButton },
  };
</script>

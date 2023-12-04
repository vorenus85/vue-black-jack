<template lang="pug">
BJButton.stand-btn(@click="$emit('stand')") Stand
</template>
<script>
  import BJButton from './BJButton.vue';
  export default {
    name: 'stand',
    components: { BJButton },
  };
</script>

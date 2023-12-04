<template lang="pug">
BJButton.double-btn(@click="$emit('double')") Double
</template>
<script>
  import BJButton from './BJButton.vue';
  export default {
    name: 'double',
    components: { BJButton },
  };
</script>

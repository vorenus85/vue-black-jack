<template lang="pug">
section.action-row
  .row.align-items-center.justify-content-center
    Split.col-auto.mx-1(@split="handleSplit")
    Double.col-auto.mx-1(@double="handleDouble")
    Hit.col-auto.mx-1(@hit="handleHit")
    Stand.col-auto.mx-1(@stand="handleStand")
</template>
<script>
  import Split from './Split.vue';
  import Double from './Double.vue';
  import Hit from './Hit.vue';
  import Stand from './Stand.vue';

  export default {
    name: 'action-row',
    components: {
      Split,
      Double,
      Hit,
      Stand,
    },
    methods: {
      handleSplit() {
        console.log('handleSplit');
      },
      handleDouble() {
        console.log('handleDouble');
      },
      handleHit() {
        console.log('handleHit');
      },
      handleStand() {
        console.log('handleStand');
      },
    },
  };
</script>

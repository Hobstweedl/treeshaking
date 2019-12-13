<template>
  <div class="full-width center-content">
    <h1>Hello World!</h1>
    <i class="fa fa-camera"></i>
    <bridge sample="test prop" />
  </div>
</template>

<script>
  import Bridge from './Bridge.vue';

  export const BridgeComponent = () => {
    console.log('hello');
  }
</script>
<style scoped>
.full-width {
  width: 100%;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

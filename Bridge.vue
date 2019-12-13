<template>
  <div>
    <p class="red">Here is a bridge {{ sample }}</p>
    <i class="fa fa-camera"></i>
  </div>
</template>

<script>
  export default {
  name: 'Bridge',
  props: ['sample'],
}
</script>

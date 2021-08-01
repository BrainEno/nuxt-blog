<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Loading",
}
</script>

<style lang="scss" scoped>
.loading {
  top: 0;
  z-index: 101;
  height: 100%;
  width: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  span {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 5px solid transparent;
    border-top-color: #50d9ff;
    border-bottom-color: #50d9ff;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
</style>

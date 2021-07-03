<template>
  <footer>
    <div class="container">
      <p>Copyright 2021 All Rights Reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.container {
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
  }
}
</style>

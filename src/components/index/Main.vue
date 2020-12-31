<template>
  <div class="main">
    <Left/>
    <Right/>
  </div>
</template>

<script>
  import Left from "./Left";
  import Right from "./Right";

  export default {
    name: "Main",
    components: {
      Left, Right
    }
  }
</script>

<style scoped>
  .main .left {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 770px;
    background-color: white;
  }

  .main .right {
    width: 300px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }
</style>
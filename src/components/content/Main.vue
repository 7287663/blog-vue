<template>
  <div class="main">
    <Left :id="info.id"/>
    <Right :authorId="info.authorId"/>
  </div>
</template>

<script>
  import Left from "./Left";
  import Right from "./Right";

  export default {
    props: {
      info: Object
    },
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
    min-width: 280px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }
</style>
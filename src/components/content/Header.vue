<template>
  <div class="header">
      <Top/>
  </div>
</template>

<script>
  import Top from "../index/Top";
  export default {
    name: "Header",
    components:{
      Top
    }
  }
</script>

<style scoped>
  .header .top {
    height: 60px;
    border-top: 1px solid #eae9e9;
  }

  .header .end {
    height: 50px;
    border: 1px solid #eae9e9;
  }
</style>
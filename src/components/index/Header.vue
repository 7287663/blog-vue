<template>
  <div class="header">
      <Top/>
      <End/>
  </div>
</template>

<script>
  import Top from "./Top";
  import End from "./End";
  export default {
    name: "Header",
    components:{
      Top,
      End
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
<template>
  <div>
    <Header/>
    <Main/>
  </div>
</template>

<script>
  import Header from "../components/index/Header";
  import Main from "../components/index/Main";

  export default {
    name: "Login",
    data() {
      return {
        blogId: ''
      }
    },
    components: {
      Header, Main
    }
  }
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 110px;
    background-color: white;
  }


  .main {
    position: absolute;
    top: 130px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 1100px;
    margin: 0 auto;
  }


</style>
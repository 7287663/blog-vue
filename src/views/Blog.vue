<template>
  <div>
    <Header/>
    <Main :info="info"/>
  </div>
</template>

<script>
  import Header from "../components/content/Header";
  import Main from "../components/content/Main";

  export default {
    data() {
      return {}
    },
    name: "Blog",
    components: {
      Header, Main
    },
    computed: {
      info() {
        return this.$route.query
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: white;
  }


  .main {
    position: absolute;
    top: 80px;
    overflow-y: auto;
    left: 0;
    right: 0;
    bottom: 0;
    width: 1100px;
    margin: 0 auto;
  }
</style>
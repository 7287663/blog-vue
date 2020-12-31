<template>
  <div class="top">
    <div class="up">
      <ul>
        <li class="icon">
          <a href="#" @click="returnHome">
            <img src="@/assets/strawberry.png" class="logo">
            <span class="company">strawberry</span>
          </a>
        </li>
        <li class="search">
          <el-input
            placeholder="请输入要搜索的文章标题"
            v-model="title"
            suffix-icon="el-icon-search"
            @keyup.enter.native="submit"
          >
          </el-input>
        </li>
        <li class="admin">
          <el-avatar :src="require('@/assets/avatar.png')"></el-avatar>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    data() {
      return {
        title: ''
      }
    }, methods: {
      submit() {
        PubSub.publish('searchTitle', this.title);
      }, returnHome() {
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped>
  .top .up {
    width: 1100px;
    margin: 0 auto;
    height: inherit;
  }

  .company {
    font-size: 30px;
    color: rgb(245, 98, 72);
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;

  }

  .el-avatar{
    background-color: white;
  }

  ul li {
    display: inline-block;
    padding-right: 10px;
  }

  .icon {
    height: 65px;
    width: 200px;
  }

  .logo {
    width: 40px;
    height: 40px;
    position: relative;
    top: 10px;
  }

  /deep/ .el-input__icon {
    height: inherit;
  }


  .home {
    margin-top: 10px;
  }


  .admin {
    margin-top: 10px;
    float: right;
    padding-right: 0px;
  }

  .el-input {
    padding-bottom: 10px;
  }

  .up a {
    font-size: 25px;
    color: rgb(0, 127, 255);
    text-decoration: none;
  }

  .search {
    width: 350px;
    position: relative;
    top: -5px;
    left: 490px;

  }

  a:hover {
    color: rgb(0, 127, 255);
  }

  a:active {
    color: rgb(0, 127, 255);
  }
</style>
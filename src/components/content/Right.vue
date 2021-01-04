<template>
  <div class="right">
    <div>
      <el-card class="box-card">
        <div slot="header">
          <span>关于作者</span>
        </div>
        <div class="height">
          <div class="author">
            <el-avatar :src="admin.via"></el-avatar>
            <p class="author1">{{like.authorName}}</p>
          </div>
          <div class="like">
            <el-button icon="el-icon-thumb" size="small" circle></el-button>
            <p>获得点赞 {{like.likeNum}}</p>
          </div>
          <div class="read">
            <el-button icon="el-icon-view" size="small" circle></el-button>
            <p>文章被阅读 {{like.readNum}}</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {getBlogLike,getAdminInfo} from "../../api/blog1";

  export default {
    name: "Right",
    props: {
      authorId: String
    },
    data() {
      return {
        like: {},
        admin:{}
      }
    },
    methods: {
      fetchData() {
        getAdminInfo(this.authorId).then(res=>{
          if(res.data.flag){
            this.admin = res.data.data;
          }
        })
        getBlogLike(this.authorId).then(res => {
          if (res.data.flag) {
            this.like = res.data.data;
          }
        })
      }
    },
    created() {
        this.fetchData();
    }
  }
</script>

<style scoped>
  .height {
    height: 150px;
  }

  .author {
    height: 50px;
    line-height: 39px;
  }

  .author .el-avatar {
    float: left;
    margin-right: 10px;
    background-color: white;
  }

  .author > p {
    margin: 0px;
  }

  .author .author1 {
    font-size: 25px;
    font-weight: bold;
  }

  .like {
    clear: both;
    height: 40px;
    line-height: 40px;
    margin-bottom: 5px;
  }

  .el-button {
    float: left;
    margin-top: 4px;
    margin-right: 10px;
  }

  .read {
    height: 40px;
    line-height: 40px;
  }

  .height p {
    margin: 0;
    font-size: 18px;
  }

</style>
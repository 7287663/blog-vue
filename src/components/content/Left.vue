<template>
  <div class="left" v-if="ready">
    <div class="article_title">
      <div class="avatar">
        <el-avatar :src="require('@/assets/avatar.png')"></el-avatar>
        <p class="author">{{ blog.authorName }}</p>
        <p class="date">{{ blog.createTime }} 阅读 {{ blog.readNum }}</p>
      </div>
      <h1 class="title">{{ blog.title }}</h1>
    </div>
    <div class="content">
      <v-md-editor :value="blog.content" mode="preview"></v-md-editor>
    </div>
    <div class="word"></div>
  </div>
</template>

<script>
import { getBlog, addLike } from "@/api/blog1";

export default {
  name: "Left",
  props: {
    id: String
  },
  data() {
    return {
      blog: {},
      ready: false
    };
  },
  methods: {
    fetchData() {
      addLike(this.id, 1).then(res => {
        getBlog(this.id).then(res => {
          if (res.data.flag) {
            this.blog = res.data.data;
            this.ready = true;
          }
        });
      });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.article_title {
  background-color: #ffffff;
  padding: 25px;
}

.el-avatar {
  background-color: white;
  float: left;
  margin-right: 10px;
  width: 50px;
  height: 50px;
}

.avatar > p {
  margin: 0px;
}

.avatar .date {
  color: rgb(114, 114, 114);
}

.avatar .author {
  font-size: 20px;
  font-weight: bold;
}

.avatar {
  height: 50px;
}

.title {
  margin: 10px 0;
}

.content {
  border-bottom: 1px #d9d9d9 solid;
}

.content >>> .v-md-editor-preview {
  padding: 0 25px 25px;
}

</style>
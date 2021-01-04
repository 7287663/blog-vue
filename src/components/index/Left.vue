<template>
  <div class="left">
    <div class="tab">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="热门" name="1" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
          <div class="blog" v-for="(item,index) in list"
               :key="index" @click="skip(item)"
          >
            <div class="content">
              <p class="author">{{item.authorName}} · {{item.createTime | createTime }} · {{item.tagName}}</p>
              <h3 class="title">{{item.title | title}}</h3>
              <div class="summary" v-if="item.summary">{{item.summary | summary}}</div>
              <div class="like" v-else>
                <el-button :class="handleSelect(item) ? 'select':''" size="small" icon="el-icon-thumb"
                           @click="handleLike(item.id)">
                  {{item.likeNum}}
                </el-button>
                <el-button size="small" icon="el-icon-chat-dot-round">{{item.commentNum}}</el-button>
              </div>
            </div>
            <div class="image">
              <el-image v-show="item.coverUrl"
                        style="width: 80%; height: 80%"
                        :src="item.coverUrl"
              >
              </el-image>
            </div>
          </div>
          <p v-if="noMore" class="pp">没有更多内容了...</p>
        </el-tab-pane>
        <el-tab-pane label="最新" name="0">
          <div class="blog" v-for="(item,index) in list"
               :key="index"
          >
            <div class="content">
              <p class="author">{{item.authorName}} · {{item.createTime}} · {{item.tagName}}</p>
              <h3 class="title">{{item.title | title}}</h3>
              <div class="summary" v-if="item.summary">{{item.summary | summary}}</div>
              <div class="like" v-else>
                <el-button :class="handleSelect(item) ? 'select':''" size="small" icon="el-icon-thumb"
                           @click="handleLike(item.id)">
                  {{item.likeNum}}
                </el-button>
                <el-button size="small" icon="el-icon-chat-dot-round">{{item.commentNum}}</el-button>
              </div>
            </div>
            <div class="image">
              <el-image v-show="item.coverUrl"
                        style="width: 80%; height: 80%"
                        :src="item.coverUrl"
              >
              </el-image>
            </div>
          </div>
          <p v-if="noMore" class="pp">没有更多内容了...</p>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import {blogList, addLike, subLike} from "../../api/blog1";

  export default {
    name: "Left",
    data() {
      return {
        admin:{},
        select: false,
        page: 1,
        size: 6,
        total: 0,
        list: [],
        activeName: '1',
        count: 0,
        url: '',
        searchMap: {
          hot: 1,
          tagName: '',
          title: ''
        },
        noMore: false,
        disabled: false
      }
    },
    created() {
      this.fetchData();
      PubSub.subscribe('changeTag', (event, name) => {
        name === '推荐' ? this.searchMap.tagName = '' : this.searchMap.tagName = name
        this.fetchData();
      })
      PubSub.subscribe('searchTitle', (event, title) => {
        this.searchMap.title = title;
        this.fetchData();
      })
    },
    watch: {
      total: function (newValue, oldValue) {
        if (newValue > 0) {
          this.noMore = false;
        } else {
          this.noMore = true;
        }
      }
    },
    methods: {
      skip(item) {
        this.$router.push({
          path: '/blog',
          query: {
            id: item.id,
            authorId: item.authorId
          }
        })
      },
      handleSelect(item) {
        var item1 = localStorage.getItem("id" + item.id);
        return !!item1
      },
      handleLike(id) {
        const item = localStorage.getItem("id" + id);
        if (item) {
          localStorage.removeItem("id" + id);
          subLike(id, 2).then(res => {
            if (res.data.flag) {
              this.fetchData();
            }
          })
        } else {
          localStorage.setItem("id" + id, id);
          addLike(id, 2).then(res => {
            if (res.data.flag) {
              this.fetchData();
            }
          })
        }
      },
      load() {
        setTimeout(() => {
          if (this.size > this.total) {
            this.noMore = true
            this.disabled = true
            return
          }
          this.size += 5;
          this.fetchData();
        }, 200)
      },
      handleClick(tab, event) {
        this.searchMap.hot = tab.name;
        this.fetchData();
      },
      fetchData() {
        blogList(this.page, this.size, this.searchMap).then(res => {
          if (res.data.flag) {
            this.list = res.data.data.records;
            this.total = res.data.data.total;
          }
        });
      }
    },


    filters: {
      summary(summary) {
        if (summary.length > 36) {
          return summary.substring(0, 36);
        } else {
          return summary;
        }

      },
      title(title) {
        if (title.length > 31) {
          return title.substring(0, 30);
        } else {
          return title;
        }
      },
      createTime(createTime) {
        var startTime = new Date(createTime);
        var endTime = new Date();
        var diff = endTime.getTime() - startTime.getTime();
        //计算年
        var year = Math.floor(diff / (3600 * 1000 * 24 * 360))
        if (year > 0) {
          return year + '年前'
        }
        //计算月
        var month = Math.floor(diff / (3600 * 1000 * 24 * 30))
        if (month > 0) {
          return month + '月前'
        }
        //天
        var day = Math.floor(diff / (3600 * 1000 * 24))
        if (day > 0) {
          return day + '天前'
        }
        //计算时
        var hour = Math.floor(diff / (3600 * 1000))
        if (hour > 0) {
          return hour + '小时前'
        }
        //计算分
        var minutes = Math.floor(diff / (60 * 1000))
        if (minutes > 0) {
          return minutes + '分钟前'
        }
      }
    }
  }
</script>

<style scoped>
.tab {
  background-color: #ffffff;
}
  .blog {
    border-bottom: 1px solid rgb(244, 245, 246);
    height: 120px;
    clear: both;
  }

  .el-button {
    font-size: 15px;
    color: rgb(178, 186, 194);
  }

  /deep/ .el-tabs__header {
    margin: 0px;
  }

  .blog .content {
    height: inherit;
    width: 595px;
    margin-left: 5px;
    float: left;
  }

  .item {
    margin-right: 30px;
  }

  .blog .image {
    height: inherit;
    width: 150px;
    text-align: center;
    float: left;
  }

  .like {
    height: 38px;
    position: relative;
    bottom: 5px;
  }

  .blog .el-image {
    margin-top: 12px;
  }

  .content .author {
    margin-top: 10px;
    color: rgb(178, 186, 194);
  }

  .content .title {
    margin: 12px 0;
  }

  .content .summary {
    color: rgb(178, 186, 194);
  }

  .pp {
    text-align: center;
  }

  .blog:hover {
    background-color: #f6f4f4;
    cursor: pointer;
  }

  .select {
    color: rgb(245, 98, 72) !important;
    background-color: #f8f6f6 !important;
  }

  /deep/ .el-button:focus, /deep/ .el-button:hover {
    color: rgb(245, 98, 72);
  }


  /deep/ .el-tabs__item.is-active {
    color: rgb(245, 98, 72);
  }

  /deep/ .el-tabs__item:hover {
    color: rgb(245, 98, 72);
  }


</style>
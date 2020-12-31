<template>
  <div class="end">
    <div class="bottom">
      <ul>
        <li v-for="(item, index) in tag" :key="index">
          <a href="#" @click="handleSelect(index,item.name)" :class="[index === activeIndex ? 'active' : '']">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {tagList} from "../../api/tag1.js";

  export default {
    name: "End",
    data() {
      return {
        activeIndex: 0,
        tag: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      handleSelect(index, name) {
        this.activeIndex = index
        PubSub.publish('changeTag', name);
      },
      fetchData() {
        tagList().then(res => {
          if (res.data.flag) {
            this.tag = res.data.data;
          }
        })
      }
    }
  }
</script>

<style scoped>
  .end .bottom {
    width: 1100px;
    margin: 0 auto;
    height: inherit;
  }

  .el-menu {
    height: 50px;
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }

  ul li {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    margin-right: 25px;
  }

  a {
    text-decoration: none;
    color: rgb(113, 119, 124);
  }

  a:hover {
    color: rgb(245, 98, 72);
  }

  .active {
    color: rgb(245, 98, 72);
  }


</style>
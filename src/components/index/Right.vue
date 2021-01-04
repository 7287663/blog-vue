<template>
  <div class="right">
    <div class="friends" v-show="code1">
      <img
        style="width: 285px; height:285px;margin-top: 7px"
        :src="code1"
      />
    </div>
    <el-divider></el-divider>
    <div class="friends" v-show="code2">
      <img
        style="width: 285px; height:285px;margin-top: 7px"
        :src="code2"
      />
    </div>
  </div>
</template>

<script>
  import {getCode} from "../../api/blog1";

  export default {
    name: "Right",
    data() {
      return {
        // url :'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2438864829,3057510527&fm=26&gp=0.jpg'
        code1: '',
        code2: ''
      }
    },
    methods: {
      loadImg() {
        getCode().then(res => {
          if (res.data.flag) {
            if (res.data.data) {
              this.code1 = res.data.data.code1;
              this.code2 = res.data.data.code2;
            }
          }
        })
      }
    },
    created() {
      this.loadImg();
    }
  }
</script>

<style scoped>
  .friends {
    width: 298px;
    height: 298px;
    background-color: white;
    text-align: center;
    border-radius: 5px;
  }
</style>
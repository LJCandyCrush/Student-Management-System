<template>
  <el-row
    
  >
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" style="float:right;">课程管理</el-menu-item>
  <el-menu-item index="2" @click="logout" style="float:right;">退出登录</el-menu-item>
  <!-- <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
  <el-menu-item index="4" style="float:right;"><a href="https://www.ele.me" target="_blank">学生社区</a></el-menu-item>
</el-menu>

    <!-- <el-col :span="6">
      <p
        href="/"
        style="color: #FFF;line-height:30px;margin-left:20px"
      >课程管理系统</p>
    </el-col>
    <el-col
      :span="2"
      :offset="16"
      :xl={span:2,offset:16}
      :lg={span:2,offset:16}
      :md={span:3,offset:15}
      :sm={span:5,offset:13}
      style="padding-right:15px"
    > -->
      <!-- <el-button
        
        @click="logout"
      >退出登陆</el-button>
      <!-- <p style="color: #FFF;line-height:30px;margin-left:20px">老师</p> -->
    

  </el-row>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {},
  computed: {},
  methods: {
    logout() {
      let that = this;
      this.$axios
        .post(this.$url + "logout")
        .then(res => {
          console.log(res);
          that.$router.push({
            path: "/"
          });
          that.$notify({
            title: "退出登陆成功！",
            type: "success",
            offset: 70
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>

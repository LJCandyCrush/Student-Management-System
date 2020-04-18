<!-- 这是student.vue的全部  -->
import { stringify } from 'querystring';
<template>

  <div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1" style="float:right;" @click="student">课程管理</el-menu-item>
  <el-menu-item index="2" @click="logout" style="float:right;">
    <!-- <i class="el-icon-user"></i> -->
    退出登录</el-menu-item>
  
  <el-menu-item index="4" style="float:right;" @click="community">
    <i class="el-icon-star-on"></i>
    学生社区</el-menu-item>
</el-menu>
</div>
    <el-carousel :interval="6000" type="card" height="250px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: "student",
  data() {
    return {
      
    };
  },
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
    },
    student : function () {
          this.$router.push({path:'/student'});
        },
    community : function () {
          this.$router.push({path:'/community'});
        }
  }
};
</script>


<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.botton_boder {
  padding: 10px 40px 10px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

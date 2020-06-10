<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view />
  </div>
</template>

<script>
//引入接口模块
import { test } from "@/api/home";
//引入工具包模块
import { getToken } from "@/utils/auth.js";
//使用vuex
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    HelloWorld: () => import("@/components/HelloWorld.vue")
  },
  computed: {
    ...mapGetters(["testInfo"])
  },
  created() {
    test().then(res => {
      console.log("axios的测试数据 :", res);
      console.log("vuex的测试数据 :", this.testInfo);
    });
  }
};
</script>

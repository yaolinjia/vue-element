<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { test } from "@/api/home";
import { getToken } from "@/utils/auth.js";
import { mapGetters } from "vuex";
export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['testInfo'])
  },
  created() {
    test().then(res => {
      console.log("axios的测试数据 :", res);
      console.log("vuex的测试数据 :", this.testInfo);
    });
  }
};
</script>

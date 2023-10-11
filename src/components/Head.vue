<template>
  <div  class="custom-navbar">
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#"><img
                class="logo-img"
                height="50"
                src="../img/asia-isp-logo.png"
                alt=""
            /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="./index.html">主页</b-nav-item>
        <b-nav-item-dropdown text="产品">
          <b-dropdown-item href="#"><li><router-link to="/smartdns">橙域 智能调度</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/dataCenter">橙域 数据中心</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/fusionCDN">橙域 融合CDN</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/security">橙域 安全防护</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/nodeDistr">橙域 探针</router-link></li></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="解决方案">
          <b-dropdown-item href="#"><li><router-link to="/gameSolut">游戏解决方案</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/onlineSolut">电商解决方案</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/videoSolut">视频解决方案</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/financeSolut">金融解决方案</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/AWS">AWS迁移方案</router-link></li></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="联系我们">
          <b-dropdown-item href="#"><li><router-link to="/company">公司介绍</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/joinUs">加入我们</router-link></li></b-dropdown-item>
          <b-dropdown-item href="#"><li><router-link to="/business">商务合作</router-link></li></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="服务支持">
          <b-dropdown-item href="#"><li><router-link to="/technicalSupport">技术支持</router-link></li></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#"><button @click="toggleLanguageEn">English</button></b-dropdown-item>
          <b-dropdown-item href="#"><button @click="toggleLanguageZh">简体中文</button></b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'AsiaIspOfficialWebsiteHead',

  data () {
    return {

    };
  },

  mounted () {

  },

  methods: {
    // toggleLanguageEn(){
    //   this.$i18n.locale = 'en'
    // },
    // toggleLanguageZh(){
    //   this.$i18n.locale = 'zh'
    // }
  },
};
</script>

<style lang="scss" scoped>

.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(46, 48, 50, 1);
  z-index: 999;
}
</style>
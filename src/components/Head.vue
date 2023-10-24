<template>
  <div class="custom-navbar" :class="{ 'change-color': scrolled }">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand href="#"><img class="logo-img" height="50" src="../img/asia-isp-logo.png" alt="" /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="./index.html">主页</b-nav-item>
          <b-nav-item-dropdown text="产品">
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/smartdns">橙域 智能调度</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/dataCenter">橙域 数据中心</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/fusionCDN">橙域 融合CDN</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/security">橙域 安全防护</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/nodeDistr">橙域 探针</router-link></li>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="解决方案">
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/gameSolut">游戏解决方案</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/onlineSolut">电商解决方案</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/videoSolut">视频解决方案</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/financeSolut">金融解决方案</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/AWS">AWS迁移方案</router-link></li>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="联系我们">
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/company">公司介绍</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/joinUs">加入我们</router-link></li>
            </b-dropdown-item>
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/business">商务合作</router-link></li>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="服务支持">
            <b-dropdown-item href="#">
              <li><router-link style="color: #2e3032;" to="/technicalSupport">技术支持</router-link></li>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#"><button
                style="border:none ;background-color: white;">English</button></b-dropdown-item>
            <b-dropdown-item href="#"><button
                style="border:none ;background-color: white;">简体中文</button></b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav right>
            <b-nav-item href="http://portal.asia-cdn.com">登录</b-nav-item>
          </b-navbar-nav>
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
      scrolled: false
    };
  },

  mounted () {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll () {
      this.scrolled = window.scrollY >= 70;
      // console.log(this.scrolled);
    },
    beforeDestroy () {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  },
};
</script>

<style lang="scss" scoped>.custom-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(46, 48, 50, 1);
  z-index: 999;
}

.change-color {
  background-color: rgba(46, 48, 50, 0.8);
}</style>
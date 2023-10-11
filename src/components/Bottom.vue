<template>
  <div>
    <b-container class="bv-example-row">
      <!-- 全球加速 -->
      <b-row>
        <b-col md="12">全球加速</b-col>
      </b-row>
      <!-- 微信公众号 -->
      <b-row>
        <b-col md="6">微信公众号</b-col>
        <b-col md="6">微信公众号</b-col>
      </b-row>
      <!-- 底部导航 -->
      <b-row>
        <b-col sm="2" cols="6">
          <ul>
            <li>产品</li>
            <li><router-link to="/smartdns">橙域 智能调度</router-link></li>
            <li><router-link to="/dataCenter">橙域 数据中心</router-link></li>
            <li><router-link to="/fusionCDN">橙域 融合CDN</router-link></li>
            <li><router-link to="/security">橙域 安全防护</router-link></li>
            <li><router-link to="/nodeDistr">橙域 探针</router-link></li>
          </ul>
        </b-col>
        <b-col sm="2" cols="6">
          <ul>
            <li>解决方案</li>
            <li><router-link to="/gameSolut">游戏解决方案</router-link></li>
            <li><router-link to="/onlineSolut">电商解决方案</router-link></li>
            <li><router-link to="/videoSolut">视频解决方案</router-link></li>
            <li><router-link to="/financeSolut">金融解决方案</router-link></li>
            <li><router-link to="/AWS">AWS迁移方案</router-link></li>
            <!-- <li> <a href="#">混合云解决方案</a></li>  -->
          </ul>
        </b-col>
        <b-col sm="2" cols="6">
          <ul>
            <li>联系我们</li>
            <li><router-link to="/company">公司介绍</router-link></li>
            <li><router-link to="/joinUs">加入我们</router-link></li>
            <li><router-link to="/business">商务合作</router-link></li>
          </ul>
        </b-col>
        <b-col sm="2" cols="6">
          <ul>
            <li>服务支持</li>
            <li><router-link to="/technicalSupport">技术支持</router-link></li>
          </ul>
        </b-col>
        <b-col sm="4" cols="6">
          <ul>
            <li>联系方式</li>
            <li>
              <div>
                <img style="float: left; margin-right: 10px" height="40px" src="../img/phone.png" alt="" />
                <div style="float: left" class="">
                  <span>免费客服电话</span><br />
                  <span>400-670-5668</span>
                </div>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <button v-show="showButton" @click="scrollToTop"><img class="top" src="../img/top.png" alt=""></button>
  </div>
</template>

<script>
export default {
  name: 'AsiaIspOfficialWebsiteBottom',

  data () {
    return {
      showButton: false
    };
  },

  mounted () {
// 监听滚动事件
window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      // 当滚动高度大于等于200时，显示回到顶部按钮；否则隐藏
      this.showButton = window.scrollY >= 200;
    },
    scrollToTop() {
      // 将页面滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
}

button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  background-color: #8b9bae;
  border: none;
  outline: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.top{
  width: 100%;
  height: 100%;
}
</style>
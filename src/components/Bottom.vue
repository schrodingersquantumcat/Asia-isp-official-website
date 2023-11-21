<template>
  <div>
    <b-container class="bv-example-row bottom">
      <!-- 全球加速 -->
      <b-row class="js">
        <b-col>
          <div class="section">
            <div class="title-bt">开启属于你的全球加速之旅</div>
            <a href="http://portal.asia-cdn.com">
              <div class="btnn">立即体验</div>
            </a>
          </div>
        </b-col>
      </b-row>
      <!-- 微信公众号 -->
      <b-row class="wx">
        <b-col md="8">
          <h class="weixin-title">"橙域CDN" 微信公众号</h>
          <div class="weixin-describe">
            扫描二维码关注“橙域CDN”微信公共号，加入了解相关资讯
          </div>
        </b-col>
        <b-col md="4" class="wximg">
          <img class="wx" height="60px" src="../img/weixin.png" alt="" />
          <img height="120px" src="../img/erwei.jpg" alt="" /></b-col>
      </b-row>
      <!-- 底部导航 -->
      <div class="dh" style="background-color: #0f4682; color: #fff;padding-top: 20px;"><b-row>
          <b-col sm="2" cols="6">
            <ul>
              <li class="bt">产品</li>
              <li><router-link to="/smartdns">橙域 智能调度</router-link></li>
              <li><router-link to="/dataCenter">橙域 数据中心</router-link></li>
              <li><router-link to="/fusionCDN">橙域 融合CDN</router-link></li>
              <li><router-link to="/security">橙域 安全防护</router-link></li>
              <li><router-link to="/nodeDistr">橙域 探针</router-link></li>
            </ul>
          </b-col>
          <b-col sm="2" cols="6">
            <ul>
              <li class="bt">解决方案</li>
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
              <li class="bt">联系我们</li>
              <li><router-link to="/company">公司介绍</router-link></li>
              <li><router-link to="/joinUs">加入我们</router-link></li>
              <li><router-link to="/business">商务合作</router-link></li>
            </ul>
          </b-col>
          <b-col sm="2" cols="6">
            <ul>
              <li class="bt">服务支持</li>
              <li><router-link to="/technicalSupport">技术支持</router-link></li>
            </ul>
          </b-col>
          <b-col sm="4" cols="6">
            <ul>
              <li class="bt">联系方式</li>
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
        </b-row></div>

      <!-- 备案 -->
      <div style="text-align: center; padding: 10px 0;background-color: #0f4682; color: #fff;font-size: 14px;">
        <p>
          <a style="color:#fff " target="_blank" href="https://beian.miit.gov.cn/">沪ICP备14011983号</a>
          《中华人民共和国增值电信业务经营许可证》 编号：沪B1-20172237号
        </p>
        <p>©2014-2020 Asia-isp. All Rights Reserved.</p>
      </div>
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
    handleScroll () {
      // 当滚动高度大于等于200时，显示回到顶部按钮；否则隐藏
      this.showButton = window.scrollY >= 200;
    },
    scrollToTop () {
      // 将页面滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  beforeDestroy () {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.container,
.container-sm,
.container-md,
.container-lg {
  max-width: 100%;
  padding: 15px;
}


@media (max-width: 480px) {
  .section .title {
    font-size: 29px;
  }
}

.section {
  width: 100%;
  padding: 30px 0;
  // background-image: url('../img/bg-black.jpg');
  background-color: #0f4682;
}

.section a {
  text-decoration: none;
  color: #000;
}

.section .title {
  color: #fff;
  font-size: 32px;
  font-weight: 600;
  /* width: 395px; */
  margin: 0 auto;
  text-align: center;
}

.section .btnn {
  border: 1px solid #fff;
  width: 205px;
  margin: 0 auto;
  background: #fff;
  padding: 3px 67px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
}

.section .btnn:hover {
  box-shadow: 0 0 6px #fff;
}

ul {
  list-style-type: none;
}
.title-bt{
  text-align: center;
  color: #fff;
  font-size: 24px;
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

// .bottom {
//   width: 100%;
//   // padding: 0px;
// }

.top {
  width: 100%;
  height: 100%;
}

.weixin-title {
  padding: 24px 0 19px 0;
  /* text-align: left; */
  text-decoration: none !important;
  width: 260px !important;
  margin: 0px !important;
  font-size: 24px !important;
  border-bottom: none !important;
  text-align: center;
}

.weixin-describe {
  color: #373d41;
  font-size: 16px;
  text-align: center;
}

.wximg {
  text-align: center;
}

.js,
.wx,
.dh {
  margin-top: 20px;
}

.da {
  background-color: #000;
}

a {
  color: #fff;
}

.bt {
  margin-bottom: 5px;
  text-decoration: underline;
  font-weight: normal;
}
.wx{
  margin-right: 10px;
  margin-top: 0;
  margin-bottom: 20px;
}
</style>
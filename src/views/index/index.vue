<template>
  <div>
    <!-- 轮播图 -->
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" controls fade indicators img-width="1024"
      img-height="480">
      <b-carousel-slide>
        <template #img>
          <div class="image-container lunbo1">
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../../img/lunbo1.jpg" alt="image slot">
            <div class="overlay-box"></div>
            <div class="image-text">
              <p class="h-sm h-md h-lg">欢迎加入</p>
              <p class="text-sm text-md text-lg">我们将不遗余力地为您打造优质全球加速体验，成就高品质服务</p>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div class="image-container">
            <img src="../../img/lunbo2.jpg" alt="image">
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div class="image-container">
            <img src="../../img/lunbo3.jpg" alt="image">
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <!-- 内容 -->
    <b-container class="bv-example-row">
      <b-row class="br-1">
        <b-col sm="4" class="bc-1">
          <b-img class="img-tb" src="../../img/diqiu.png"></b-img>
          <span class="sp-1">橙域 融合CDN</span>
        </b-col>
        <b-col sm="4" class="bc-1">
          <b-img class="img-tb" src="../../img/zhineng.png"></b-img>
          <span class="sp-1">橙域 智能调度</span>
        </b-col>
        <b-col sm="4" class="bc-1 bc-13">
          <b-img class="img-tb" src="../../img/yuanzhu.png"></b-img>
          <span class="sp-1">橙域 数据中心</span>
        </b-col>
      </b-row>

      <b-row class="br-2" style="margin-top: 20px;">
        <b-col sm="6"><img src="../../img/type1.jpg" style="width: 80%;" alt="" /></b-col>
        <b-col sm="6">
          <h1 class="h-sm h-md h-lg">不仅限于融合的智能CDN</h1>
          <span class="text-sm text-md text-lg">
            自研的智能调度算法和APM探测平台数据的结合，提前检测预警并自动切换优质的线路，为客户品质服务保驾护航
          </span>
        </b-col>
      </b-row>
      <b-row class="br-2">
        <b-col sm="6"><img src="../../img/type2.jpg" style="width: 80%;" alt=""></b-col>
        <b-col sm="6">
          <h1 class="h-sm h-md h-lg">定制专属客服的定制服务</h1>
          <span class="text-sm text-md text-lg">
            根据每个客户的使用场景和个性化需求，寻找合适的一站式服务解决方案，简化流程、提高效率，为客户带来安全、信赖、极速的体验
          </span>
        </b-col>
      </b-row>
      <b-row class="br-2">
        <b-col sm="6"><img src="../../img/type3.jpg" style="width: 80%;" alt=""></b-col>
        <b-col sm="6">
          <h1 class="h-sm h-md h-lg">每周7*24小时保障服务、快速响应客户需求</h1>
          <span class="text-sm text-md text-lg">
            保障每个客户的服务品质，确保第一时间响应并反馈，在极短的时间内处理解决故障，实时监控每个客户的健康状态
          </span>
        </b-col>
      </b-row>
      <!-- 解决方案 -->
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab title="游戏解决方案" active class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img src="../../img/solve1.png" style="width: 80%;" alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">游戏解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。
                  针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；
                  为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，
                  让您的游戏更稳定、更安全、更好玩。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="电商解决方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img src="../../img/dianshang.jpg" style="width: 80%;" alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">电商解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子商务网站是有海量的商品信息、图片、网站样式等静态资源组成，
                  海外网络环境的好坏将直接影响网站的加载速度，支付功能上还需要通过全球数据安全标准认证，
                  并在网络安全传输上进行加密传输，海外CDN打通用户最后一公里。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="视频解决方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img src="../../img/shipin.jpg" style="width: 80%;" alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">视频解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;移动互联网的发展，越来越多的人用手机刷视频、抖音、各种动图，解决移动网络的不稳定性，
                  波动较大，上传链路智能优化、分片上传和断点续传、视频存储、转码处理、分发播放等一系列一体化技术。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="金融解决方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img src="../../img/jinrong.jpg" style="width: 80%;" alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">金融解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金融行业对互联网技术是非常严格的，这对互联网的稳定性和可靠性提出了较高的要求。
                  同时，业务的持续性和安全性越来越依赖于互联网的健壮性、安全性、性能等来保证。当网络出现情况时，
                  需要及时有效的处理，保障业务持续稳定性。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="AWS迁移方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img src="../../img/solve1.png" style="width: 80%;" alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">AWS迁移方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。
                  针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；
                  为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，
                  让您的游戏更稳定、更安全、更好玩。
                </span>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>
      <!-- 产品优势 -->
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="6" class="flexbox"><img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/diannao.png" alt="" />
            <p class="cp-p">优胜劣汰，只和值得的厂商合作</p>
          </b-col>
          <b-col sm="6" class="flexbox"><img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/zhilupai.png" alt="" />
            <p class="cp-p">精细化的链路控制、智能的调度、实时的分析</p>
          </b-col>
          <b-col sm="6" class="flexbox"><img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/shezhi.png" alt="" />
            <p class="cp-p">私人订制，使用与客户的服务架构</p>
          </b-col>
          <b-col sm="6" class="flexbox"><img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/suo.png" alt="" />
            <p class="cp-p">可用性>=99.99%、耐久性》=99.99999999999%</p>
          </b-col>
          <b-col sm="6" class="flexbox"> <img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/jiagou.png" alt="" />
            <p class="cp-p"> 覆盖至中小运营商，力争最后一公里</p>
          </b-col>
          <b-col sm="6" class="flexbox"><img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/bianji.png" alt="" />
            <p class="cp-p">便捷自助服务后台，支持Restul API</p>
          </b-col>
          <b-col sm="6" class="flexbox"><img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/zhengfangti.png" alt="" />
            <p class="cp-p">实时网络探测、提前预知风险、全局可控</p>
          </b-col>
          <b-col sm="6" class="flexbox"> <img class="cp-img" height="45px" style="margin-right: 18px"
              src="../../img/renqun.png" alt="" />
            <p class="cp-p">全球7*24小时不间断专业技术支持保障</p>
          </b-col>
        </b-row>
      </b-container>
      <!-- 数据中心 -->
      <b-row>
        <b-col md="12">数据中心</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispIndex',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.lunbo {
  height: 400px;
}

.image-container {
  position: relative;
}

.overlay-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* 设置半透明的灰色 */
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
}

.br-2 {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 40px;
}

.image-container {
  width: 100%;
  padding-top: 40%;
  /* 16:9 宽高比 */
  position: relative;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-tb {
  width: 10%;
}

.br-1 {
  background-color: #323030;
}

.bc-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  border-right: 1px solid white;
}

.bc-13 {
  border: 0;
}

.sp-1 {
  margin-left: 5%;
  color: white;
}

.container,
.container-sm,
.container-md,
.container-lg {
  max-width: 100%;
}

.sl-tb {
  padding: 20px 0;
  background-color: #101010;
  color: white;
}

.br-3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bc-3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cp-img {
  flex-grow: 1;
  width: 45px;
  height: 45px;
}

.cp-p {
  flex-grow: 6;
}

.h-pd {
  padding: 0 20px;
}

/* 在大屏幕上使用大号字体 */
@media (min-width: 1200px) {
  .text-lg {
    font-size: 24px;
  }

  .textsl-lg {
    font-size: 18px;
  }

  .h-lg {
    font-size: 26px;
  }
}

/* 在中等屏幕上使用中号字体 */
@media (min-width: 992px) and (max-width: 1199px) {
  .text-md {
    font-size: 20px;
  }

  .textsl-md {
    font-size: 16px;
  }

  .h-md {
    font-size: 22px;
  }
}

/* 在小屏幕上使用小号字体 */
@media (max-width: 991px) {
  .text-sm {
    font-size: 16px;
  }

  .textsl-sm {
    font-size: 14px;
  }

  .h-sm {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .bc-1 {
    border-bottom: 1px solid white;
  }
}
</style>
<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/security.png" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px; min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h3>全球Tier3+数据中心服务</h3>
      <p>全国覆盖 国际标准 骨干网络 丰富链路</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row" style="background-color: #0f4682;">
      <b-row>
        <b-col class="title">云堡</b-col>
      </b-row>
      <b-row>
        <b-col sm="10" md="6" lg="5" class="bc-1-img"><img src="../../../img/yunbao1-1.png" style="width: 150px;
        height: 150px;" alt=""></b-col>
        <b-col sm="10" md="6" lg="7" class="bc-1-text">云堡，是上海橙域和浙江金华电信、联通、移动倾力打造的防御系统，总防护能力超过1500G，单点数据中心防御能力从100G-600G不等。
          通过网络实时监控，可实时为客户提供异常流量响应并进行清洗工作。多达10年的安全防控及研发经验，云堡安全防控系统集成所有已部署的DDoS、DNS、CC等
          防御资源，为用户提供高效的整体网络安全解决方案</b-col>
      </b-row>
      <b-row>
        <b-col><button type="button" class="btn btn-primary consult-btn" style=" float: right;" data-container="body"
            data-toggle="popover" data-placement="top" data-content="请致电4006705688详询">
            欢迎咨询
          </button></b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品功能</b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-2"><div class="img-icon">
            <img src="../../../img/yunbao7.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-2">安全</div>
            <div class="content">
              可与交换机实现联合防御，具备IDP、Botnent防护功能；提供IPSec
                  VPN/PPTP/SSL VPN
            </div>
          </div></b-col>
        <b-col sm="6" class="bc-2"><div class="img-icon">
            <img src="../../../img/yunbao8.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-2">管理</div>
            <div class="content">
              应用过滤、内容过滤；进出方向数据监控、管制规则；各类型策略（QOS、负载均衡、认证）
            </div>
          </div></b-col>
        <b-col sm="6" class="bc-2"><div class="img-icon">
            <img src="../../../img/yunbao9.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-2">记录</div>
            <div class="content">
              FTP记录、web浏览记录、支持报表定期导出
            </div>
          </div></b-col>
        <b-col sm="6" class="bc-2"><div class="img-icon">
            <img src="../../../img/yunbao10.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-2">操作</div>
            <div class="content">
              建议人性化界面，中文Web配置界面，支持超便捷集中管理
            </div>
          </div></b-col>
        <b-col sm="6" class="bc-2"><div class="img-icon">
            <img src="../../../img/yunbao11.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-2">防护类型</div>
            <div class="content">
              100%清洗Invalid
                Packeets、Flooding、Malformed、DNS攻击、HTTP攻击、TCP链接耗尽攻击等
            </div>
          </div></b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品优势</b-col>
      </b-row>
      <b-row>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/yunbao33.png" width="75px" alt="" />
          <p class="title-3">防御定制</p>
          <p>
              提供300Gbps以上的防御定制服务，支持弹性扩容DDoS峰值最高、DNS峰值最高的防御者。资深安全顾问根据不同业务结构、攻击情况量身定制防护方案及战术
            </p>
        </b-col>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/yunbao44.png" width="75px" alt="" />
          <p class="title-3">T级宽带</p>
          <p>全国多个处理中心，2T+宽带储备，5s发现恶意攻击，10s快速阻断。</p>
        </b-col>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/yunbao55.png" width="75px" alt="" />
          <p class="title-3">高性能</p>
          <p>
              业务开创更符合游戏、互联网金融、证券、电商等场景的DDoS防御算法。
            </p>
        </b-col>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/yunbao11.png" width="75px" height="75px" alt="" />
          <p class="title-3">弹性计算</p>
          <p>
              使用防护过程，攻击超出基础套餐部分，根据实际攻击流量弹性计费，节省防护成本。
            </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品架构</b-col>
      </b-row>
      <b-row>
        <b-col class="bc-4"><img src="../../../img/framework.jpg" width="70%" style="margin-top: 20px" alt="" /></b-col>
      </b-row>


    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispSecurity',

  data () {
    return {

    };
  },

  mounted () {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
// first大图
.image-overlay {
  position: absolute;
  top: 76px;
  left: 0;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  padding-top: 100px;
}

// 内容
.container,
.container-sm,
.container-md,
.container-lg {
  max-width: 100%;
  padding: 30px;
}

.title {
  font-size: 24px;
  color: #0099ff;
  text-align: center;
  margin: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}

.bc-1-img {
  text-align: center;
}

.bc-1-text {
  // text-align: center;
  color: #fff;
  padding-right: 40px;
}

.content-blue {
  color: #fff;
  padding: 40px;
  margin: 20px 0;
}
.img-icon {
  margin-right: 10px;
}
.bc-2 {
  display: flex;
  padding: 10px;
  margin: 20px 0;
  color: #fff;
}

.bc-2 .title-2 {
  color: #0099ff;
}

.bc-3 {
  text-align: center;
  color: #fff;
  padding-bottom: 20px;
}
.title-3 {
  font-size: 20px;
  margin-top: 10px;
}
.bc-4{
  text-align: center;
}


/* 在中等屏幕上使用中号字体 */
@media (min-width: 992px) and (max-width: 1199px) {
  h3 {
    color: white;
    font-size: 32px;
  }

  .image-overlay p {
    margin-top: 100px;
    color: white;
    font-size: 22px;
    margin-right: 100px;
  }
}


/* 在小屏幕上使用小号字体 */
@media (max-width: 991px) {
  h3 {
    color: white;
    font-size: 28px;
  }

  .image-overlay p {
    margin-top: 100px;
    color: white;
    font-size: 20px;
    margin-right: 0px;
  }

  .image-overlay {
    padding-top: 40px;
    height: 250px;
  }
}

@media (max-width: 576px) {
  h3 {
    color: white;
    font-size: 26px;
  }

  .image-overlay p {
    color: white;
    font-size: 18px;
    margin-top: 100px;
  }

  .image-overlay {
    padding-top: 0px;
    height: 250px;
  }

}</style>
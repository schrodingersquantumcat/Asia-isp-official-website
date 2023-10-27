<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/datacenter.jpg" fluid alt="Responsive image" style="width: 100%; max-height: 350px;"></b-img>
    <div class="image-overlay">
      <h3>全球Tier3+数据中心服务</h3>
      <p>全国覆盖 国际标准 骨干网络 丰富链路</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row" style="background-color: #0f4682;">

      <b-row>
        <b-col class="title">云数据中心</b-col>
      </b-row>
      <b-row>
        <b-col sm="10" md="6" lg="5" class="bc-1-img"><img src="../../../img/data1.jpg" alt=""></b-col>
        <b-col sm="10" md="6" lg="7"
          class="bc-1-text">通过与全球基础运营商合作，我们在中国运营多个Tier3以上级别的互联网数据中心（IDC），覆盖中国大陆北上广一线城市和内陆二线核心城市节点，
          可以灵活满足客户的各类需求。在每个数据中心，我们拥有一支独立的、经过严格培训、具备丰富经验的现场技术支持队伍，提供特有的真正7×24小时，
          5分钟及时响应的驻机房服务</b-col>
      </b-row>
      <b-row>
        <b-col><button type="button" class="btn btn-primary consult-btn" style=" float: right;" data-container="body"
            data-toggle="popover" data-placement="top" data-content="请致电4006705688详询">
            欢迎咨询
          </button></b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品业务</b-col>
      </b-row>
      <b-row>
        <b-col sm="6" lg="3" class="bc-2">
          <img src="../../../img/data2.jpg" alt="" />
          <div class="title-2">服务器托管</div>
          <div>服务器托管</div>
          <div>用户自行采购服务器</div>
          <div>安装好系统及相应软件</div>
          <div>服务器实时监控，定期巡检服务器设备</div>
          <div>7×24小时技术支持服务</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-2">
          <img src="../../../img/data3.jpg" alt="" />
          <div class="title-2">服务器租用</div>
          <div>服务器租用</div>
          <div>客户可根据业务，提出硬件配置要求</div>
          <div>帮助客户维护服务器的稳定安全</div>
          <div>7×24小时技术支持服务</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-2">
          <img src="../../../img/data4.jpg" alt="" />
          <div class="title-2">VIP包区</div>
          <div>软件平台的部署</div>
          <div>网络进程监控</div>
          <div>系统安全管理</div>
          <div>程序与数据库备份/恢复</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-2">
          <img src="../../../img/data5.jpg" alt="" />
          <div class="title-2">运维服务</div>
          <div>软件平台的部署</div>
          <div>网络进程监控</div>
          <div>系统安全管理</div>
          <div>程序与数据库备份/恢复</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品优势</b-col>
      </b-row>
      <b-row>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/dns2.png" width="75px" alt="" />
          <p class="title-3">T级带宽接入</p>
        </b-col>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/data6.png" width="75px" alt="" />
          <p class="title-3">2000G防火墙集群</p>
        </b-col>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/data7.png" width="75px" alt="" />
          <p class="title-3">cc防护规则设置</p>
        </b-col>
        <b-col sm="6" lg="3" class="bc-3"><img src="../../../img/data8.png" width="75px" height="75px" alt="" />
          <p class="title-3">近源清洗立体防御</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">数据中心</b-col>
      </b-row>
      <b-row>
        <b-col col="12" class="bc-4">
          <p>服务器托管服务中，用户需要购买配置好的服务器再邮寄或者搬运到机房，过程中相对耗时。</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col col="12" class="bc-4"><img src="../../../img/data12.jpg" width="70%" style="margin-top: 40px" alt="" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispDataCenter',

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

.bc-2 {
  text-align: center;
  color: #fff;
  padding-bottom: 20px;
}

.title-2 {
  font-size: 20px;
  margin-bottom: 10px;
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
  font-size: 18px;
  color: #fff;
  text-align: center;
}
/* 在大屏幕上使用大号字体 */
@media (min-width: 1200px) {
  h3 {
    color: white;
    font-size: 36px;
  }

  .image-overlay p {
    margin-top: 120px;
    color: white;
    font-size: 24px;
    margin-right: 300px;
  }

  .content {
    font-size: 18px;
  }
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

  .content {
    font-size: 18px;
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

  .content {
    font-size: 16px;
  }

  .img-jiaguo {
    width: 80%;
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
    padding-top: 10px;
    height: 250px;
  }

  .img-jg {
    width: 100%;
  }

  .content {
    font-size: 14px;
  }

  .bc-2 {
    margin: 10px 0;
  }

  .img-jiaguo {
    width: 100%;
  }

  .content-blue {
    padding: 20px;
    margin: 10px 0;
  }
}
</style>
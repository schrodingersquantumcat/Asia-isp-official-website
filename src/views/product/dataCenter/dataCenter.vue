<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/datacenter.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h>全球Tier3+数据中心服务</h>
      <p>全国覆盖 国际标准 骨干网络 丰富链路</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row container-style">

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
        <b-col class="bc-4">
          <p>服务器托管服务中，用户需要购买配置好的服务器再邮寄或者搬运到机房，过程中相对耗时。</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="bc-4"><img src="../../../img/data12.jpg" width="70%" style="margin-top: 20px;" alt="" /></b-col>
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


// 内容

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

.bc-4 {
  font-size: 18px;
  color: #fff;
  text-align: center;
}

</style>
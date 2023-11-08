<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/cdn5.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h>融合CDN</h>
      <p>优选稳定、高效的CDN服务</p>
    </div>

    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col class="title">产品价值</b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <div class="title-2">传统CDN</div>
          <div class="content-1">
            <p>客户调度质量和服务可用性受限于单一CDN厂商
              对于运营商在不同地区和时间段差异、带宽储备、突
              发应对，遇到重大故障往往影响客户服务，需要人工
              临时对CDN切换，加大沟通成本和对于人工维护多家
              CDN资源增加了困难度和复杂度</p>
          </div>
        </b-col>
        <b-col md="6">
          <div class="title-2">
            <h>橙域 CDN</h>
          </div>
          <div class="content-2">
            <p>客户的加速区域我们都有多家CDN厂商冗余，解
              决客户带宽突发，服务网络不可达，智能线路提前帮
              助客户发现问题，无感知切换，我们帮您解决厂商之
              间的沟通难题，我们保证只给您使用优质的厂商和优质的节点资源</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="title">服务功能</b-col>
      </b-row>
      <b-row style="padding: 0 20px;">
        <b-col md="12">
          <div class="title-3">HTTP安全加速</div>
          <div class="content">
            客户端访问、节点间互联、回源请求支持全链路HTTPS加密，支持域名证书密钥/私钥上传
          </div>
        </b-col>
        <b-col md="12">
          <div class="title-3">分层缓存策略</div>
          <div class="content">
            支持自定义资源缓存过期时间设置，支持自定义http请求头，精准资源加速，减轻源站资源紧缺
          </div>
        </b-col>
        <b-col md="12">
          <div class="title-3">访问控制策略</div>
          <div class="content">
            支持Refer黑白名单，IP黑白名单，URL鉴权校验，UA防盗链多重认证校验，保护用户资源
          </div>
        </b-col>
        <b-col md="12">
          <div class="title-3">日志统计分析</div>
          <div class="content">
            支持用户访问流量，URL访问Top100，访问命中率，URL访问来源，用户分布展现，助力客户开展业务
          </div>
        </b-col>
        <b-col md="12">
          <div class="title-3">内容自助管理</div>
          <div class="content">
            支持内容缓存刷新，内容缓存预取，图片鉴黄，支持RestFul API接口
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品特性</b-col>
      </b-row>
      <b-row>
        <b-col sm="12" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/cdn3.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">监控体系</div>
            <div class="conten">
              <p>智能融合CDN需要数量足够的监控节点，搭配专业的网络监控体系，实时掌握CDN节点、
                运营商骨干网、客户源站、HTTPS证书、DNS解析等状况，采集足够多的数据信息，
                对采集数据进行实时合并，去噪，关联分析，第一时间发现问题，形成可供调度系统或者运营人员决策的结论</p>
            </div>
          </div>
        </b-col>
        <b-col sm="12" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/cdn2.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">大数据分析</div>
            <div class="conten">
              <p>监控体系采集到的网络质量信息，需要强大的大数据分析系统进行过滤、分析，然后从中识别正常业务波动，
                及异常变化，并基于历史数据给出应对策略。智能融合CDN大数据系统，不仅能够对监控信息进行实时分析，
                还能够学习进化，基于历史数据自动调整，做到识别正常业务波动及异常变化的自动发现</p>
            </div>
          </div>
        </b-col>
        <b-col sm="12" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/cdn1.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">智能调度</div>
            <div class="conten">
              <p>智能调度系统与监控、分析系统联动，根据故障级别进行相应的智能调度决策，对于可用性故障，
                节点故障，异常状态码等按设置的阈值自动切换；对于网络抖动、下载速度、响应时间等异常情
                形进行人工优化。在用户无感知情况实现调度切换</p>
            </div>
          </div>
        </b-col>
        <b-col sm="12" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/cdn4.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">聚合管理</div>
            <div class="conten">
              <p>智能融合CDN更专业、更进一步，专门为之研发配置了管理体系。其可以掌控整个融合CDN平台的运营状态，
                实现从基础数据到运维、运营的全方面管控，不管是资源、服务、状态、任务体系、API体系，还是监控、
                调度、计费及问题跟进，做到全局可控。对于客户来说，只需要和一家平台沟通即可</p>
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">产品架构</b-col>
      </b-row>
      <b-row>
        <b-col style="text-align: center;"><img class="img-jg" src="../../../img/ronghecdn.jpg" alt="" /></b-col>
      </b-row>


    </b-container>


  </div>
</template>

<script>
export default {
  name: 'AsiaispFusionCDN',

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
.bc-1 {
  display: flex;
  padding: 10px;
}

.img-jg {
  width: 60%;
}

@media (max-width: 991px) {
  .img-jg {
    width: 100%;
  }
}

</style>
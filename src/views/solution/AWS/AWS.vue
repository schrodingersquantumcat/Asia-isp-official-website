<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/fusionCDN.png" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h>AWS迁移方案</h>
      <p>专为出海企业量身打造</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col class="title">关于上海橙域</b-col>
      </b-row>
      <b-row>
        <b-col md="3" style="text-align: center;"><img src="../../../img/badge.png" width="200px" />
        </b-col>
        <b-col md="9" style="text-align: center; margin-top: 20px;">
          <p>
            上海橙域网络科技有限公司（简称：橙域网络）是一家互联网平台服务提供商。公司成立于2014
            年，总部位于上海。目前已经设立了北京，广州办事处。
            公司通过提供CDN、安全与性能、MSP、边缘计算、云计算产品及解决方案，帮助客户业务创新，是客户数字化升级值得信赖的合作伙伴。
          </p>
          <br>
          <p>
            上海橙域网络科技有限公司是亚马逊云科技高级认证合作伙伴，积极致力于通过亚马逊提供的云服务+橙域网络的增值服务，从规划，实施到运维给用户提供整体交付方案，帮助用户业务上云，赋能用户实现业务的数字化转型。
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">关于AWS--全球区域网络</b-col>
      </b-row>
      <b-row style="margin: 20px;">
        <b-col>
          <p>AWS Cloud 现已在全球 32 个地理区域内运营着 102 个可用区，并宣布计划在加拿大、马来西亚、新西兰和泰国新增 12 个可用区和 4 个 AWS 区域。</p>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="10" style="text-align: center;"><img class="img-aws" src="../../../img/AWSquyu.png" alt=""></b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <div>
            <b-button v-b-toggle.sidebar-1 style="margin-top: 10px;background-color: #ff9900; float: left;"> List view</b-button>
            <b-sidebar id="sidebar-1" title="AWS区域" right  shadow>
              <div class="px-3 py-2">
                <p>
                  <span class="title-3">欧洲/中东/非洲</span><br>
                  AWS Cloud 在欧洲、中东和非洲的 12 个地理区域内有 36 个可用区，以及 39 个边缘网络站点和两个区域性边缘缓存站点。<br>
                  区域（可用区）：<br>
                  巴林 (3)、开普敦 (3)、法兰克福 (3)、爱尔兰 (3)、以色列 (3)、伦敦 (3)、米兰 (3)、巴黎 (3)、西班牙 (3)、斯德哥尔摩 (3)、苏黎世 (3) 和阿联酋 (3)
                </p>
                <br>
                <p>
                  <span class="title-3">亚太地区和中国</span><br>
                  AWS Cloud 在亚太地区和中国的 12 个地理区域内有 38 个可用区，以及 34 个边缘网络站点和 5 个区域性边缘缓存站点。<br>
                  区域（可用区）：<br>
                  香港特别行政区（3 个）、墨尔本（3 个）、孟买（3 个）、首尔（4 个）、新加坡（3 个）、悉尼（3 个）、东京（4 个）、大阪（3 个）、北京（3 个）、宁夏（3 个）、雅加达（3 个）、海得拉巴（3
                  个）
                </p>
                <br>
                <p>
                  <span class="title-3">北美洲</span><br>
                  AWS 云在北美洲的 7 个地理区域内有 25 个可用区，以及 44 个边缘网络站点和 2 个区域性边缘缓存站点。<br>
                  区域（可用区）：<br>
                  弗弗吉尼亚北部（6 个）、俄亥俄（3 个）、加利福尼亚北部（3 个）、俄勒冈（4 个）、美国东部（3 个）、美国西部（3 个）、中部（3 个）
                </p>
                <br>
                <p>
                  <span class="title-3">南美洲</span><br>
                  AWS 云在南美洲的 1 个地理区域内有 3 个可用区，以及 4 个边缘网络站点和 1 个区域性边缘缓存站点。<br>
                  区域（可用区）：<br>
                  圣保罗 (3 个)
                </p>
              </div>
            </b-sidebar>
          </div>
        </b-col>
        <b-col md="9" class="qiu">
          <div class="qiu1"></div>
          <div>地区</div>
          <div class="qiu2"></div>
          <div>即将推出</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">AWS解决方案</b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <div class="title-3">广告与营销</div>
          <div>
            <p>
              为PB级分析工作负载和毫秒级延迟的工作负载实现高成本效率</p>
          </div>
        </b-col>
        <b-col md="3">
          <div class="title-3">金融服务</div>
          <div>
            <p>成本更低。更强的恢复能力。了解适用于银行、支付、资本市场和保险的各种AWS 解决方案。</p>
          </div>
        </b-col>
        <b-col md="3">
          <div class="title-3">游戏技术</div>
          <div>
            <p>创建计算能力超绝并且支持各种类型和平台的游戏。</p>
          </div>
        </b-col>
        <b-col md="3">
          <div class="title-3">教育</div>
          <div>
            <p>使用AWS 云个性化学生的学习体验、随
              时随地访问应用程序和提高学习成果</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col><button class="btn"><a
              href="https://aws.amazon.com/cn/industries/?hp=tile&tile=industries">了解更多</a></button></b-col>
      </b-row>

      <b-row>
        <b-col class="title">AWS的产品</b-col>
      </b-row>

      <b-tabs content-class="mt-3" fill>
        <b-tab title="计算" active>
          <b-row>
            <b-col md="2">
              <div class="title-3">EC2</div>
              <div>
                <p>
                  云端虚拟服务器</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon EC2 Auto scaling</div>
              <div>
                <p>扩展计算能力以满足需求</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Elastic ContainerService (EcS)</div>
              <div>
                <p>高度安全、可靠且可扩展的容器运行方式</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Elastic KubernetesService (EKS)</div>
              <div>
                <p>最值得信赖的 Kubernetes 运行方式</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Lightsail</div>
              <div>
                <p>启动并管理虚拟私有服务器</p>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="数据库">
          <b-row>
            <b-col md="2">
              <div class="title-3">Amazon Aurora</div>
              <div>
                <p>
                  高性能托管式关系数据库</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon DynamoDB</div>
              <div>
                <p>托管式 NOSQL数据库</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon ElastiCache</div>
              <div>
                <p>内存中缓存服务</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon RDS</div>
              <div>
                <p>适用于 MySQL、PostgreSQL.Oracle. sol Server 天MariaDB 的托管式关系数据库服务</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Redshift</div>
              <div>
                <p>便捷、简易且经济高效的数据仓库</p>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="存储">
          <b-row>
            <b-col md="2">
              <div class="title-3">Amazon Elastic Block store (EBS)</div>
              <div>
                <p>
                  EC2 数据块存储卷</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Elastic File System (EFS)</div>
              <div>
                <p>针对 EC2 的完全托管式文件系统</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Simple Storage Service (S3)</div>
              <div>
                <p>专为从任意位置检索任意数量的数据而构建的对象存储</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">AWs Backup</div>
              <div>
                <p>跨 AWS 服务的集中备份</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">AWs Storage Gateway</div>
              <div>
                <p>混合存储集成</p>
              </div>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="分析">
          <b-row>
            <b-col md="2">
              <div class="title-3">Amazon OpenSearch service</div>
              <div>
                <p>
                  对 PB 级文本和非结构化数据进行搜索、可视化和分析</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Athena</div>
              <div>
                <p>使用 SQL在 S3 中查询数据</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Cloudsearch</div>
              <div>
                <p>托管式搜索服务</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Kinesis</div>
              <div>
                <p>分析实时视频和数据流</p>
              </div>
            </b-col>
            <b-col md="2">
              <div class="title-3">Amazon Redshift</div>
              <div>
                <p>便捷、简易且经济高效的数据仓网</p>
              </div>
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>

      <b-row>
        <b-col><button class="btn"><a
              href="https://aws.amazon.com/cn/products/?hp=tile&so-exp=below">了解更多</a></button></b-col>
      </b-row>



    </b-container>

  </div>
</template>

<script>
export default {
  name: 'AsiaispAWS',

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
.img-aws {
  width: 100%;
  height: 100%;
}

.qiu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.qiu1 {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #02a4a6;
  margin: 0 10px;
}

.qiu2 {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #db364e;
  margin: 0 10px;
}

.btn {
  background-color: #ff9900;
  text-align: center;
  margin-top: 20px;
  float: right;
}
a{
  color: #fff;
}
</style>
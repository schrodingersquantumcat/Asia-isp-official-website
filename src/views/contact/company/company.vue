<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/office.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px; min-height: 200px;"></b-img>

    <!-- 内容 -->
    <b-container class="bv-example-row" style="background-color: #0f4682;color: #fff;">
      <b-row>
        <b-col class="title">关于橙域</b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            上海橙域网络科技有限公司（简称：橙域网络）是一家互联网平台服务提供商，主要向客户提供融合的数据内容分发和加速（CDN）、
            互联网数据中心（IDC）、软件定义广域网（SDWAN）、云安全防护（CSP）。公司成立于2014
            年，总部位于上海。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            橙域网络在全球各大城市拥有丰富的IDC
            合作资源，覆盖国内中国电信、中国联通、中国移动以及全球重要电信级运营商节点资源。
            目前，公司的智能融合CDN调度系统已与多个拥有稳定核心资源的CDN提供商成功对接，形成了覆盖广、稳定强、价格优的高品
            质互联网资源，综合实力居行业前列。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            橙域网络持续专注于网络优化，已形成从硬件设备选型、基础IDC构建、分布式IDC方案咨询到CDN网络优化、云安全的一条龙综合服务体系，
            形成了以页面、下载、流媒体直播点播、游戏加速为主的全面网络优化解决方案。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            橙域网络的高速发展源于橙域人共同的使命感与价值观，源于对客户和员工的无限忠诚，源于无数次拥抱创新与挑战。
            秉承“发挥员工价值，创造服务价值，体现客户价值”的经营理念，橙域网络将竭尽全力打造一个更加高效、稳定、简单且易于管理的网络环境，
            使每位置身其中者充分驾驭网络时代变革带来的机遇。
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">客户说橙域</b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于出海跨境业务，海量的商品信息、图片、网站样式等静态资源组成，海外网络环境的好坏将直接影响网站的加载速度，CDN是一个必然的选择
          </p>
          <p>
            橙域的CDN加速为我们海外的业务发展提供了优质的加速平台，有效的避免了互联网用户访问时出现数据拥塞的情况，大大的提高了用户访问网站的速度，
            橙域注重每个区域的访问质量，力争确保用户的最后一公里，选择橙域，放心选择
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">我们说橙域</b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;橙域为我们提供了良好的成长的平台，通过了解、熟悉、提升业务知识和业务技能从而实现自我的价值，在这里每个人互相帮助，共同向着一个目标奋斗
          </p>
          <p>
            也许我们还不完善，也许我们还不够专业，但是橙域的每个人都有恒心和毅力去做到让每个客户都认同和满意
          </p>
        </b-col>
        <b-col md="6"><img src="../../../img/staff.png" width="400px" alt="" /></b-col>
      </b-row>
    </b-container>

    <!-- 轮播 -->



    <!-- 历程 -->
    <b-container class="bv-example-row" style="background-color: #0f4682;color: #fff;">
      <b-row>
        <b-col class="title">Beacon 的企业历程</b-col>

      </b-row>
      <b-row>
        <b-col style="text-align: center;"><img src="../../../img/chilunnew.png" width="80%" alt="" /></b-col>
      </b-row>
    </b-container>


  </div>
</template>

<script>
export default {
  name: 'AsiaispCompany',

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
</style>
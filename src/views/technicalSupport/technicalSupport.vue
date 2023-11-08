<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../img/technical.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;min-height: 200px;"></b-img>

    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col class="title">
          <h>专业定制支持</h>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <div class="title-2">售前业务咨询</div>
          <div>
            售前咨询团队将竭诚为您提供云产品咨询，方案解决及其他售前服务
          </div>
          <div>电话：400-670-5668（5*9h 周一~周五 9：30-18：30）</div>
          <div style="margin-bottom: 0px">线上咨询（QQ：2337205066）</div>
          <div class="img">
            <img src="../../img/salebefore.png" width="80%" alt="" />
          </div>
        </b-col>
        <b-col md="6">
          <div class="title-2">售后业务咨询</div>
          <div>
            专业技术支持团队将7*24待命，全年无休，充分保障您的产品的无优使用和业务的稳定运行。
          </div>
          <div>电话：400-670-5668（7*24h）</div>
          <br />
          <!-- <button class="btn btn-primary">提交工单</button>
          <button type="button" class="btn btn-primary" data-container="body" data-toggle="popover" data-placement="top"
            data-content="请致电4006705688详询">
            在线咨询
          </button> -->
          <!-- <button class="btn btn-primary">在线咨询</button> -->
          <div class="img">
            <img src="../../img/salehou.png" width="80%" alt="" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="title">
          <h>服务权限</h>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6">
          <div>
            <table class="table table-bordered table-hover" style="color: #fff;">
              <tr style="background: #0099ff">
                <td>类型</td>
                <td>权益</td>
              </tr>
              <tr>
                <td>电话技术支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>微信群技术支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>产品工单服务</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>专家技术支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>产品方案支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>产品架构支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>API使用支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>7X4小时服务支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
              <tr>
                <td>服务品质支持</td>
                <td>
                  <img src="../../img/wancheng.png" width="20px" alt="" style="background-color: #fff;border-radius: 50%;" />
                </td>
              </tr>
            </table>
          </div>
        </b-col>
        <b-col md="6">
          <div style="text-align: center">
            <img src="../../img/fuwu.jpg" width="80%" alt="" style="border: 2px solid #ccc" />
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="bv-example-row" style="background-color: #fff;">
    <b-row>
      <b-col class="bc-w" sm="6" lg="3"><img src="../../img/content_1.png" width="35%" height="40%" alt="" />
            <div class="title">专业架构设计</div>
            <div class="describe">
              无论您身处于什么行业，架构团队量身定制个性化需求及专业的技术指导
            </div></b-col>
      <b-col class="bc-w" sm="6" lg="3"><img src="../../img/content_2.png" width="35%" height="40%" alt="" />
            <div class="title">1对1方案实施</div>
            <div class="describe">
              点对点的客户经理服务模式，全程提供网络、软件、技术的管家模式
            </div></b-col>
      <b-col class="bc-w" sm="6" lg="3"><img src="../../img/content_3.png" width="35%" height="40%" alt="" />
            <div class="title">7X24专家管理</div>
            <div class="describe">
              100秒极速响应，5分钟处理工单，坚持客户服务为中心，客户需求为导向的承诺
            </div></b-col>
      <b-col class="bc-w" sm="6" lg="3"><img src="../../img/content_4.png" width="35%" height="40%" alt="" />
            <div class="title">业务安全保障</div>
            <div class="describe">
              99.95%可用性，99.9999%数据可靠性，实施数据监测，为突发和异常保驾护航
            </div></b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispTechnicalSupport',

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
.bc-w{
  text-align: center;
}
</style>
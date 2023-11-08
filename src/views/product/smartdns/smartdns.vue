<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/smartdns.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h>智能DNS</h>
      <p>动态实时更新的IP数据库、资源动态调配系统、实时监控系统、快速切换系统组成</p>
    </div>
    <!-- 内容 -->
    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col class="title">
          <h>核心价值</h>
        </b-col>
      </b-row>

      <b-row class="content-blue">
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns1.png" width="50px" alt="" />
          <div class="content">基于BGP/ASN数据实时Geo-IP库</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns2.png" width="50px" alt="" />
          <div class="content">全球100+自有网络监测点</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns3.png" width="50px" alt="" />
          <div class="content">全球多家三方APM平台合作</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns4.png" width="50px" alt="" />
          <div class="content">多地域运营商及网络服务商合作</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns5.png" width="50px" alt="" />
          <div class="content">定时网络链路、访问质量监测</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns6.png" width="50px" alt="" />
          <div class="content">国内外主流运营商省份地区覆盖</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns7.png" width="50px" alt="" />
          <div class="content">智能线路用户无感知切换</div>
        </b-col>
        <b-col sm="6" lg="3" class="bc-1"><img src="../../../img/dns8.png" width="50px" alt="" />
          <div class="content">真实用户LastMile数据交互统计</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col  class="title">
          <h>服务功能</h>
        </b-col>
      </b-row>

      <b-row class="content-blue">
        <b-col sm="12" class="bc-2">
          <div class="img-icon">
            <img src="../../../img/dns9.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-3">智能调度</div>
            <div class="content">
              基于实时更新的IP数据库，可以将各地的访问请求自动分配到距离用户就近的CDN节点
            </div>
          </div>
        </b-col>
        <b-col sm="12" class="bc-2">
          <div class="img-icon">
            <img src="../../../img/dns10.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-3">智能统计</div>
            <div class="content">
              基于实时探测自有APM节点探测、第三方监测点、真实用户访问数据计算，可以访问请求自动分配性能优质的CDN节点
            </div>
          </div>
        </b-col>
        <b-col sm="12" class="bc-2">
          <div class="img-icon">
            <img src="../../../img/dns11.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-3">智能排障</div>
            <div class="content">
              基于实时设备节点监控、网路链路监控，可以迅速感知故障节点并下线替换，避免请求用户服务到异常CDN节点
            </div>
          </div>
        </b-col>
        <b-col sm="12" class="bc-2">
          <div class="img-icon">
            <img src="../../../img/dns12.png" width="45px" alt="" />
          </div>
          <div class="">
            <div class="title-3">智能预知</div>
            <div class="content">
              基于实时大数据的用户访问情况，通过量化分析，预测潜在风险并发送报警
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">
          <h>产品架构</h>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="jiagou"><img class="img-jiaguo" src="../../../img/dnsjiagounew.png" alt="" /></b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispSmartdns',

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

.content-blue {
  background-color: #0f4682;
  color: #fff;
  padding: 0 40px;
  margin: 20px 0 0 0;
}

.bc-1 {
  text-align: center;
  margin: 20px 0;
}

.img-icon {
  margin-right: 10px;
}

.bc-2 {
  display: flex;
  padding: 10px;
  margin: 20px 0;
}


.jiagou {
  text-align: center;
}

.img-jiaguo {
  width: 57%;
}



/* 在中等屏幕上使用中号字体 */
@media (min-width: 992px) and (max-width: 1199px) {
  .content {
    font-size: 18px;
  }
}


/* 在小屏幕上使用小号字体 */
@media (max-width: 991px) {
   .img-jiaguo {
    width: 80%;
  }
}

@media (max-width: 576px) {


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
<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/game.jpg" fluid alt="Responsive image" style="width: 100%; max-height: 350px;"></b-img>
    <div class="image-overlay">
      <h3>游戏解决方案</h3>
      <p>提升出海加速体验</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row" style="background-color:#0f4682; color: #fff; ">
      <b-row>
        <b-col>
          <p>2018年，全球游戏市场将达到$1,379亿美元的市场规模，较上一年增长$162亿美元亚太地区今年将创造714亿美元的游戏收入，
            占全球总市场收入的52％，同比增长16.8％。今年仅中国就将创造379亿美元的游戏收入，占全球市场的四分之一以上全球化游戏平台的发展</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-1">
          <div class="col-xs-2 col-sm-1 col-md-1">
            <img src="../../../img/game1.png" width="30px" alt="" />
          </div>
          <div class="col-xs-10 col-sm-10 col-md-10">
            <div class="title">频更新</div>
            <div class="conten">
              <p>对的分发要求高</p>
              <p>为了防止玩家感到乏味，游戏需要不断更新以保持活力</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div class="col-xs-2 col-sm-1 col-md-1">
            <img src="../../../img/game2.png" width="30px" alt="" />
          </div>
          <div class="col-xs-10 col-sm-10 col-md-10">
            <div class="title">高突发</div>
            <div class="conten">
              <p>突发会达到惊人程度</p>
              <p>升级、推广都有可能突然带宽飙升，导致严重的后果</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-1">
          <div class="col-xs-2 col-sm-1 col-md-1">
            <img src="../../../img/game3.png" width="30px" alt="" />
          </div>
          <div class="col-xs-10 col-sm-10 col-md-10">
            <div class="title">可视化</div>
            <div class="conten">
              <p>运营需要及时发现问题</p>
              <p>运维需要在发现问题时第一时间找出问题所在环节进行修正</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div class="col-xs-2 col-sm-1 col-md-1">
            <img src="../../../img/game4.png" width="30px" alt="" />
          </div>
          <div class="col-xs-10 col-sm-10 col-md-10">
            <div class="title">转化率</div>
            <div class="conten">
              <p>逐步分析转化数据，清楚问题所在</p>
              <p>根据区域、ISP数据分析未完成用户分布情况与原因</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-2">
          <h1>客户价值</h1>
          <div class="title">分布式智能调度</div>
          <div class="content">
            <div>全网节点覆盖，智能路由调度，提升玩家访问体验</div>
            <div>多层服务架构，保障源站安全</div>
            <div>支持静态缓存，动态加速，智能分离</div>
            <div>支持全网预热分发，提升玩家服务质量，降低源站带宽压力</div>
            <div>支持高并发流量，充足带宽储备，应对突发骤增</div>
            <div>支持HTTPS加密传输，有效应对攻击、篡改</div>
            <div>支持数据分析，快速排除故障，助力运营商开拓业务</div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-2"><img src="../../../img/game66.png" style="margin: -31px 0 31px 0px" width="70%"
            alt="" /></b-col>
      </b-row>

    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" class="bc-3"><b-img src="../../../img/gamecase-1.png" fluid alt="Responsive image"
            style="margin: 10px;"></b-img></b-col>
        <b-col sm="6" class="bc-3"><b-img src="../../../img/gamecase-2.png" fluid alt="Responsive image"
            style="margin: 10px;"></b-img></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispGameSolut',

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
  top: 0;
  left: 0;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 100px;
}

// 内容
.container,
.container-sm,
.container-md,
.container-lg {
  max-width: 100%;
  padding: 60px;
}

.bc-1 {
  display: flex;
  padding: 10px;
}

.bc-2 {
  padding: 20px;
}

.bc-1 .title {
  color: #0099ff;
}

.bc-3{
  text-align: center;
}

/* 在大屏幕上使用大号字体 */
@media (min-width: 1200px) {
  .image-overlay h3 {
    color: white;
    font-size: 36px;
  }

  .image-overlay p {
    margin-top: 100px;
    color: white;
    font-size: 24px;
    margin-right: 600px;
  }
}

/* 在中等屏幕上使用中号字体 */
@media (min-width: 992px) and (max-width: 1199px) {
  .image-overlay h3 {
    color: white;
    font-size: 32px;
  }

  .image-overlay p {
    margin-top: 100px;
    color: white;
    font-size: 22px;
    margin-right: 400px;
  }
}


/* 在小屏幕上使用小号字体 */
@media (max-width: 991px) {
  .image-overlay h3 {
    color: white;
    font-size: 28px;
  }

  .image-overlay p {
    margin-top: 100px;
    color: white;
    font-size: 20px;
    margin-right: 200px;
  }
}

@media (max-width: 576px) {
  .image-overlay h3 {
    color: white;
    font-size: 26px;
  }

  .image-overlay p {
    margin-top: 100px;
    color: white;
    font-size: 18px;
    margin-right: 50px;
  }
}
</style>
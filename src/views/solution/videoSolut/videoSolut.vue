<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/video.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h>视频解决方案</h>
      <p>丰富、乐趣加速体验</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col>
          <p class="hp">
            至2018年12月，短视频的用户使用时长达到11.4%，已经超过在线视频的8.3%，成为仅次于即时通讯的第二大产品类型。具体到产品来看，抖音、快手和西瓜视频位列TOP
            3，其月活用户分别为4.26亿、2.84亿和1.21亿 提升消费体验成为当务之急
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game1.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">多样化</div>
            <div class="conten">
              <p>对视频播放质量提升</p>
              <p>提供点播加速、直播加速、直播转码、直播录制</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game2.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">高突发</div>
            <div class="conten">
              <p>观看人数突增</p>
              <p>热度视频播放，游戏达直播引发大量用户观看</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game3.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">可视化</div>
            <div class="conten">
              <p>需要及时发现问题</p>
              <p>对视频流波动、用户播放流畅度、播放错误等视频流层面的监控</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game4.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">转化率</div>
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
          <div class="title-2">分布式智能调度</div>
          <div class="content">
            <div>全网节点覆盖，智能路由调度，提升访问体验</div>
            <div>支持点播全网预热分发，优质BGP带宽，海量高吞吐能力</div>
            <div>支持海量存储，高扩展性，高可用性</div>
            <div>支持多终端兼容，降低视频延迟</div>
            <div>支持HTTPS加密传输，有效应对攻击、篡改</div>
            <div>支持数据分析，快速排除故障，助力运营商开拓业务</div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-2"><img class="img-jg" src="../../../img/video66.png" style="margin: 31px 0 31px 0px"
            alt="" /></b-col>
      </b-row>

    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" class="bc-3"><b-img class="img-lz" src="../../../img/video2.jpg" fluid
            alt="Responsive image"></b-img></b-col>
        <b-col sm="6" class="bc-3"><b-img class="img-lz img-lz2" src="../../../img/video3.jpg" fluid
            alt="Responsive image"></b-img></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispVideoSolut',

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


.hp {
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
}

.img-icon {
  margin-right: 10px;
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

.bc-3 {
  text-align: center;
}

.img-lz {
  margin: 10px;
  width: 100%;
  height: 100%;
}

.img-jg {
  width: 80%;
}



@media (max-width: 576px) {
  .img-lz2 {
    margin-top: 30px;
  }

  .img-jg {
    width: 100%;
  }
}
</style>




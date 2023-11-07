<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/finance.jpg" fluid alt="Responsive image" style="width: 100%; max-height: 350px;;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h3>金融解决方案</h3>
      <p>安全、放心加速体验</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row" style="background-color:#0f4682; color: #fff; ">
      <b-row>
        <b-col>
          <p class="hp">
            满足资本市场和客户迅速变化的需求为目标， 以安全、
            快速、准确的数据传输和发布能力为前提，
            以海量的数据处理能力为核心，网上银行、手机支付、信用卡商城、移动证券、P2P网贷等新兴金融
            类应用的发展，网络的高可用性和高安全性成为其基础保障
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game1.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title">更安全</div>
            <div class="conten">
              <p>对金融数据安全保密</p>
              <p>为了防止数据安全性提供多种加密方式，预防攻击</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game2.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title">多备份</div>
            <div class="conten">
              <p>对数据多机房备份</p>
              <p>同城异地多份数据镜像，线上线下高速专线同步</p>
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
            <div class="title">可视化</div>
            <div class="conten">
              <p>运营需要及时发现问题</p>
              <p>运维需要在发现问题时第一时间找出问题所在环节进行修正</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game4.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title">高扩容</div>
            <div class="conten">
              <p>应对用户高增长</p>
              <p>根据业务变动灵活扩容，提供解决方式，定制化需求</p>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-2">
          <h1>客户价值</h1>
          <div class="title">分布式智能调度</div>
          <div class="content">
            <div>全网节点覆盖，智能路由调度</div>
            <div>支持静态缓存，动态加速，智能分离</div>
            <div>
              支持多种备份与镜像方式，支持异地备份，可通过高速专线实现远程灾备
            </div>
            <div>支持高并发流量，充足带宽储备，应对突发骤增</div>
            <div>支持HTTPS加密传输，有效应对攻击、篡改</div>
            <div>支持数据分析，快速排除故障，助力运营商开拓业务</div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-2"><img class="img-jg" src="../../../img/finance66.png" style="margin: 31px 0 31px 0px"
            alt="" /></b-col>
      </b-row>

    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" class="bc-3"><b-img class="img-lz" src="../../../img/finance2.jpg" fluid
            alt="Responsive image"></b-img></b-col>
        <b-col sm="6" class="bc-3"><b-img class="img-lz img-lz2" src="../../../img/finance3.jpg" fluid
            alt="Responsive image"></b-img></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispFinanceSolut',

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
  background-color: rgba(0, 0, 0, 0);
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

  .img-lz2 {
    margin-top: 30px;
  }

  .img-jg {
    width: 100%;
  }

  .image-overlay {
    top: -60px;
  }
}
</style>





AsiaispFinanceSolut
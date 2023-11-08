<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/online.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;;min-height: 200px;"></b-img>
    <div class="image-overlay">
      <h>电商解决方案</h>
      <p>购物、品质加速体验</p>
    </div>

    <!-- 内容 -->
    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col>
          <p class="hp">电商平台的加载时间每延迟100毫秒，转化率相应下降7%，页面加载超过3秒，53%的移动网站访问者就会退出，而对于“大促”频频的跨境电商而言，提升消费体验成为当务之急
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game1.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">安全性</div>
            <div class="conten">
              <p>隐藏服务器</p>
              <p>提高安全性，大大减少了被黑客和病毒攻击的可能</p>
            </div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-1">
          <div>
            <img class="img-icon" src="../../../img/game2.png" width="30px" alt="" />
          </div>
          <div>
            <div class="title-3">高并发</div>
            <div class="conten">
              <p>日常用户访问</p>
              <p>扩展性强，网站无需为用户的突发流量而购置平时不必要的设备</p>
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
            <div class="title-3">可靠性</div>
            <div class="conten">
              <p>异地备源</p>
              <p>多地部署，永不宕机，局部节点出现故障不影响用户访问</p>
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
              <p>全站加速减少跳出率</p>
              <p>利于客户浏览网站，增加收入转化率和销售量</p>
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
            <div>支持全站加速，动静智能分离，图片处理压缩</div>
            <div>支持数据冗余灾备，防盗链，WAF</div>
            <div>支持高并发流量，充足带宽储备，应对突发骤增</div>
            <div>支持HTTPS加密传输，有效应对攻击、篡改</div>
            <div>支持数据分析，快速排除故障，助力运营商开拓业务</div>
          </div>
        </b-col>
        <b-col sm="6" class="bc-2"><img class="img-jg" src="../../../img/online66.png" style="margin: 31px 0 31px 0px"
            alt="" /></b-col>
      </b-row>

    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" class="bc-3"><b-img class="img-lz" src="../../../img/online2.jpg" fluid
            alt="Responsive image"></b-img></b-col>
        <b-col sm="6" class="bc-3"><b-img class="img-lz img-lz2" src="../../../img/online3.jpg" fluid
            alt="Responsive image"></b-img></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispOnlineSolut',

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
}</style>


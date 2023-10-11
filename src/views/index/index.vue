<template>
  <div>
    <!-- 轮播图 -->
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" controls fade indicators img-width="1024"
      img-height="480">
      <b-carousel-slide>
        <template #img>
          <div class="image-container">
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../../img/lunbo1.jpg" alt="image slot">
            <div class="image-text">
              <p>欢迎加入</p>
              <p>我们将不遗余力地为您打造优质全球加速体验，成就高品质服务</p>
            </div>
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div class="image-container">
            <img src="../../img/lunbo2.jpg" alt="image">
          </div>
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div class="image-container">
            <img src="../../img/lunbo3.jpg" alt="image">
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
    <!-- 内容 -->
    <b-container class="bv-example-row">
      <b-row class="br-1">
        <b-col class="bc-1">
          <b-img class="img-tb" src="../../img/diqiu.png" ></b-img>
          <span class="sp-1">橙域 融合CDN</span>
        </b-col>
        <b-col class="bc-1">
          <b-img class="img-tb" src="../../img/zhineng.png" ></b-img>
          <span class="sp-1">橙域 智能调度</span>
        </b-col>
        <b-col class="bc-1">
          <b-img class="img-tb" src="../../img/yuanzhu.png" ></b-img>
          <span class="sp-1">橙域 数据中心</span>
        </b-col>
      </b-row>

      <b-row class="bvtext">
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
      </b-row>
      <b-row class="bvtext">
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
      </b-row>
      <b-row class="bvtext">
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
      </b-row>
      <!-- 解决方案 -->
      <div>
        <b-tabs content-class="mt-3" justified>
          <b-tab title="游戏解决方案" active>
            <p>I'm the first tab</p>
          </b-tab>
          <b-tab title="电商解决方案">
            <p>I'm the second tab</p>
          </b-tab>
          <b-tab title="视频解决方案">
            <p>I'm the tab with the very, very long title</p>
          </b-tab>
          <b-tab title="金融解决方案">
            <p>I'm a disabled tab!</p>
          </b-tab>
          <b-tab title="AWS迁移方案">
            <p>I'm a disabled tab!</p>
          </b-tab>
        </b-tabs>
      </div>
      <!-- 产品优势 -->
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="6">col-sm1</b-col>
          <b-col sm="6">col-sm2</b-col>
          <b-col sm="6">col-sm3</b-col>
          <b-col sm="6">col-sm4</b-col>
          <b-col sm="6">col-sm5</b-col>
          <b-col sm="6">col-sm6</b-col>
          <b-col sm="6">col-sm7</b-col>
          <b-col sm="6">col-sm8</b-col>
        </b-row>
      </b-container>
      <!-- 数据中心 -->
      <b-row>
        <b-col md="12">数据中心</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AsiaispIndex',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.lunbo {
  height: 400px;
}

.image-text {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
}

.bvtext {
  text-align: center;
}

.image-container {
  width: 100%;
  padding-top: 40%;
  /* 16:9 宽高比 */
  position: relative;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-tb{
  width: 10%;
}
.br-1{
  padding: 2% 0;
  background-color: #323030;
}
.bc-1{
  display: flex;
  justify-content: center;
  align-items: center;
}
.sp-1{
  margin-left: 5%;
}

</style>
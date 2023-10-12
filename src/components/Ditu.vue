<template>
  <div>
    <section class="section-6">
      <h1></h1>
      <div class="content">
        <router-link to="/nodeDistr">查看更多节点</router-link>
      </div>
      <div class="buttonGroup">
        <button style="outline: none" class="btn btn-default" id="worldBtn" @click="showWorldMap">
          全球
        </button>
        <button style="outline: none" class="btn btn-default" id="countryBtn" @click="showCountryMap">
          国内
        </button>
        <button style="outline: none" class="btn btn-default" id="lineBtn" @click="showLineMap">
          专线
        </button>
      </div>

      <div id="worldMap" class="world map" v-show="isWorldMapShown">
        <img src="../img/ditu.png" alt="" />
        <div class="one" title="美国">
          <p></p>
          <span></span>
        </div>
        <div class="two" title="加拿大">
          <p></p>
          <span></span>
        </div>
        <div class="three" title="墨西哥">
          <p></p>
          <span></span>
        </div>

        <div class="four" title="德国">
          <p></p>
          <span></span>
        </div>

        <div class="five" title="比利时">
          <p></p>
          <span></span>
        </div>

        <div class="six" title="法国">
          <p></p>
          <span></span>
        </div>

        <div class="seven" title="意大利">
          <p></p>
          <span></span>
        </div>

        <div class="eight" title="俄罗斯">
          <p></p>
          <span></span>
        </div>

        <div class="nine" title="罗马尼亚">
          <p></p>
          <span></span>
        </div>

        <div class="ten" title="爱尔兰">
          <p></p>
          <span></span>
        </div>

        <div class="ten1" title="芬兰">
          <p></p>
          <span></span>
        </div>

        <div class="ten2" title="塞尔维亚">
          <p></p>
          <span></span>
        </div>
      </div>
      <div id="countryMap" class="countryMap map" v-show="isCountryMapShown">
        <img src="../img/ditu.png" alt="" />
        <div class="cone" title="上海">
          <p></p>
          <span></span>
        </div>
        <div class="ctwo" title="北京">
          <p></p>
          <span></span>
        </div>
        <div class="cthree" title="广州">
          <p></p>
          <span></span>
        </div>
        <div class="ceight" title="成都">
          <p></p>
          <span></span>
        </div>
        <div class="cnine" title="青海">
          <p></p>
          <span></span>
        </div>
      </div>
      <div id="lineMap" class="lineMap map" v-show="isLineMapShown">
        <img src="../img/ditu.png" alt="" />
        <div class="zone" title="美国">
          <p></p>
          <span></span>
        </div>
        <div class="ztwo" title="加拿大">
          <p></p>
          <span></span>
        </div>
        <div class="zthree" title="墨西哥">
          <p></p>
          <span></span>
        </div>

        <div class="zfour" title="德国">
          <p></p>
          <span></span>
        </div>

        <div class="zfive" title="比利时">
          <p></p>
          <span></span>
        </div>

        <div class="zsix" title="法国">
          <p></p>
          <span></span>
        </div>

        <div class="zseven" title="意大利">
          <p></p>
          <span></span>
        </div>

        <div class="zeight" title="俄罗斯">
          <p></p>
          <span></span>
        </div>

        <div class="znine" title="罗马尼亚">
          <p></p>
          <span></span>
        </div>

        <div class="zten" title="爱尔兰">
          <p></p>
          <span></span>
        </div>

        <div class="zeleven" title="芬兰">
          <p></p>
          <span></span>
        </div>

        <div class="ztwelve" title="塞尔维亚">
          <p></p>
          <span></span>
        </div>
        <div class="zthirteen" title="台湾">
          <p></p>
          <span></span>
        </div>
        <div class="zfourteen" title="香港">
          <p></p>
          <span></span>
        </div>
        <div class="zsixteen" title="蒙古">
          <p></p>
          <span></span>
        </div>
        <div class="zseventeen" title="韩国">
          <p></p>
          <span></span>
        </div>
        <div class="zeighteen" title="日本">
          <p></p>
          <span></span>
        </div>
        <div class="znineteen" title="巴西">
          <p></p>
          <span></span>
        </div>
        <div class="zfiveteen" title="埃及">
          <p></p>
          <span></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AsiaIspOfficialWebsiteDitu',

  data () {
    return {
      isWorldMapShown: false,
      isCountryMapShown: true,
      isLineMapShown: false
    };
  },

  mounted () {

  },

  methods: {
    showWorldMap: function () {
      this.isWorldMapShown = true;
      this.isCountryMapShown = false;
      this.isLineMapShown = false;
    },
    showCountryMap: function () {
      this.isWorldMapShown = false;
      this.isCountryMapShown = true;
      this.isLineMapShown = false;
      console.log(this.isWorldMapShown,this.isCountryMapShown,this.isLineMapShown);
    },
    showLineMap: function () {
      this.isWorldMapShown = false;
      this.isCountryMapShown = false;
      this.isLineMapShown = true;
      console.log(this.isWorldMapShown,this.isCountryMapShown,this.isLineMapShown);
    }
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 480px) {
  .section-6 .buttonGroup {
    position: absolute;
    bottom: 0%;
    left: 0%;
  }

  .section-6 .content {
    bottom: 0%;
    right: 0%;
  }
}

.section-6 {
  background: #f5f5f6;
  padding: 24px 0 20px 0;
  position: relative;
}

.section-6 h1 {
  margin: 0 auto;
  width: 300px;
}

.section-6 a {
  text-decoration: none;
  color: #000;
}

.section-6 .map {
  /* display: flex;
    justify-content: center;
    align-items: center; */
  text-align: center;
  margin-top: 10px;
}

.section-6 .map img {
  width: 70%;
  margin-bottom: 25px;
  margin-left: 14%\0;
}

.section-6 .map div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
}

.section-6 .content {
  position: absolute;
  background: transparent;
  bottom: 9%;
  right: 14%;
}

.section-6 .buttonGroup {
  position: absolute;
  bottom: 9%;
  left: 14%;
}

.section-6 .content div {
  background: transparent;
  width: 320px;
}

.section-6 .content div:first-child {
  background: #fff;
  border: 1px solid #000;
  width: 156px;
  height: 34px;
  border-radius: 16px;
  padding: 0 32px;
  cursor: pointer;
  line-height: 33px;
}

.section-6 .content div:nth-child(2) {
  background: transparent;
  width: 400px;
  height: 46px;
  margin: 20px 0;
  font-size: 17px;
  font-weight: 600;
}

.section-6 .btnMap button {
  width: 54px;
  height: 25px;
  border-radius: 5px;
}

/* <button style="outline:none" class="right-btn login">登录</button>
<button style="outline:none" class="right-btn register">注册</button> */
.section-6 .map p {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: myfirst 2s infinite;
}

.section-6 .map span {
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: myfirst 2s infinite;
  animation-delay: 0.5s;
}

.section-6 .world p,
.section-6 .world span {
  box-shadow: 0 0 1px #009fd9;
}

.section-6 .world div {
  background: #009fd9;
}

.section-6 .countryMap p,
.section-6 .countryMap span {
  box-shadow: 0 0 1px #ff9900;
}

.section-6 .countryMap div {
  background: #ff9900;
}

.section-6 .lineMap p,
.section-6 .lineMap span {
  box-shadow: 0 0 1px #4caf50;
}

.section-6 .lineMap div {
  background: #4caf50;
}

/**************************************世界地图*************************************/
.section-6 .map .one {
  position: absolute;
  left: 27%;
  top: 33%;
}

.section-6 .map .two {
  position: absolute;
  left: 25%;
  top: 25%;
}

.section-6 .map .three {
  position: absolute;
  left: 26%;
  top: 42%;
}

.section-6 .map .four {
  position: absolute;
  left: 53%;
  top: 30%;
}

.section-6 .map .five {
  position: absolute;
  left: 52%;
  top: 28%;
}

.section-6 .map .six {
  position: absolute;
  left: 51%;
  top: 33%;
}

.section-6 .map .seven {
  position: absolute;
  left: 52%;
  top: 35%;
}

.section-6 .map .eight {
  /* 俄罗斯 */
  position: absolute;
  left: 74%;
  top: 23%;
}

.section-6 .map .nine {
  position: absolute;
  left: 49%;
  top: 30%;
}

.section-6 .map .ten {
  position: absolute;
  left: 47%;
  top: 25%;
}

.section-6 .map .ten1 {
  position: absolute;
  left: 54%;
  top: 21%;
}

.section-6 .map .ten2 {
  position: absolute;
  left: 55%;
  top: 36%;
}

/**************************************国内地图*************************************/
.section-6 .map .cone {
  position: absolute;
  left: 69%;
  top: 33%;
}

.section-6 .map .ctwo {
  position: absolute;
  left: 71%;
  top: 30%;
}

.section-6 .map .cthree {
  position: absolute;
  left: 69%;
  top: 42%;
}

.section-6 .map .cfour {
  position: absolute;
  left: 67%;
  top: 30%;
}

.section-6 .map .cfive {
  position: absolute;
  left: 69%;
  top: 32%;
}

.section-6 .map .csix {
  position: absolute;
  left: 63%;
  top: 33%;
}

.section-6 .map .cseven {
  position: absolute;
  left: 59%;
  top: 35%;
}

.section-6 .map .ceight {
  /* 俄罗斯 */
  position: absolute;
  left: 65%;
  top: 37%;
}

.section-6 .map .cnine {
  position: absolute;
  left: 62%;
  top: 36%;
}

/* .section-6 .map .cten {
    position: absolute;
    left: 36%;
    top: 80%;
} */
/**********************************************专线*************************************************/
.section-6 .map .zone {
  position: absolute;
  left: 27%;
  top: 33%;
}

.section-6 .map .ztwo {
  position: absolute;
  left: 25%;
  top: 25%;
}

.section-6 .map .zthree {
  position: absolute;
  left: 26%;
  top: 42%;
}

.section-6 .map .zfour {
  position: absolute;
  left: 53%;
  top: 30%;
}

.section-6 .map .zfive {
  position: absolute;
  left: 52%;
  top: 28%;
}

.section-6 .map .zsix {
  position: absolute;
  left: 51%;
  top: 33%;
}

.section-6 .map .zseven {
  position: absolute;
  left: 52%;
  top: 35%;
}

.section-6 .map .zeight {
  /* 俄罗斯 */
  position: absolute;
  left: 74%;
  top: 23%;
}

.section-6 .map .znine {
  position: absolute;
  left: 49%;
  top: 30%;
}

.section-6 .map .zten {
  position: absolute;
  left: 47%;
  top: 25%;
}

.section-6 .map .zeleven {
  position: absolute;
  left: 54%;
  top: 21%;
}

.section-6 .map .ztwelve {
  position: absolute;
  left: 55%;
  top: 36%;
}

.section-6 .map .zthirteen {
  position: absolute;
  left: 71%;
  top: 52%;
}

.section-6 .map .zfourteen {
  position: absolute;
  left: 70%;
  top: 43%;
}

.section-6 .map .zsixteen {
  position: absolute;
  left: 69%;
  top: 20%;
}

.section-6 .map .zseventeen {
  position: absolute;
  left: 72%;
  top: 35%;
}

.section-6 .map .zeighteen {
  position: absolute;
  left: 74%;
  top: 37%;
}

.section-6 .map .znineteen {
  position: absolute;
  left: 36%;
  top: 69%;
}

.section-6 .map .zfiveteen {
  position: absolute;
  left: 51%;
  top: 45%;
}

@keyframes myfirst {
  10% {
    transform: scale(1);
  }
  20% {
    transform: scale(2);
  }

  40% {
    transform: scale(3);
  }

  60% {
    transform: scale(4);
  }

  80% {
    transform: scale(5);
  }

  100% {
    transform: scale(6);
  }
}
</style>
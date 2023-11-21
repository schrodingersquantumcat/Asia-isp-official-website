<template>
  <div>
    <!-- 轮播图 -->
    <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" controls fade indicators img-width="1024"
      img-height="300">
      <b-carousel-slide>
        <template #img>
          <div class="image-container">
            <img class="d-block img-fluid w-100" width="1024" height="480" src="../../img/lunbo1.jpg" alt="image slot">
            <div class="overlay-box"></div>
            <div class="image-text">
              <p class="h-sm h-md h-lg">欢迎加入</p>
              <p class="text-sm text-md text-lg">我们将不遗余力地为您打造优质全球加速体验，成就高品质服务</p>
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
        <b-col sm="4" class="bc-1">
          <b-img class="img-tb" src="../../img/diqiu.png"></b-img>
          <span class="sp-1"><router-link to="/fusionCDN">橙域 融合CDN</router-link></span>
        </b-col>
        <b-col sm="4" class="bc-1">
          <b-img class="img-tb" src="../../img/zhineng.png"></b-img>
          <span class="sp-1"><router-link to="/AWS">橙域 AWS云计算</router-link></span>
        </b-col>
        <b-col sm="4" class="bc-1 bc-13">
          <b-img class="img-tb" src="../../img/yuanzhu.png"></b-img>
          <span class="sp-1"><router-link to="/dataCenter">橙域 跨境专线</router-link></span>
        </b-col>
      </b-row>

      <!-- 资格证书 -->

      <!-- <div class="swiper-list-card swiper-list" style="margin: 0px auto;">
        <div class="swiper-main-card swiper-main"></div>
        <img id="prev-card" class="btn leftBtn" src="../../img/left.png" alt="">
        <img id="next-card" class="btn rightBtn" src="../../img/right.png" alt="">
      </div> -->
      <!-- 介绍 -->
      <!-- <div class="js">
        <b-row class="br-2" style="margin-top: 20px;">
          <b-col sm="6"><img src="../../img/type1.jpg" style="width: 80%;" alt="" /></b-col>
          <b-col sm="6">
            <h1 class="h-sm h-md h-lg">不仅限于融合的智能CDN</h1>
            <span class="text-sm text-md text-lg">
              自研的智能调度算法和APM探测平台数据的结合，提前检测预警并自动切换优质的线路，为客户品质服务保驾护航
            </span>
          </b-col>
        </b-row>
        <b-row class="br-2">
          <b-col sm="6"><img src="../../img/type2.jpg" style="width: 80%;" alt=""></b-col>
          <b-col sm="6">
            <h1 class="h-sm h-md h-lg">定制专属客服的定制服务</h1>
            <span class="text-sm text-md text-lg">
              根据每个客户的使用场景和个性化需求，寻找合适的一站式服务解决方案，简化流程、提高效率，为客户带来安全、信赖、极速的体验
            </span>
          </b-col>
        </b-row>
        <b-row class="br-2">
          <b-col sm="6"><img src="../../img/type3.jpg" style="width: 80%;" alt=""></b-col>
          <b-col sm="6">
            <h1 class="h-sm h-md h-lg">每周7*24小时保障服务、快速响应客户需求</h1>
            <span class="text-sm text-md text-lg">
              保障每个客户的服务品质，确保第一时间响应并反馈，在极短的时间内处理解决故障，实时监控每个客户的健康状态
            </span>
          </b-col>
        </b-row>
      </div> -->

      <!-- 解决方案 -->
      <div class="fa">
        <b-tabs content-class="mt-3" justified>
          <b-tab title="游戏解决方案" active class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img class="fa-img" src="../../img/solve1.png" style="width: 80%;"
                  alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd ">游戏解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为游戏行业提供一系列解决方案，涵盖开发、运维、运营等领域和场景。
                  针对不同类型的游戏提供灵活而稳定的部署方案，助您轻松应对玩家激增、高并发、海量访问等带来的问题；
                  为游戏的各种应用场景提供游戏生态服务解决方案，如游戏场景的开发组件、游戏安全、游戏加速、全球互联互通等，
                  让您的游戏更稳定、更安全、更好玩。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="电商解决方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img class="fa-img" src="../../img/dianshang.jpg" style="width: 80%;"
                  alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">电商解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电子商务网站是有海量的商品信息、图片、网站样式等静态资源组成，
                  海外网络环境的好坏将直接影响网站的加载速度，支付功能上还需要通过全球数据安全标准认证，
                  并在网络安全传输上进行加密传输，海外CDN打通用户最后一公里。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="视频解决方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img class="fa-img" src="../../img/shipin.jpg" style="width: 80%;"
                  alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">视频解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;移动互联网的发展，越来越多的人用手机刷视频、抖音、各种动图，解决移动网络的不稳定性，
                  波动较大，上传链路智能优化、分片上传和断点续传、视频存储、转码处理、分发播放等一系列一体化技术。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="金融解决方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img class="fa-img" src="../../img/jinrong.jpg" style="width: 80%;"
                  alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">金融解决方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金融行业对互联网技术是非常严格的，这对互联网的稳定性和可靠性提出了较高的要求。
                  同时，业务的持续性和安全性越来越依赖于互联网的健壮性、安全性、性能等来保证。当网络出现情况时，
                  需要及时有效的处理，保障业务持续稳定性。
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="AWS迁移方案" class="sl-tb">
            <b-row class="br-3">
              <b-col sm="4" class="bc-3"><img class="fa-img" src="../../img/aws-ques.jpg" style="width: 80%;"
                  alt="" /></b-col>
              <b-col sm="8" class="bc-3">
                <h1 class="h-sm h-md h-lg h-pd">AWS迁移方案</h1>
                <span class="textsl-sm textsl-md textsl-lg">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazon Web Services 提供专门构建的服务、可立即部署的软件包以及带有指导信息的可定制架构，以快速解决业务挑战。解决方案由 AWS 和 AWS 合作伙伴构建，旨在解决特定行业、跨行业和技术用例。
                  Benefits：专为满足您的需求而设计；由专家建造和维护；精心策划以加快发现速度；加速实现价值。
                </span>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>
      <!-- 产品优势 -->
      <b-container class="bv-example-row cp">
        <b-row>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/diannao.png"
                alt="" /></div>
            <p class="cp-p">优胜劣汰，只和值得的厂商合作</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px;" src="../../img/zhilupai.png"
                alt="" /></div>
            <p class="cp-p">精细化的链路控制、智能的调度、实时的分析</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/shezhi.png"
                alt="" /></div>
            <p class="cp-p">私人订制，使用与客户的服务架构</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/suo.png"
                alt="" /></div>
            <p class="cp-p">可用性>=99.99%、耐久性》=99.99999999999%</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/jiagou.png"
                alt="" /></div>
            <p class="cp-p"> 覆盖至中小运营商，力争最后一公里</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/bianji.png"
                alt="" /></div>
            <p class="cp-p">便捷自助服务后台，支持Restul API</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/zhengfangti.png"
                alt="" /></div>
            <p class="cp-p">实时网络探测、提前预知风险、全局可控</p>
          </b-col>
          <b-col sm="6" class="flexbox">
            <div><img class="cp-img" height="45px" width="45px" style="margin-right: 18px" src="../../img/renqun.png"
                alt="" /></div>
            <p class="cp-p">全球7*24小时不间断专业技术支持保障</p>
          </b-col>
        </b-row>
      </b-container>
      <!-- 数据中心 -->
      <div class="datacenter">
        <h4>基础数据中心</h4>
      </div>
      <Ditu />
    </b-container>
  </div>
</template>
<script>
import Ditu from '../../components/Ditu.vue'
export default {
  name: 'AsiaispIndex',
  components: {
    Ditu
  },
  data () {
    return {

    }
  },
  methods: {
    // swiperInit () {

    //   /**
    //   * obj: 
    //   * imgArr 图片数组
    //   * imgWidth 图片宽度
    //   * aniTime 动画切换时间
    //   * intervalTime 停留的时间
    //   * scale 图片缩放
    //   * autoplay 是否自动播放
    //   * gap 图片之间间隔
    //   */
    //   function Swiper (obj) {
    //     this.imgArr = obj.imgArr || [];
    //     this.scale = obj.scale || 0.8; // 图片缩放值
    //     this.gap = obj.gap; // 图片未缩放状态下图片之间的间隔

    //     // 移动端
    //     if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //       this.containerWidth = window.innerWidth - 20; // 轮播图盒子宽度
    //     } else {
    //       // PC端
    //       this.containerWidth = 1200; // 轮播图盒子宽度
    //     }
    //     this.imgWidth = obj.imgWidth; // 图片宽度
    //     this.aniTime = obj.aniTime || 500;
    //     this.intervalTime = this.aniTime + obj.intervalTime || 2000;
    //     this.nowIndex = 3;
    //     this.imgDoms = document.getElementsByClassName('swiper-slide' + obj.clsSuffix);
    //     this.mainDom = document.getElementsByClassName('swiper-main' + obj.clsSuffix)[0];
    //     this.listDoms = document.getElementsByClassName('swiper-list' + obj.clsSuffix)[0];
    //     this.activeDom = this.imgDoms[0];
    //     this.autoplay = obj.autoplay;

    //     this.listDoms.style.width = `${this.containerWidth}px`;

    //     this.timer; // 自动播放的定时器
    //     this.prev = Date.now();

    //     this.diffLen = (this.containerWidth - this.imgWidth - (this.gap * 2)) / 2;
    //     this.clsSuffix = obj.clsSuffix
    //   }

    //   Swiper.prototype = {
    //     init: function () {
    //       this.eventBind();

    //       let resImgArr;
    //       if (this.imgArr.length > 2) {
    //         resImgArr = [this.imgArr[this.imgArr.length - 2], this.imgArr[this.imgArr.length - 1], ...this.imgArr, this.imgArr[0], this.imgArr[1]];
    //         this.mainDom.style.left = `${-(2 * this.imgWidth + this.gap - this.diffLen)}px`;
    //         this.mainDom.style.width = `${(this.imgArr.length + 2) * (this.imgWidth + (this.gap / 2))}px`;
    //       } else {
    //         this.nowIndex = 0;
    //         resImgArr = [...this.imgArr];
    //       }
    //       let str = '';
    //       resImgArr.forEach((item, index) => {
    //         str += `<a href="${resImgArr[index].url}"><img class="swiper-slide${this.clsSuffix}" style="width: ${this.imgWidth}px;" src="${resImgArr[index].imgPath}" /></a>`;
    //       });
    //       this.mainDom.innerHTML = str;
    //       this.setScale();
    //       if (this.autoplay) {
    //         this.timer = setInterval(this.nextSlider.bind(this, this.aniTime), this.intervalTime);
    //       }
    //     },
    //     setScale: function () {
    //       // 堆叠式
    //       if (this.gap < 0) {

    //         for (let i = 0; i < this.imgDoms.length; i++) {
    //           if (this.imgArr.length === 2) {
    //             this.imgDoms[0].style.left = `${(this.containerWidth / 4) - (this.imgWidth / 2)}px`;
    //             this.imgDoms[1].style.left = `${(this.containerWidth / 4) * 3 - (this.imgWidth / 2)}px`;
    //           } else if (this.imgArr.length === 1) {
    //             this.imgDoms[i].style.left = `${(this.containerWidth / 2) - (this.imgWidth / 2)}px`;
    //           } else {
    //             this.imgDoms[i].style.left = `${(i - 1) * (this.imgWidth + this.gap)}px`;
    //           }


    //           if (i === this.nowIndex) {
    //             this.imgDoms[i].style.transform = 'scale(1)';
    //             this.imgDoms[i].style.zIndex = '1001';
    //           } else if (i < this.nowIndex) {
    //             this.imgDoms[i].style.transform = `scale(${1 - ((this.nowIndex - i) * 0.2)})`;
    //             this.imgDoms[i].style.zIndex = 1000 - ((this.nowIndex - i));
    //           } else if (i > this.nowIndex) {
    //             this.imgDoms[i].style.transform = `scale(${1 - ((i - this.nowIndex) * 0.2)})`;
    //             this.imgDoms[i].style.zIndex = 1000 - (i - this.nowIndex);
    //           }
    //         }
    //       } else {
    //         // 卡片式
    //         for (let i = 0; i < this.imgDoms.length; i++) {
    //           if (this.imgArr.length === 2) {
    //             this.imgDoms[0].style.left = `${(this.containerWidth / 4) - (this.imgWidth / 2)}px`;
    //             this.imgDoms[1].style.left = `${(this.containerWidth / 4) * 3 - (this.imgWidth / 2)}px`;
    //           } else if (this.imgArr.length === 1) {
    //             this.imgDoms[i].style.left = `${(this.containerWidth / 2) - (this.imgWidth / 2)}px`;
    //           } else {
    //             this.imgDoms[i].style.left = `${(i - 1) * (this.imgWidth + this.gap)}px`;
    //           }
    //           if (i === this.nowIndex) {
    //             this.imgDoms[i].style.transform = 'scale(1)';
    //           } else {
    //             this.imgDoms[i].style.transform = `scale(${this.scale})`;
    //           }
    //         }
    //       }
    //     },
    //     prevSlider: function (aniTime) {
    //       if (this.imgArr.length === 2) {
    //         this.nowIndex = this.nowIndex ? 0 : 1;
    //         this.setScale()
    //       } else if (this.imgArr.length === 1) {
    //         return;
    //       } else {
    //         this.nowIndex--;
    //         this.mainDom.style.transition = `left ${aniTime / 1000}s`
    //         this.mainDom.style.left = `${parseInt(this.mainDom.style.left) + (this.gap + this.imgWidth)}px`;
    //         if (this.nowIndex === 1) {
    //           this.setScale()
    //           setTimeout(function () {
    //             this.nowIndex = (this.imgArr.length + 1);
    //             this.setScale()
    //             this.mainDom.style.transitionProperty = 'none';
    //             this.mainDom.style.left = `${-(parseInt(this.imgDoms[this.nowIndex].style.left) - this.diffLen - this.gap)}px`;
    //           }.bind(this), aniTime)
    //         } else {
    //           this.setScale()
    //         }
    //       }
    //     },
    //     nextSlider: function (aniTime) {
    //       if (this.imgArr.length === 2) {
    //         this.nowIndex = this.nowIndex ? 0 : 1;
    //         this.setScale()
    //       } else if (this.imgArr.length === 1) {
    //         return;
    //       } else {
    //         if (this.nowIndex >= 2) {
    //           this.mainDom.style.transition = `left ${aniTime / 1000}s`
    //           this.mainDom.style.left = `${parseInt(this.mainDom.style.left) - (this.gap + this.imgWidth)}px`;
    //           // this.mainDom.style.left = `${this.gap + this.imgWidth}px`;
    //         }
    //         if (this.nowIndex === (this.imgArr.length + 1)) {
    //           this.nowIndex = (this.imgArr.length + 2);
    //           this.setScale()
    //           setTimeout(function () {
    //             this.nowIndex = 2;
    //             this.setScale()
    //             this.mainDom.style.transitionProperty = 'none';
    //             this.mainDom.style.left = `${-(this.imgWidth - this.diffLen)}px`;
    //           }.bind(this), aniTime)
    //         } else {
    //           this.nowIndex++;
    //           this.setScale()
    //         }
    //       }
    //     },
    //     eventBind: function () {
    //       let that = this;

    //       document.getElementById('next' + this.clsSuffix).onmouseover = function () {
    //         clearInterval(that.timer);
    //       }
    //       document.getElementById('next' + this.clsSuffix).onmouseout = function () {
    //         that.timer = setInterval(that.nextSlider.bind(that, that.aniTime), that.intervalTime);
    //       }
    //       document.getElementById('next' + this.clsSuffix).onclick = function () {
    //         that.throttle(that.nextSlider, 300, 300);
    //       }


    //       document.getElementById('prev' + this.clsSuffix).onmouseover = function () {
    //         clearInterval(that.timer);
    //       }
    //       document.getElementById('prev' + this.clsSuffix).onmouseout = function () {
    //         that.timer = setInterval(that.nextSlider.bind(that, that.aniTime), that.intervalTime);
    //       }
    //       document.getElementById('prev' + this.clsSuffix).onclick = function () {
    //         that.throttle(that.prevSlider, 300, 300);
    //       }

    //       this.mainDom.addEventListener('touchstart', function (e) {
    //         clearInterval(that.timer);
    //         that.startX = e.changedTouches[0].clientX;
    //         that.startY = e.changedTouches[0].clientY;
    //       })
    //       this.mainDom.addEventListener('touchmove', function (e) {
    //         clearInterval(that.timer);
    //         that.endX = e.changedTouches[0].clientX;
    //         that.endY = e.changedTouches[0].clientY;
    //       })
    //       this.mainDom.addEventListener('touchend', function () {
    //         if (!that.mainDom.style.transition) {
    //           that.mainDom.style.transition = `left ${that.aniTime / 1000}s`
    //         }
    //         let angle = that.angle({ X: that.startX, Y: that.startY }, { X: that.endX, Y: that.endY });
    //         if (Math.abs(angle) > 30) return;
    //         if (that.endX > that.startX) { // 右滑
    //           that.prevSlider(that.aniTime);
    //         } else { // 左滑
    //           that.nextSlider(that.aniTime);
    //         }
    //         that.timer = setInterval(that.nextSlider.bind(that, that.aniTime), that.intervalTime);

    //       })
    //     },
    //     // 节流：时间戳版
    //     throttle (handle, delay, val) {
    //       var now = Date.now();
    //       if (now - this.prev >= delay) {
    //         handle.call(this, val);
    //         this.prev = Date.now();
    //       }
    //     },
    //     /**
    //     * 计算滑动角度
    //     * @param {Object} start 起点坐标
    //     * @param {Object} end 终点坐标
    //     */
    //     angle: function (start, end) {
    //       var _X = end.X - start.X,
    //         _Y = end.Y - start.Y
    //       //返回角度 /Math.atan()返回数字的反正切值
    //       return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    //     }
    //   }

    //   let imgArr = [{
    //     url: '#',
    //     imgPath: ''  },
    //   {
    //     url: '#',
    //     imgPath: ''  },
    //   {
    //     url: '#',
    //     imgPath: '' },
    //   {
    //     url: '#',
    //     imgPath: '' },
    //   {
    //     url: '#',
    //     imgPath: ''  },
    //   {
    //     url: '#',
    //     imgPath:'' },
    //   {
    //     url: '#',
    //     imgPath: ''   },
    //   {
    //     url: '#',
    //     imgPath: '' },
    //   {
    //     url: '#',
    //     imgPath: ''  },
    //   {
    //     url: '#',
    //     imgPath: '' }
    //   ];
    //   // let imgArr = ['i.jpg', 'o.jpg', 'q.jpeg'];
    //   // let imgArr = ['i.jpg', 'o.jpg'];
    //   // let imgArr = ['i.jpg'];
    //   new Swiper({
    //     imgArr: imgArr,
    //     imgWidth: 320,
    //     aniTime: 1000,
    //     intervalTime: 1500,
    //     scale: 0.8,
    //     autoplay: false,
    //     gap: 0,
    //     clsSuffix: '-card'
    //   }).init();


    //   new Swiper({
    //     imgArr: imgArr,
    //     imgWidth: 320,
    //     aniTime: 1000,
    //     intervalTime: 1500,
    //     scale: 0.8,
    //     autoplay: false,
    //     gap: -200,
    //     clsSuffix: '-stack'
    //   }).init();
    // }
  },
  mounted () {
    // this.swiperInit();
  },

}
</script>

<style lang="scss" scoped>
// 资质轮播
.swiper-list {
  height: 200px;
  position: relative;
  overflow: hidden;
  border: 1px solid #eee;
  padding: 30px 0;
}

.swiper-main {
  height: 100%;
  position: relative;
}

.swiper-main img {
  height: 100%;
  display: block;
  position: absolute;
  top: 0px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  z-index: 1002;
}

.leftBtn {
  left: 0px;
}

.rightBtn {
  right: 0px;
}


// 轮播图
.lunbo {
  height: 400px;
}

.image-container {
  position: relative;
}

.overlay-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* 设置半透明的灰色 */
}

.image-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  text-align: center;
}

// .br-2 {
//   text-align: center;
//   margin-top: 10px;
//   margin-bottom: 40px;
// }

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

.img-tb {
  width: 10%;
}

.br-1 {
  background-color: #323030;
}

.bc-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5%;
  border-right: 1px solid white;
}

.bc-13 {
  border: 0;
}

.sp-1 {
  margin-left: 5%;
  color: white;
}

.container,
.container-sm,
.container-md,
.container-lg {
  max-width: 100%;
  padding: 15px;
}

a {
  color: #fff;
}

.sl-tb {
  padding: 20px 0;
  background-color: #101010;
  color: white;
}

.br-3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bc-3 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

// .js {
//   margin: 50px 0;
// }

.fa {
  margin: 50px 0;
}

.cp {
  margin: 50px 0;
}

.cp-img {
  flex-grow: 1;
  width: 45px;
  height: 45px;
}

.cp-p {
  flex-grow: 6;
}

span {
  margin: 20px;
}

.h-pd {
  padding: 0 20px;
}

/* 在大屏幕上使用大号字体 */
@media (min-width: 1200px) {
  .text-lg {
    font-size: 24px;
  }

  .textsl-lg {
    font-size: 18px;
  }

  .h-lg {
    font-size: 26px;
  }

  .flexbox {
    padding: 0 100px;
  }
}

/* 在中等屏幕上使用中号字体 */
@media (min-width: 992px) and (max-width: 1199px) {
  .text-md {
    font-size: 20px;
  }

  .textsl-md {
    font-size: 16px;
  }

  .h-md {
    font-size: 22px;
  }

  .flexbox {
    padding: 0 50px;
  }
}

.datacenter {
  text-align: center;
  margin-top: 30px;
}

/* 在小屏幕上使用小号字体 */
@media (max-width: 991px) {
  .text-sm {
    font-size: 16px;
  }

  .textsl-sm {
    font-size: 14px;
  }

  .h-sm {
    font-size: 18px;
  }
}

@media (max-width: 576px) {
  .bc-1 {
    border-bottom: 1px solid white;
  }
}
</style>
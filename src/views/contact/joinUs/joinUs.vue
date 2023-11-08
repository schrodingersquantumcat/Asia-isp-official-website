<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/dangao.jpg" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;min-height: 200px;"></b-img>

    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col class="title">
          <h>福利待遇</h>
        </b-col>
      </b-row>
      <b-row class="br-2">
        <b-col><img src="../../../img/dangao.jpg" height="200px" alt="">
        </b-col>
        <b-col>
          <div class="title-2">节日祝福</div>
          <p class="">每月生日礼品、举办生日party。精心准备蛋糕和水果，感受大家庭般温馨</p>
          <p class="">年节礼品，春节、36女神节、端午节、中秋节、元宵节等福利</p>
        </b-col>
      </b-row>
      <b-row class="br-2">
        <b-col>
          <div class="title-2">健康体检</div>
          <p class="">年度体检，常规体检等健康关怀</p>
          <p class="">弹性值得工作时间，加班劳累之余，充分休息</p>
        </b-col>
        <b-col> <img src="../../../img/tijian.jpg" height="200px" alt="">
        </b-col>
      </b-row>
      <b-row class="br-2">
        <b-col><img src="../../../img/jiaqi.jpg" height="200px" alt="">
        </b-col>
        <b-col>
          <div class="title-2">悠长假期</div>
          <p class="">公司国内外团队旅游，开拓视野、凝心聚力</p>
          <p class="">法定年假，公司年假，带薪病假</p>
        </b-col>
      </b-row>
      <b-row class="br-2">
        <b-col>
          <div class="title-2">聚餐团建</div>
          <p class="">公司定期聚餐，畅所欲言的同时感受不一样的吃喝文化</p>
          <p class="">小活动拓展活动，强健体魄，增强凝聚力，增进感情</p>
        </b-col>
        <b-col><img src="../../../img/tuanjian.jpg" height="200px" alt="">
        </b-col>
      </b-row>
      <b-row>
        <b-col class="title">
          <h>岗位列表</h>
        </b-col>
      </b-row>
      <!-- <b-row>
        <b-col md="12" class="bc-3">
          <div class="bc-gw">岗位</div>
          <div class="bc-dd">地点</div>
          <div class="bc-sj">时间</div>
          <div class="bc-xq">详情</div>

        </b-col>
        <b-col md="12" class="bc-3">
          <div class="bc-gw">c语言开发工程师</div>
          <div class="bc-dd">地点</div>
          <div class="bc-sj">时间</div>
          <div class="bc-xq">
            <div class="text-center">
              <b-button id="popover-button-variant" href="#" tabindex="0">详情</b-button>
              <b-popover custom-class="my-popover-class" target="popover-button-variant" triggers="focus">
                <template #title>c语言开发工程师</template>
                <h5>岗位职责</h5>
                <p>1. 负责跨平台网络协议及相关应用开发和优化；</p>
                <p>2. 负责开发技术选型、框架搭建、关键或复杂组件的编程实现；</p>
                <p>3. 负责软件系统核心功能的代码实现；</p>
                <h5>岗位要求</h5>
                <p>1、在C语言开发岗位至少有三年工作经验。</p>
                <p>2、深入理解IP、TCP、UDP、HTTP、DNS等网络协议；</p>
                <p>3、熟悉nginx开发；</p>
                <p>4、熟悉常用算法和数据结构，熟悉协程或多线程编程技术；</p>
                <p>5、有RTC、QUIC等新型网络协议开发经验者优先；</p>
                <p>6、有分布式系统负载均衡的经验优先；</p>
                <p>7、善于学习新的知识，动手能力强，勇于接受挑战；</p>
                <p>8、良好的团队合作精神，较强的沟通能力；</p>
              </b-popover>
            </div>
          </div>
        </b-col>
       


      </b-row> -->

    </b-container>

    
  </div>
</template>

<script>
export default {
  name: 'AsiaispJoinUs',

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

.br-2 {
  margin: 60px 20px;
}

.bc-3 {
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
}

</style>
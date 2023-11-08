<template>
  <div>
    <!-- first大图 -->
    <b-img src="../../../img/business.png" fluid alt="Responsive image"
      style="width: 100%; max-height: 350px;min-height: 200px;"></b-img>

    <b-container class="bv-example-row container-style">
      <b-row>
        <b-col class="title">客户指南</b-col>
      </b-row>
      <b-row>
        <b-col md="6" lg="3" class="bc-1">
          <div class="bc-1-d">
            <div class="title-2">01 需求评估</div>
            <div class="bc-1-text">
              我们的商务期待与您联系，告知您的业务目标，业务内容，推广及用户分布地区
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="3" class="bc-1">
          <div class="bc-1-d">
            <div class="title-2">02 方案制定</div>
            <div class="bc-1-text">
              我们的专业架构团队会根据您的业务发展量身打造专业的解决方案
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="3" class="bc-1">
          <div class="bc-1-d">
            <div class="title-2">03 测试交付</div>
            <div class="bc-1-text">
              我们会安排专业的运维团队实施保障，解决进实际测试使用问题
            </div>
          </div>
        </b-col>
        <b-col md="6" lg="3" class="bc-1">
          <div class="bc-1-d">
            <div class="title-2">04 签约上线</div>
            <div class="bc-1-text">
              我们会根据您的使用业务模块进行报价，确保您的业务顺利推广
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col class="title">典型案例</b-col>
      </b-row>
      <b-row>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/solve1.png" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/fanli.png" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/snh48.jpg" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/beijingjiaoda.jpg" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/putongdianshitai.jpg" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/woniu.png" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/baijing.png" height="100px" alt="" />
          </div>
        </b-col>
        <b-col md="6" sm="6" lg="3" class="bc-2">
          <div class="bc-2-d">
            <img src="../../../img/zhuoyi.png" height="100px" alt="" />
          </div>
        </b-col>

      </b-row>

      <b-row>
        <b-col class="title">选择加入 橙域 CDN</b-col>
      </b-row>
      <b-row>
        <b-col class="bc-3" md="4"><img class="img-3" src="../../../img/join-1.jpg" width="60%" alt="" />
          <div class="title-3">更快，更精准</div>
          <span class="describe">
            更多的服务节点，更全面的覆盖，根据不同平台的优势为用户提供更高效加速和客户体验
          </span>
        </b-col>
        <b-col class="bc-3" md="4"><img class="img-3" src="../../../img/join-2.jpg" width="60%" alt="" />
          <div class="title-3">更智能，更稳定</div>
          <span class="describe">
            更高的宽带储备，更多的平台选择，避免单平台突发状况不可用，检测切换，保障客户业务不受影响
          </span>
        </b-col>
        <b-col class="bc-3" md="4"><img class="img-3" src="../../../img/join-3.png" width="60%" alt="" />
          <div class="title-3">更丰富，更省心</div>
          <span class="describe">
            更多的功能服务，更快捷的操作，无需到处找资源和解决途径，加入我们，交给我们
          </span>
        </b-col>
      </b-row>


    </b-container>

  </div>
</template>

<script>
export default {
  name: 'AsiaispBusiness',

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




.bc-1 {
  padding: 20px;
}

.bc-1-d {
  padding: 10px;
}

.bc-1-text {
  text-align: center;
}



.bc-2 {
  padding: 20px;
  text-align: center;
}

.bc-3{
  text-align: center;
}

.img-3{
  margin: 20px;
}

.title-3{
  font-size: 18px;
  font-weight: bold;
}
</style>
<template>
  <div class="home">
    <div
      v-loading="loading"
      element-loading-text="加载中..."
      style="min-height: 35vw;"
      v-if="!error"
    >
      <div v-for="(item, i) in home" :key="i">
        <div class="activity-panel" v-if="item.type === 0">
          <ul class="box">
            <!-- 左侧内容区域  start-->
            <li class="side-left left" style="margin-right:10px;">
              <div class="side_left fl">
                <!-- 最新事件 -->
                <div class="w326 news mb15" style="width:326px;">
                  <h2>
                    <a href=""><strong>最新事件</strong></a>
                  </h2>
                  <ul class="left_ul left_content">
                    <!--<li v-for="(item, key) in topNews" :key="key"> 
                            <span>{{date | formatDate}}</span>
                            <a href="" v-text="n.title"></a> 
                        </li> -->
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <li>
                      <span>{{ date | formatDate }}</span
                      ><a href="####">社会主义接班人团结友善敬业</a>
                    </li>
                    <!-- <li v-for="(item, key) in itemlis" :key="key">
                            {{ item.title }}
                        </li> -->
                  </ul>
                </div>
                <!-- 最新研究内容 -->
                <div class="w326 news" style="width:326px;margin-top:18px">
                  <h2>
                    <a href=""><strong>最新研究内容</strong></a>
                  </h2>
                  <ul id="newlog" class="left_content">
                    <!-- <li class="odd"> <div v-text="n.id" class="new_content "></div><a href="" v-text="n.title"></a> </li> -->
                    <li>
                      <div class="new_content ">1</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">2</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">3</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">4</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">5</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">6</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">7</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">8</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                    <li>
                      <div class="new_content ">9</div>
                      <a href=""
                        >富强民主文明和谐自由平等公正法治爱国敬业诚信友善</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 左侧内容区域  end-->
            <!-- 中间内容区域 start -->
            <li style="margin-right:10px">
              <div class="slide_center fl ml20">
                <div class="w550 news bgc_white">
                  <h2>
                    <a href="####"><strong>分类标签</strong></a>
                  </h2>
                  <ul>
                    <li
                      class="center_content"
                      style="background-color:#fe6181;"
                    >
                      <img src="../../../static/images/jiyin.png" alt="" />
                      <a href="####" class="title">基因</a><br />
                      <a href="####" class="num">123</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#5fc46d;"
                    >
                      <img
                        src="../../../static/images/xianguanyaowu.png"
                        alt=""
                      />
                      <a href="####" class="title">药物</a><br />
                      <a href="####" class="num">456</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#6661d5;"
                    >
                      <img
                        src="../../../static/images/yaowujiyindui.png"
                        alt=""
                      />
                      <a href="####" class="title">药物基因对</a><br />
                      <a href="####" class="num">789</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#01c4c3;"
                    >
                      <img
                        src="../../../static/images/quanweizhinan.png"
                        alt=""
                      />
                      <a href="####" class="title">权威指南</a><br />
                      <a href="####" class="num">987</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#62b6e5;"
                    >
                      <img
                        src="../../../static/images/yaowubiaoqian.png"
                        alt=""
                      />
                      <a href="####" class="title">药物标签</a><br />
                      <a href="####" class="num">654</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#ff6765;"
                    >
                      <img
                        src="../../../static/images/linchuangzhushi.png"
                        alt=""
                      />
                      <a href="####" class="title">临床注释</a><br />
                      <a href="####" class="num">321</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#7dc691;"
                    >
                      <img
                        src="../../../static/images/linchuangshiyan.png"
                        alt=""
                        style="width:100px;height:80px"
                      />
                      <a href="####" class="title">临床实验</a><br />
                      <a href="####" class="num">1314</a>
                    </li>
                    <li
                      class="center_content"
                      style="background-color:#feab1c;"
                    >
                      <img src="../../../static/images/zhuanli.png" alt="" />
                      <a href="####" class="title">专利</a><br />
                      <a href="####" class="num">521</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- 中间内容区域 end-->
            <!-- 右侧内容区域 start-->
            <li class="right">
              <div class="side_left ml18">
                <!-- 公告 -->
                <div class="w286 news">
                  <h2>
                    <a href=""><strong>公告</strong></a>
                  </h2>
                  <ul class="right_content left_content">
                    <li><span>1</span> <a>更新说明</a></li>
                    <li><span>2</span> <a>浏览数据量</a></li>
                    <li><span>3</span> <a>导出数据量</a></li>
                    <li><span>4</span> <a>版本更新</a></li>
                    <li><span>5</span> <a>用户量/词条量</a></li>
                    <!-- <li v-for="n in topNews" class="odd"><a href="" v-text="n.title"></a></li> -->
                  </ul>
                </div>
                <!-- 联系 -->
                <div class="w286 news tel h535  mt20">
                  <h2 class="w284">
                    <a href="####"><strong>联系</strong></a>
                  </h2>
                  <div class="phone contents">
                    <!-- <i class="iconfont icon-dianhua-1"></i> -->
                    <a href="####" class="phone_ul"></a>
                  </div>
                  <div class="email contents">
                    <!-- <i class="iconfont icon-huaban-"></i> -->
                    <a href="####" class="email_ul"></a>
                  </div>
                </div>
                <!-- 我要留言 -->
                <div class="w286 news Message">
                  <h2 class="w284">
                    <a href="####"><strong>我要留言</strong></a>
                  </h2>
                  <div class="right_bottom">
                    <el-form
                      ref="form"
                      :model="sizeForm"
                      label-width="80px"
                      size="large"
                      label-position="top"
                    >
                      <el-form-item
                        label="昵称:"
                        prop="name"
                        style="font-size:18px"
                      >
                        <el-input
                          v-model="sizeForm.name"
                          placeholder="请输入您的昵称："
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="留言内容:" prop="textarea">
                        <el-input
                          v-model="sizeForm.textarea"
                          placeholder="请输入留言内容"
                          type="textarea"
                          :rows="2"
                        >
                        </el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button size=" small" type="primary">提交</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
              </div>
            </li>
            <!-- 右侧内容区域 end-->
          </ul>
          <!-- 业务划分区域 start -->
          <ul class=" guide_ul">
            <li style="background-color:#35be9b;">
              <a href="####">
                <i class="iconfont icon-yonghuguanli"></i>
                <p>知识库用户</p>
              </a>
            </li>
            <li style="background-color:#8bc255;">
              <a href="####">
                <i class="iconfont icon-xiazai-xianxing"></i>
                <p>下载</p>
              </a>
            </li>
            <li style="background-color:#56bde3;">
              <a href="####">
                <i class="iconfont icon-icon"></i>
                <p>帮助</p>
              </a>
            </li>
            <li style="background-color:#f78228;">
              <a href="#/taskhall">
                <i class="iconfont icon-woderenwu"></i>
                <p>任务大厅</p>
              </a>
            </li>
          </ul>
          <!-- 业务划分区域 end -->
        </div>
      </div>
    </div>

    <!-- 报错提示页 1-->
    <div class="no-info" v-if="error">
      <div class="no-data">
        <img src="/static/images/g" />
        <br />
        抱歉！出错了...
      </div>
    </div>
    <!-- 报错提示页 2-->
  </div>
</template>
<script>
import { productHome } from '/api/index.js'
import YShelf from '/components/shelf'
import product from '/components/product'
import mallGoods from '/components/mallGoods'
import { setStore, getStore } from '/utils/storage.js'
// import '../../assets/icon/font/iconfont'
// import '../../assets/icon/font2/iconfont'
import 'element-ui'
import $ from 'jquery'

// 事件补位函数 1
var padDate = function (value) {
  return value < 10 ? '0' + value : value
}
// 事件补位函数 2
// 格式化时间函数 1
var formatDate = function (value) {
  // 这里的value就是需要过滤的数据
  var date = new Date(value)
  var year = date.getFullYear()
  var month = padDate(date.getMonth() + 1)
  var day = padDate(date.getDate())
  return year + '-' + month + '-' + day
}
// 格式化时间函数 2

export default {
  data () {
    return {
      date: new Date(),
      error: false,
      banner: [],
      mark: 0,
      bgOpt: {
        px: 0,
        py: 0,
        w: 0,
        h: 0
      },
      home: [],
      loading: true,
      notify: '1',
      dialogVisible: false,
      timer: '',
      sizeForm: {
        textarea: '',
        name: ''
      }
    }
  },
  mounted () {
    // 中间背景添加 1
    function bgc (color, tagName) {
      $(tagName).each(function (i, e) {
        $(e).css('background-color', color[i])
      })
    }
    bgc(
      ['orange', 'orange', 'orange'],
      '.activity-panel .box #newlog .new_content'
    )
    bgc(
      ['#35be9b', '#8bc255', '#56bde3', '#f78228'],
      '.activity-panel .box .guide_ul li'
    )
    bgc(
      [
        '#fe6181',
        '#5fc46d',
        '#6661d5',
        '#01c4c3',
        '#62b6e5',
        '#ff6765',
        '#7dc691',
        '#feab1c'
      ],
      'bgc_white  ul li.center_content'
    )
    // 中间背景添加 2
    productHome().then(res => {
      if (res.success === false) {
        this.error = true
        return
      }
      let data = res.result
      this.home = data
      this.loading = false
      for (let i = 0; i < data.length; i++) {
        if (data[i].type === 0) {
          this.banner = data[i].panelContents
        }
      }
    })
    this.showNotify()

    // 底部无限滚动 1
    // var box = document.getElementById('box')
    // var ul = box.getElementsByTagName('ul')[0]
    // var lis = ul.getElementsByTagName('li')
    // var speed = 2
    // ul.innerHTML += ul.innerHTML
    // ul.style.width = lis.length * lis[0].offsetWidth + 'px'

    // function move () {
    //   // 这里需要对ul.style.left 进行处理
    //   if (ul.offsetLeft < -ul.offsetWidth / 2) {
    //     ul.style.left = '0'
    //   }
    //   if (ul.offsetLeft >= 0) {
    //     ul.style.left = -ul.offsetWidth / 2 + 'px'
    //   }
    //   ul.style.left = ul.offsetLeft + speed + 'px'
    // }
    // var timer = setInterval(move, 30)
    // box.onmouseover = function () {
    //   // console.log('mouserover')
    //   clearInterval(timer)
    // }
    // box.onmouseout = function () {
    //   timer = setInterval(move, 30)
    // }
    // 底部无限滚动 2
    // 业务划分区域页面跳转 1
    $('.guide_ul li').click(function () {
      $('a', this)[0].click()
    })
    // 业务划分区域页面跳转 2
  },
  created () {
    this.play()
  },
  components: {
    YShelf,
    product,
    mallGoods
  },
  filters: {
    formatDate: formatDate // 最新事件的时间处理函数
  },
  methods: {
    autoPlay () {
      this.mark++
      if (this.mark > this.banner.length - 1) {
        // 当遍历到最后一张图片置零
        this.mark = 0
      }
    },
    play () {
      // 每2.5s自动切换
      this.timer = setInterval(this.autoPlay, 2500)
    },
    change (i) {
      this.mark = i
    },
    startTimer () {
      this.timer = setInterval(this.autoPlay, 2500)
    },
    stopTimer () {
      clearInterval(this.timer)
    },
    linkTo (item) {
      if (item.type === 0 || item.type === 2) {
        // 关联商品
        this.$router.push({
          path: '/goodsDetails',
          query: {
            productId: item.productId
          }
        })
      } else {
        // 完整链接
        window.location.href = item.fullUrl
      }
    },
    bgOver (e) {
      this.bgOpt.px = e.offsetLeft
      this.bgOpt.py = e.offsetTop
      this.bgOpt.w = e.offsetWidth
      this.bgOpt.h = e.offsetHeight
    },
    bgMove (dom, eve) {
      let bgOpt = this.bgOpt
      let X, Y
      let mouseX = eve.pageX - bgOpt.px
      let mouseY = eve.pageY - bgOpt.py
      if (mouseX > bgOpt.w / 2) {
        X = mouseX - bgOpt.w / 2
      } else {
        X = mouseX - bgOpt.w / 2
      }
      if (mouseY > bgOpt.h / 2) {
        Y = bgOpt.h / 2 - mouseY
      } else {
        Y = bgOpt.h / 2 - mouseY
      }
      dom.style['transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
      dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
    },
    bgOut (dom) {
      dom.style['transform'] = 'rotateY(0deg) rotateX(0deg)'
      dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
    },
    showNotify () {
      var value = getStore('notify')
      if (this.notify !== value) {
        this.dialogVisible = true
        setStore('notify', this.notify)
      }
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
// 自己加的
.el-textarea .el-textarea__inner {
  // 然后找到对应的类名，在这里将拉伸去掉即可
  resize: none;
}

.slide_center .center_content img {
  width: 80px;
  height: 80px;
}
#box {
  display: flex;
}
.left {
  width: 326px;
}
.right {
  width: 286px;
}
#center {
  background: pink;
  /*flex:1*/
  /*等价于*/
  flex-grow: 1;
  text-align: center;
}

.news h2 {
  height: 56px;
  line-height: 56px;
  background: #ffffff;
  color: rgb(66, 126, 236);
  border: 1px solid #ddd;
  border-bottom: 3px solid #cdcdcd;
  border-radius: 3px 3px 0 0;
  -webkit-border-radius: 3px 3px 0 0;
}
.news h2 a {
  color: rgb(66, 126, 236);
  // padding-top: 26px;
  box-sizing: border-box;
  display: block;
  text-decoration: none;
}
.news h2 strong {
  font: bold 16px 'microsoft yahei';
  height: 56px;
  padding: 0px 24px;
  box-sizing: border-box;
}
.news h2 strong:hover {
  border-bottom: 3px solid #417eec;
  padding-bottom: 15px;
}
.left_content {
  border: 1px solid #ddd;
  border-top: 0;
  padding-top: 10px;
  box-sizing: border-box;
  background-color: #fff;
}
.news .left_ul {
  height: 334px;
}
.news #newlog {
  height: 386px;
}
.news ul li {
  width: 263px;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  float: left;
  /* display: inline; */
  overflow: hidden;
}
.news ul li a {
  color: #666;
  font-weight: 700;
}
.news ul .new_content:nth-child(1),
.news ul .new_content:nth-child(2),
.news ul .new_content:nth-child(3) {
  width: 30px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding-left: 12px;
  box-sizing: border-box;
  margin-right: 5px;
}
.side_left ul li {
  width: 318px;
  box-sizing: border-box;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.side_left ul span {
  margin-right: 25px;
  width: 10px;
  height: 10px;
}

.slide_center ul {
  height: 791px;
  padding-left: 15px;
  box-sizing: border-box;
}
.slide_center ul li {
  width: 250px;
  height: 174px;
  // border: 1px solid #fff;
  // border: 1px solid red;
  margin: 20px 0 0 0;
  box-sizing: border-box;
  position: relative;
}
.slide_center ul li:nth-of-type(even) {
  margin-left: 20px !important;
}
.slide_center ul .title {
  position: absolute;
  bottom: 5px;
  left: 15px;
  font-size: 17px;
  color: white;
}
.slide_center ul .num {
  position: absolute;
  bottom: 5px;
  right: 20px;
  font-size: 30px;
  color: white;
}

.side_left .news .right_content {
  height: 217px;
  background-color: #fafafa;
}
.side_left .new .right_phone {
  height: 508px;
}
.side_left .contents {
  width: 266px;
  height: 72px;
  margin: 20px 0 0 10px;
}
.side_left .phone {
  background-color: #04c891;
}
.side_left .email {
  background-color: #39b8e8;
}
.side_left .email div,
.side_left .phone div {
  margin-left: 15px;
}
.phone ul li,
.email ul li {
  width: 60px;
  height: 72px;
  float: left;
}
.phone ul li:nth-child(2),
.email ul li:nth-child(2) {
  width: 100px;
  height: 72px;
  line-height: 72px;
  float: left;
  font-size: 20px;
  color: #fff;
}
.phone ul li i,
.email ul li i {
  font-size: 50px;
  line-height: 72px;
  color: #fff;
}
.phone:hover {
  background-image: url(../../../static/images/phone.png);
}
.phone {
  background-image: url(../../../static/images/phone1.png);
}
.email:hover {
  background-image: url(../../../static/images/email.png);
}
.email {
  background-image: url(../../../static/images/email1.png);
}
.phone,
.email {
  cursor: pointer;
}
.tel {
  margin-top: 20px;
  background-color: #fff;
  border-left: 1px solid #ccc;
  padding-bottom: 20px;
}
.Message {
  background-color: #fff;
  margin-top: 20px;
}
.Message h2 {
  line-height: 56px;
  font-size: 15px;
  color: black;
  background-color: #f1f1f1;
}
.el-form--label-top .el-form-item__label {
  font-size: 16px !important;
  padding-left: 10px;
}
.el-form-item {
  margin: 20px 0 10px 0;
}
.el-form-item {
  margin-bottom: 0;
}
.left_form {
  margin-left: 10px;
}
.Message .left_form label {
  font-size: 14px;
  margin: 15px 0 5px 0 !important;
  display: inline-block;
}
.left_form input {
  height: 26px;
  width: 238px;
  // background-color: #f8f8f8;
}
.left_form .auth_code {
  vertical-align: middle;
  width: 50px;
  float: left;
}
.left_form a {
  vertical-align: middle;
  width: 95px;
  height: 30px;
  background-color: #17c2ce;
  display: inline-block;
  line-height: 30px;
  padding-left: 15px;
  box-sizing: border-box;
}

/* 底部业务划分区域 */
.guide {
  height: 120px;
}
.guide_ul {
  float: left;
  margin-left: 10px;
}
.guide_ul li {
  float: left;
  width: 285px;
  height: 76px;
  margin: 20px 0 0 20px;
  cursor: pointer;
}
.guide_ul li:first-child {
  margin-left: 0;
}
.guide_ul li i {
  font-size: 45px;
  color: white;
  margin: 15px 0 0 15px;
  float: left;
}
.guide_ul li p {
  margin-left: 16px;
  height: 76px;
  line-height: 76px;
  /* display: inline-block; */
  font-size: 20px;
  color: #fff;
  float: left;
}

/* .partners{height: 94px;} */

/* 底部轮播图 */
* {
  margin: 0px;
  padding: 0px;
}
#box {
  width: 1200px;
  height: 65px;
  overflow: hidden;
  position: relative;
  background: #f2f2f2;
}
#box ul {
  position: absolute;
  left: 0px;
  right: 0px;
}
#box ul li {
  float: left;
  list-style: none;
  width: 118px;
  height: 58px;
  padding: 10px 0;
  box-sizing: border-box;
}

// 自己加的
.center_content {
  position: relative;
}

.center_content img {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.guide {
  width: 1200px;
}

// .right_bottom {
//   // padding: 10px !important;
// }

.home {
  display: flex;
  flex-direction: column;
}

.no-info {
  padding: 100px 0;
  text-align: center;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  .no-data {
    align-self: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.page {
  position: absolute;
  width: 100%;
  top: 470px;
  z-index: 30;
  .dots {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .dot-active {
      display: inline-block;
      width: 15px;
      height: 15px;
      background-color: whitesmoke;
      border-radius: 8px;
      margin-right: 10px;
      cursor: pointer;
    }
    .dot {
      opacity: 0.2;
    }
  }
}

.activity-panel {
  width: 1220px;
  margin: 0 auto;
  .box {
    overflow: hidden;
    position: relative;
    z-index: 0;
    margin-top: 25px;
    box-sizing: border-box;
    // border: 1px solid rgba(0, 0, 0, 0.14);
    border-radius: 8px;
    background: #ededed;
    box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
  }
  .content {
    float: left;
    position: relative;
    box-sizing: border-box;
    width: 25%;
    height: 200px;
    text-align: center;
  }
  .content ::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    box-sizing: border-box;
    border-left: 1px solid #f2f2f2;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    content: '';
    pointer-events: none;
  }
  .i {
    width: 305px;
    height: 200px;
  }
  .cover-link {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
      repeat;
  }
  a {
    color: #5079d9;
    cursor: pointer;
    transition: all 0.15s ease-out;
    text-decoration: none;
  }
  a:hover {
    // box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
    transition: all 0.15s ease;
  }
}

.banner,
.banner span,
.banner div {
  font-family: 'Microsoft YaHei';
  transition: all 0.3s;
  transition-timing-function: linear;
}

.banner {
  cursor: pointer;
  perspective: 3000px;
  position: relative;
  z-index: 19;
  margin: 0 auto;
  width: 1220px;
}

.bg {
  position: relative;
  width: 1220px;
  height: 500px;
  margin: 20px auto;
  background-size: 100% 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  transform: rotateY(0deg) rotateX(0deg);
  & div {
    position: relative;
    height: 100%;
    width: 100%;
  }
}

.img1 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
}

.img2 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 5px;
  left: 0;
  background-size: 95% 100%;
  border-radius: 10px;
}

.img3 {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 10px;
}

.a {
  z-index: 20;
  transform: translateZ(40px);
}

.b {
  z-index: 20;
  transform: translateZ(30px);
}

.c {
  transform: translateZ(0px);
}

.sk_item {
  width: 170px;
  height: 225px;
  padding: 0 14px 0 15px;
  > div {
    width: 100%;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      transform: translateY(-5px);
    }
  }
  img {
    width: 130px;
    height: 130px;
    margin: 17px 0;
  }
  .sk_item_name {
    color: #999;
    display: block;
    max-width: 100%;
    _width: 100%;
    overflow: hidden;
    font-size: 12px;
    text-align: left;
    height: 32px;
    line-height: 16px;
    word-wrap: break-word;
    word-break: break-all;
  }
  .sk_item_price {
    padding: 3px 0;
    height: 25px;
  }
  .price_new {
    font-size: 18px;
    font-weight: 700;
    margin-right: 8px;
    color: #f10214;
  }
  .price_origin {
    color: #999;
    font-size: 12px;
  }
}

.box {
  overflow: hidden;
  position: relative;
  z-index: 0;
  margin-top: 29px;
  box-sizing: border-box;
  // border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);
}

ul.box {
  display: flex;
  li {
    // flex: 1;
    img {
      display: block;
      width: 305px;
      height: 200px;
    }
  }
}

.mt30 {
  margin-top: 30px;
}

.hot {
  display: flex;
  > div {
    flex: 1;
    width: 25%;
  }
}

.floors {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .imgbanner {
    width: 50%;
    height: 430px;
    .cover-link {
      cursor: pointer;
      display: block;
      position: absolute;
      top: 60px;
      left: 0;
      width: 50%;
      height: 430px;
      z-index: 4;
      background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==)
        repeat;
    }
    .cover-link:hover {
      box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
      transition: all 0.15s ease;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>

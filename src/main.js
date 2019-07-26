/* eslint-disable no-debugger */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import VueCookie from 'vue-cookie'
import $ from 'jquery'
import {
  userInfo
} from './api'
import {
  Button,
  ButtonGroup,
  Pagination,
  Checkbox,
  Icon,
  Autocomplete,
  Loading,
  Message,
  Notification,
  Steps,
  Step,
  Table,
  TableColumn,
  Input,
  Dialog,
  Select,
  Option,
  Card,
  Tag,
  Form,
  FormItem,
  CheckboxGroup
} from 'element-ui'
import {
  getStore
} from '/utils/storage'
import VueContentPlaceholders from 'vue-content-placeholders'
Vue.use(VueContentPlaceholders)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Pagination)
Vue.use(Checkbox)
Vue.use(Icon)
Vue.use(Autocomplete)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading.directive)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(CheckboxGroup)
Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/load.gif'
  // attempt: 1
})
Vue.config.productionTip = false
const whiteList = ['/home', '/goods', '/login', '/register', '/goodsDetails', '/thanks', '/search', '/refreshsearch', '/refreshgoods'] // 不需要登陆的页面
router.beforeEach(function (to, from, next) {
  let params = {
    params: {
      token: getStore('token')
    }
  }
  userInfo(params).then(res => {
    debugger
    console.log(res)
    if (res !== 1) { // 没登录！==
      if (whiteList.indexOf(to.path) !== -1) { // 白名单,如果在白名单中，就免登录
        next()
      } else { // 如果不在白名单中， 就跳转到登录页面
        next('/login')
      }
    } else {
      store.commit('RECORD_USERINFO', {
        info: res.result
      })
      if (to.path === '/login') { //  跳转到
        next({
          path: '/'
        })
      }
      next()
    }
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  $,
  render: h => h(App)
})

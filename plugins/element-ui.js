import Vue from 'vue'
import Element from 'element-ui'

// element ui 语言包
import locale from 'element-ui/lib/locale/lang/zh-CN'

// 自定义element ui主题
import '@/assets/styles/element-variables.scss'

Vue.use(Element, { locale })

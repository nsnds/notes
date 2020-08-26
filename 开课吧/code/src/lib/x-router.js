let Vue

class VueRouter {
  constructor (options) {
    this.$options = options

    this.routeMap = {}

    // 1. new Vue() 创建响应式
    this.app = new Vue({
      data: {
        current: '/'
      }
    })
    // 2. Vue.util.defineReactive(this, 'current', '/')
  }

  init () {
    this.bindEvents()
    this.createRouteMap(this.$options)
    this.initComponent()
  }

  // 绑定浏览器事件
  bindEvents () {
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }

  onHashChange () {
    this.app.current = window.location.hash.slice(1) || '/'
  }

  // 解析路由配置
  createRouteMap (options) {
    options.routes.map(route => {
      this.routeMap[route.path] = route
    })
  }

  initComponent () {
    Vue.component('router-link', {
      props: {
        to: String
      },
      // 不能使用 template：脚手架使用的是运行时版本的 vue，是不带编译器的。
      render (h) {
        return h(
          'a',
          {
            attrs: { href: `#${this.to}` }
          },
          this.$slots.default 
        )

        // jsx 写法
        // return <a href={this.to}>{this.$slots.default}</a>
      }
    })

    Vue.component('router-view', {
      render: (h) => {
        // this 指向 VueRouter 实例
        const Comp = this.routeMap[this.app.current].component
        return h(Comp)
      }
    })
  }
}

// 以插件形式
VueRouter.install = function (_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      // this 为组件实例，可以是根组件、其他子组件
      // this.$options 为根组件实例

      // 只有根组件才有 router，来实现只执行一次
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    }
  })
}
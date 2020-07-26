let Vue

function install (_Vue) {
  Vue = _Vue

  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

class Store {
  constructor (options = {}) {
    this.state = new Vue({
      data: options.state
    })

    this.mutations = options.mutations || {}
    this.actions = options.actions || {}
    options.getters = this.handleGetters(options.getters)
  }

  commit = (type, arg) => {
    // this 指向 Store 实例
    const fn = this.mutations[type]
    fn(this.state, arg)
  }

  dispatch = (type, arg) => {
    const fn = this.actions[type]
    return fn({ commit: this.commit, state: this.state }, arg)
  }

  handleGetters (getters) {
    this.getters = {}

    Object.keys(getters).map(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
  }
}

export default {
  Store,
  install
}





function defineReactive (obj, key, val) {
  // 递归
  observe(val)

  Object.defineProperty(obj, key, {
    get () {
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        observe(newVal) // newVal 是 object，需要递归作响应化处理
        val = newVal
      }
    }
  })
}

function observe (obj) {
  if (typeof obj !== 'object' || obj === null) return

  new Observer(obj)
}

function proxy (vm, vmKey) {
  Object.keys(vm[vmKey]).map(key => {
    Object.defineProperty(vm, key, {
      get () {
        return vm[vmKey][key]
      },
      set (val) {
        vm[vmKey][key] = val
      }
    })
  })
}

class Que {
  constructor (options) {
    this.$options = options
    this.$data = options.data

    observe(this.$data) // 响应化处理
    proxy(this, '$data') // 代理数据
    new Compile(options.el, this) // 创建编译器
  }
}

// 根据对象类型执行对应的响应化处理
class Observer {
  constructor (value) {
    this.value = value

    if (typeof value === 'object') {
      this.walk(value)
    }
  }

  // 对象类型数据响应化处理
  walk (obj) {
    Object.keys(obj).map(key => defineReactive(obj, key, obj[key]))
  }

  // 数组类型数据响应化处理
}










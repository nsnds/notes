class Compile {
  constructor (el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {
      this.compile(this.$el)
    }
  }

  compile (el) {
    const childNodes = el.childNodes
    Array.from(childNodes).map(node => {
      if (this.isElement(node)) { // 是否为元素
        console.log('编译元素' + node.nodeName)
        this.compileElement(node)
      } else if (this.isInter(node)) { // 是否为插值绑定
        console.log('编译插值绑定' + node.textContent)
        this.compileText(node)
      }


      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  isElement (node) {
    return node.nodeType === 1
  }

  isInter (node) {
    const isText = node.nodeType === 3 // 文本类型
    const isContent = /\{\{(.*)\}\}/.test(node.textContent) // {{xxx}}
    return isText && isContent
  }

  compileText (node) {
    const key = RegExp.$1
    const value = this.$vm[key]
    node.textContent = value
  }

  compileElement (node) {
    const nodeAttrs = node.attributes
    Array.from(nodeAttrs).map(attr => {
      const attrName = attr.name // q-xx
      const exp = attr.value
      if (this.isDirective(attrName)) {
        const dir = attrName.substring(2)
        this[dir] && this[dir](node, exp)
      }
    })
  }

  isDirective (attr) {
    return attr.indexOf('q-') === 0
  }

  text (node, exp) {
    node.textContent = this.$vm[exp]
  }

  html (node, exp) {
    node.innerHTML = this.$vm[exp]
  }
}
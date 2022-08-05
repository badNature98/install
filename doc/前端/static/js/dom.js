;((a = window) => {
  a.qs = function (x) {
    return document.querySelector(x)
  }
  a.qsa = function (x) {
    return document.querySelectorAll(x)
  }
  a.dom = new (function () {
    const that = this
    //清空自己内容
    this.clear = function () {
      if (that.isDocList(this)) {
        for (let item of this) {
          that.clear(item)
        }
      } else {
        this.innerHTML = null
      }
      return this
    }
    //设置属性
    this.setAttr = function (data) {
      for (let attr in data) {
        if (attr === "class") {
          if (typeof data.class === "string") {
            this.classList.add(data.class)
          } else if (data.class instanceof Array) {
            for (let Class of data.class) {
              this.classList.add(Class)
            }
          } else if (typeof data[attr] === "object") {
            for (let Class in data.class) {
              if (data.class[Class]) this.classList.add(Class)
            }
          }
          // }
          // else if (typeof data[attr] === "object") {
          //   console.log("做什么")
          // this[attr] = that.setAttr(data[attr]).call(this[attr])
        } else {
          if (typeof data[attr] === "string") {
            this[attr] = data[attr]
          } else {
            this[attr] = data[attr]
          }
        }
      }
      return this
    }
    //转成 对象集合
    this.toFragment = function (list) {
      let fra = document.createDocumentFragment()
      if (that.isDocList(list)) {
        for (let item of list) {
          fra.appendChild(item)
        }
      } else {
        fra.appendChild(list)
      }
      return fra
    }
    //判断是不是数组
    this.isDocList = function (list) {
      return list instanceof Array || list instanceof NodeList
    }
    //克隆方法
    this.clone = function (dom, deep = true) {
      if (that.isDocList(dom)) {
        dom = that.toFragment(dom.map(a => a.cloneNode(deep)))
      }
      if (dom) return dom.cloneNode(deep)
      return this.cloneNode(deep)
    }
    //放到某处
    this.to = function (path) {
      if (that.isDocList(path)) {
        let arr = []
        for (let p of path) {
          p.appendChild(that.clone(this))
          arr.push(that.clone(this))
        }
        return arr
      } else {
        path.appendChild(this)
        return this
      }
    }
    //添加什么 到自己
    this.push = function (dom, data = {}) {
      if (typeof dom === "string") {
        this.appendChild(that.created(dom, data))
        return that.ref(this)
      } else {
        this.appendChild(dom)
        return that.ref(this)
      }
    }
    //赋值特定方法
    this.ref = function (dom) {
      dom.to = that.to
      dom.push = that.push
      dom.setAttr = that.setAttr
      dom.clear = that.clear
      return dom
    }
    //创建标签 name 名称 data 参数
    this.created = function (dom, data = {}) {
      if (typeof dom === "string") {
        dom = document.createElement(dom)
      }
      if (data.innerHTML) {
        dom.innerHTML = data.innerHTML
      }
      if (data.class) {
        if (typeof data.class === "string") {
          dom.classList.add(data.class)
        } else if (data.class instanceof Array) {
          for (let Class of data.class) {
            dom.classList.add(Class)
          }
        }
      }
      return this.ref(dom).setAttr(data)
    }
  })()
})()

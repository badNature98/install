import HeaderF from "./Header.js"
import SidebarF from "./Sidebar.js"
import MainF from "./Main.js"
window.View = (function () {
  return dom.created("div", {
    class: ["View"],
    innerHTML: "我是组件",
    vIs: function (dom) {
      this.clear().push(dom)
    },
  })
})()
const Header = HeaderF()
const Sidebar = SidebarF()
const Main = MainF()
export default function aaa() {
  return dom.toFragment([Header, Sidebar, Main])
}

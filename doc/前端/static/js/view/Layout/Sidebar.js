import config from "../../config/index.js"
const { routers } = config.state
import { isExternal } from "../../utils/is.js"
function getItem(router) {
  if (router.child)
    return dom.created("ul", { innerHTML: router.meta.title, class: ["Sidebar-ul"] }).push(
      routers.child.map(a => {
        return getItem(a)
      })
    )
  if (isExternal(router.path))
    return (router.html = dom
      .created("li", { class: ["Sidebar-li"] })
      .push(dom.created("span", { title: router.meta.title }).push(dom.created("a", { innerHTML: router.meta.title, href: router.path, router: router, class: ["Sidebar-a"] }))))
  return (router.html = dom
    .created("li", {
      router: router,
      class: ["Sidebar-li"],
      onclick: function () {
        this.setClass()
        this.linkTo()
      },
      setClass() {
        for (let item of routers) {
          item.html.classList.remove("active")
        }
        this.classList.add("active")
      },
      linkTo() {
        this.router.component().then(view => {
          View.vIs(view.default())
        })
      },
    })
    .push(dom.created("span", { title: router.meta.title, innerHTML: router.meta.title })))
}
export default function () {
  return dom
    .created("div", {
      class: ["Sidebar"],
    })
    .push(
      dom.created("ul").push(
        dom.toFragment(
          routers.map(a => {
            return getItem(a)
          })
        )
      )
    )
}

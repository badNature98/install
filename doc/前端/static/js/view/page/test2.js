import config from "../../config/index.js"
const { routers } = config.state
export default function (view) {
  const Dom = dom.created("div", { innerHTML: String(routers) })
  axios({
    url: "/static/html/CSDN/vue3兼容IE.html",
  }).then(a => {
    Dom.innerHTML = a.data
  })
  if (view) Dom.to(view)
  return Dom
}

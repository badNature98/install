import config from "../../config/index.js"
const { routers } = config.state
export default function (view) {
  const Dom = dom.created("div", { innerHTML: String(routers) })
  if (view) Dom.to(view)
  return Dom
}

function search() {
  const input = dom.created("input")
  const button = dom.created("button", {
    innerHTML: "查询",
    onclick: function () {
      alert(input.value)
    },
  })
  return dom.created("div", { style: "display:inline-block" }).push(input).push(button)
}
export default function () {
  return dom
    .created("div", { class: ["Header"] })
    .push("span", { innerHTML: "头部标题", style: "width:30%;padding-right:5px" })
    .push(search())
}

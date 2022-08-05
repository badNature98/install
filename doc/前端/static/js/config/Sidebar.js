function dir(dir) {
  if (/^@/.test(dir)) {
    dir = dir.replace(/^@/, "/static")
  }
  return window.location.origin + dir
}
const routers = [
  {
    path: dir("@/html/CSDN/简单认识Flutter,了解flutter.html"),
    // hidden: true,
    name: "page1",
    meta: { title: "简单认识Flutter,了解flutter", icon: "page1", affix: true },
  },
  {
    path: dir("@/html/CSDN/vue3兼容IE.html"),
    // hidden: true,
    name: "page1",
    meta: { title: "vue3兼容IE", icon: "page1", affix: true },
  },
  {
    path: "page1",
    // hidden: true,
    component: () => import("../view/page/test1.js"),
    name: "page1",
    meta: { title: "查看所有组件", icon: "page1", affix: true },
  },
  {
    path: "page1",
    // hidden: true,
    component: () => import("../view/page/test2.js"),
    name: "page1",
    meta: { title: "加载CNDS", icon: "page1", affix: true },
  },
  {
    path: "page1",
    // hidden: true,
    component: () => import("../view/page/test1.js"),
    name: "page1",
    meta: { title: "测试5界面", icon: "page1", affix: true },
  },
]
export default {
  routers: routers,
}

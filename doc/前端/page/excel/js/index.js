/**
 * @param getluckysheetfile 是获取自身分页的函数 Array
 * @param transToData 是获取自身表数据的函数
 */
window.onload = function () {
  let luckysheet = window.luckysheet
//加载完毕 入口
  Config.BeforeLoad instanceof Function && Config.BeforeLoad.apply(luckysheet)
  luckysheet.create(Config)
  Config.AfterLoad instanceof Function && Config.AfterLoad.apply(luckysheet)
}
//luckySheet 加载的数据
let Config = {
  container: "luckysheet-view", // 设定DOM容器的id
  title: "", // 设定表格名称
  lang: "zh", // 设定表格语言
  plugins: ["chart"],
  //表格唯一表示
  gridKey: "",

  data: [
    {
      name: "Cell", //工作表名称
      color: "", //工作表颜色
      index: 0, //工作表索引
      status: 1, //激活状态
      order: 0, //工作表的下标
      hide: 0, //是否隐藏
      row: 10, //行数
      column: 10, //列数
      defaultRowHeight: 19, //自定义行高
      defaultColWidth: 73, //自定义列宽
      celldata: [], //初始化使用的单元格数据
      config: {
        merge: {}, //合并单元格
        rowlen: {}, //表格行高
        columnlen: {}, //表格列宽
        rowhidden: {}, //隐藏行
        colhidden: {}, //隐藏列
        borderInfo: {}, //边框
        authority: {}, //工作表保护
      },
      scrollLeft: 0, //左右滚动条位置
      scrollTop: 315, //上下滚动条位置
      luckysheet_select_save: [], //选中的区域
      calcChain: [], //公式链
      isPivotTable: false, //是否数据透视表
      pivotTable: {}, //数据透视表设置
      filter_select: {}, //筛选范围
      filter: null, //筛选配置
      luckysheet_alternateformat_save: [], //交替颜色
      luckysheet_alternateformat_save_modelCustom: [], //自定义交替颜色
      luckysheet_conditionformat_save: {}, //条件格式
      frozen: {}, //冻结行列配置
      chart: [], //图表配置
      zoomRatio: 1, // 缩放比例
      image: [], //图片
      showGridLines: 1, //是否显示网格线
      dataVerification: {}, //数据验证配置
    },
    {
      name: "Sheet2",
      color: "",
      index: 1,
      status: 0,
      order: 1,
      celldata: [],
      config: {},
    },
    {
      name: "Sheet3",
      color: "",
      index: 2,
      status: 0,
      order: 2,
      celldata: [],
      config: {},
    },
  ],
  //操作后刚更新
  allowUpdate: true,
  //配置loadUrl 接口地址 加载所有工作表的配置，并包含当前页单元格数据
  //源码写法 $.post(loadurl, {"gridKey" : server.gridKey}, function (d) {})
  loadUrl: "",
  //操作表格后，实时保存数据的websocket地址，此接口也是共享编辑的接口地址。
  //有个注意点，要想开启共享编辑，必须满足以下3个条件：
  // allowUpdate 为true
  // 配置了 loadUrl
  // 配置了 updateUrl
  updateUrl: "",
  //缩略图地址
  updateImageUrl: "/image/riceShower.jpg",
  //用户信息展示
  userInfo: `<span style='color:blue'>userName</span>`,
  //用户信息
  userMenuItem: [
    { url: "www.baidu.com", icon: '<i class="fa fa-folder" aria-hidden="true"></i>', name: "我的表格" },
    { url: "www.baidu.com", icon: '<i class="fa fa-sign-out" aria-hidden="true"></i>', name: "退出登陆" },
  ],
  //返回连接
  myFolderUrl: window.location.origin,
  //右上角按钮
  functionButton: `<button id="downLoad" class="btn btn-primary" style="padding:3px 6px;font-size: 12px;margin-right: 10px;">下载</button>`,
  //在右侧弹出
  showConfigWindowResize: true,
  //允许添加行
  enableAddRow: true,
  //回到顶部
  enableAddBackTop: true,
  //单元格 右击菜单
  cellRightClickConfig: {
    copy: true, // 复制
    copyAs: true, // 复制为
    paste: true, // 粘贴
    insertRow: true, // 插入行
    insertColumn: true, // 插入列
    deleteRow: true, // 删除选中行
    deleteColumn: true, // 删除选中列
    deleteCell: true, // 删除单元格
    hideRow: true, // 隐藏选中行和显示选中行
    hideColumn: true, // 隐藏选中列和显示选中列
    rowHeight: true, // 行高
    columnWidth: true, // 列宽
    clear: true, // 清除内容
    matrix: true, // 矩阵操作选区
    sort: true, // 排序选区
    filter: true, // 筛选选区
    chart: true, // 图表生成
    image: true, // 插入图片
    link: true, // 插入链接
    data: true, // 数据验证
    cellFormat: true, // 设置单元格格式
  },
  // sheet 鼠标右击菜单
  sheetRightClickConfig: {
    delete: true, // 删除
    copy: true, // 复制
    rename: true, //重命名
    color: true, //更改颜色
    hide: true, //隐藏，取消隐藏
    move: true, //向左移，向右移
  },
  //钩子函数
  hook: {
    //进入编辑之前
    cellEditBefore: function (range) {
      console.log(range)
    },
    //触发更新之前
    cellUpdateBefore: function (r, c, oldValue, newValue, isRefresh) {
      console.log(r, c, oldValue, newValue, isRefresh)
    },
    cellRenderAfter: function (cell, position, sheet, ctx) {
      //
    },
    //触发更新后
    cellUpdated: function (r, c, oldValue, newValue, isRefresh) {
      console.log(r, c, oldValue, newValue, isRefresh)
    },
    //单元格点击前的事件
    cellMousedownBefore: function (cell, position, sheet, ctx) {
      console.log(luckysheet.getluckysheetfile())
      // console.log(cell, position, sheet, ctx)
    },
    cellMousedown: function (cell, position, sheet, ctx) {
      // console.log(cell, position, sheet, ctx)
    },
    sheetMouseup: function (cell, position, sheet, moveState, ctx) {
      //
    },
    //拖拽文件到内部 结束事件
    cellDragStop: function (cell, position, sheet, ctx, event) {
      console.log(event)
    },
    //选中区域后触发的事件
    rangeSelect: function (sheet, range) {},
    //移动区域前
    rangeMoveBefore: function (range) {},
    //移动区域后
    rangeMoveAfter: function (oldRange, newRange) {},
    //创建sheet 前触发事件
    sheetCreatekBefore: function (e) {
      console.log(e)
    },
    imageInsertBefore: function () {},
  },
  BeforeLoad() {
    //这里只处理了 第一个初始化
    //将 gridData 数据 转为 初始化数据 cellData
    const cellData = this.getGridData(getData().data)
    //初始化数据
    Config.data[0].celldata = cellData
    //样式，合并等
    Config.data[0].config = getConfig().data
    //生成 gridData 数据
    // console.log(this.buildGridData(Config.data[0]))
  },
  AfterLoad: function () {

    const that = this
    //生成的下载按钮
    const downLoad = document.getElementById("downLoad")
    downLoad.onclick = function () {
      console.log(that)
    }
  },
}
import { getConfig, getData } from "./api/sheet.js"

1.安装babel/polyfill
	npm install --save @babel/polyfill
2.在main.js里面引入
	（一定要在最上面，第一行）
	import '@babel/polyfill'
3.安装完成后会有babel.config.js文件，需手动定义
   module.exports = {
   	  presets: [
   	    // '@vue/cli-plugin-babel/preset',
   	    ['@vue/app', {
   	      useBuiltIns: 'entry',
   	  }]
   	  ]
   	}
4.在package.json文件browserslist配置
	"browserslist": [
	    "> 1%",
	    "last 2 versions",
	    "not ie <= 11"
	  ]
5.使用了vuex的在vue.config.js中，转es5
   module.exports = {
   	transpileDependencies:[/node_modules[/\\\\](element-ui|vuex|)[/\\\\]/]
   }

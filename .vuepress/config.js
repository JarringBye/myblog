module.exports = {
	title: "lilcandle Blog",
	description: '永无止境',
	dest: 'public',
	head: [
		['link', {rel: 'icon', href: '/favicon.ico'}],
		['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}]
	],
	theme: 'reco',
	themeConfig: {
		nav: [
			{text: 'Home', link: '/', icon: 'reco-home'},
			{text: 'TimeLine', link: '/timeline/', icon: 'reco-date'},
			{
				text: 'Docs',
				icon: 'reco-message',
				items: [
					{text: 'vuepress-reco', link: '/docs/theme-reco/'}
				]
			},
			{
				text: 'Contact',
				icon: 'reco-message',
				items: [
					{text: 'GitHub', link: 'https://github.com/jarringbye', icon: 'reco-github'}
				]
			}
		],
		sidebar: {
			'/docs/theme-reco/': [
				'',
				'theme',
				'plugin',
				'api'
			]
		},
		type: 'blog',
		// 博客设置
		blogConfig: {
			category: {
				location: 2, // 在导航栏菜单中所占的位置，默认2
				text: 'Category' // 默认 “分类”
			},
			tag: {
				location: 3, // 在导航栏菜单中所占的位置，默认3
				text: 'Tag' // 默认 “标签”
			}
		},
		friendLink: [
			{
				title: '午后南杂',
				desc: 'Enjoy when you can, and endure when you must.',
				email: '1156743527@qq.com',
				link: 'https://www.recoluan.com'
			},
			{
				title: 'vuepress-theme-reco',
				desc: 'A simple and beautiful vuepress Blog & Doc theme.',
				avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
				link: 'https://vuepress-theme-reco.recoluan.com'
			},
		],
		logo: '/logo.png',
		// 搜索设置
		search: true,
		searchMaxSuggestions: 10,
		// 自动形成侧边导航
		sidebar: 'auto',
		// 最后更新时间
		lastUpdated: 'Last Updated',
		// 作者
		author: 'lilcandle',
		// 作者头像
		authorAvatar: '/avatar.png',
		// 备案号
		record: 'xxxx',
		// 项目开始时间
		startYear: '2022'
		/**
		 * 密钥 (if your blog is private)
		 */

		// keyPage: {
		//   keys: ['your password'],
		//   color: '#42b983',
		//   lineColor: '#42b983'
		// },

		/**
		 * valine 设置 (if you need valine comment )
		 */

		// valineConfig: {
		// 	appId: '...',// your appId
		// 	appKey: '...', // your appKey
		// }
	},
	markdown: {
		lineNumbers: true
	},
	plugins: [
		[
			//先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: ['whiteCat'],
				clean: false,
				messages: {
					welcome: '我是lilcandle欢迎你的关注 ',
					home: '心里的花，我想要带你回家。',
					theme: '好吧，希望你能喜欢我的其他小伙伴。',
					close: '再见哦'
				},
				width: 240,
				height: 352,
				messageStyle: {
					right: '68px',
					bottom: '190px'

				}
			}
		],
		// [
		// 	//先安装在配置， npm install vuepress-plugin-meting --save
		// 	'meting', {
		// 	metingApi: "https://api.i-meto.com/meting/api",
		// 	meting: {
		// 		auto:"https://music.163.com/playlist?id=430001319"
		// 	},          // 不配置该项的话不会出现全局播放器
		// 	aplayer: {
		// 		lrcType: 3
		// 	}
		// }
		// ],
		// [
		// 	//彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
		// 	"ribbon",
		// 	{
		// 		size: 90,     // width of the ribbon, default: 90
		// 		opacity: 1, // opacity of the ribbon, default: 0.3
		// 		zIndex: -1    // z-index property of the background, default: -1
		// 	}
		// ],
		[
			'cursor-effects',
			{
				size: 2, // size of the particle, default: 2
				shape: 'star', // shape of the particle, default: 'star'
				zIndex: 999999999, // z-index property of the canvas, default: 999999999
			},
		],
		[
			//动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
			"dynamic-title",
			{
				showIcon: "/favicon.ico",
				showText: "(/≧▽≦/)咦！又好了！",
				hideIcon: "/failure.ico",
				hideText: "(●—●)喔哟，崩溃啦！",
				recoverTime: 2000
			}
		],
		[
			//图片放大插件 先安装在配置， npm install @vuepress/plugin-medium-zoom --save
			'@vuepress\plugin-medium-zoom', {
			selector: '.page img',
			delay: 1000,
			options: {
				margin: 24,
				background: 'rgba(25,18,25,0.9)',
				scrollOffset: 40
			}
		}
		],
		[
			//插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
			'flowchart'
		],
		[
			//插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
			'sitemap', {
			hostname: 'https://www.glassysky.site'
		}
		],
		["vuepress-plugin-nuggets-style-copy", {
			copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
			tip: {
				content: "复制成功!"
			}
		}],
		// ["@vuepress-yard/vuepress-plugin-window", {
		// 	title: "lilcandleの公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
		// 	contentInfo: {
		// 		title: "欢迎光顾 🎉🎉🎉",
		// 		needImg: true,
		// 		// imgUrl: "https://reinness.com/avatar.png",
		// 		content: "暂无",
		// 		contentStyle: ""
		// 	},
			// bottomInfo: {
			// 	btnText: '关于',
			// 	linkTo: 'https://cnblogs.com/glassysky'
			// },
		// 	closeOnce: false
		// }],
		['go-top'],
	]
}


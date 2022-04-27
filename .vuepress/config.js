module.exports = {
	title: "lilcandle Blog",
	description: 'waiting...',
	dest: 'public',
	head: [
		['link', {rel: 'icon', href: '/favicon.ico'}],
		['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
		['meta', {name: 'referrer', content: 'no-referrer'}],
		// ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
		// ["script", { src: "scripts/demo.js" }]
	],
	theme: 'reco',
	themeConfig: {
		nav: [
			{text: 'Home', link: '/', icon: 'reco-home'},
			{text: 'TimeLine', link: '/timeline/', icon: 'reco-date'},
			// {
			// 	text: 'Docs',
			// 	icon: 'reco-message',
			// 	items: [
			// 		{text: '', link: '/docs/编程分享/'}
			// 	]
			// },
			{
				text: 'Contact',
				icon: 'reco-message',
				items: [
					{text: 'GitHub', link: 'https://github.com/jarringbye', icon: 'reco-github'},
					{text: 'Bilibili', link: 'https://space.bilibili.com/19066484', icon: 'reco-bilibili'},

				]
			}
		],
		sidebar: 'auto',
		sidebarDepth: 2,
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
		record: '未备案',
		// 项目开始时间
		startYear: '2021',
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

		valineConfig: {
		appId: '49jkGf2oBGQVBrtKlt6FFIpj-gzGzoHsz',// your appId
		appKey: 'DhlslGj8aJcgonv1zAAFVW9e',
		}
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
				clean: true,
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
		[
			//先安装在配置， npm install vuepress-plugin-meting --save
			'meting', {
			metingApi: "https://api.i-meto.com/meting/api",
			meting: {
				server: "netease",
				type: "album",
				mid: "2085175",
			},         // 不配置该项的话不会出现全局播放器
			aplayer: {
				fixed:true,
				lrcType: 3,
				order:'random',
			}
		}
		],
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
				showText: "lilcandle (/≧▽≦/)咦！又好了！",
				hideIcon: "/favicon.ico",
				hideText: "lilcandle (●—●)客观别走哇！",
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
		['@vuepress/pwa', {
			serviceWorker: true,
			updatePopup: {
				message: "发现新内容可用",
				buttonText: "刷新"
			}
		}],
			['copyright',
				{
					authorName: 'lilcandle', // 选中的文字将无法被复制
					minLength: 30, // 如果长度超过  30 个字符
				}],
		//["vuepress-plugin-boxx"],
		// ['@vuepress-reco/comments', {
		// 	solution: 'valine',
		// 	options: {
		// 		appId: '49jkGf2oBGQVBrtKlt6FFIpj-gzGzoHsz',// your appId
		// 		appKey: 'DhlslGj8aJcgonv1zAAFVW9e', // your appKey
		// 		visitor:true,
		// 	}
		// }],

	]
}


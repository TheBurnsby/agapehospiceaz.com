Oxe.setup({
	loader: {
		esm: true,
		est: true
	},
	router: {
		hash: true,
		base: '/articles/',
		container: document.querySelector('.o-root'),
		routes: [
			{
				title: 'Hospice Stories | Agape Hospice &amp; Palliative Care',
				path: '/',
				component: 'view-home',
				url: '/articles/views/view-home.js'
			},
			{
				path: '/{*}',
				component: 'view-article',
				url: '/articles/views/view-article.js'
			}
		]
	}
});

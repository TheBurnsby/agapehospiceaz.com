import Articles from '/articles/articles.js';
import GetArticles from '/articles/modules/get-articles.js';

Oxe.component.define({
	name: 'view-article',
	model: {
		title: '',
		article: '',
		keywords: '',
		description: '',
		thumbnail: ''
	},
	attached: function () {
		var self = this;
		var article = GetArticles();
		var keywords = document.querySelector('meta[name="keywords"]');
		var description = document.querySelector('meta[name="description"]');
		var ogImage = document.querySelector('meta[property="og:image"]');
		var ogTitle = document.querySelector('meta[property="og:title"]');

		self.model.title = article.title;
		self.model.article = article.article;

		keywords.content = self.model.keywords;
		description.content = self.model.description;
		ogImage.content = self.model.thumbnail;
		ogTitle.content = self.model.title + ' | ' + ' Hospice Story';
		document.title = self.model.title + ' | ' + ' Hospice Story';

	},
	html: `
	<div class="row">
		<div class="small-12 columns">
			<a class="read-more" href="/"><i class="fa fa-backward" aria-hidden="true"></i> Back to Hospice Stories</a>
			<h1 o-text="title"></h1>
			<div o-html="article"></div>
		</div>
	</div>
	`
});

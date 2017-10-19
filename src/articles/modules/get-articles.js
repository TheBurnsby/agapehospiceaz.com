import Articles from '/articles/articles.js';

var isHash = Oxe.router.hash;
var allArticles = Articles.sections;

export default function getArticle () {
	var link = Oxe.router.location.pathname;
	console.log(link);
	link = isHash ? '#' + link: link;
	for (var i = 0, l = allArticles.length; i < l; i++) {
		if (allArticles[i].link === link) {
			return allArticles[i];
		}
	}
};

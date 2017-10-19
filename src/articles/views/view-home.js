import Articles from '/articles/articles.js';

Oxe.component.define({
	name: 'view-home',
	model: Articles,
	modifiers: {
		preview: function (data) {
			return data.match(/.*?\s/g).slice(0, 50).join('') + ' ...';
		}
	},
	created: function () {
		console.log(this.model);
	},
	html: `
	<div class="row">
		<div class="small-12 medium-4 columns">
			<ul class="side-menu">
				<h3>More Stories</h3>
				<li><a href="/a-non-medical-hospice-intervention">A Non Medical Hospice Intervention</a></li>
				<li><a href="/the-make-over">The Make-Over</a></li>
				<li><a href="/oped">Study Shows Benefits of Hospice Care for People with Cancer Diagnosis</a></li>
				<li><a href="/date-night">Date Night</a></li>
				<li><a href="/survey-week">Survey Week</a></li>
				<li><a href="/waiting">Waiting</a></li>
				<li><a href="/team-approach">The Team Approach</a></li>
			</ul>

		</div>
		<div o-each-section="sections" class="small-12 medium-8 columns">
			<div>
				<a o-href="section.link">
				<img o-src="section.thumbnail" o-alt="section.thumbAlt" class="thumbnail"></a>
				<h3 o-text="section.title"></h3>
				<div o-html="section.article | preview"></div>
				<a class="read-more" o-href="section.link">Read More</a>
			</div>
		</div>
	</div>
	`
});

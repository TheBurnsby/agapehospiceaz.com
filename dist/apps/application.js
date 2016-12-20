document.addEventListener('DOMContentLoaded', function () {
	$('.sliderA').slick({
		dots: true,
		slidesToShow: 1,
		speed: 1000,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false
	});
	var form = document.querySelector('.form');
	if (form) {
		Astatine.submit({
			query: form,
			method: 'post',
			responseType: 'json',
			action: 'https://www.enformed.io/hab8voqf',
			prepare: function (data, resolve, reject) {
				// data['*default_email'] = 'alex.steven.elias@gmail.com';
				// data['*cc'] = 'aelias@webcabdesign.com';
				if (!data['*default_email']) data['*default_email'] = 'admin@agapehospiceaz.com';
				// if (!data['*cc']) data['*cc'] = 'jburns@webcabdesign.com';

			resolve(data);
			},
			complete: function (error, success) {
				var response = document.querySelector('.response');
				if (error) {
					console.log(error);
					response.style.color = 'red';
					response.innerText = 'Error Plese See Console';
				} else {
					form.style.display = 'none';
					response.style.color = '#6d387a';
					response.innerText = 'Form Is Submitted';
				}
			}
		});
	}
});

$(document).foundation();

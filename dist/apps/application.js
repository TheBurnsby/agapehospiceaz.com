document.addEventListener('DOMContentLoaded', function () {
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
	var clay = document.querySelector('.clay');
	var paint = document.querySelector('.paint');
	var gallery = document.querySelector('.gallery');
	var celebration1 = document.querySelector('.col-2017-1')
	var clayWorkshop = 'https://res.cloudinary.com/dbc2wlvk8/image/list/clay-workshop.json';
	var paintWorkshop = 'https://res.cloudinary.com/dbc2wlvk8/image/list/paint-workshop.json';
	var col20171 = 'https://res.cloudinary.com/dbc2wlvk8/image/list/col2017-1.json';
	function getPhotos (feed) {
		Astatine.ajax({
			method: 'get',
			action: feed,
			success: function (xhr) {
				var list = JSON.parse(xhr.response);
				var largeImages = [];
				var smallImages = [];

				for (var i = 0, l = list.resources.length; i < l; i++) {
					var item = list.resources[i];
					largeImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/f_auto,fl_any_format.lossy,a_auto_right/' + item.public_id + '.' + item.format);
					smallImages.push('https://res.cloudinary.com/dbc2wlvk8/image/upload/f_auto,fl_any_format.lossy,w_100/' + item.public_id + '.' + item.format);
				}

				erbium.gallery.create('.gallery', largeImages, smallImages);
			},
			error: function (xhr) {
				console.log(xhr);
			}
		});
	}
	if (clay) getPhotos(clayWorkshop);
	else if (paint) getPhotos(paintWorkshop);
	else if (celebration1) getPhotos(col20171);

});

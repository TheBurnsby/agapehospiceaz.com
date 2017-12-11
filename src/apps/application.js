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

var marker;
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 32.2611219, lng: -110.8916802},
          zoom: 12,
		  styles: [
				    {
				        "featureType": "administrative",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "lightness": 33
				            }
				        ]
				    },
				    {
				        "featureType": "landscape",
				        "elementType": "all",
				        "stylers": [
				            {
				                "color": "#f2e5d4"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#c5dac6"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.park",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "road",
				        "elementType": "all",
				        "stylers": [
				            {
				                "lightness": 20
				            }
				        ]
				    },
				    {
				        "featureType": "road.highway",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#94729c"
				            }
				        ]
				    },
				    {
				        "featureType": "road.arterial",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#e4d7c6"
				            }
				        ]
				    },
				    {
				        "featureType": "road.local",
				        "elementType": "geometry",
				        "stylers": [
				            {
				                "color": "#f5f5f5"
				            }
				        ]
				    },
				    {
				        "featureType": "water",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "on"
				            },
				            {
				                "color": "#acbcc9"
				            }
				        ]
				    }
				]

        });
	  marker = new google.maps.Marker({
		 map: map,
		 draggable: false,
		 animation: google.maps.Animation.DROP,
		 position: {lat: 32.2611219, lng: -110.8916802}
	   });
	   marker.addListener('click', toggleBounce);
	 }
	 function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

var bioToggles = document.querySelectorAll('.bio-toggle');
var bios = document.querySelectorAll('.bio');

function openBio () {
	for (var i = 0; i < bioToggles.length; i++) {
		var toggle = bioToggles[i];

		var closeBtn = document.createElement('div');
		var x = document.createElement('i');
		closeBtn.setAttribute('class', 'button close');
		x.setAttribute('class', 'material-icons');
		x.innerText = 'close';
		closeBtn.appendChild(x);

		toggle.addEventListener('click', function () {
			var thisBio = this.nextSibling.nextSibling;
			thisBio.appendChild(closeBtn);
			thisBio.classList.toggle('active');
			document.body.setAttribute('style', 'overflow-y: hidden');
		});
		
		closeBtn.addEventListener('click', function () {
			var thisBio = this.parentNode;
			thisBio.classList.toggle('active');
			document.body.removeAttribute('style');

		});

	}
}
openBio();

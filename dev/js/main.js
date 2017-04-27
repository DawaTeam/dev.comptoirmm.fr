/* ####   HOME SLIDER   ### */
var SliderHome = {
	init : function() {
		var hero = new Swiper('.swiper-hero', {
		    nextButton: '.hero-button-next',
		    prevButton: '.hero-button-prev',
		    autoplay: 5000,
		    autoplayDisableOnInteraction: false

		});
	},

	calcHeight : function() {
		var $infos = $('.hero .swiper-slide .infos');
		var $imageH = $('.hero .swiper-slide .picture').height();
		if ( window.innerWidth >= 992 ) {
			$infos.css('height',$imageH );
		}
	}
}

/* ####   HOME LAST TOPICS   ### */
var SlideLastTopics = {
	init : function() {
		var lastTopics = new Swiper('.swiper-last-topics', {
			slidesPerView: 2,
	        spaceBetween: 40,
	        breakpoints: {
	            1024: {
	                slidesPerView: 2,
	                spaceBetween: 40
	            },
	            768: {
	                slidesPerView: 2,
	                spaceBetween: 30
	            },
	            640: {
	                slidesPerView: 'auto',
	                spaceBetween: 20
	            },
	            320: {
	                slidesPerView: 'auto',
	                spaceBetween: 10
	            }
	        },
	        noSwiping : true,
		});
		if (window.innerWidth >= 768 ) {
			$('.swiper-last-topics .swiper-slide').addClass('swiper-no-swiping');
		} 

	}
}
/* ####   HOME STUDIES PUSH  ### */
var SlideStudies = {
	init : function() {
		var Studies = new Swiper('.swiper-studies', {
			slidesPerView: 3,
			slidesPerGroup: 3,
	        spaceBetween: 40,
	        nextButton: ".studies-button-next",
	        prevButton: ".studies-button-prev",
	        breakpoints: {
	            1200: {
	                slidesPerView: 3,
	                slidesPerGroup: 3,
	                spaceBetween: 40
	            },
	            991: {
	                slidesPerView: 2,
	                slidesPerGroup: 2,
	                spaceBetween: 40
	            },
	            767: {
	                slidesPerView: 3,
	                slidesPerGroup: 3,
	                spaceBetween: 30
	            }
	        },
	        noSwiping : true,
		});
		if (window.innerWidth < 768 ) {
			$('.swiper-studies .swiper-slide').addClass('swiper-no-swiping clearfix');
		}
		 

	}
}

/* ####   HOME AGENDA  ### */
var SlideAgenda = {
	slideDate : function() {
		var Studies = new Swiper('.swiper-agenda', {
			slidesPerView: 3,
			slidesPerGroup: 1,
	        nextButton: ".agenda-button-next",
	        prevButton: ".agenda-button-prev",
	        direction: 'vertical',
	        breakpoints: {
	        	768: {
	        		direction: 'horizontal',
	        		slidesPerView: 1,
	        		slidesPerGroup: 1,
	        	}
	        },
	        onSlideChangeEnd: function() {
	        	var eventId = $(".swiper-agenda .swiper-slide-active a");
	        	$(eventId).tab('show');

	        }
		});
		if (window.innerWidth < 768 ) {
			Studies.params.direction = "horizontal";
			Studies.params.slidesPerView = 1;
			Studies.update();
		}		 
	}
}


/* ####   STUDIES - TOGGLE FILTERS  ### */
var ToggleFilters = {
	init : function() {
		toggleButton = $(".studies-single .filters .toggle-button");
		filters = $(".studies-single .filters");
		toggleButton.on("click", function() {
			filters.toggleClass('open');

		});
	}
}
/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){
	$(document).ready(function(){

		//Initially popovers
		//-----------------------------------------------
		$('#citationOne').popover({
			content: 'Mayer, Jane. &ldquo;What\'s the Matter with Metadata?&rdquo; The New Yorker. June 6, 2013. Accessed October 26, 2015. <a href="http://www.newyorker.com/news/news-desk/whats-the-matter-with-metadata">http://www.newyorker.com/news/news-desk/whats-the-matter-with-metadata</a>.',
			delay: {hide: 500},
			html: true,
			placement: 'auto top',
			trigger: 'hover'
		});

		$('#citationTwo').popover({
			content: 'Lohr, Steve. &ldquo;How Privacy Vanishes Online.&rdquo; The New York Times. March 16, 2010. Accessed October 13, 2015. <a href="http://www.nytimes.com/2010/03/17/technology/17privacy.html">http://www.nytimes.com/2010/03/17/technology/17privacy.html</a>.',
			delay: {hide: 500},
			html: true,
			placement: 'auto top',
			trigger: 'hover'
		});

		$('#citationThree').popover({
			content: 'Seng, David. &ldquo;Early Hackers and Privacy.&rdquo; Interview by author. October 20, 2015.',
			delay: {hide: 500},
			html: true,
			placement: 'auto top',
			trigger: 'hover'
		});

		$('#citationFour').popover({
			content: 'Stallman, Richard. &rdquo;Freedom in Your Computer and in the Net.&rdquo; Lecture, 31st Chaos Communication Congress, Congress Center Hamburg, Hamburg, Germany, December 29, 2014.',
			delay: {hide: 500},
			html: true,
			placement: 'auto top',
			trigger: 'hover'
		});

		$('#citationFive').popover({
			content: 'Goldfarb, Avi, and Catherine E. Tucker. &ldquo;Online advertising, behavioral targeting, and privacy.&rdquo; Communications of the ACM 54, no. 5 (2001): 25-27.',
			delay: {hide: 500},
			html: true,
			placement: 'auto top',
			trigger: 'hover'
		});

		$('#citationSix').popover({
			content: 'Pollach, Irene. &ldquo;What\'s wrong with online privacy policies?.&rdquo; Communications of the ACM 50, no. 9 (2007): 103-108.',
			delay: {hide: 500},
			html: true,
			placement: 'auto top',
			trigger: 'hover'
		});


		$('#reciever').popover({
			content: '<b>Sender.</b> '
				 + 'The sender of the email reveals quite a bit about themself with every outbound email. Their IP address is attached to every email, giving a pretty good idea about where a user is physically. For example, the 128.196.0.0 block is entirely located within Tucson, Arizona. More precise locations can be approximated by knowing the specific infastructure of certain areas, such as the University of Arizona. In some cases, the location could be narrowed down to a specific building... or, in extreme circumstances, a single room.',
			html: true,
			placement: 'top',
			trigger: 'hover'
		});

		$('#sender').popover({
			content: '<b>Reciever.</b> ' +
			' Just because the sender has good email security does not mean that their emails are safe once they leave their outbox. Metadata can be leaked by recievers unwittingly, so always know who your emails are being sent to. The 150.135.0.0 IP block is either located in Arizona or Austrilia; given the email address, though, it\'s pretty clear which is the correct physical location.',
			html: true,
			placement: 'left',
			trigger: 'hover'
		});

		$('#provider').popover({
			content: '<b>Service provider.</b> ' +
			'Many parties handle emails before they arrive at their destination. This email may have traveled through as many as several hundred servers and computers before ending at Google. By looking at the history of the email, and seeing where all it went, prime locations for hacking are revealed; extracting information from Google is nearly impossible given their security, but are all of the intermediate companies as vigilant about protecting data as Google?',
			html: true,
			placement: 'right',
			trigger: 'hover'
		});

		$('#subject').popover({
			content: '<b>Subject.</b> ' +
			'The subject has all of the information a third party needs; clearly, Elizabeth is a professor at the University of Arizona, and Colby is one of her students. The specificts of which class is involved is not important. Now, we can analyze future emails within the context of knowing an approximate age and profession for both of these parties. Subject lines are almost always visible within metadata.',
			html: true,
			placement: 'left',
			trigger: 'hover'
		});

		$('#size').popover({
			content: '<b>Content size.</b> ' +
			'The content size reveals as much about an email as shaking a package; the tiny size of the email indicates that it is primarily text, and not much of it. Should the email have been larger, we could guess that photos or documents were being exchanged. We could, in some cirmustances, even figure out what types of files were being exchanged, and from there make very, very educated guesses on the exact nature of those files.',
			html: true,
			placement: 'right',
			trigger: 'hover'
		});

		$('#timestamp').popover({
			content: '<b>Timestamp.</b> ' +
			'By collected many emails and analyzing them together, the schedules of the sender and reciever can be approximated. If Elizabeth only sends emails between the hours of nine am to five pm, then that is probably when she is at work &mdash; and away from home. However, because she is emailing at seven o\'clock in the evening, it\'s clear she is dedicated to her work; if this is normal behavior, then we can start to form a picture of her personality.',
			html: true,
			placement: 'bottom',
			trigger: 'hover'
		});
		$('#relationship').popover({
			content: '<b>Relationships.</b> ' + 
			'A sender / reciever relationship is easily established by collecting many emails and analyzing all of them together. If Elizabeth and Colby have lots of correpsondences, and likewise have similar email patterns with other people, then a large network of contacts can be formed, linking people together and forming pretty clear images about circles of friends and coworkers.',
			html: true,
			placement: 'bottom',
			trigger: 'hover'
		});
	
		$(".banner-image").backstretch('public/images/banner.jpg');
		
		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 152
			});
		}

		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready
})(this.jQuery);

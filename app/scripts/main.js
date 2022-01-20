console.log('\'Allo \'Allo!');
	// menu sticky on scroll - Scrolling Effect

	$(window).on("scroll", function () {
		if ($(window).scrollTop()) {
			$("#masthead").addClass("fixed");
		} else {
			$("#masthead").removeClass("fixed");
		}
	});


	// Show menu in mobile
	$(".burger").click(function () {
		var self = $(this);
		var body = $("body");
		var siteMenu = $(".menu-main-menu-container");

		if (!self.hasClass("open")) {
			self.addClass("open");
			siteMenu.addClass("open show");
			body.addClass("no-scroll");
		} else {
			self.removeClass("open");
			siteMenu.removeClass("open");
			siteHeader.removeClass("open");
			setTimeout(function () {
				siteMenu.removeClass("show");
				body.removeClass("no-scroll");
			}, 200);
		}
	});

	// submenu open
	$(".menu-item-has-children > a").click(function (e) {
		e.preventDefault();
		$(".menu-item-has-children").toggleClass("active");
		$(".menu-item-has-children .sub-menu").toggleClass("open");
	});

	$(document).click(function (e) {
		$(".menu-item-has-children").each(function () {
			var container = $(".menu-item-has-children");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				$(this).removeClass("active");
				$(".menu-item-has-children .sub-menu").removeClass("open");
			}
		});
	});

	// modal open
	$(".menu-main-menu-container ul:not(.sub-menu) > li:last-child a").click(
		function (e) {
			e.preventDefault();
			var self = $(this);
			var body = $("body");
			var siteMenu = $(".modal-content");

			if (!self.hasClass("open")) {
				self.addClass("open");
				siteMenu.addClass("open show");
				body.addClass("no-scroll");
			} else {
				self.removeClass("open");
				siteMenu.removeClass("open");
				setTimeout(function () {
					siteMenu.removeClass("show");
					body.removeClass("no-scroll");
				}, 200);
			}
		}
	);

	// modal close
	$(".modal-content .close").click(function (e) {
		e.preventDefault();
		var self = $(this);
		var body = $("body");
		var siteMenu = $(".modal-content");
		var siteMenuLink = $(".menu-main-menu-container ul li:last-child a");

		siteMenuLink.removeClass("open");
		siteMenu.removeClass("open");
		setTimeout(function () {
			siteMenu.removeClass("show");
			body.removeClass("no-scroll");
		}, 200);
	});


  	//check to see if the submited cookie is set, if not check if the popup has been closed, if not then display the popup
	showcookiePopup();

	function showcookiePopup() {
		var cookieInfo = get_cookie('COOKIE_INFO');
		$(".footer__cookie").hide();
		if (cookieInfo == null) {
			$(".footer__cookie").show();
			if ($('body').hasClass("page-eventLanding")) {
				$('body').addClass("cventCookie");
			}
		}
		$("button.btn-agree").click(function () {
			console.log(1);
			// $(".footer__cookie").css("margin-top", -$(".footer__cookie").height() + "px")
			$(".footer__cookie").hide();
			createCookie('COOKIE_INFO', 'Y', 30);
			if ($('body').hasClass("cventCookie")) {
				$('body').removeClass("cventCookie");
			}
		});
	}

	function get_cookie(cookie_name) {
		var results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
		if (results)
			return (unescape(results[2]));
		else
			return null;
	}

	function createCookie(cname, cvalue, days) {
		var expires = "";
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		document.cookie = cname + '=' + cvalue + expires + '; path=/';
	}


	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}


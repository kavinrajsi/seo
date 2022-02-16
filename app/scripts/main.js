console.log("'Allo 'Allo!");

// all page animation
AOS.init({
  once: true,
  mirror: false,
});

// service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((serviceWorker) => {
      console.log("Service Worker registered: ", serviceWorker);
    })
    .catch((error) => {
      console.error("Error registering the Service Worker: ", error);
    });
}

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
  var siteMenu = $(".main-navigation");

  if (!self.hasClass("open")) {
    self.addClass("open");
    siteMenu.addClass("open show");
    body.addClass("no-scroll");
  } else {
    self.removeClass("open");
    siteMenu.removeClass("open show");
    body.removeClass("no-scroll");
    setTimeout(function () {
      siteMenu.removeClass("show");
    }, 200);
  }
});

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

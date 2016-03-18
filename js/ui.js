// function flipInterval(e) {
//     var t = $("img.animated", e)
//       , o = $("img.fixed", e)
//       , i = ["left", "right", "top", "bottom"];
//     t.attr("class", "fixed");
//     var n = i[Math.floor(4 * Math.random())];
//     o.attr("class", n),
//     setTimeout(function() {
//         o.addClass("animated")
//     }, 650),
//     setTimeout(function() {
//         flipInterval(e)
//     }, 6e3)
// }
// function positionContent() {
//     var e = "";
//     $(window).width() < 1180 && (e += " layout-1180"),
//     $wrapperHome.attr("class", e),
//     $wrapper.attr("class", e),
//     $headerHome.css("margin-top", -$headerHome.height() / 2),
//     $("> ul > li > img", $sectionHome).each(function() {
//         var e = $(this)
//           , t = $(this).parent()
//           , o = t.width()
//           , i = t.height()
//           , n = 1280 / 720
//           , a = o / i;
//         a > n ? e.height(i).width(i * n).css("left", o / 2 - i * n / 2 + "px").css("top", "0") : e.width(o).height(o / n).css("left", "0").css("top", i / 2 - o / n / 2 + "px")
//     }),
//     $projectsListing.each(function() {
//         $(this).width($(this).parent().width() + 14)
//     }),
//     $(".btn-previous-project").each(function() {
//         var e = ($wrapper.width() - $(".centered").width()) / 4 - $(this).width() / 2
//           , t = ($(window).height() - $header.height()) / 2 - $(this).height() / 2 + $header.height();
//         $(".btn-previous-project").css({
//             left: e,
//             top: t
//         }),
//         $(".btn-next-project").css({
//             right: e,
//             top: t
//         }),
//         $(".btn-back-top").css({
//             right: -(e + 43)
//         }),
//         $(".btn-toggle").width($(".main-nav", $header).width())
//     }),
//     scrollContent()
// }
// function scrollContent() {
//     $(document).height() - $(window).height();
//     newScroll = browserMobile ? $(window).scrollTop() : "Safari" == whichBrs() || "Chrome" == whichBrs() ? $("body").scrollTop() : $("html,body").scrollTop(),
//     $flipImg.each(function() {
//         newScroll + $(window).height() >= $(this).offset().top + 50 && newScroll > currentScroll && $(this).addClass("animated"),
//         !browserMobile && newScroll + $(window).height() <= $(this).offset().top + 250 && currentScroll > newScroll && $(this).removeClass("animated")
//     }),
//     currentScroll = newScroll
// }
// function initializeMap() {
//     {
//         var e = new google.maps.LatLng(45.502013,-73.559614)
//           , t = {
//             zoom: 15,
//             center: e,
//             disableDefaultUI: !0,
//             mapTypeId: google.maps.MapTypeId.ROADMAP,
//             styles: [{
//                 stylers: [{
//                     saturation: -100
//                 }]
//             }, {
//                 featureType: "road",
//                 elementType: "labels.text",
//                 stylers: [{
//                     visibility: "on"
//                 }, {
//                     gamma: 1.85
//                 }, {
//                     lightness: 11
//                 }]
//             }, {
//                 featureType: "poi",
//                 stylers: [{
//                     visibility: "off"
//                 }]
//             }]
//         }
//           , o = new google.maps.Map(document.getElementById("map_canvas"),t)
//           , i = new google.maps.MarkerImage("images/layout/map_pin.png",new google.maps.Size(32,31),new google.maps.Point(0,0),new google.maps.Point(16,16));
//         new google.maps.Marker({
//             position: new google.maps.LatLng(45.502013,-73.559614),
//             map: o,
//             icon: i
//         })
//     }
// }
// function whichBrs() {
//     var e = navigator.userAgent.toLowerCase();
//     return -1 != e.indexOf("opera") ? "Opera" : -1 != e.indexOf("staroffice") ? "Star Office" : -1 != e.indexOf("webtv") ? "WebTV" : -1 != e.indexOf("beonex") ? "Beonex" : -1 != e.indexOf("chimera") ? "Chimera" : -1 != e.indexOf("netpositive") ? "NetPositive" : -1 != e.indexOf("phoenix") ? "Phoenix" : -1 != e.indexOf("firefox") ? "Firefox" : -1 != e.indexOf("chrome") ? "Chrome" : -1 != e.indexOf("safari") ? "Safari" : -1 != e.indexOf("skipstone") ? "SkipStone" : -1 != e.indexOf("msie") ? "Internet Explorer" : -1 != e.indexOf("netscape") ? "Netscape" : -1 != e.indexOf("mozilla/5.0") ? "Mozilla" : -1 != e.indexOf("/") ? "mozilla" != e.substr(0, e.indexOf("/")) ? navigator.userAgent.substr(0, e.indexOf("/")) : "Netscape" : -1 != e.indexOf(" ") ? navigator.userAgent.substr(0, e.indexOf(" ")) : navigator.userAgent
// }
// var browserIE = !1;
// "Internet Explorer" == whichBrs() && (browserIE = !0);
// var browserMobile = !1;
// $("body").hasClass("layout-mobile") && (browserMobile = !0);
// var $wrapperHome = $("#wrapper-home"), $headerHome = $("#header", $wrapperHome), $sectionHome = $("#section", $wrapperHome), $footerHome = $("#footer", $wrapperHome), $imgFitHome = $("> ul > li > img", $sectionHome), $wrapper = $("#wrapper"), $header = $("#header", $wrapper), $flipImg = $(".flip-image"), $projectsListing = $(".listing-projects"), animRunning = !1, currentScroll = -1, svgButton, randObject = Math.floor(Math.random() * $("> ul", $sectionHome).length);
// $("> ul", $sectionHome).eq(randObject).addClass("active").removeClass("new").show(),
// $("> ul.active > li", $sectionHome).each(function() {
//     $(this).html('<img src="' + $(this).attr("data-img-src") + '" alt="" />')
// }),
// $("> ul.new", $sectionHome).hide().css("opacity", "0"),
// $(window).load(function() {
//     $("> ul > li", $sectionHome).each(function() {
//         "" == $(this).html() && $(this).html('<img src="' + $(this).attr("data-img-src") + '" alt="" />')
//     }),
//     $wrapperHome.each(function() {
//         $("a", $footerHome).on("mouseenter", function() {
//             $(".static", this).css("color", $("> ul.active", $sectionHome).css("background-color"))
//         }).on("mouseleave", function() {
//             $(".static", this).css("color", $("p", $headerHome).css("color"))
//         })
//     }),
//     $wrapperHome.on("click", function(e) {
//         if ("A" != e.target.tagName && 0 == $(e.target).parents("a").length && !animRunning) {
//             animRunning = !0;
//             var t = $("> .new", $sectionHome).length;
//             1 == t && ($("> ul:not(.active)", $sectionHome).addClass("new"),
//             t = $("> .new", $sectionHome).length);
//             var o = Math.floor(Math.random() * t)
//               , i = [];
//             $("> .active", $sectionHome).removeClass("active"),
//             $("> .new", $sectionHome).each(function() {
//                 i.push($(this).index())
//             }),
//             $("> ul", $sectionHome).eq(i[o]).removeClass("new").addClass("active").show().animate({
//                 opacity: 1
//             }, 450, function() {
//                 $("> ul:not(.active)", $sectionHome).css("opacity", "0").hide(),
//                 animRunning = !1
//             }),
//             positionContent()
//         }
//     }),
//     browserMobile ? ($("html, body").scrollTop(1),
//     $wrapperHome.on("touchmove", function(e) {
//         $("> ul", $sectionHome).each(function() {
//             e.preventDefault();
//             var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
//               , o = t.pageX
//               , i = $wrapperHome.width() / 2
//               , n = Math.abs(o - i)
//               , a = parseFloat($(this).attr("data-speed"))
//               , s = $("> li", this).length
//               , r = Math.floor(n / a % s);
//             i > o && (r = Math.abs(r - (s - 1))),
//             $("> li.active", this).removeClass("active"),
//             $("> li", this).eq(r).addClass("active")
//         })
//     })) : $wrapperHome.on("mousemove", function(e) {
//         $("> ul", $sectionHome).each(function() {
//             var t = e.pageX
//               , o = $wrapperHome.width() / 2
//               , i = Math.abs(t - o)
//               , n = parseFloat($(this).attr("data-speed"))
//               , a = $("> li", this).length
//               , s = Math.floor(i / n % a);
//             o > t && (s = Math.abs(s - (a - 1))),
//             $("> li.active", this).removeClass("active"),
//             $("> li", this).eq(s).addClass("active")
//         })
//     }),
//     $flipImg.each(function() {
//         $(".hover", this).css("background-color", "#" + $(this).attr("data-color")),
//         browserMobile && $(this).addClass("animated")
//     }),
//     $("> .slider", $projectsListing).each(function() {
//         var e = $(this)
//           , t = 3e3 * (e.index() + 1);
//         setTimeout(function() {
//             flipInterval(e)
//         }, t)
//     }),
//     $(".project-infos").each(function() {
//         var e = $(this).attr("data-color");
//         $("#header .logo, .btn-previous-project, .btn-next-project, .btn-back-top").css("background-color", "#" + e),
//         $(".link-toggle a").css("color", "#" + e),
//         $(".btn-toggle", this).on("click", function() {
//             return $(this).toggleClass("opened"),
//             $(this).siblings(".content-toggle").slideToggle(450),
//             $(this).siblings(".link-toggle").toggleClass("opened"),
//             !1
//         }),
//         $(".btn-back-top").on("click", function() {
//             return $("html, body").animate({
//                 scrollTop: 0
//             }, 750, "easeInOutQuad"),
//             !1
//         }),
//         svgButton = new svgIcon(document.querySelector(".si-icon-plus"),svgIconConfig,{
//             easing: mina.backin,
//             size: {
//                 w: 25,
//                 h: 25
//             },
//             onLoad: function() {
//                 $(".si-icon-plus path").css("stroke", "#" + e)
//             }
//         })
//     }),
//     $(".video-player").on("click", function() {
//         var e = $(this).attr("data-video-src").split("|")
//           , t = e[0]
//           , o = e[1]
//           , i = $(".project-infos").attr("data-color");
//         switch (t) {
//         case "youtube":
//             var n = '<iframe width="560" height="315" src="//www.youtube.com/embed/' + o + '?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>';
//             break;
//         case "vimeo":
//             var n = '<iframe src="//player.vimeo.com/video/' + o + "?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=" + i + '" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
//         }
//         return $(".video-container", this).html(n),
//         !1
//     });
//     var e = [];
//     $(".content-toggler > li > a").each(function() {
//         var t = "#" + $(this).attr("id")
//           , o = new svgIcon(document.querySelector(t),svgIconConfig,{
//             easing: mina.backin,
//             size: {
//                 w: 25,
//                 h: 25
//             },
//             onLoad: function() {
//                 $(".si-icon-plus path").css("stroke", "#fff")
//             }
//         });
//         e.push(o)
//     }).on("click", function() {
//         if ($(this).parent().hasClass("opened"))
//             $(this).parent().removeClass("opened"),
//             $(this).siblings("div").animate({
//                 height: 0
//             }, 750, "easeInOutQuad");
//         else {
//             var t = $(this).parent().siblings(".opened").index();
//             -1 != t && e[t].toggle(),
//             $(this).parent().siblings(".opened").find("> .si-icon").trigger("click"),
//             $(this).parent().addClass("opened"),
//             $(this).siblings("div").animate({
//                 height: $(this).siblings("div").children("ul").outerHeight()
//             }, 750, "easeInOutQuad", function() {
//                 $(this).height("auto")
//             })
//         }
//         return !1
//     }),
//     positionContent();
//     var t = 1;
//     browserMobile && 1 == $wrapperHome.length && (t = 2e3),
//     setTimeout(function() {
//         $("#loading-mask").fadeOut(750, function() {
//             positionContent()
//         }),
//         $("#map_canvas").each(function() {
//             initializeMap()
//         })
//     }, t)
// }),
// $(window).resize(function() {
//     positionContent()
// }),
// $(window).scroll(function() {
//     scrollContent()
// });

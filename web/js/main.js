"use strict";$(document).ready(function(){$("#fullpage").fullpage({anchors:["firstPage","secondPage","thirdPage","fourthPage","fivePage"],menu:"#menu",slidesNavigation:!0}),$("portfolio-item").isotope({itemSelector:".item",layoutMode:"fitRows"}),$(".portfolio-menu ul li").click(function(){$(".portfolio-menu ul li").removeClass("active"),$(this).addClass("active");var e=$(this).attr("data-filter");return $(".portfolio-item").isotope({filter:e}),!1})});
//# sourceMappingURL=main.js.map

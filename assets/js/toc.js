var toc = $(".section-nav");
var contentTop = $(".post-content").offset().top;
var absoluteY = toc.offset().top;

$(window).scroll(function (event) {
  //var scroll = $(window).scrollTop();
  //var fixedY = 20;
  //var topY = scroll >= absoluteY ? scroll + fixedY : contentTop + 20;
  //toc.css('top', topY);
  // if (scroll >= absoluteY - fixedY && $(window).width() >= 1450) {
  // }
  // else {
  //   toc.removeClass('markdown-toc-fixed')
  // }
});

$(".section-nav a").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 600,
    easing: "swing"
  });
  return false;
});

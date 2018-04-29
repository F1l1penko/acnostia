// const App = {
//   init() {
//     this.handlers();
//   },

//   handlers() {
//     $('body').on('click', function() { App.onClick(this); });
//   },

//   onClick(el) {
//     console.log('Click', el);
//   }
// };

// $(document).ready(() => {
//   App.init();
// });


$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
    menu:'#menu',
    slidesNavigation: true,
  });
  $('portfolio-item').isotope({
  	itemSelector: '.item',
  	layoutMode: 'fitRows'
  });
  $('.portfolio-menu ul li').click(function(){
  	$('.portfolio-menu ul li').removeClass('active');
  	$(this).addClass('active');

  	var selector = $(this).attr('data-filter');
  	$('.portfolio-item').isotope({
  		filter: selector
  	});
  	return false;
  });
});

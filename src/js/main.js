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
});

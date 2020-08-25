;(function($){
  "use strict";

  // NAVIGATION
  var responsiveNav = $('.left_sidebar_area'),
    catToggle = $('.left_sidebar_area .l_categories_widget .l_title'),
    catList = $('.left_sidebar_area .l_categories_widget .category-list'),
    //menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    //menuList = $('#responsive-nav .menu-nav .menu-list');

  catToggle.on('click', function() {
    //menuList.removeClass('open');
    catList.toggleClass('open');
    //catList.addClass('open');
  });

/*  menuToggle.on('click', function() {
    catList.removeClass('open');
    menuList.toggleClass('open');
  });*/

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass('open')) {
        responsiveNav.removeClass('open');
        //$('#navigation').removeClass('shadow');
      } else {
      /*  if ($(event.target).closest('.nav-toggle > button').length) {
          if (!menuList.hasClass('open') && !catList.hasClass('open')) {
            menuList.addClass('open');
          }
          //$('#navigation').addClass('shadow');
          responsiveNav.addClass('open');
        }*/
      }
    }
  });

})(jQuery)

$(function() {
   // menu active class add
   if(location.pathname === "/"){
      $(".main-menu__list a[href='/']").addClass("active");
   } 
   else{
      $('.main-menu__list a[href^="/' + location.pathname.split("/")[1] + '"]').addClass("active");
   }
    
    // dynamic years in select form
    var start = 1980;
    var end = new Date().getFullYear();
    var options = "";
    for (var year = end; year >= start; year--) {
        options += "<option value='" + year + "' >" + year + "</option>";
    }
    var select_year = $("#select_year");
    if(select_year){
        select_year.append(options);
    }
  
	// auto hide top bar on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#hide_on_scroll').slideUp('slow');
        } else {
            $('#hide_on_scroll').slideDown('slow');
        }
    });
    
});
$(function () { $("[data-toggle='tooltip']").tooltip(); });

$(document).ready(function() {
  $("a[rel=recent_work]").fancybox({
        'transitionIn'    : 'elastic',
        'transitionOut'   : 'elastic',
        'titlePosition'   : 'over',
        'titleFormat'   : function(title, currentArray, currentIndex, currentOpts) {
          return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
      });
  $(".nav_about").click(function(){
    $.scrollTo('#about',800);
  });
  $(".nav_skills").click(function(){
    $.scrollTo('#skills',800);
  });
  $(".nav_experiences").click(function(){
    $.scrollTo('#experiences',800);
  });
  $(".nav_evaluation").click(function(){
    $.scrollTo('#evaluation',800);
  });
  $('figure a img').animate({'opacity' : 1}).hover(function() {
        $(this).animate({'opacity' : .5 });
      }, function() {
        $(this).animate({'opacity' : 1});
      });
  });
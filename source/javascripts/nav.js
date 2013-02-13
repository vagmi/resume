$(document).ready(function(){
  var t=$("#exp-nav").position().top;
  var b=$("#experience").position().top+$("#experience").height();
  $("#exp-nav").scrlspy({min: t, max: b,
                         onEnter: function(e,pos){
                           $("#exp-nav").addClass("affix");
                          },
                         onLeave: function(e,pos){
                           $("#exp-nav").removeClass("affix");
                          },
                        });
});

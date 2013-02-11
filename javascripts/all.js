$(document).ready(function(){
  setTimeout(function(){
  var t=$("#exp-nav").position().top;
  var b=$("#experience").position().top+$("#experience").height();
  $("#exp-nav").affix({offset:  t});
  },300);
});

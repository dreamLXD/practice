/*
* @Author: Marte
* @Date:   2018-02-19 13:15:50
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-19 17:49:34
*/

$(function(){
     var ul_li=$("ul li");
     var body=$("body");
     var article=$("article");
     ul_li.each( function(index, val) {
      $(this).on('click', function(event) {
          body.animate({scrollTop:0}, 2000);
          $(this).css({
           "background-color":"red",
           "color":"#fff"
        }).siblings().css({
            "background-color":"",
           "color":""
        });
        article.eq($(this).index()).css({
           "display":"block",
        }).siblings("article").css({
            "display":"none",
        });;

      });
     });
})
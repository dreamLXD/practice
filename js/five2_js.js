/*
* @Author: Marte
* @Date:   2018-02-18 11:44:04
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-11 16:08:36
*/

$(function(){

    var confirm=$("footer .confirm");
    var articles=$("footer article");
    var cancel=null;

     cancel=$("article .diary .cancel");

    confirm.on('click', function(event) {
          var str=$("<div class='diary w'><textarea></textarea><div class='cancel'></div></div>");
           articles.prepend(str);
        })

     cancel.each( function(index, val) {
      console.log($(this));
         $(this).on('click', function(event) {
              $(this).parent().remove();
         });
    });


})
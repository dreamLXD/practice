/*
* @Author: Marte
* @Date:   2018-02-14 16:17:08
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-14 17:47:29
*/

$(function(){
    var liarr=$(".switch ul li");
    var  one=$(".one");
    liarr.each(function(index, val) {
        console.log(index);
         /* iterate through array or object */
         $(this).css({
             "background":" url('images/three/qiehuan"+(index+1)+".jpg') no-repeat left",

         });
         $(this).on('mouseenter', function(event) {
               $(this).animate({
                   "width": "800px",

               },30).siblings().animate({
                   "width": "100px",
           },30)
       });
    $(this).on('mouseleave', function(event) {
               $(this).animate({
                   "width": "250px",

               },30).siblings().animate({
                   "width": "250px",
           },30)


    });

  })
})

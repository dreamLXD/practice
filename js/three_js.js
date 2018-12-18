/*
* @Author: Marte
* @Date:   2018-02-12 18:21:56
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-14 16:17:16
*/
$(function(){
    var IN_one= $(".Interest .Interest_one");   /*上面的按钮*/
    var in_Interesr=$(".Interesr_t li");
    var Interesr_t=$(".Interesr_t")      /*底下图片按钮*/

    IN_one.each(function(index, val) {
         /* iterate through array or object */
         $(this).on('mouseover',function() {


          in_Interesr.eq(index).css({"opacity":"1","transition":"all 2s"}).siblings().css({"opacity":"0","transition":"all 2s"});



        });
})
})

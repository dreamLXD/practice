/*
* @Author: Marte
* @Date:   2018-02-06 16:58:39
* @Last Modified by:   Marte
* @Last Modified time: 2018-03-11 15:35:39
*/


jQuery(document).ready(function() {
    $(".webstart .down_one").on('click', function() {
        var cent=$(".one_center");
        var web_start=$(".webstart");

        cent.addClass("rotate_one");
        web_start.addClass('rotate_two');
     setTimeout( function(){
       location.href = "two_index.html";

     },4000)
    });


        $(".webstart .clicks p").on('click', function() {
        var cent=$(".one_center");
        var web_start=$(".webstart");



        cent.addClass("rotate_one");
        web_start.addClass('rotate_two');
     setTimeout( function(){
       location.href = "two_index.html";

     },4000)
    });
});

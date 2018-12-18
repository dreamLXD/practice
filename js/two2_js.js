/*
* @Author: Marte
* @Date:   2018-02-08 13:38:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-21 10:40:17
*/
// 头部导航栏 制作
$(function(){
    var navs=$(".banner nav li");

   navs.each(function(index, val) {
        /* iterate through array or object */
        $(this).on('click',  function(event) {

            $(this).css({
                "background-color":"rgba(0,0,0,0.3)",
                "border-radius": "40px",
                "transition": "all 1s",
                "text-shadow":"1px 1px 2px  #383838,-1px -1px 1px  #A4A4A4 ",
            }).siblings().css({
                "background-color":"",
                "border-radius": "",
                "transition": "",
                "text-shadow":"",


            });
            $(this).children("a").css({
                "color":"#fff",

            });
            $(this).siblings().children('a').css({
                 "color":"",
            });;

        });
   });
})
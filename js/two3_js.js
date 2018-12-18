/*
* @Author: Marte
* @Date:   2018-02-09 21:52:59
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-12 22:37:45
*/$(function(){
    // 垃圾箱点击隐藏
    var no_b=$(".one_sec .no_b");
    var time_one=$(".one_sec .time_one");
   no_b.each(function(index, val) {

       $(this).on('click',function(event) {
            $(this).parent().parent().parent().css({
           "display":"none"
        });
       });
   });

   // 移动上面变色
   var textr=$(".neirong textarea");
   var time_one=$(".neirong .time_one ");

        /* iterate through array or object */
          /*  $(this).parent().parent().children('.bottom_left').children().children().css({

        });*/
    textr.each(function(index, val) {
       /* iterate through array or object */
       // 进入
       $(this).on('mouseenter',  function(event) {
            $(this).parent().parent().children('.bottom_left').children().children().css({
                  "border-radius":"30px",
                 "background-color":"rgba(0, 0, 0, 0.3)",
                 "color":"#fff",
                  "transition":"all 1s",
           });

            $(this).parent().parent().siblings().children('.bottom_left').children().children().css({
                  "border-radius":"",
                 "background-color":"",
                 "color":"",

                  "transition":"all 1s",
           });

            $(this).css({
                 "background-color":"rgba(0, 0, 0, 0.4)",
                 "color":"#fff",

                  "transition":"all 1s",
            });
             $(this).next().css({
                 "color":"rgba(0,0,0,1)",

                  "transition":"all 1s",
            });
            $(this).parent().parent().siblings().children('.bottom_right').children("textarea").css({
                 "background-color":"",
                 "color":"",

                  "transition":"all 1s",
            });

       });

       // 离开
        $(this).on('mouseleave',  function(event) {
            $(this).parent().parent().children('.bottom_left').children().children().css({

                 "background-color":"",
                 "color":"",

                  "transition":"all 1s",
           });
            $(this).css({
                 "background-color":"",
                 "color":"",

                  "transition":"all 1s",
            });
       });

    });

  time_one.each( function(index, val) {

    // 进入
     $(this).on('mouseenter', function(event) {
      console.log($(this).parent().parent().children(".bottom_right").children('textarea').html())

      $(this).parent().parent().children(".bottom_right").children('textarea').css({
          "background-color":"rgba(0, 0, 0, 0.4)",
           "color":"#fff",
           "transition":"all 1s",
      });
       $(this).parent().parent().siblings().children(".bottom_right").children('textarea').css({

          "background-color":"",
          "color":"",

          "transition":"all 1s",
      });
       $(this).css({

         "background-color":"rgba(0, 0, 0, 0.3)",
         "color":"#fff",

         "transition":"all 1s",
       });
       $(this).parent().parent().siblings().children(".bottom_left").children('').css({

         "background-color":"",
         "color":"",

         "transition":"all 1s",
       });

     });

      // 离开
       $(this).on('mouseleave', function(event) {
      console.log($(this).parent().parent().children(".bottom_right").children('textarea').html())

      $(this).parent().parent().children(".bottom_right").children('textarea').css({
          "background-color":"",
           "color":"",

           "transition":"all 1s",
      });

       $(this).css({

         "background-color":"",
         "color":"",
         "transition":"all 1s",
       });




     });

  });








// 底部按钮小小的过度
//
   var one_sec=$(".one_sec");
  var more=$(".one_sec .more");
  var more_str="";
  more.on('mouseleave', function(event) {
    more.css({
      "border-radius": "",
          "width":"",
           "height":"",
           "font-size":"",
           "line-height":"",
           "transition": "all 1s",
           "color":"",
          "text-shadow":" "
    });

  });
})
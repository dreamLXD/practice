/*
* @Author: Marte
* @Date:   2018-02-08 15:42:13
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-10 20:57:01
*/

// 轮播图制作
$(function(){
 var art_u=$("article .cents");
 var art_li=$("article .cents li");
 var ls_index=0;
 var lc_index=0;
 var set_lb=null;
var one_lunbo=$("article .one_lunbo");


      var art_width=art_li.width();
  
      var art_c=$("article .bottom_lb li");

      // 点击数字切换
        art_c.each(function(index, val) {
            
             $(this).on('click', function(event) {
               $(this).css({
                   "transition": "all 1s",
                  "background-color": "rgba(0, 0, 0,0.7)",
                   "color":"rgba(255,255, 255,1)"

               }).siblings().css({
                   "transition": "",
                  "background-color": "",
                   "color":"rgba(0,0,0,1)"

               });
               lc_index=ls_index=index;
               art_u.animate({"left":(-index*art_width)+"px"}, 1500)
             });
       });


      // 移动切换停止
         one_lunbo.on('mouseenter', function(event) {
            clearInterval(set_lb)
         });
          one_lunbo.on('mouseleave', function(event) {
          set_lb=setInterval(one_set,3500);

         });




        set_lb=setInterval(one_set,3500);

        // set_lb=setInterval(one_set,2000);

        function one_set(){
        ls_index++;
        if(ls_index>=art_li.length){
          art_u.css("left","0px");
            ls_index=1;
        };
        art_u.animate({"left":(-ls_index*art_width)+"px"},1500);


          lc_index++;

             /* iterate through array or object */
               if(lc_index>=art_c.length){
                 lc_index=0;
               };

               art_c.eq(lc_index).css({
                   "transition": "all 1s",
                  "background-color": "rgba(0, 0, 0,0.7)",
                   "color":"rgba(255,255, 255,1)"

               }).siblings().css({
                   "transition": "",
                  "background-color": "",
                   "color":"rgba(0,0,0,1)"

               });



        }



    // 点击左右键切换
    var one_page1=$(".one_page .left_one");
    var one_page2=$(".one_page .right_two");
    one_page1.on('click',  function(event) {
         ls_index--;
        if(ls_index<0){
          art_u.css("left",(-5*art_width)+"px");
            ls_index=art_li.length-2;
        };
        art_u.animate({"left":(-ls_index*art_width)+"px"},1500);


          lc_index--;

             /* iterate through array or object */
               if(lc_index<0){

                 lc_index=art_c.length-1;
               };

               art_c.eq(lc_index).css({
                   "transition": "all 1s",
                  "background-color": "rgba(0, 0, 0,0.7)",
                   "color":"rgba(255,255, 255,1)"

               }).siblings().css({
                   "transition": "",
                  "background-color": "",
                   "color":"rgba(0,0,0,1)"

               });


    });
    one_page2.on('click',  function(event) {

      one_set();
    });







})
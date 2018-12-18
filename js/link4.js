/*
* @Author: Marte
* @Date:   2018-02-21 10:39:20
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-21 10:55:25
*/

$(function(){
     var Aarr=$(".banner nav li a");
              Aarr.eq(4).css({
                 "color":"#fff",
                  "background-color":"rgba(0,0,0,0.2)",
                   "border-radius": "40px",
                  "text-shadow":"1px 1px 2px  #383838,-1px -1px 1px  #A4A4A4",
                   "transition": "all 2s"
              }).siblings().css({
                 "color":"",
                  "background-color":"",
                   "border-radius": "",
                  "text-shadow":"",
                  "transition": "all 2s"

              });
})

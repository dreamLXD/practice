/*
* @Author: Marte
* @Date:   2018-02-16 15:10:31
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-18 16:13:20
*/

$(function(){
    var json = [
        {   //  1
            zIndex:2,

            width:350,
            height:300,
            top:0,
            left:50,
            opacity:0.6
        },
        {   //  3
            zIndex:3,
            width:500,
            height:400,
            top:50,
            left:0,
            opacity:0.9

        },
         {   //5
            zIndex:100,
           width:700,
           height:450,
            top:30,
            left:200,
            opacity:1
        },
         {  //  4
            zIndex:3,
            width:500,
            height:400,
            top:50,
            left:600,
            opacity:0.9
        },
        {  //  2
            zIndex:2,
            width:350,
            height:300,
            top:0,
            left:700,
            opacity:0.6
        }



    ];
    var Trojan_img=$(".Trojan .Trojan_one img");
    var Trojan=$(".Trojan");
    var Trojan_left=$(".Trojan .Trojan_left");
    var Trojan_right=$(".Trojan .Trojan_right");
    var fage=true;
    var sets=null;

    Trojan.on('mouseenter', function(event) {
               Trojan_left.css({opacity: '1'});
               Trojan_right.css({opacity: '1'});
               clearInterval(sets);

    });
    Trojan.on('mouseleave', function(event) {
               Trojan_left.css({opacity: '0'});
               Trojan_right.css({opacity: '0'});
                sets=setInterval(function(){
                    move(false)
                   },5000)
    });
       move();

         clearInterval(sets);
        sets=setInterval(function(){
        move(false)
       },3000)

        Trojan_left.on('click',  function(event) {
            if(fage=true){
                fage=false;
                 move(false);
            }

        });
         Trojan_right.on('click',  function(event) {
             if(fage=true){
                fage=false;
                move(true);
            }
        });


         function  move(bool){
           if(bool!==undefined){
                if(bool){
                    json.push(json.shift());
                }else{
                    json.unshift(json.pop());
                }
           }


            Trojan_img.each(function(index, val) {
                // $(this).css(json[index]);
            $(this).animate(json[index],100,
              function(){
                fage=true;
             });
    });
         }


})
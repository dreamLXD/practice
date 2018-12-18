// 跳跃字体
//
window.onload=function(){
    var jump=document.querySelector(".banner .jump");
    var jps='';

    var str_p="成长中不计后果的那段,就叫青春";

    var str_arr=str_p.split("");
    var new_str="";
    var index1=-1;
    var new_ss="";
    var set_p=null;
    //////////////////////////
    // console.log(str_arr) //
    //////////////////////////
    clearInterval(set_p);
    set_p=setInterval(function(){
        index1++;
        new_str="<p>"+str_p[index1]+"</p>";
        // var new_ss=new_str;
        new_ss+=new_str;
        // 注意： "innerhtml+="   容易连接起来，不容易使用，最好分开写定义变量接受，然后
        // 赋值给innerhtml

        jump.innerHTML=new_ss;
        jps=document.querySelectorAll(".banner .jump p");
        jps[index1].classList.add("xuanli");
        // jps[index1].classList.add("xuanli2");

        if(index1>=str_arr.length-1){
            clearInterval(set_p)
        }
    },1000)






}

/*
* @Author: Marte
* @Date:   2018-02-15 12:00:35
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-15 18:49:44
*/


/*<!-- 为按钮绑定点击事件 -->*/


 $(function () {
                // 点击事件
                $('footer .click').click(function () {
                        // 发送ajax请求
                        $.ajax({
                                url:'js/waterfall.php',
                                type:'get',
                                dataType:'json',
                                success:function(data){
                                        // 数组  转化为 js数组
                                        // console.log(data);
                                        console.log(data);
                                        // 包装为一个对象
                                        var backObj = {
                                                items:data
                                        };

                                        // 调用模板引擎 获取 生成的html
                                        var resultStr = template('template',backObj);


                                        // 添加到界面上
                                        $('footer article').append(resultStr);

                                        // 直接调用 我们封装好的 瀑布流方法 即可完成布局
                                        // 需要导入 自己写的jq插件
                                        // $('footer article').waterfall();
                                }
                        })
                        // console.log("sss");

                });
        })



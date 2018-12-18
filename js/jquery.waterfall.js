$.fn.extend({
	waterfall:function(){
				var $_this=this;
				var fubox=$_this.width();
				var zibox=$_this.children(".item").width();
				var cols=Math.floor(fubox/zibox);
				var jianxi=(fubox-cols*zibox)/(cols-1);


				var boxArr=[];
				for(var i=0;i<cols;i++){
					boxArr[i]=jianxi;
				}

				$_this.children(".item").each(function(index,element){
					var xheight= $(element).height();

				var minIndex=0;
				var minHeight=boxArr[0];
				for(var i=0;i<boxArr.length;i++){
					if(boxArr[i] < minHeight){
						minHeight=boxArr[i];
						minIndex=i;
					}
				}
				$(element).css({
					left:minIndex*zibox+minIndex*jianxi,
					top:minHeight
				})

				minHeight+=xheight;
				minHeight+=jianxi;


				boxArr[minIndex]=minHeight;





			});

			var maxHeight=boxArr[0];

			for(var i=0;i<boxArr.length;i++){
				if(boxArr[i]>maxHeight){
					maxHeight=boxArr[i]
				}

			}
			$_this.height(maxHeight);

}
})
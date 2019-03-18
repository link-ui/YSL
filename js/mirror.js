function p(str){   //id  class tagname
	if(str.charAt(0) == "#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0) == "."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}



function mirror(){
let lis= p("#imgs").children;
//	遍历li
	for(let i=0; i<lis.length; i++){
//		添加点击事件
		lis[i].onclick = function(){
//			获取当前图片的src
			let bgImg = getStyle(this,"backgroundImage");
			p("#bigBox").style.backgroundImage = bgImg;
			p("#showBox").style.backgroundImage = bgImg;
		}
	}
	
	p("#bigBox").onmouseover = function(){
		p("#mirrorBox").style.display = 'block';
		p("#showBox").style.display = 'block';
	}
	
	p("#bigBox").onmouseout = function(){
		p("#mirrorBox").style.display = 'none';
		p("#showBox").style.display = 'none';
	}
	
	p("#bigBox").onmousemove = function(event){
		let ev = event || window.event;
		scale(ev);
	}
	
	function scale(ev){
//		1-获取数据
		let x = ev.pageX - p("#bigBox").offsetLeft - p("#mirrorBox").offsetWidth/2;
		let y = ev.pageY - p("#bigBox").offsetTop - p("#mirrorBox").offsetHeight/2;
//		2-边界的判断处理
		if(x < 0){
			x = 0;
		}else if(x > p("#bigBox").offsetWidth - p("#mirrorBox").offsetWidth){
			x =p("#bigBox").offsetWidth - p("#mirrorBox").offsetWidth;
		}
		if(y < 0){
			y = 0;
		}else if(y > p("#bigBox").offsetHeight -p("#mirrorBox").offsetHeight){
			y = p("#bigBox").offsetHeight -p("#mirrorBox").offsetHeight;
		}
//		3-外观改变
		p("#mirrorBox").style.left = x + 'px';
		p("#mirrorBox").style.top = y + 'px';
		//		算出遮罩层左侧距离和小图之间的比例
		let scalX =  x  / (p("#bigBox").offsetWidth - p("#mirrorBox").offsetWidth); 
		let scalY =  y  / (p("#bigBox").offsetHeight - p("#mirrorBox").offsetHeight);
		p("#showBox").style.backgroundPosition = (-1*3*x) +'px ' + (-1*3*y) + 'px';
	}
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,false)[attr];
		}
    }
}


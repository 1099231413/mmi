/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-12 20:45:33
 * @version $Id$
 */
$(function(){
	$(".mi_head input").click(function(){
		$(this).val("");
	});
	$(".mi_head input").blur(function(){
		$("input").val("搜索商品名称");
	});
	//轮播图
	var banner  = $(".mi_banner");
	var numBut  = $(".mi_banner ol li");
	var picList = $(".mi_banner ul li");
	var index = 0;
	//鼠标移入停止图片轮播
	banner.mouseenter(function(){
		clearInterval(times);
	});
	//鼠标移出开启图片轮播
	banner.mouseleave(function(){
		getTime();
	});
	//点击数字按钮
	numBut.click(function(){
		index = $(this).index();
		auto()
	});
	function auto(){
		numBut.eq(index).css({"background-color":"#fff"}).siblings().css({"background-color":"#666666"});
		picList.eq(index).fadeIn().siblings().fadeOut();
	}
	//开启定时器
	getTime();
	function getTime(){
		times = setInterval(function(){
			index++;
			if(index == numBut.length){
				index =0;
			}
			auto()
		},3800)
	}
});
$(function () {
	//banner轮播
	var swiper = new Swiper('.banner .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 1000,
		autoplay:{
			delay: 3000,

		},
		// noSwipingSelector: '.head-table',
		pagination: {
			el: '.banner .swiper-pagination',
			clickable: true
		},
		on: {
			init: function (swiper) {
				slide = this.slides.eq(1);
				slide.addClass('ani-slide');
			},
			transitionStart: function () {
				for (i = 0; i < this.slides.length; i++) {
					slide = this.slides.eq(i);
					slide.removeClass('ani-slide');
				}
			},
			transitionEnd: function () {
				slide = this.slides.eq(this.activeIndex);
				slide.addClass('ani-slide');
			}
		}
	});
	try {
		//banner 头部部分切换
		$('.head-item a').click(function () {
			$(this).addClass('cur').siblings().removeClass('cur');
			var index = $(this).index();

			$(this).parent().siblings('.head-tab-content').find('.tab-block').eq(index).show().siblings('.tab-block').hide();
		});
	} catch (error) {
		console.log(error);
	}
	try {
		//banner 底部搜索切换
		$('.head-sear-grid').on('click', '.sear-tab-item a', function () {
			$(this).addClass('cur').siblings().removeClass('cur');
			var index = $(this).index();
			//搜索类型切换 根据data-type传入搜索类型
			var type = $(this).data('type');


		});
	} catch (error) {
		console.log(error);
	}
	//天气js
	try {
		// $.ajax({
		// 	url: 'https://yiketianqi.com/api?version=v61&appid=18426668&appsecret=QnkydR8Z',
		// 	type: 'get',
		// 	// 设置的是请求参数
		// 	data: {
		// 		city: '智慧',

		// 	},
		// 	// 用于设置响应体的类型 注意 跟 data 参数没关系！！！
		// 	dataType: 'json',
		// 	success: function (res) {
		// 		// 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
		// 		// 客户端会主观认为服务端返回的就是 JSON 格式的字符串
		// 		console.log(res)
		// 		$('#wea-wd').html(res.tem + '℃');
		// 		$('#wea-date').html(res.date);
		// 		$('#wea-img').html(setWeatherIcon(res.wea));
		// 	}
		// })
	} catch (error) {

	}
	// 根据天气设置图标
	function setWeatherIcon(wea) {
		var wea_img = '';
		if (wea.indexOf("晴") >= 0) {
			wea_img = '<img src="./images/weaicon/qing.png" />';
		} else if (wea.indexOf("雷") >= 0) {
			wea_img = '<img src="./images/weaicon/leizhenyu.png" />"';
		} else if (wea.indexOf("雨") >= 0) {
			wea_img = '<img src="./images/weaicon/yu.png" />';
		} else if (wea.indexOf("多云") >= 0) {
			if (wea.indexOf("雨") >= 0) {
				wea_img = '<img src="./images/weaicon/yu.png" />';
			} else {
				wea_img = '<img src="./images/weaicon/duoyun.png" />';
			}
		} else {
			wea_img = '<img src="./images/weaicon/duoyun.png" />';
		}

		return wea_img;
	}

})
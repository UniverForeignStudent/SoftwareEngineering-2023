$(function () {
	try {
		$('.shop-mendian-list li h3').hover(function(e){
			//console.log(e);
			var text = $(this).find('a').text();
			var html = "<div class='hover-text'>"+text+"</div>";
			// $(this).find('.hover-text').css({'left':e.offsetX,'top':e.offsetY});
			$(this).append(html)
			
		},function(){
			$(this).find('.hover-text').remove();

		});
	} catch (error) {
		
	}
    //shop map 建设中提示
    try {
        $('.shopmap').click(function(){
            loadingFN=layer.open({
                type: 1,
                title:false,
                closeBtn:0,
                shadeClose:true,
                time:3000,
                skin: 'layui-layer-building', //加上边框
                area: ['400px', '250px'], //宽高
                content: '<div class="text"><img src="./images/building.png" /><p>The page is under construction...</p></div>'
              });
        });
    } catch (error) {
        
    }
    //loading 动画加载
    var loadingFN=null;
    function lodingFJ(){
        loadingFN=layer.open({
            type: 1,
            title:false,
            closeBtn:0,
            skin: 'layui-layer-laoding', //加上边框
            area: ['200px', '140px'], //宽高
            //content: '<img src="./images/loading.gif" />',
            content: '<img src="/sfsairporten/xhtml/images/loading.gif" />',
          
          });
    }
     //loading 动画关闭
    function lodingFJClose(){
        layer.close(loadingFN); 
    }
	window.airlineLoad = {
		lodingFJ :lodingFJ,
		lodingFJClose:lodingFJClose
	}
    // lodingFJ();
	//地图
	try {
	
			var listhArr = [];
			$('.sitemap-list li').each(function () {
				var listh = $(this).height();
				listhArr.push(listh);
			});
		
			var maxNum = listhArr[0];
			for(var i = 1,len = listhArr.length;i<len;i++){
				maxNum > listhArr[i]?null:maxNum = listhArr[i];
			}
			var maxH = maxNum
			$('.sitemap-list li').height(maxH);
		
	} catch (error) {
		
	}
	// //导航文字 本地存储
	// try {
	// 	$('.tran-gilter-grid li a').click(function(){
	// 		var navText = $(this).text();
	// 		sessionStorage.setItem('navText', navText);
	// 	});
		
		
	// 	 var dataText = sessionStorage.getItem('navText');
	// 	 if(dataText){
	// 		$('.gd-detail-tit h2').text(dataText);
	// 	 }else{
			
	// 	 }
	// 	 if(window.location.pathname!='/Transport2.html'){
	// 		sessionStorage.setItem('navText','');
	// 	 }
		
	// } catch (error) {
		
	// }
    $('.about-news-grid .tab-tit a').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var index = $(this).index();
		$('.about-news-grid .news-list ul').eq(index).show().siblings('ul').hide();
	});
	//公共头部页面调用
	try {
		var host = window.location.host;
		var hostName='';
		if(host=='han-cloud-code.gitee.io'){
			hostName= window.location.origin+'/shenzhen_airport/head.html';
		}else if(host=='demo.mulang.net'){
			hostName= window.location.origin+'/ShenZhen/head.html';
		}else{
			//hostName="../head.html";
		}
		//获取
		$.get(hostName, function (d) {
			// console.log(d);
			//$('.header').html(d);		//默认进入页面显示 二级
			var wWidth = $(window).width();
			var letw = (wWidth - 1400) / 2;
			//搜索框 右侧距离
			var rightw = $('.nav-right .sear').length !==0 ? wWidth-$('.nav-right .sear').offset().left-$('.nav-right .sear').width() : 0;	
			//$('.hover-search').css('right', rightw);
			$('.head-sear-grid').css({
				'right': letw,
				'padding-left': letw
			});
		})
	} catch (error) {
		console.log(error);
	}
    // 放大缩小功能
    try {
        $('#imageFullScreen').smartZoom({'containerClass':'zoomableContainer'});        

        // $('#topPositionMap,#leftPositionMap,#rightPositionMap,#bottomPositionMap').bind("click", moveButtonClickHandler);

        $('#zoomInButton,#zoomOutButton').bind("click", zoomButtonClickHandler);

        

        function zoomButtonClickHandler(e){

            var scaleToAdd =0.5;

            if(e.target.id == 'zoomOutButton')

                scaleToAdd = -scaleToAdd;

            $('#imageFullScreen').smartZoom('zoom', scaleToAdd);

        }        

        
    } catch (error) {
        
    }
	try {
		$('.text-tab-grid a').click(function(){
			$(this).addClass('cur').siblings().removeClass('cur');
			var index = $(this).index();
			$('.text-tab-content .text-p').eq(index).show().siblings().hide();
		});
	} catch (error) {
		
	}
    
	//手机端二级导航下拉效果
    try {
        $('.header').on('click','.nav-box li > span> em',function(e){
            _pare =  $(this).parents('li');

            if( _pare.hasClass('cur2')){
                _pare.removeClass('cur2');
                if(_pare.children('ul')){
                    _pare.children('ul').stop(true).slideUp();
                }
            }else{
                _pare.addClass('cur2').siblings().removeClass('cur2');
                _pare.siblings().children('ul').stop(true).slideUp();
                if(_pare.children('ul')){
                    _pare.children('ul').stop(true).slideDown();
                }
            }
            
        });
    } catch (error) {
        
	}
	//pc菜单下拉效果
    try {
        $('.header').on('mouseover','.pc-nav li',function(){
            // var leftpad = $(this).offset().left;
            
            // var titw = $(this).find('.tit').width();
            // console.log(leftpad,titw);
            // $('.pc-nav li .erji-menu').css({'padding-left':leftpad,'margin-left':-titw});
        });
    } catch (error) {
        
    }
	// try {
    //     $('.conetent-tran').imagesLoaded(function () {
    //         var listhArr = [];
    //         $('.conetent-tran .tran-list li').each(function () {
    //             var listh = $(this).find('img').height();
    //             $(this).find('.text').height(listh);
    //             console.log(listh);

    //         });
           
    //     });


    // } catch (error) {

    // }
	try {
		//顶部文字上下切换 dy
		if($.trim($(".scoll-text .swiper-container").text()) !== "") new Swiper('.scoll-text .swiper-container', {
			direction: 'vertical',
			loop: true,
			autoplay: true,
		});
	} catch (error) {
		
	}
	try {
		// $(".wap-tips")
		var div = document.getElementById('wap-tips');
		var xx, yy, XX, YY, swipeX, swipeY;
		div.addEventListener('touchstart', function (event) {
			event.stopPropagation(); //阻止冒泡
			// event.preventDefault(); //阻止浏览器默认事件
			xx = event.targetTouches[0].screenX;
			yy = event.targetTouches[0].screenY;
			swipeX = true;
			swipeY = true;
		})
		div.addEventListener('touchmove', function (event) {
			XX = event.targetTouches[0].screenX;
			YY = event.targetTouches[0].screenY;
			if (swipeX && Math.abs(XX - xx) - Math.abs(YY - yy) > 0) //左右滑动
			{
				event.stopPropagation(); //阻止冒泡
				// event.preventDefault(); //阻止浏览器默认事件
				swipeY = false;
				//左右滑动
				$('.wap-tips').fadeOut().remove();
			} else if (swipeY && Math.abs(XX - xx) - Math.abs(YY - yy) < 0) { //上下滑动
				swipeX = false;

				//上下滑动，使用浏览器默认的上下滑动
			}
		})
		div.addEventListener('touchend', function (event) {
			event.stopPropagation(); //阻止冒泡
			// event.preventDefault(); //阻止浏览器默认事件
		})
		
	} catch (error) {
		
	}
	/*try {
		$('.content-flight-table .flight-table table.tablemax tr:gt(10)').hide();
		$('.table-show-more').click(function () {
            lodingFJ();
            setTimeout(function(){
                lodingFJClose();
            },1000);
			// if ($('.content-flight-table .flight-table table.tablemax tr').length < 11) {
			// 	layer.msg('没有更多了');
			// 	return;
			// }
			if ($(this).hasClass('cur')) {
				$(this).removeClass('cur');
				$(this).find('span').text('Show More')
				$('.content-flight-table .flight-table table.tablemax tr:gt(10)').hide();
			} else {
				$(this).addClass('cur');
				$(this).find('span').text('Hide More')
				$('.content-flight-table .flight-table table.tablemax tr:gt(10)').show();
			}

		});
	} catch (error) {
		console.log(error);
	}*/
	try {
		$('.header').on('click','#sousuobtn',function (e) {
            $('.hover-search').addClass('cur');
            //关闭菜单效果
      $("html").removeClass('mm-opening');
      tabindex = 1;
			e.stopPropagation();
			var pop2 = $('.hover-search');
			$(document).bind("click", function (e) { //
				// var flag = true;
				if (!pop2.is(e.target) && pop2.has(e.target).length === 0) {
					$('.hover-search').removeClass('cur');
				}
			});
		});
		$('.header').on('click','#sear-close',function () {
			//console.log(1212);
			$(this).parents('.hover-search').removeClass('cur');
		});
	} catch (error) {

	}
	try {
		$('.faq-list li').click(function () {
			if ($(this).hasClass('cur')) {
				$(this).removeClass('cur');
			} else {
				$(this).addClass('cur');
			}
		});
	} catch (error) {

	}
	try {
		$('.video-paly').click(function () {
			var url = $(this).data('url');
			var title = $(this).data('title');
			var indexFull = layer.open({
				type: 2,
				title: title,
				shadeClose: true,
				shade: false,
				maxmin: true,
				area: ['auto'],
				content: url
			});
			layer.full(indexFull);
		});
	} catch (error) {

	}
	try {
		$('.pro-class-grid li').click(function () {
			if ($(this).hasClass('cur')) {
				$(this).removeClass('cur');
			} else {
				$(this).addClass('cur');
			}
		});
	} catch (error) {

	}
	$(window).resize(function () {
		//var mendianh = $('.shop-mendian-detail .mendian-info').height();
          //  $('.mendian-posi').height(mendianh);
            
            var sitemaph = $('.content-sitemap').height();
			$('.sitemap-posi').height(sitemaph); 
		var navhtml = $(".tel-application-login").html();

		var wWidth = $(window).width();
     var tabindex =1;
		if (wWidth < 1150) {
            var u = navigator.userAgent;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
			//导航
            $('.header').on('click','.btn-nav',function(e){
                e.stopPropagation();
                //关闭搜索框
        $('.hover-search').removeClass('cur')
        var pop1 = $('.btn-nav,.nav-box');
        $(document).bind("click", function (e) { //
          // var flag = true;
          if (!pop1.is(e.target) && pop1.has(e.target).length === 0) {
            $('html').removeClass('mm-opening');
            tabindex =1;
          }

        });
                tabindex++;
                // console.log(tabindex);
                // alert('touch');
                // $(this).addClass('mm-opening');
                if( tabindex%2 !=0){
                    $("html").removeClass('mm-opening');
                    //安卓机 兼容 页面滚动
                    if(isAndroid){
                        $("body").css({
                            'overflow':'',
                            'position': '',
                            'left':0,
                            'width':'100%'
                        });
                    }
                    
                    
                }else{
                    $("html").addClass('mm-opening');
                  
                    //安卓机 兼容 页面滚动
                    if(isAndroid){
                        $("body").css({
                            'overflow':'hidden',
                            'position': 'fixed',
                            'left':0,
                            'width':'100%'
                        });
                    }
                }
               
                var hbox = $('.header-box').height();
                var waph = $(window).height();
               $('.nav-box').css('max-height',waph-hbox-30)
            });
			// $('nav#menuWap').mmenu({});
			// $.fn.mmenu.debug = function (msg) {
			// 	alert(msg);
			// };
			try {
				//首页 分类移动端滚动
				var enjoySwiperWap = new Swiper('.enjoy-list.swiper-container', {
					slidesPerView:'auto',
                    spaceBetween: 14,
                    direction : 'vertical',  
                    observer:true,
                    noSwiping: true,
                    noSwipingSelector: '.enjoy-list',
					// slidesPerColumn: 2,
					// slidesPerColumnFill: 'row',
					on: {
						init: function () {  
                                $(".enjoy-list .swiper-wrapper .slide-tit").remove(); 
						},
					},

				});
			} catch (error) {

            }
            try {
                $('.index-airport-grid .airport-list li').height('');
            } catch (error) {
                
            }

		} else {
			
            //透明头部 滑过变白色底
            // $('.index-header').addClass('header-cfff');
            try {
                $('.header').hover(function(){
                    $(this).addClass('header-cfff');
                },function(){
                    $(this).removeClass('header-cfff');
        
                });
            } catch (error) {
                
            }
            //指南总页面高度同步
            try {
                $('.guides-index-list').imagesLoaded(function () {
                    var listhArr = [];
                    $('.guides-index-list li').each(function () {
                        var listh = $(this).height();
                        listhArr.push(listh);
                    });
                
                    var maxNum = listhArr[0];
                    for(var i = 1,len = listhArr.length;i<len;i++){
                        maxNum > listhArr[i]?null:maxNum = listhArr[i];
                    }
                    var maxH = maxNum
                    $('.guides-index-list li').height(maxH);
                });
            } catch (error) {
                
            }
			try {
				// var indexmaxH =0;
				// $('.index-enjoy-grid').imagesLoaded(function () {
				// 	var listhArr = [];
				// 	$('.index-enjoy-grid .enjoy-list li').each(function () {
				// 		var listh = $(this).height();
				// 		listhArr.push(listh);
				// 	});
				// 	console.log(listhArr);
				// 	indexmaxH = Math.max(...listhArr);
					
				// });
				// $('.index-enjoy-grid .enjoy-list li').height(indexmaxH);
		
			} catch (error) {
		
			}
			try {
				//首页 分类pc端滚动
				var enjoySwiper = new Swiper('.enjoy-list.swiper-container', {
					// 具体参数和回调查阅swiper官网
					slidesPerView: 2.5,
					spaceBetween: 14,
					slidesPerColumn: 2,
					// slidesPerColumnFill: 'row',
				});

			} catch (error) {

			}
			try {
				
				var letw = (wWidth - 1200) / 2;
				var letw2 = (wWidth - 1400) / 2;
                // var letw3 = (wWidth - $('.header-box').width()) / 2;
                //搜索框 右侧距离
				// var rightw = wWidth-$('.nav-right .sear').offset().left-$('.nav-right .sear').width();	
                // $('.hover-search').css('right', rightw);
				$('.banner .zoom-control').css('right', letw2);
				
				$('.head-sear-grid').css({
					'right': letw,
					'padding-left': letw
                });
                //头部 表格样式
				// $('.banner .head-table').css('right', letw2);
				

			} catch (error) {
				console.log(error);
			}
			try {
				$('.index-airport-grid .imgshow img').imagesLoaded(function () {
					var listhArr = [];
					$('.index-airport-grid .airport-list li').each(function () {
						var listh = $(this).height();
						listhArr.push(listh);
					});
					//console.log(listhArr);
					// var maxH = Math.max(...listhArr);
					var maxNum = listhArr[0];
					for(var i = 1,len = listhArr.length;i<len;i++){
						maxNum > listhArr[i]?null:maxNum = listhArr[i];
					}
					var maxH = maxNum
					$('.index-airport-grid .airport-list li').height(maxH);
				});
    

			} catch (error) {

			}
			$('.index-about-grid .text').css('padding-left', letw);
			$('.about-info  .text').css('padding-left', letw);
			// 返回顶部按钮
			if ($(this).scrollTop() == 0) {
				$(".right-fix").fadeOut(500);
			}
			
				
			$(window).scroll(function (event) {
				var scrollTop = $(this).scrollTop();
				var scrollHeight = $(document).height();
				var windowHeight = $(this).height();

				//console.log(scrollHeight-(scrollTop + windowHeight));
				/* Act on the event */
				if((scrollHeight-(scrollTop + windowHeight))<190){
					$(".right-fix").addClass('stop');
					
				}else{
					$(".right-fix").removeClass('stop');
					
				}
				if ($(this).scrollTop() == 0) {
					$(".right-fix").fadeOut(500);
				}
				if ($(this).scrollTop() >10) {
					$(".right-fix").fadeIn(500);
				}

				if ($(this).scrollTop() < 5) {
					if(!$('.header').hasClass('type2')){
						$('.header').removeClass('header-ny');
					}
					

				} else {
					$('.header').addClass('header-ny');

				}
			});
			
		}
	});
	$(window).resize();
	$("#toTop").click(function (event) {
		
		/* Act on the event */
		$("html,body").animate({
			scrollTop: 0
		}, 666)
	});
	// 数字滚动递增
	// <span class="animateNum" data-animatetarget="999.9">999.9</span>万
	//$('body').running();





	//图片加载后执行
	// 基本初始化

	// $('#container').imagesLoaded(function() {
	// 	// images have loaded
	// });


	// 所有事件示例
	// $('#container').imagesLoaded().always(function(instance) {
	// 	console.log('所有图片被加载或确认有损坏。');
	// }).done(function(instance) {
	// 	console.log('所有图片被成功加载没有损坏图片。');
	// }).fail(function() {
	// 	console.log('所有图片被加载至少有一幅图片是损坏图片。');
	// }).progress(function(instance, image) {
	// 	var result = image.isLoaded ? 'loaded' : 'broken';
	// 	console.log('每一幅图片都被加载。');
	// });

	// swiper初始化

	//选项卡+swiper
	// $(".honor-menu a").click(function () {
	// 	$(this).addClass("act").siblings("a").removeClass("act");
	// 	$(".honor-slider .slider-con").eq($(this).index()).addClass("act").siblings(".slider-con").removeClass("act");
	// 	$(".slider-con .swiper-container").each(function (index) {
	// 		$.swiperOption($(this), $(this).parent(".slider-con").find(".swiper-pagination"), 4, 40, $(this).parent(".slider-con").find(".swiper-button-next"), $(this).parent(".slider-con").find(".swiper-button-prev"));
	// 	});
	// })

	// $.extend({
	// 	"swiperOption": function (f1, f2, f3, f4, f5, f6) {
	// 		new Swiper(f1, {
	// 			slidesPerView: f3,
	// 			spaceBetween: f4,
	// 			allowTouchMove: false,
	// 			navigation: {
	// 				nextEl: f5,
	// 				prevEl: f6,
	// 			},
	// 			pagination: {
	// 				el: f2,
	// 				clickable: true,
	// 			},
	// 			breakpoints: {
	// 				1100: {
	// 					slidesPerView: 2,
	// 					spaceBetween: 10
	// 				}
	// 			}
	// 		});
	// 	},
	// });

	// $(".slider-con .swiper-container").each(function (index) {
	// 	$.swiperOption($(this), $(this).parent(".slider-con").find(".swiper-pagination"), 4, 40, $(this).parent(".slider-con").find(".swiper-button-next"), $(this).parent(".slider-con").find(".swiper-button-prev"));
	// });


	//	模拟锚点
    $('.guides-process li a').click(function () {
		if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname ==
			this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({
					scrollTop: targetOffset - 150
				}, 1000);
				return false;
			}
		}
	});
	//swiper画廊基础
	var galleryThumbs = new Swiper('.gallery-thumbs.swiper-container', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 0,
		thumbs: {
			swiper: galleryThumbs
		}
	});
	try {
		//	模拟滚动条
		$(".cp-list").mCustomScrollbar({
			horizontalScroll: true,
			scrollButtons: {
				enable: true
			},
			theme: "dark-thin"
		});
	} catch (e) {
		//TODO handle the exception
	}
})
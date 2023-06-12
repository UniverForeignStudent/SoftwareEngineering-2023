$(function(){
	var links = ["www.sfsairport.com"];$(document).on('click','a',function(){var h = $.trim($(this).attr('href')),r = /^http|^ftp|^mailto/ig;if(!h.match(r))return;for (var i = links.length - 1; i >= 0; i--) {if(h.indexOf(links[i])!==-1)return;}$(this).attr("target","_blank");return ;});
	$.trim($("i.iconxinxi").next().text())=="" && $("i.iconxinxi").hide()
})
$(function(){
	$(".banner").length == 0 && $(".header").addClass("type2 header-ny")
})
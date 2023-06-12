$(function(){

    $(".add").each(function(){
        var _add = $(this).text();
        switch(_add) {
             case "T3一层":
                 $(this).html("<i class='iconfont icondizhi'></i>T3-1F");
                break;
             case "T3二层":
                $(this).html("<i class='iconfont icondizhi'></i>T3-2F");
                break;
             case "T3三层":
                 $(this).html("<i class='iconfont icondizhi'></i>T3-3F");
                break;
             case "T3四层":
                $(this).html("<i class='iconfont icondizhi'></i>T3-4F");
                break;
             case "T3五层":
                $(this).html("<i class='iconfont icondizhi'></i>T3-5F");
                break;
             case "GTC一层":
                 $(this).html("<i class='iconfont icondizhi'></i>GTC-1F");
                break;
             case "GTC二层":
                $(this).html("<i class='iconfont icondizhi'></i>GTC-2F");
                break;
             case "GTC三层":
                 $(this).html("<i class='iconfont icondizhi'></i>GTC-3F");
                break;
                case "交通运营中心":
                 $(this).html("<i class='iconfont icondizhi'></i>GTC");
                break;
             default:
                ;
        } 
       
    })




    var numPerPage = 12;
    var _source = $("#shop-list-data li");
    //分页插件的回调函数,s是要分的数据对象，n每页显示的数量
    function feny_callback(api,s,n) { 
    	var curPage ;
		var _s;//当前页面显示的内容
        curPage = api.getCurrent() ;
        _s = s.map(function(index,e) {
            if(index >= (curPage - 1)*n && index < curPage*n){
                return e
            }
        });
        $("#shop-list").empty().append(_s.clone());

        
    }

    //分页函数，s是要分的数据对象，n每页显示的数量
    function feny(s,n) { 
    	$('#pagination-num').pagination({
            totalData: s.length,
            showData: n,
            activeCls: 'current',
            isHide: true,
            callback: function(api){
            	feny_callback(api,s,n)
            }
        },
        	function(api){
        		feny_callback(api,s,n);
        		if (s.length == 0) {
        			$('#pagination-num').hide();
        		}
        	}
    	);
    }

    feny(_source,numPerPage);
    

    //楼层和目录筛选函数
    // function sx(l,c) {
    //     if (l == "ALL") {
    //         l = "";
    //     }
    //     if (c == "ALL") {
    //         c = "";
    //     }
    //     var _result
        
    //     _result = _source.map(function(index,e) {
           
    //         if(($(e).attr("data-Location").match(l) )&&( $(e).attr("data-Category").match(c) )){
    //             return e
    //         }
    //     })

       
        
    //     feny(_result,numPerPage)
    // }

    
    

    
    $("#searchBtn-pc").click(function(event) {
        /* Act on the event */
        var _kw = $.trim($("#keyword-pc").eq(0).val());
        //console.log(_kw);
        var _reg = new RegExp(_kw, 'i')
        var _result
        if(_kw!=""){
            _result = _source.map(function(index,e) {
               
                if($(e).attr("data-name").match(_reg)){
                    return e
                }
            })

        }else{
            _result = _source;
        }
        feny(_result,numPerPage)
    });

    $("#searchBtn-phone").click(function(event) {
        var _kw = $.trim($("#keyword-phone").eq(0).val());
        var _reg = new RegExp(_kw, 'i')
        var _result
        if(_kw!=""){
            _result = _source.map(function(index,e) {
               
                if($(e).attr("data-name").match(_reg)){
                    return e
                }
            })

        }else{
            _result = _source;
        }
        feny(_result,numPerPage)
    });

    // $(".filter-type1 dd").click(function() {
    //     $(this).parent("dl").find("dd").removeClass("cur");
    //     $(this).addClass('cur');
    //     // var _Location = $(this).attr("data-Location");
    //     // var _Category = $(".filter-type2 dl").find(".cur").eq(0).attr("data-Category");
    //     sx(_Location,_Category);
        
    // });
    // $(".filter-type2 dd").click(function() {
    //     $(this).parent("dl").find("dd").removeClass("cur");
    //     $(this).addClass('cur');
    //     // var _Category = $(this).attr("data-Category");
    //     // var _Location = $(".filter-type1 dl").find(".cur").eq(0).attr("data-Location");
    //     sx(_Location,_Category);
      
    // });
    
    // layui.use(['layer', 'element', 'flow', 'form'], function(){
    //             var layer = layui.layer,
    //                 form = layui.form,
    //                 element = layui.element;
    //             var $ = layui.$;
    //             var flow = layui.flow;
    //             form.on('select(locationSelect)',function(data){
    //                 var _Category = $("#categorySelect").val();
    //                 var _Location = data.value; //得到被选中的值
    //                 sx(_Location,_Category);
    //             });
    //             form.on('select(categorySelect)',function(data){
    //                 var _Category = data.value;
    //                 var _Location = $("#locationSelect").val(); //得到被选中的值
    //                 sx(_Location,_Category);
    //             });

                
    // })
    
});
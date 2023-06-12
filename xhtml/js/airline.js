!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.dayjs=n()}(this,function(){"use strict";var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return!r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return(n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:a,w:s,d:i,D:"date",h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i}return!e&&r&&(l=r),r||!e&&l},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u,$offset:n.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t)}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return D},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate()}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return"Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone(),r=M(t,n,!0);return r&&(e.$L=r),e},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
function checkSiteLang(){
  return $("meta[name='siteCode']").attr('content') =="sfsairporten" ? "en" : "cn"
}
function filtetSymbol(str){  
	if(!str)return ""
  return str.replace(/[\>\<\&\\\/]/g,'') 
}
;(function ($) {
    !window.airlineLoad && (window.airlineLoad = {})
    $.fn.extend(
    {
    getList: function(options)
    {

      return this.each(function(index, el)
      {
        var opt, 
            htmlStr, 
            defaluts, 
            self;
        defaluts = {
          beforeSend: null,
          Loaded: null,
          renderDone:null,
          iterableData:function(odata){
            return odata.flightList
          }
        }
        opt = $.extend({}, defaluts, options)
        htmlStr = ''
        self = $(this)
        getListData(self)

        function getListData(obj)
        {
          var url = opt.url || "/"
          $.ajax(
            {
              url: encodeURI(url),
              beforeSend: function()
              {
                if (opt.beforeSend) opt.beforeSend()
              }
            })
            .done(function(data)
            {
              if (opt.loaded) opt.loaded()

              if (opt.iterableData(data).length == 0)
              {
                initData(null, obj)
                return
              }

              initData(opt.iterableData(data), obj)
            }).fail(function(err)
            {
              if (opt.Loaded) opt.Loaded();
              initData(null, obj)
            })
        }

        function initData(list, obj)
        {
          if(list){
            $.each(list, function(index, el)
          {
            htmlStr += opt.templ(el)
          });
          }
          else{
            htmlStr = opt.templ(null)
          }
          
          showData(htmlStr, obj)
        }

        function showData(result, obj)
        {
          obj.hide().html(result).fadeIn(function(){
              if(typeof st_reload_convert !== "undefined")st_reload_convert()
            if (opt.renderDone) {opt.renderDone()}
          })
          
        }




      })
    }
    })




    })(window.jQuery);

    $(function()
    {
      var type = checkSiteLang()

      //首页离岗
//       $("#Departures").length && $("#Departures").getList(
//       {
//         //fakeData:Departuresdata,
//         url: "/szjchbjk/hbcx/flightInfoIndex?type=" + type + "&flag=D",
//         templ: function(el)
//         { if(!el)return ""
//           return '<tr>\
//                 <td>\
//                     <div class="cell">\
//                         <em>' + el.startSchemeTakeoffTime + '</em>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell scoll-list">\
// <i class="icon">\
//   <img src="' + el.imgSrc + '" />\
// </i>\
// <span class="area" title="' + el.shareflightairport[0].airCompany + '">' + el.shareflightairport[0].airCompany + '</span>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell">\
//                         <em>' + el.hbh + '</em>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell">\
//                         <span class="area w100">' + el.terminalStationThreecharcode + '</span>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell">\
//                         <span>' + el.fltNormalStatus + '</span>\
//                     </div>\
//                 </td>\
//             </tr>'
//         }
//       })

      //首页到达

//       $("#Arrivals").length && $("#Arrivals").getList(
//       {
//         //fakeData:Arrivalsdata,
//         url: "/szjchbjk/hbcx/flightInfoIndex?type=" + type + "&flag=A",
//         templ: function(el)
//         {if(!el)return ""
//           return '<tr>\
//                 <td>\
//                     <div class="cell">\
//                         <em>' + el.terminalSchemeLandinTime + '</em>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell scoll-list">\
// <i class="icon">\
//   <img src="' + el.imgSrc + '" />\
// </i>\
// <span class="area" title="' + el.shareflightairport[0].airCompany + '">' + el.shareflightairport[0].airCompany + '</span>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell">\
//                         <em>' + el.hbh + '</em>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell">\
//                         <span class="area w100">' + el.startStationThreecharcode + '</span>\
//                     </div>\
//                 </td>\
//                 <td>\
//                     <div class="cell">\
//                         <span>' + el.fltNormalStatus + '</span>\
//                     </div>\
//                 </td>\
//             </tr>'
//         }
//       })



    })

    // 首页搜索
    $(function()
    {
      var indexctx = $("#search-from")
      var submitBtn = indexctx.find("button")
      var submitInput = indexctx.find("input")
      function searchSub()
      {
        var curctc = indexctx.find(".cur")
        var url = curctc.attr("data-type")
        var content = $.trim(indexctx.find("input").val()) !== "" ? "?hbh=" + $.trim(indexctx.find("input").val()) : ""
        window.open(url + content)
      }

      $(submitBtn, indexctx).on("click",searchSub )
      $(submitInput, indexctx).on("keyup",function(e){
            if(e.which == 13) searchSub()
          })

      $(submitInput, indexctx).on("input focus", function(e)
          {
              var _value = filtetSymbol(e.target.value)
              window.airlineLoad.title = $.trim(_value)
              if($.trim(_value) !== "" ){
                 $(".list-search",indexctx).addClass('act')
              }

          }).on('input',$.debounce(300,function(e){
            var _value = filtetSymbol(e.target.value)
            if($.trim(_value) == "" )return
                   $(".fzlist",indexctx).getList({ 
                     url:"/szjchbjk/hbcx/listAirport?hbxx_hbh=" + $.trim(_value),
                     iterableData:function(data){return data},
                     templ:function(ele){
                       if(ele==null)return ""
                         return "<dd><a href='javascript:;'>" + ele[ checkSiteLang() + "shortname"] + "</a></dd>"
                         }
                    })
          }))
          .on("blur",function(){
            $(".list-search",indexctx).removeClass('act')
          })

          $(".fzlist",indexctx).on("click","a",function(e){
            $(submitInput, indexctx).val($.trim($(this).text()))
            $(submitBtn, indexctx).trigger("click")
            $(".list-search",indexctx).removeClass('act')
          })








    })




    $(function()
        {

          //天气js
            // $('#wea-date').html(dayjs().format("YYYY-MM-DD"));
            // $.ajax(
            // {
            //   url: '/szjchbjk/weatherInterface/showWeather',
            //   type: 'get',
            //   // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
            //   dataType: 'jsonp',
            //   jsonpCallback: "getResult",
            //   success: function(data)
            //   {
            //     if(!data){
            //     $('#wea-wd').html("");
            //     $('#wea-img').html("");
            //   }
            //     // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
            //     // 客户端会主观认为服务端返回的就是 JSON 格式的字符串

            //     $('#wea-wd').html(data.list[0].low + "~" + data.list[0].high);                
            //     $('#wea-img').html("<img src='" + data.list[0].img + "' width='35px' height='35px'/>");
            //   },error:function(e){
            //     $('#wea-wd').html("");
            //     $('#wea-img').html("");
            //   }
            // })



          function GetQueryString(name)
          {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null)
              return decodeURI(r[2]);
            return null;
          }

          function getUrlCode(url)
          {
            if (!url) return ""
            var siteRes
            var colReg = /\/(hbxx|hbxxxg)\//i
            if (!colReg.exec(url)) return ""
            siteRes = "sfsairport" + checkSiteLang()
            colRes = colReg.exec(url)[1]
            return siteRes + "_" + colRes
          }

          var ctx = $("#app")
          if (ctx.length == 0) return
          var dateValue
          var timeValue
          var textValue
          var urltextvalue = filtetSymbol(GetQueryString("hbh"))
          var queryOption = {
            sfsairporten_hbxx:
            { //英文离岗
              _lang: "en",
              _flag: "D",
              _Scheme: "startSchemeTakeoffTime", //计划离岗
              _terminal: "startRealTakeoffTime", //实际离岗
              _stationThreechar: "terminalStationThreecharcode",
              _gate: "gateCode",
              _addtion1: "ckls",
              _addtion2: "fces_fcee",
              _theadUI:
              {
                _SchemeName: "Planned",
                _terminalName: "Estimated",
                _airlineflightName: "Airline/Flight No.",
                _gateName: "Gate",
                _stationThreecharName: "Transfers/Arrival",
                _statusName: "Status",
                _addtion1Name: "Check-in Counter",
                _addtion2Name: "Check-in Time"
              },
              _UItipMsg:
              {
                _noEarlierInterval: "No earlier flights found",
                _noLaterInterval: "No later flights found",
                _inAllInterval: "All flights are displayed",
                _noResult:"0 results",
                _noMoreList:"No more results"
              }
            },
            sfsairporten_hbxxxg:
            { //英文到达
              _lang: "en",
              _flag: "A",
              _Scheme: "terminalSchemeLandinTime", //计划到达
              _terminal: "terminalRealLandinTime", //实际达到
              _stationThreechar: "startStationThreecharcode",
              _gate: "gatedesp",
              _addtion1: "apot",
              _addtion2: "blls",
              _theadUI:
              {
                _SchemeName: "Planned",
                _terminalName: "Estimated",
                _airlineflightName: "Airline/Flight No.",
                _gateName: "Exit",
                _stationThreecharName: "Origin",
                _statusName: "Status",
                _addtion1Name: "Terminal",
                _addtion2Name: "Belt"
              },
              _UItipMsg:
              {
                _noEarlierInterval: "No earlier flights found",
                _noLaterInterval: "No later flights found",
                _inAllInterval: "All flights are displayed",
                _noResult:"0 results",
                _noMoreList:"No more results"
              }
            },
            sfsairportcn_hbxx:
            {
              _lang: "cn",
              _flag: "D",
              _Scheme: "startSchemeTakeoffTime",
              _terminal: "startRealTakeoffTime",
              _stationThreechar: "terminalStationThreecharcode",
              _gate: "gateCode",
              _addtion1: "ckls",
              _addtion2: "fces_fcee",
              _theadUI:
              {
                _SchemeName: "计划出发时间",
                _terminalName: "实际出发时间",
                _airlineflightName: "购票/航班号",
                _gateName: "登机口",
                _stationThreecharName: "经停点/目的地",
                _statusName: "状态",
                _addtion1Name: "值机柜台",
                _addtion2Name: "值机时间段"
              },
              _UItipMsg:
              {
                _noEarlierInterval: "无更早时段",
                _noLaterInterval: "无更晚时段",
                _inAllInterval: "当前为显示全部时段",
                _noResult:"无结果",
                _noMoreList:"没有更多了"
              }
            },
            sfsairportcn_hbxxxg:
            {
              _lang: "cn",
              _flag: "A",
              _Scheme: "terminalSchemeLandinTime",
              _terminal: "terminalRealLandinTime",
              _stationThreechar: "startStationThreecharcode",
              _gate: "gatedesp",
              _addtion1: "apot",
              _addtion2: "blls",
              _theadUI:
              {
                _SchemeName: "计划到达时间",
                _terminalName: "实际到达时间",
                _airlineflightName: "购票/航班号",
                _gateName: "到达口",
                _stationThreecharName: "出发地/经停点",
                _statusName: "状态",
                _addtion1Name: "航站楼",
                _addtion2Name: "行李口"
              },
              _UItipMsg:
              {
                _noEarlierInterval: "无更早时段",
                _noLaterInterval: "无更晚时段",
                _inAllInterval: "当前为显示全部时段",
                _noResult:"无结果",
                _noMoreList:"没有更多了"
              }
            }
          }
          // if(!queryOption[GetQueryString("app")])return
          // ctx.attr("app-id",GetQueryString("app"))
          // var ctxId = ctx.attr("app-id")
          // var ctxOption = queryOption[ctxId]

          var ctxId = getUrlCode(window.location.href)
          if (ctxId == "") return
          var ctxOption = queryOption[ctxId]

          var currentTime = !!urltextvalue ? 12 : Math.floor(dayjs().format("H") / 2)


          var selectDate1 = [dayjs().subtract(1, 'day').format("YYYY-MM-DD"), dayjs().format("YYYY-MM-DD"), dayjs().add(1, 'day').format("YYYY-MM-DD")];
          var html1 = '';
          for (var i = 0; i < selectDate1.length; i++)
          {
            html1 += "<option value='" + i + "' " + (i == 1 ? "selected='selected'" : "") + ">" + selectDate1[i] + "</option>"
          }
          $('#selectDateData', ctx).html(html1).on('click', 'dd', function()
          {
            var text = $(this).text();
            $('#selectYear', ctx).val(text);
          });




          var initList = function()
          {
            var url = "/szjchbjk/hbcx/flightInfo" + makeQuery()
            $("tbody", ctx).getList(
            {
              url: url,
              //fakeData:fakedepartureData,
              //beforeSend:airlineLoad.lodingFJ,
              //loaded:airlineLoad.lodingFJClose,
              renderDone:function(){
                console.log('我来显示隐藏更多!!!!!!!!!!!!!!!!!!!!!!!')
                if($("tbody tr",ctx).length > 10){
                  $('tbody tr:gt(9)',ctx).hide();//隐藏大于10个的
                  $(".table-show-more",ctx).show()
                }else{
                  $(".table-show-more",ctx).hide()
                }
              },
              templ: function(el)
              {
                if(el==null){
                  layer.msg(ctxOption._UItipMsg._noResult)
                  return ""
                }
                var childHtmlStr = ''
                $.each(el.hbh, function(index, item)
                {
                  childHtmlStr += '<li>\
                                        <i class="icon logo-icon">\
                                            <img src=\"' + el.shareflightairport[index].imgSrc + '\" />\
                                        </i>\
                                        <span class="area" title="' + item.flightNo + '">' + item.flightNo + '</span>\
                                    </li>'
                })

                var childHtmlStr1 = ''
                if (el[ctxOption._gate] != '')
                {
                  childHtmlStr1 = '<i class="iconfont iconziyuan"></i>'
                }

                return '<tr>\
                            <td>\
                                <div class="cell bold">' + el[ctxOption._Scheme] + '</div>\
                            </td>\
                            <td>\
                                <div class="cell bold">' + el[ctxOption._terminal] + '</div>\
                            </td>\
                            <td>\
                                <div class="cell" title="' + el[ctxOption._stationThreechar] + '">' + el[ctxOption._stationThreechar] + '</div>\
                            </td>\
                            <td>\
                                <div class="cell' + (el.hbh.length > 1 ? ' scoll-list' : '') + '">\
                                    <ul class="' + (el.hbh.length > 1 ? el.hbh.length > 5 ? 'count5' : 'count' + el.hbh.length : '') + '">' + childHtmlStr + '</ul></div>\
                            </td>\
                            <td>\
                                <div class="cell">' + el[ctxOption._addtion1] + '</div>\
                            </td>\
                            <td>\
                                <div class="cell">' + el[ctxOption._addtion2] + '</div>\
                            </td>\
                            <td>\
                                <div class="cell gate">\
                                    \
                                    ' + el[ctxOption._gate] + '\
                                </div>\
                            </td>\
                            <td>\
                                <div class="cell">\
                                    <a href="##" class="red" title="' + el.fltNormalStatus + '">' + el.fltNormalStatus + '</a>\
                                </div>\
                            </td>\
                        </tr>'
              }
            })

            
          }

          function makeQuery()
          {
            dateValue = window.airlineLoad.interest || "1"
            timeValue = window.airlineLoad.currentTime || currentTime
            textValue = window.airlineLoad.title || urltextvalue || ""
            return "?type=" + ctxOption._lang + "&flag=" + ctxOption._flag + "&currentDate=" + dateValue + "&currentTime=" + timeValue + "&hbxx_hbh=" + $.trim(textValue)
          }


          ! function()
          { //初始化
            setTimeout(function()
            {
              initList()
              urltextvalue = null
            })

            ctx.find(".filter-block.time dd[lay-value='" + currentTime + "']").trigger("click")
            var headoption = ctxOption._theadUI
            // $("thead", ctx)
            //   .html('<tr><th width="110">' + headoption._SchemeName + '</th>\
            //     <th width="110">' + headoption._terminalName + '</th>\
            //     <th>' + headoption._stationThreecharName + '</th>\
            //     <th width="130">' + headoption._airlineflightName + '</th>\
            //     <th>' + headoption._addtion1Name + '</th>\
            //     <th>' + headoption._addtion2Name + '</th>\
            //     <th>' + headoption._gateName + '</th>\
            //     <th>' + headoption._statusName + '</th></tr>')
          }()




          function submitAction()
          {
            if($(".tab-prev,.tab-next").is(":visible"))$(".tab-prev,.tab-next").hide()
            if ($.trim(ctx.find(".filter-block.ser-title .layui-input").val()) !== "") ctx.find(".filter-block.time dd").eq(0).trigger("click")
            initList()
          }


          $("button", ctx).on("click",submitAction )
          $(".layui-input", ctx).on("keyup",function(e){
            if(e.which == 13) initList()
          })


          var temptime = setInterval(function()
          {
            var t = ctx.find(".filter-block.time dd[lay-value='" + currentTime + "']")
            if (t.length)
            {
              clearInterval(temptime)
              t.trigger("click")
            }
          }, 400)



          ctx.on("click", '.tab-prev', function()
          {
            var timectx = ctx.find(".filter-block.time dd")

            var targetindex = ctx.find(".filter-block.time .layui-this").index() - 1
            if (targetindex == 12)
            {
              layer.msg(ctxOption._UItipMsg._inAllInterval);
              return
            }

            if (targetindex < 1)
            {
              layer.msg(ctxOption._UItipMsg._noEarlierInterval);
              return
            }
            timectx.eq(targetindex).trigger("click")
            initList()
          })

          ctx.on("click", ".tab-next", function()
          {
            var timectx = ctx.find(".filter-block.time dd")
            var targetindex = ctx.find(".filter-block.time .layui-this").index() + 1
            if (targetindex == 13)
            {
              layer.msg(ctxOption._UItipMsg._noLaterInterval);
              return
            }

            if (targetindex > timectx.length - 1)
            {
              layer.msg(ctxOption._UItipMsg._noLaterInterval);
              return
            }
            timectx.eq(targetindex).trigger("click")
            initList()
          })

          $(".layui-input", ctx).on("input focus", function(e)
          {
              var _value = filtetSymbol(e.target.value)
              window.airlineLoad.title = $.trim(_value)
              if($.trim(_value) !== "" ){
                 $(".list-search",ctx).addClass('act')
              }

          }).on('input',$.debounce(300,function(e){
            var _value = filtetSymbol(e.target.value)
            if($.trim(_value) == "" )return
                   $(".fzlist",ctx).getList({ 
                     url:"/szjchbjk/hbcx/listAirport?hbxx_hbh=" + $.trim(_value),
                     iterableData:function(data){return data},
                     templ:function(ele){
                       if(ele==null)return ""
                         return "<dd><a href='javascript:;'>" + ele[ctxOption._lang + "shortname"] + "</a></dd>"
                         }
                    })
          }))
          .on("blur",function(){
            $(".list-search",ctx).removeClass('act')
          })

          $(".fzlist",ctx).on("click","a",function(e){
            $(".layui-input", ctx).val($.trim($(this).text()))
            $("button", ctx).trigger("click")
            $(".list-search",ctx).removeClass('act')
          })



           

          


          ctx.on("click",'.table-show-more',function(){
            var vnum = $("tbody tr:visible",ctx).length
            var num = $("tbody tr",ctx).length
            if(vnum == num){
              layer.msg(ctxOption._UItipMsg._noMoreList)              
              $(this).hide()
              return
            }
            var postiontop = $(this).offset().top - 200

            
            $("tbody tr:lt(" + (vnum + 10) + ")",ctx).fadeIn(function(){

            })
            $("html").animate({
              scrollTop:postiontop
            },500)
          })



})
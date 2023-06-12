type = window.localStorage.getItem('type')
hideMy = document.querySelectorAll('.hidemy')
hideJcbx = document.querySelectorAll('.hidejcbx')
hideGkgrzx = document.querySelectorAll('.hidegkgrzx')
hideSjgrzx = document.querySelectorAll('.hidesjgrzx')
hideGlzgrzx = document.querySelectorAll('.hideglzgrzx')
hideGzrygrzx = document.querySelectorAll('.hidegzrygrzx')
hideHsgrzx = document.querySelectorAll('.hidehsgrzx')
hideGp = document.querySelectorAll('.hidegp')
hideJrgwc = document.querySelectorAll('.hidejrgwc')
window.addEventListener('DOMContentLoaded', function() {
    console.log('我进入type检查函数啦')
    console.log('type:'+type)
    console.log(hideGp)
    if (type !== 'Fm') {
        
        hideHsgrzx.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        
        hideHsgrzx.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    if(type==="null" || type == null){
        hideMy.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        hideMy.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    if(type !== 'Wk' && type !== 'Ma'){
        hideJcbx.forEach(function(element) {
            element.style.display = 'none';
        });
    }else{
        hideJcbx.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    if(type!=='Wk'){
        
        hideGzrygrzx.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        
        hideGzrygrzx.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    if(type!=='Sp'){
        hideSjgrzx.forEach(function(element) {
            element.style.display = 'none';
        });
        
    }else{
        hideSjgrzx.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    if(type!=='Pa'){
        hideGkgrzx.forEach(function(element) {
            element.style.display = 'none';
        });
        hideGp.forEach(function(element) {
            element.style.display = 'none';
        });
        hideJrgwc.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        hideGkgrzx.forEach(function(element) {
            element.style.display = 'block';
        });
        hideGp.forEach(function(element) {
            element.style.display = 'block';
        });
        hideJrgwc.forEach(function(element) {
            element.style.display = 'block';
        });
    }

    if(type !== 'Ma'){
        hideGlzgrzx.forEach(function(element) {
            element.style.display = 'none';
        });
        
    } else {
        hideGlzgrzx.forEach(function(element) {
            element.style.display = 'block';
        });
        
    }

    //更换点击我的跳转的网址
    hideMy.forEach(function(element){
        link = element.getElementsByTagName("a")[0];
        if(type === "Pa"){
            link.href = "/sfsairport/wd/gkgrzx/CustomerPersonalCenter.html"
        }else if(type === "Wk"){
            link.href = "/sfsairport/wd/gzrygrzx/new-repair.html"
        }else if(type === "Ma"){
            link.href = "/sfsairport/wd/glygrzx/manager.html"
        }else if(type === "Fm"){
            link.href = "/sfsairport/wd/hsgrzx/Add.html"
        }else if(type === "Sp"){
            link.href = "/sfsairport/wd/sjgrzx/shoperAdd.html"
        }
    })

});


  noticeElement = document.querySelector('.typename')
  window.addEventListener('load',function(){
    if(type == "null" || type == null){
      noticeElement.style.display='none';
    }else{
      noticeElement.style.display='block';
      if(type == "Pa"){
        noticeElement.textContent="您好,尊敬的顾客";
      }else if(type == "Wk"){
        noticeElement.textContent="您好,敬业的工作人员";
      }else if(type == "Ma"){
        noticeElement.textContent="您好,尊敬的管理员";
      }else if(type == "Sp"){
        noticeElement.textContent="您好,亲爱的商家";
      }else if(type == "Fm"){
        noticeElement.textContent="您好,尊敬的航司"
      }
    }
  })
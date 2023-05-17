const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
});


// 注册表单提交事件
document.getElementById("REGISTER_BTN").addEventListener("click", function(event) {
  
    // 获取表单输入值
    var username = document.getElementById("REGISTER_ID").value;
    var password = document.getElementById("REGISTER_PW").value;
    var email = document.getElementById("REGISTER_EMAIL").value;
    var type = document.getElementById("REGISTER_TYPE").value;
  
    // 构建请求体数据
    var data = {
      username: username,
      password: password,
      email: email,
      type: type
    };
  
    // 发送POST请求到注册API
    fetch("http://101.42.178.149:5000/api/Index/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // 根据后端返回的结果处理逻辑
        if (result.msg === 1) {
          // 注册成功，跳转到登录页面
          window.location.href = "login.html";
        } else {
          // 注册失败，显示错误信息或采取其他操作
          console.log("注册失败");
        }
      })
      .catch(error => {
        console.error("请求失败:", error);
      });
  });
  
  // 登录表单提交事件
  document.getElementById("LOGIN_BTN").addEventListener("click", function(event) {
  
    // 获取表单输入值
    var username = document.getElementById("LOGIN_ID").value;
    var password = document.getElementById("LOGIN_PW").value;
  
    // 构建请求体数据
    var data = {
      username: username,
      password: password
    };
  
    // 发送POST请求到登录API
    fetch("http://101.42.178.149:5000/api/Index/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // 根据后端返回的结果处理逻辑
        if (result.msg === 1) {
          // 登录成功，跳转到成功页面
          window.location.href = "chenggong.html";
        } else {
          // 登录失败，显示错误信息或采取其他操作
          console.log("登录失败");
        }
      })
      .catch(error => {
        console.error("请求失败:", error);
      });
  });
  
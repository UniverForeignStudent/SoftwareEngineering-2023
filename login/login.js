const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.getElementById('register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const formLogin = document.getElementById('form-login');
const formRegister = document.getElementById('form-register');
const loginButton = document.getElementById('LOGIN_BTN');
const emailInput = document.getElementById('REGISTER_EMAIL');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
  const email = emailInput.value.trim();
  const isValid = emailRegex.test(email);
    
  if (!isValid) {
    alert('您输入的邮箱格式不正确!!!')
    return -1;
  } 
}


window.addEventListener('load', function() {
  isLoggedIn = ((window.localStorage.getItem('token') != "null")&&window.localStorage.getItem('token') != null);
  console.log(isLoggedIn)
  console.log(window.localStorage.getItem('token'))
  // 根据登录状态更新按钮文本
  updateButton();
});

function updateButton(){
  if (isLoggedIn) {
    // 如果已登录，则按钮显示为"退出登录"
    btnPopup.innerHTML = '退出登录';
  } else {
    // 如果未登录，则按钮显示为"登录"
    btnPopup.innerHTML = '登录';
  }
}

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
    toggleBackgroundOverlay(true);
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
    toggleBackgroundOverlay(true);
});

btnPopup.addEventListener('click', ()=>{
    if(isLoggedIn){
      window.localStorage.setItem("token","null");
      window.localStorage.setItem('type','null')
      loginButton.innerHTML = '登录';
      alert('退出成功!!!');
      location.reload();
      return;
    }
    wrapper.classList.add('active-popup');
    toggleBackgroundOverlay(true);
    resetForm();
});

iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
    toggleBackgroundOverlay(false);
});

         
function toggleBackgroundOverlay(active) {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
  
    if (active) {
      overlay.classList.add('active');
      body.style.overflow = 'hidden';
    } else {
      overlay.classList.remove('active');
      body.style.overflow = 'auto';
    }
  }

  function resetForm() {
    formLogin.reset(); // 重置表单
    formRegister.reset();
    console.log('我重置表单了')
  }

  var usernameRgInput = document.getElementById("REGISTER_ID");
  var emailRgInput = document.getElementById("REGISTER_EMAIL");
  var typeRgInput = document.getElementById("REGISTER_TYPE");
  var passwordRgInput = document.getElementById("REGISTER_PW");
  var registerLabel = document.querySelector('.RegisterLabel')
  var regBoxId = document.querySelector('.RegIdBox')
  var regBoxPw = document.querySelector('.RegPwBox')
  var regBoxEm = document.querySelector('.RegEmBox')
  var regBoxTy = document.querySelector('.RegTyBox')

  document.getElementById("REGISTER_BTN").addEventListener("click", function(event) {
    // 获取表单输入值
    var username = usernameRgInput.value.trim();
    var password = passwordRgInput.value.trim();
    var email = emailRgInput.value.trim();
    var type = typeRgInput.value;
    
    registerLabel.style.color = 'red'
    if(username == ""){
      var label = usernameRgInput.nextElementSibling
      label.style.color = 'red'
      regBoxId.classList.add('shake')
      setTimeout(function(){
        regBoxId.classList.remove('shake')
      },400)
      registerLabel.textContent = '请输入用户名'
      return
    }
    if(password == ""){
      var label = passwordRgInput.nextElementSibling
      label.style.color = 'red'
      regBoxPw.classList.add('shake')
      setTimeout(function(){
        regBoPwd.classList.remove('shake')
      },400)
      registerLabel.textContent = '请输入密码'
      return
    }
    if(email == ""){
      var label = emailRgInput.nextElementSibling
      label.style.color = 'red'
      regBoxEm.classList.add('shake')
      setTimeout(function(){
        regBoxEm.classList.remove('shake')
      },400)
      registerLabel.textContent = '请输入邮箱'
      return
    }
    if(type == ""){
      regBoxTy.classList.add('shake')
      setTimeout(function(){
        regBoxTy.classList.remove('shake')
      },400)
      registerLabel.textContent = '请选择用户类型'
      return
    }

    if (validateEmail()==-1){
      console.log('邮箱格式:')
      emailRgInput.value = ''
      return;
    }

    // 构建请求体数据
    var data = {
      username: username,
      password: password,
      email: email,
      type:''
    };
    
    if(type == '旅客'){
      data.type = 'Pa';
    }
    if(type == '商家'){
      data.type = 'Sp';
    }
    if(type == '管理员'){
      data.type = 'Ma';
    }
    if(type == '工作人员'){
      data.type = 'Wk';
    }
    if(type == '航空公司'){
      data.type = 'Fm';
    }
    console.log(data)
    username=encodeURIComponent(username)
    password=encodeURIComponent(password)
    email=encodeURIComponent(email)
    type=encodeURIComponent(type)
    // 发送POST请求到注册API
    var xhr = new XMLHttpRequest();
    var url = 'http://101.42.178.149/api/Index/register';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
      // 请求成功处理
      var response = JSON.parse(xhr.responseText);
        if(response.msg == 1){
          alert('注册成功');
          resetForm();
          loginLink.click();
        }else if(response.msg==0){
          alert('我是0')
        }else{
          alert('该用户名已存在')
          resetForm()
          registerLabel.value = ''
        }
      } else {
          // 请求失败处理
          console.log('注册失败');
        }
      }
    };

    xhr.onerror = function() {
      console.log('请求发生错误');
    };

    var params = 'username=' + username + '&' + 'password=' + password +'&'+ 'email='+email + '&'+'type='+data.type; // Create the parameter string
    console.log(params)
    xhr.send(params);
  });
  
  var usernameInput = document.getElementById("LOGIN_ID");
  var passwordInput = document.getElementById("LOGIN_PW");
  var usernameLabel = document.getElementById('LOGIN_ID_LABEL')
  var passwordLabel = document.getElementById('LOGIN_PW_LABEL')
  var boxId = document.querySelector('.inputBoxId')
  var boxPw = document.querySelector('.inputBoxPw')
  var loginLabel = document.querySelector('.LoginLabel')
  // 登录表单提交事件
  loginButton.addEventListener("click", function(event) {
    // 获取表单输入值
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    console.log('passWord:'+password)
    
    
    var nouserDialog = document.createElement('div');
    nouserDialog.classList.add('nouser-dialog');
    nouserDialog.innerHTML = `
    <div class="success-content">
        <h3>该用户名不存在</h3>
        <p>请重新输入</p>
    </div>
    `;

    var errorPwDialog = document.createElement('div');
    errorPwDialog.classList.add('nouser-dialog');
    errorPwDialog.innerHTML = `
    <div class="success-content">
        <h3>密码错误</h3>
        <p>请重新输入</p>
    </div>
    `;
    if(username == ""){
      usernameLabel.style.color = 'red'
      boxId.classList.add('shake')
      setTimeout(function(){
        boxId.classList.remove('shake')
      },400)
      usernameInput.value = '';
      loginLabel.textContent = '请输入用户名'
      loginLabel.style.color = 'red'
      return
    }
    if(password == ""){
      passwordLabel.style.color = 'red'
      boxPw.classList.add('shake')
      setTimeout(function(){
        boxPw.classList.remove('shake')
      },400)
      passwordInput.value = ''
      loginLabel.textContent = '请输入密码'
      loginLabel.style.color = 'red'
      return
    }
    // 构建请求体数据
    var data = {
      username: username,
      password: password
    };
  
    // 发送POST请求到登录API
    username=encodeURIComponent(username)
    password=encodeURIComponent(password)
    // 发送POST请求到注册API
    var xhr = new XMLHttpRequest();
    var url = 'http://101.42.178.149/api/Index/login';
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.onload = function() {
      
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
      // 请求成功处理
      var response = JSON.parse(xhr.responseText);
        if(response.msg == 1){
          window.localStorage.setItem("token",response.token);
          window.localStorage.setItem('type',response.type)
          console.log(window.localStorage.getItem("token"))
          alert('登录成功!!!');
          location.reload();
        }else if(response.msg == "用户名不存在"){
          document.body.appendChild(nouserDialog);
          setTimeout(function(){
            document.body.removeChild(nouserDialog);
          },2000)
          usernameInput.value = ''
          passwordInput.value = ''
        }else{
          document.body.appendChild(errorPwDialog);
          setTimeout(function(){
            document.body.removeChild(errorPwDialog);
          },2000)
          passwordInput.value = ''
        }
      } else {
          // 请求失败处理
          console.log('注册失败');
        }
      }
    };

    xhr.onerror = function() {
      console.log('请求发生错误');
    };

    var params = 'username=' + username + '&' + 'password=' + password; // Create the parameter string
    console.log(params)
    xhr.send(params);
  });

  function clearValidationStyles(input) {
    var label = input.nextElementSibling;
    if (label.id == "LOGIN_ID_LABEL") {
      if (input.value.trim() !== "") {
        loginLabel.textContent = '';
        label.style.color = ''
      }
    }
    if (label.id == "LOGIN_PW_LABEL") {
      if (input.value.trim() !== "") {
        loginLabel.textContent = '';
        label.style.color = ''
      }
    }
    if (input.id == "REGISTER_ID") {
      if (input.value.trim() !== "") {
        registerLabel.textContent = '';
        label.style.color = ''
      }
    }
    if (input.id == "REGISTER_PW") {
      if (input.value.trim() !== "") {
        registerLabel.textContent = '';
        label.style.color = ''
      }
    }
    if (input.id == "REGISTER_EMAIL") {
      if (input.value.trim() !== "") {
        registerLabel.textContent = '';
        label.style.color = ''
      }
    }
    if (input.id == "TYPE") {
      if (input.value.trim() !== "") {
        registerLabel.textContent = '';
        label.style.color = ''
      }
    }
  }
  

  
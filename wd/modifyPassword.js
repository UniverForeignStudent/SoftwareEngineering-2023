token = window.localStorage.getItem('token')
document.querySelector('.modifyPasswordBtn').addEventListener('click',function(){
    var old_passwordInput = document.querySelector('.old_password')
    var new_passwordInput = document.querySelector('.new_password')
    var new_password_repeatInput = document.querySelector('.new_password_repeat')
    var old_password = old_passwordInput.value.trim()
    var new_password = new_passwordInput.value.trim()
    var new_password_repeat = new_password_repeatInput.value.trim()
    var old_passwordLabel = document.querySelector('.old_password_label')
    var new_passwordLabel = document.querySelector('.new_password_label')
    var new_password_repeatLabel = document.querySelector('.new_password_repeat_label')
    console.log('旧密码:'+new_password)
    if (old_password === '') {
        old_passwordLabel.style.display = 'block';
        old_passwordLabel.style.color = 'red';
        old_passwordInput.style.borderColor = 'red';
        old_passwordLabel.textContent = '请输入旧密码'
        old_passwordInput.classList.add('shake');
        setTimeout(function() {
            old_passwordInput.classList.remove('shake');
        }, 400); // 控制震动持续时间
        old_passwordInput.value = ''
        return;
      } else {
        old_passwordLabel.style.display = 'none';
        old_passwordInput.style.borderColor = '1px solid #e6e6e6';
    }
    if (new_password === '') {
        new_passwordLabel.style.display = 'block';
        new_passwordLabel.style.color = 'red';
        new_passwordInput.style.borderColor = 'red';
        new_passwordInput.classList.add('shake');
        setTimeout(function() {
            new_passwordInput.classList.remove('shake');
        }, 400); // 控制震动持续时间
        new_passwordInput.value = ''
        return;
      } else {
        new_password_repeatLabel.style.display = 'none';
        new_password_repeatInput.style.borderColor = '1px solid #e6e6e6';
    }
    if (new_password_repeat === '') {
        new_password_repeatLabel.style.display = 'block';
        new_password_repeatLabel.style.color = 'red';
        new_password_repeatInput.style.borderColor = 'red';
        new_password_repeatInput.classList.add('shake');
        new_passwordLabel.textContent = '请再次输入新密码'
        setTimeout(function() {
            new_password_repeatInput.classList.remove('shake');
        }, 400); // 控制震动持续时间
        new_password_repeatInput.value = ''
        return;
      } else {
        new_password_repeatLabel.style.display = 'none';
        new_password_repeatInput.style.borderColor = '1px solid #e6e6e6';
    }

    if(new_password != new_password_repeat){
        // alert('您两次输入的新密码不一样!!!')
        new_passwordInput.style.borderColor = 'red';
        new_passwordInput.classList.add('shake');
        setTimeout(function() {
            new_passwordInput.classList.remove('shake');
        }, 400); // 控制震动持续时间
        new_passwordInput.value = ''

        new_password_repeatLabel.style.display = 'block';
        new_password_repeatLabel.style.color = 'red';
        new_password_repeatInput.style.borderColor = 'red';
        new_password_repeatInput.classList.add('shake');
        new_password_repeatLabel.textContent = '两次输入的密码不一样'
        setTimeout(function() {
            new_password_repeatInput.classList.remove('shake');
        }, 400); // 控制震动持续时间
        new_password_repeatInput.value = ''




        return;
    }

    var data = {
            old_password:old_password,
            token: token,
            new_password:new_password
        };

        // 发送JSON数据到后端
        fetch('http://101.42.178.149/api/Index/reset_password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            // 处理响应
            if (response.ok) {
                // 请求成功
                return response.json(); // 将响应数据解析为JSON格式
            } else {
                // 请求失败
                throw new Error('请求失败');
            }
        })
        .then(function(data) {
            if(data.msg == -2){
                // alert('旧密码错误')
                old_passwordLabel.style.display = 'block';
                old_passwordLabel.style.color = 'red';
                old_passwordInput.style.borderColor = 'red';
                old_passwordLabel.textContent = '旧密码错误'
                old_passwordInput.classList.add('shake');
                setTimeout(function() {
                    old_passwordInput.classList.remove('shake');
                }, 400); // 控制震动持续时间
                old_passwordInput.value = ''


                
            }else{
                // alert('修改成功')
                // window.localStorage.setItem('token','null')
                // window.localStorage.setItem('type','null')
                // window.location.href = '../../index.html'
                var closeButton = document.getElementById('sear-close'); // 使用按钮的 ID 来选择元素
                closeButton.click();

                // 创建容器元素
                var container = document.createElement('div');
                container.classList.add('overlay-container');
                container.style.position = 'relative';
                container.style.zIndex = '9999';
                // 创建遮罩层
                var overlay = document.createElement('div');
                overlay.classList.add('overlay');
                document.body.appendChild(overlay);


                // 获取导航条
                var nav = document.querySelector('.pc-nav');

                // 将导航条变暗
                nav.style.opacity = '0.5';
                nav.style.pointerEvents = 'none';

                // 将容器元素添加到 body 中
                document.body.appendChild(container);

                // 将 overlay 添加到容器元素中
                container.appendChild(overlay);

                // 将导航条添加到容器元素中
                container.appendChild(nav);

                // 禁用导航条上的链接和按钮
                var navLinks = document.querySelectorAll('.pc-nav a');
                var navButtons = document.querySelectorAll('.pc-nav button');
                navLinks.forEach(function(link) {
                    link.setAttribute('disabled', true);
                    link.style.pointerEvents = 'none';
                });
                navButtons.forEach(function(button) {
                    button.setAttribute('disabled', true);
                    button.style.pointerEvents = 'none';
                });

                

                // 自定义密码修改成功提示框
                var successDialog = document.createElement('div');
                successDialog.classList.add('success-dialog');
                successDialog.innerHTML = `
                <div class="success-content">
                    <h3>密码修改成功</h3>
                    <p>请重新登录</p>
                </div>
                `;
                document.body.appendChild(successDialog);


                // 延迟两秒后跳转到登录界面
                setTimeout(function() {
                    document.body.removeChild(container);
                    document.body.removeChild(successDialog);
                    window.localStorage.setItem('token', 'null');
                    window.localStorage.setItem('type', 'null');
                    window.location.href = '../../index.html';
                    
                }, 2000);
                
            }
            // 处理返回的数据
            console.log(data); // 在控制台输出返回的数据

            // 根据需要执行相应的操作
        })
        .catch(function(error) {
            // 处理错误
            console.error('Error:', error);
        });
    });

    function clearValidationStyles(input) {
        input.style.borderColor = '';
        var label = input.nextElementSibling;
        if (label.classList.contains('old_password_label')) {
          label.style.display = 'none';
        }
        if (label.classList.contains('new_password_label')) {
            label.style.display = 'none';
        }
        if (label.classList.contains('new_password_repeat_label')) {
            label.style.display = 'none';
        }
        input.classList.remove('shake');
      }
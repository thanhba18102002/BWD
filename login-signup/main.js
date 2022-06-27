function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConfirm= document.getElementById("passwordConfirm").value;
    var user = {
      username: username,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    if(username=="" || email=="" || password=="" || passwordConfirm==""){
        alert("NHẬP ĐẦY ĐỦ THÔNG TIN")  
        if(username==""){
          document.getElementById("username").style.border="1px solid red";
        }
        if(email==""){
          document.getElementById("email").style.border="1px solid red";
        }
        if(password==""){
          document.getElementById("password").style.border="1px solid red";
        }
        if(passwordConfirm==""){
            document.getElementById("passwordConfirm").style.border="1px solid red";
        }
    }else if (email.indexOf("@") < 1 || ( email.lastIndexOf(".") - email.indexOf("@") < 2 )){
        alert("Email không hợp lệ")
        document.getElementById("email").style.border="1px solid red";
    } else if (user.password != user.passwordConfirm){
        alert("MẬT KHẨU KHÔNG TRÙNG KHỚP")
        document.getElementById("passwordConfirm").style.border="1px solid red";
    }else{
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("dang ky thanh cong");
    window.location.href = "login.html"
}
  }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(username=="" || email=="" || password=="" ){
      alert("NHẬP ĐẦY ĐỦ THÔNG TIN")  
      if(username==""){
        document.getElementById("username").style.border="1px solid red";
      }
      if(email==""){
        document.getElementById("email").style.border="1px solid red";
      }
      if(password==""){
        document.getElementById("password").style.border="1px solid red";
      }
    } else if (!user) {
      alert("TÀI KHOẢN KHÔNG HỢP LỆ");
    } else if (
      username == data.username &&
      email == data.email &&
      password == data.password
    ) {
      
      window.location.href = "/index2.html";
    } else {
      alert("dang nhap that bai");
    }
  }
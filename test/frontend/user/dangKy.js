const resigter = ()=>{
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
    const repass = document.querySelector('input[name="repass"]').value;
    function checkEmail(email){
        const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return check.test(email);
    }
    if((email.trim()=="")||(name.trim()=="")||(pass.trim()=="")||(repass.trim()=="")){
        alert("Vui lòng nhập đủ dữ liệu");
    }else{
        if((checkEmail(email)==false)){
            alert("Email không đúng kiểu dữ liệu");
        }if(pass != repass){
            alert("Mật khẩu không giống nhau");
        }
        if((checkEmail(email)==true)&&(pass == repass)){
            const data = {
                "name":name,
                "email":email,
                "pass":pass
            };
            fetch('http://localhost:3000/user',{
                method:'POST',
                body:JSON.stringify(data)
            });
            // window.location.replace("http://127.0.0.1:5500/test/frontend/user/login.html");
            alert("Đăng ký thành công");
        }
    }
}
// /^[^\s@]+@[^\s@]+\.[^\s@]+$/
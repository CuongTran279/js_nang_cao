const resigter= async()=>{
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
    const repass = document.querySelector('input[name="repass"]').value;
    function checkEmail(email){
        const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return check.test(email);
    }
    async function checkUser(name) {
        const respone = await fetch('http://localhost:3000/user');
        const user = await respone.json();
        let check = false;
        // console.log(user);
        user.map((value)=>{
            if(value.name != name){
                check = true;
            }
        })
        return check;
    }
    const checkU = await checkUser(name);
    // console.log(name,email,pass,repass);
    if((name.trim()=="")||(email.trim()=="")||(pass.trim()=="")||(repass.trim()=="")){
        alert("Vui lòng nhập đầy đủ các trường dữ liệu");
    }else{
        if(pass != repass){
            alert("Mật khẩu không trùng khớp");
        }if(checkEmail(email)==false){
            alert("Email không đúng kiểu dữ liệu");
        }
        if(checkUser(name)==false){
            alert("Tên đăng nhập đã tồn tại");
        }
        if((pass == repass)&&(checkEmail(email)==true)&&(checkUser(name)==true)){
            const data = {
                "name":name,
                "pass":pass,
                "email":email,
            };
            fetch('http://localhost:3000/user',{
                method:'POST',
                body:JSON.stringify(data)
            });
            alert("Đăng ký thành công, vui lòng đăng nhập");
        }
    }
}
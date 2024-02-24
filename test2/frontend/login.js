const login = async()=>{
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const pass = document.querySelector('input[name="password"]').value;
    const link = document.querySelector('a');
    // console.log(name,pass);
    const check = await checkUser(name,pass);
    const mess = document.querySelector("#mess");
    if(check){
        mess.innerHTML="Đăng nhập thành công";
        localStorage.setItem("login","true");
        link.href="product.html";
        link.innerHTML="Danh sach";
    }else{
        mess.innerHTML="Sai";
    }
}

const checkUser = async(name,pass)=>{
    const respone = await fetch('http://localhost:3000/user');
    const user = await respone.json();
    let check = false;
    user.map((value,key)=>{
        if((value.uname==name)&&(value.pass==pass)){
            check = true;
        }
    });
    return check;
}
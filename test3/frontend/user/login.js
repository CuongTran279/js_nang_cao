const login = async()=>{
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
    console.log(name,pass);
    const checkU = await check(name,pass);
    if(checkU){
        localStorage.setItem("login","true");
        window.location.replace("http://127.0.0.1:5500/test/frontend/product/list.html");
    }else{
        alert("Sai thông tin tài khoản");
    }
}
const check=async(name,pass)=>{
    const respone = await fetch('http://localhost:3000/user');
    const user = await respone.json();
    // console.log(user);
    let check = false;
    user.map((value,key)=>{
        if((value.name==name)&&(value.pass==pass)){
            check=true;
        }
    })
    return check;
}


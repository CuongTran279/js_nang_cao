const login = async ()=>{
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const pass = document.querySelector('input[name="pass"]').value;
    console.log(name,pass);
    const check = await checkUser(name,pass);
    if((name.trim == "")||(pass.trim()=="")){
        alert("Vui long nhap day du ");
    }else{
        if(check){
            localStorage.setItem("login","true");
            window.location.replace("http://127.0.0.1:5500/test4/frontend/product/product.html");
        }else{
            alert("Tai khoan khong ton tai");
        }
    }
}
const checkUser=async(name,pass)=>{
    const respone = await fetch('http://localhost:3000/user');
    const user = await respone.json();
    let check = false;
    user.map((value)=>{
        if((name == value.name)&&(pass == value.pass)){
            check = true;
        }
    })
    return check;
}

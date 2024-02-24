const renderProduct =async ()=>{
    const respone = await fetch('http://localhost:3000/product');
    const products = await respone.json();
    const tbody = document.querySelector("tbody");
    tbody.innerHTML ="";
    const tr = document.createElement("tr");
    products.map((value,key)=>{
        const tr = document.createElement("tr");
        tr.innerHTML=`
            <td>${key+1}</td>
            <td>${value.name}</td>
            <td><img src="${value.image}" width="70px"></td>
            <td>${value.price}</td>
            <td>${value.categories}</td>
            <td><a class="btn btn-dark" href="edit.html?id=${value.id}">Edit</a><button class="btn btn-danger" onclick="deleteP(${value.id})">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
    
}
renderProduct();
const addProduct = ()=>{
    event.preventDefault();
    var login = localStorage.getItem("login");
    if(login == "true"){
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const categories = document.querySelector('select[name="categories"]').value;
    // console.log(name,image,price,categories);
    const data = {
        "name":name,
        "image":image,
        "price":price,
        "categories":categories
    }
    if((name.trim()=="")||(image.trim()=="")||(price.trim()=="")||(categories==0)){
        alert("Dien day du cac tuong du lieu");
    }else{
        if(isNaN(price)){
            alert("Price phai la kieu so");
        }else{
            fetch('http://localhost:3000/product',{
                method:"POST",
                body:JSON.stringify(data)
            });
            alert("Them moi thanh cong");
        }
    }
    }else{
        alert("Vui long dang  nhap");
    }
}
const deleteP = (id)=>{
    const cf = confirm("Ban muon xoa ?");
    if(cf){
        fetch(`http://localhost:3000/product/${id}`,{
            method:"DELETE"
        });
        alert("Xoa thanh cong");
    }
}
const logout = ()=>{
    localStorage.setItem("login","false");
    window.location.replace("http://127.0.0.1:5500/test4/frontend/user/login.html");
}
const check = ()=>{
    var login = localStorage.getItem("login");
    const logout = document.querySelector('button[name="logout"]');
    if(login == "false"){
        alert("Vui long dang nhap");
        logout.innerHTML = "Login";
    }
}
window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
});
check();

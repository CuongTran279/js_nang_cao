const addProduct = ()=>{
    event.preventDefault();
    const ten = document.querySelector('input[name="tensanpham"]').value;
    const anh = document.querySelector('input[name="anhsanpham"]').value;
    const danhmuc = document.querySelector('select[name="danhmuc"]').value;
    const gia = document.querySelector('input[name="giatien"]').value;
    // console.log(ten,anh,danhmuc,gia);
    if((ten.trim()=="") || (isNaN(gia))){
        const mess = document.querySelector("#mess");
        mess.innerHTML = "Tên sản phẩm không được trống và giá tiền phải là số";
    }else{
        const data = {
            "name":ten,
            "image":anh,
            "cart_id":danhmuc,
            "price":gia
        };
        fetch('http://localhost:3000/products',{
            method : 'POST',
            body: JSON.stringify(data)
        });
        alert("Them thanh cong")
    }
}
const renderProduct = async ()=>{
    const tbody = document.querySelector('tbody');
    tbody.innerHTML="";
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    var i = "";
    // console.log(products);
    products.map((value,key)=>{
        const tr = document.createElement("tr");
        if(value.cart_id == 1){
            i = "Áo";
        }if(value.cart_id == 2){
            i = "Quan";
        }if(value.cart_id == 3){
            i = "Giay";
        }
        tr.innerHTML = `
            <td>${key+1}</td>
            <td>${value.name}</td>
            <td><image width="60" src="${value.image}"></td>
            <td>${i}</td>
            <td>${value.price}</td>
            <td><a class="btn btn-dark" href="product-edit.html?id=${value.id}">Sua</a><button class="btn btn-danger" onclick="deleteProduct('${value.id}')">Xoa</button></td>
        `;
        tbody.appendChild(tr);
    })
} 
renderProduct();
const deleteProduct = (pid)=>{
    const confi = confirm("Ban co muon xoa");
    if(confi){
        fetch(`http://localhost:3000/products/${pid}`,{
            method: 'DELETE'
        });
        alert('Xoa thanh cong');
    }
}
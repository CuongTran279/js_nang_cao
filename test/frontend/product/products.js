const listProduct = async()=>{
    const tbody = document.querySelector("tbody");
    tbody.innerHTML="";
    const response = await fetch('http://localhost:3000/pro');
    const products = await response.json();
    // console.log(products);
    products.map((value,key)=>{
        const tr = document.createElement('tr');
        tr.innerHTML=`
            <td>${key+1}</td>
            <td>${value.name}</td>
            <td><image width="100px" src="${value.image}"></td>
            <td>${value.price}</td>
            <td>${value.quantity}</td>
            <td>${value.categorie}</td>
            <td><a href="update.html?id=${value.id}" class="btn btn-dark">Sua</a><button class="btn btn-danger" onclick="deleteProduct('${value.id}')">Xoa</button></td>
        `;
        tbody.appendChild(tr);
    })
}
listProduct();
const addProduct = ()=>{
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const categorie = document.querySelector('select[name="categories"]').value;
    const mess = document.querySelector('#mess')
    if((name.trim() == "")||(price.trim() == "")||(quantity.trim() == "")||(image.trim()=="")||(categorie==0)){
        alert("Vui lòng nhập đủ dữ liệu");
    }else{
        if(isNaN(price)||isNaN(quantity)){
            alert("Giá và số lượng phải là kiểu số");
        }else{
        const data = {
            "name":name,
            "price":price,
            "image":image,
            "quantity":quantity,
            "categorie":categorie
        };
        fetch('http://localhost:3000/pro',{
            method:'POST',
            body: JSON.stringify(data)
        });
        alert("Thêm sản phẩm mới thành công");
        }
    }
}
const deleteProduct = (id)=>{
    const confim = confirm("Bạn có muốn xóa không");
    if(confim){
        fetch(`http://localhost:3000/pro/${id}`,{
            method: 'DELETE'
        });
        alert("Xóa thành công");
    }
}
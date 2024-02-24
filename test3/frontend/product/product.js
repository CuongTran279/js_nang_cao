const addProduct = ()=>{
    event.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const categories = document.querySelector('select[name="categories"]').value;
    // console.log(name,image,price,quantity,categories);
    if((name.trim()=="")||(image.trim()=="")||(price.trim()=="")||(quantity.trim()=="")||(categories==0)){
        alert("Vui lòng nhập đầy đủ các trường dữ liệu");
    }else{
        if(isNaN(price)||isNaN(quantity)){
            alert("Số lượng và giá phải là kiểu số");
        }else{
            const data = {
                "name":name,
                "image":image,
                "price":price,
                "quantity":quantity,
                "categories":categories
            };
            fetch('http://localhost:3000/product',{
                method:'POST',
                body:JSON.stringify(data)
            });
            alert("Thêm sản phẩm mới thành công");
        }
    }
}
const renderProduct = async()=>{
    const tbody = document.querySelector("tbody");
    tbody.innerHTML="";
    const respone = await fetch('http://localhost:3000/product');
    const products = await respone.json();
    // console.log(products);
    let viewCate = "";
    products.map((value,key)=>{
        const tr = document.createElement("tr");
        if(value.categories==1){
            viewCate = "TV";
        }else if(value.categories==2){
            viewCate = "Phone";
        }else if(value.categories==3){
            viewCate = "Fan";
        }else{
            viewCate = "Danh mục không tồn tại";
        }
        tr.innerHTML=`
            <td>${key+1}</td>
            <td>${value.name}</td>
            <td><image src="${value.image}" width="60px"></td>
            <td>${value.price}</td>
            <td>${value.quantity}</td>
            <td>${viewCate}</td>
            <td><a href="edit.html?id=${value.id}" class="btn btn-dark">Sửa</a><button onclick="deleteProduct('${value.id}')" class="btn btn-danger">Xóa</button></td>
        `;
        tbody.appendChild(tr);
    });
}
renderProduct();
const deleteProduct = (id)=>{
    const cf = confirm("Bạn có chắc chắn muốn xóa");
    if(cf){
        fetch(`http://localhost:3000/product/${id}`,{
            method:'DELETE'
        });
        alert("Xóa thành công");
    }
}
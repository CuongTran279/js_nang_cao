const addProduct=async ()=>{
    event.preventDefault(); // Ngăn trình duyệt chuyển hướng
    // Lấy dữ liệu từ ô input.
    let name = document.getElementById("tensp").value;
    let image = document.getElementById("anhsp").value;
    let cart_id = document.getElementById("danhmuc").value;
    let price = document.getElementById("gia").value;
    let description = document.getElementById("mota").value;

    // Sau khi gán giá trị xong thì in ra thử xem đúng chưa.
    // console.log(name,image,price,description,cat_id);

    //Kiểm tra lấy thành công thì đổ dữ liệu vào database.
    // sử dụng fetch để gửi dữ liệu qua phương thức post lên api json-server
    // fetch trả về promise nên chúng ta sẽ sử dụng async/await để xử lý/
    let response = await fetch('http://localhost:3000/Product',{
        method:'POST',
        body: JSON.stringify({name:name,image:image,cart_id:cart_id,description:description,price:price})
    });
    // Thêm thành công.
    // console.log(response);
}
const renderProduct = async ()=>{
    let response = await fetch('http://localhost:3000/Product');
    let product =await response.json();
    // console.log(product);
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    product.map((value,index)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index+1}</td>
            <td><img style="width:50px;height:50px" src="${value.image}"></td>
            <td>${value.name}</td>
            <td>${value.cart_id}</td>
            <td>${value.description}</td>
            <td>${value.price}</td>
            <td>    <a href="editProduct.html?id=${value.id}" class="btn btn-primary">Sửa</a>
            <a class="btn btn-danger" onclick="delProduct('${value.id}')">Xóa</a>
            </td>
        `;
        tbody.appendChild(tr);
    });
}
renderProduct();
const delProduct = (pid)=>{
    fetch(`http://localhost:3000/Product/${pid}`,{method:`DELETE`});
    renderProduct();
}
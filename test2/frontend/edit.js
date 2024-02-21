const getInfor= async ()=>{
    const param = new URLSearchParams(location.search);
    const proId = param.get('id');
    const response = await fetch(`http://localhost:3000/products/${proId}`);
    const product = await response.json();
    console.log(product);
    document.querySelector('input[name="id"]').value = product.id;
    document.querySelector('input[name="tensanpham"]').value = product.name;
    document.querySelector('input[name="anhsanpham"]').value = product.image;
    document.querySelector('select[name="danhmuc"]').value = product.cart_id;
    document.querySelector('input[name="giatien"]').value = product.price;
}
getInfor();
const updateProduct = ()=>{
    event.preventDefault();
    const id = document.querySelector('input[name="id"]').value;
    const ten = document.querySelector('input[name="tensanpham"]').value;
    const anh = document.querySelector('input[name="anhsanpham"]').value;
    const danhmuc = document.querySelector('select[name="danhmuc"]').value;
    const gia = document.querySelector('input[name="giatien"]').value;
    const data = {
        "name":ten,
        "image": anh,
        "cart_id":danhmuc,
        "price":gia
    };
    fetch('http://localhost:3000/products/'+id,{
        method: 'PUT',
        body: JSON.stringify(data)
    });
    alert("Xoa thanh cong");
}
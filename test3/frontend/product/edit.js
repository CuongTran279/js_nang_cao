const viewById=async()=>{
    const param = new URLSearchParams(location.search);
    const id = param.get('id');
    const respone = await fetch(`http://localhost:3000/product/${id}`);
    const product = await respone.json();
    console.log(product);
    
    document.querySelector('input[name="id"]').value = product.id ;
    document.querySelector('input[name="name"]').value=product.name;
    document.querySelector('input[name="image"]').value=product.image ;
    document.querySelector('input[name="price"]').value=product.price ;
    document.querySelector('input[name="quantity"]').value=product.quantity ;
    document.querySelector('select[name="categories"]').value=product.categories ;
}
viewById();
const editProduct=()=>{
    event.preventDefault();
    const id = document.querySelector('input[name="id"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const categories = document.querySelector('select[name="categories"]').value;
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
            fetch(`http://localhost:3000/product/${id}`,{
                method:'PUT',
                body:JSON.stringify(data)
            });
            alert("Sửa sản phẩm thành công");
        }
    }
}
const renderId=async()=>{
    const param = new URLSearchParams(location.search);
    const id = param.get('id');
    const respone = await fetch(`http://localhost:3000/product/${id}`);
    const product =  await respone.json();
    console.log(product);
    document.querySelector('input[name="id"]').value = product.id;
    document.querySelector('input[name="name"]').value = product.name;
    document.querySelector('input[name="image"]').value = product.image;
    document.querySelector('input[name="price"]').value = product.price;
    document.querySelector('select[name="categories"]').value = product.categories;
    
}
renderId();
const editProduct = ()=>{
    event.preventDefault();
    const id = document.querySelector('input[name="id"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const categories = document.querySelector('select[name="categories"]').value;
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
            fetch(`http://localhost:3000/product/${id}`,{
                method:"PUT",
                body:JSON.stringify(data)
            });
            alert("Thay doi thanh cong");
        }
    }
}
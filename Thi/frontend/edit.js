const pushDataToInput = async ()=>{
    const params = new URLSearchParams(location.search);
    const id = params.get('id'); 
    console.log(id);
    const response = await fetch(`http://localhost:3000/Product/${id}`);
    const product = await response.json();
    console.log(product);
    document.getElementById("id").value = product.id;
    document.getElementById("tensp").value = product.name;
    document.getElementById("danhmuc").value = product.cart_id;
    document.getElementById("anhsp").value = product.image;
    document.getElementById("gia").value = product.price;
    document.getElementById("mota").value = product.description;
}
const updateProduct = ()=>{
    event.preventDefault();
    let id = document.getElementById("id").value;
    let name = document.getElementById("tensp").value;
    let image = document.getElementById("anhsp").value;
    let cart_id = document.getElementById("danhmuc").value;
    let price = document.getElementById("gia").value;
    let description = document.getElementById("mota").value;

    fetch(`http://localhost:3000/Product/${id}`,{
        method:'PUT',
        body: JSON.stringify({name:name,image:image,cart_id:cart_id,description:description,price:price})
    });
}

pushDataToInput();
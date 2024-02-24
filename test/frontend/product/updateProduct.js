const getId = async()=>{
    const param = new URLSearchParams(location.search);
    const id = param.get('id');
    const response = await fetch(`http://localhost:3000/pro/${id}`);
    const product = await response.json();
    // console.log(product);
    document.querySelector('input[name="id"]').value = product.id
    document.querySelector('input[name="name"]').value = product.name
    document.querySelector('input[name="image"]').value= product.image
    document.querySelector('input[name="price"]').value= product.price
    document.querySelector('input[name="quantity"]').value= product.quantity
    document.querySelector('select[name="categories"]').value= product.categorie
}
getId();
const updateProduct = ()=>{
    event.preventDefault();
    const id = document.querySelector('input[name="id"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const image = document.querySelector('input[name="image"]').value;
    const price = document.querySelector('input[name="price"]').value;
    const quantity = document.querySelector('input[name="quantity"]').value;
    const categorie = document.querySelector('select[name="categories"]').value;
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
            fetch('http://localhost:3000/pro/'+id,{
                method: 'PUT',
                body: JSON.stringify(data)
            });
            alert("Thay đổi thành công");
        }
    }
}
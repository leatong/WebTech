export function UpdateCart(productInfo, paramId) {
    /*
       if storage already exists
            load existing cart
                if same product is added (same id same size)
                    add up the count
                if different products
                    push to the existing list
       if no data exists
            create new JSON array and store to local storage
    */
    const {size, count} = productInfo;
    let cart = localStorage.getItem('myCart');
    if (cart) {
        let arr = JSON.parse(cart);
        let exists = false;
        for (let i=0; i<arr.length; i++) {
            if (arr[i].id === paramId && arr[i].size === size) {
                console.log(arr[i].count, count);
                arr[i].count += count;
                exists = true;
                i=arr.length; // break out of the loop
            }
            localStorage.setItem('myCart', JSON.stringify(arr));
        }
        if (!exists) {
            localStorage.setItem('myCart', JSON.stringify(updateStorage(arr, productInfo, paramId)));
        }
    } else {
        let arr =[];
        localStorage.setItem('myCart', JSON.stringify(updateStorage(arr, productInfo, paramId)));
    }
    alert('Added to shopping cart')
}


function updateStorage(arr, productInfo, paramId) {
    const {count, size} = productInfo;
    const {name, price, picture} = productInfo.details[0];
    let obj = {id: paramId, name: name, picture: picture, size: size,
        count: count, price: price, cost: price*count};
    console.log(obj);
    arr.push(obj);
    return arr;
}
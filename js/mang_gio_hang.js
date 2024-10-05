function showCartForm() {
    var loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert('Vui lòng đăng nhập để mua hàng!');
        return false;
    }

    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    CartArr = JSON.parse(localStorage.getItem('cart'))|| [];
    tempArr = JSON.parse(localStorage.getItem('tempArr')) || [];

    if (!CartArr || CartArr.length === 0) {
        CartArr.push({ userId: userLogin.userId, cart: [] });
    }

    var foundUser = false;

    for (var i = 0; i < CartArr.length; i++) {
        if (CartArr[i].userId === userLogin.userId) {
            foundUser = true;

            for (var k = 0; k < tempArr.length; k++) {
                var existingProduct = CartArr[i].cart.find(item => item.name === tempArr[k].name);

                if (existingProduct) {
                    existingProduct.quantity = (parseInt(existingProduct.quantity) + parseInt(tempArr[k].quantity)).toString();
                } else {
                    CartArr[i].cart.push(tempArr[k]);
                }
            }
            break;
        }
    }

    if (!foundUser) {
        CartArr.push({ userId: userLogin.userId, cart: tempArr });
    }
    localStorage.setItem('cart', JSON.stringify(CartArr));
    tempArr=[];
    localStorage.setItem('tempArr',JSON.stringify(tempArr));
    
    //document.getElementById('formCart').style.display = "block";
    displayCartForm();
}
function displayCartForm()
{    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    var CartArr = JSON.parse(localStorage.getItem('cart'));
    var sum = 0;
    for (var i = 0; i < CartArr.length; i++) {
        if (CartArr[i].userId === userLogin.userId) {
            for (var k = 0; k < CartArr[i].cart.length; k++) {
                sum += CartArr[i].cart[k].price * parseInt(CartArr[i].cart[k].quantity);
            }
        }
    }
    var s = '<div id="cart-container">' +
    '<div id="cart-title">Giỏ hàng' +
    '<button id="close-cartForm" onclick="closeCartForm()">X</button></div>';
    var t="";
    for(i=0;i<CartArr.length;i++){
        if(CartArr[i].userId == userLogin.userId){
            for(k=0;k<CartArr[i].cart.length;k++){
                t += `<div id="product-container">
                    <div class="product">
                        <img src="${CartArr[i].cart[k].img}" alt="Product 1">
                        <div class="product-info">
                            <h3>${CartArr[i].cart[k].name}</h3>
                            <p>Giá: ${CartArr[i].cart[k].price} VND</p>
                            <p>Số lượng: <span class="product-quantity" data-quantity="1">${CartArr[i].cart[k].quantity}</span></p>
                        </div>
                        <div class="product-actions-formcart">
                            <button class="increase-btn" onclick="adjustQuantity(${i}, 1,${k})">+</button>
<button class="decrease-btn" onclick="adjustQuantity(${i}, -1,${k})">-</button>
                            <button class="delete-btn" onclick='deletebtn(${i},${k})'>xóa</button>
                        </div>
                    </div>
                </div>`;
            }
            s += t+ `<div id="total-container">Tổng cộng: ${sum}</div>
                <div id="checkout-btn" onclick="showBill();">Đặt hàng</div>
            </div>`  
        }
    }
    document.getElementById('formCart').innerHTML = s;
}
function adjustQuantity(productIndex, amount, cartIndex) {
    CartArr = JSON.parse(localStorage.getItem('cart'));

    // Ensure the productIndex is within a valid range

    // Get the current quantity
    var quantity1 = parseInt(CartArr[productIndex].cart[cartIndex].quantity);

    // Update the quantity by a fixed value based on the sign of the amount
    quantity1 = Math.max(0, quantity1 + (amount > 0 ? 1 : -1));

    // Update the quantity in the cart array
    CartArr[productIndex].cart[cartIndex].quantity = quantity1.toString();

    // If the quantity becomes 0, remove the product from the cart
    if (quantity1 === 0) {
        CartArr[productIndex].cart.splice(cartIndex, 1);

        // If there are no items in the cart for the current user, remove the user entry
        if (CartArr[productIndex].cart.length === 0) {
            CartArr.splice(productIndex, 1);
        }
    }

    // Save the updated cart data
    localStorage.setItem('cart', JSON.stringify(CartArr));

    // Refresh the cart display by calling showCartForm
    displayCartForm();
}
function deletebtn(i,cartIndex)
{
    var CartArr=JSON.parse(localStorage.getItem('cart'));
    CartArr[i].cart.splice(cartIndex, 1);
    //localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(CartArr));
    displayCartForm();
}
function closeCartForm()
    {
    window.location.href='./base.html';
    }
//Hien thi don hang cua khach hang 
function showBill(e){
    // var tempArr = JSON.parse(localStorage.getItem('tempArr'));
    CartArr = JSON.parse(localStorage.getItem('cart'));


    var userLogin= JSON.parse(localStorage.getItem('userLogin')); // Lay thong tin dang nhap cua user
    var s=`<div class="wrapper">
        <div class="formdon">
        <div class="header-formdon">
            <p class="nameform">Thông tin đơn hàng</p>
            <div class="close-formdon" onclick="hidebill();">
                <i class=" icon-close fas fa-window-close"></i>
            </div>
        </div>
        <div class="ttinkhach-formdon">
            <div>Địa chỉ : ${userLogin.address}</div>
            <div>Tên KH : ${userLogin.fullname}</div>
            <div>SĐT : ${userLogin.phonenumber}</div>
            <div></div>
        </div>
        <div class="ttinvanchuyen-formdon">
            <div>Thông tin vận chuyển</div>
            <div>Giao hàng nhanh</div>
        </div>

        <div class="ttin-don-hang-formdon">

            <div class="donhang">
                <div>Đơn hàng gồm</div>
                <div>SL</div>
            </div>

            <div class="sanpham">`;
    var t='';

    // //Lay mang gio hang
    if(CartArr){

        var ngayHienTai = new Date();
        var ngayThangNam = ngayHienTai.toLocaleDateString();


        //Duyet mang gio hang de dua san pham vao 
        var tongtien=0;
        
        for(i=0;i<CartArr.length;i++)
        {
            if(CartArr[i].userId == userLogin.userId){
                for(k=0;k<CartArr[i].cart.length;k++){
                    tongtien += CartArr[i].cart[k].price * CartArr[i].cart[k].quantity;
                }
            }

        }
        
        for(i=0;i<CartArr.length;i++){
            if(CartArr[i].userId == userLogin.userId){
                for(k=0;k<CartArr[i].cart.length;k++){


                    t+=`<div class="item">
                    <div>${CartArr[i].cart[k].name}</div> 
                    <span>${CartArr[i].cart[k].quantity}</span>
                    </div>`;


                }
         
        }

        
    }
}
    var thanhtien = tongtien;

    // t=`<div class="item">
    //         <div>1.Bánh tráng phơi sương</div> 
    //         <span>1</span>
    //         </div>`;


    s=s+t+`</div>
                        
    <div class="ordertime">
        <div>Ngày đặt : ${ngayThangNam}</div>
    </div>    

    <div class="thanhtien">

        <div>Thành tiền : ${thanhtien} VND</div>
    </div>
    

    </div>

    <div id="btn-muahang">
        <button type="button" class="btn-muahang-text" onclick="Xulydonhang();" >Đặt Hàng</button>
    </div>
    

    </div>
    </div> `;
    var formdonhang = document.querySelector('.modal-donhang');
    formdonhang.innerHTML = s;
    if(formdonhang.style.display == 'none'){
        formdonhang.style.display = 'block';
    }

    
}


var subArr = JSON.parse(localStorage.getItem('subarr')) || [];
JSON.parse(localStorage.setItem('subarr', JSON.stringify(subArr)))||[];
function Xulydonhang(){
    
    alert('Đơn hàng của bạn đã được xác nhận !');
    subArr = JSON.parse(localStorage.getItem('subarr'))||[];
    var info='';
    var totalprice=0;
    if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === '[]')
    {
        return false;
    }
    var CartArr = JSON.parse(localStorage.getItem('cart'));
    for (var i =0; i< CartArr.length ;i++)
    for(var k =0; k < CartArr[i].cart.length;k++){
    {
        info+=CartArr[i].cart[k].quantity+' x '+CartArr[i].cart[k].name+';';
        totalprice +=CartArr[i].cart[k].quantity*CartArr[i].cart[k].price;
    }}
    var userLogin = JSON.parse(localStorage.getItem('userLogin'));
    var date = new Date();
    var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    if(localStorage.getItem('bill')===null){
		var billArray = [];
		var bill = {id: billArray.length+1, info: info, totalprice: totalprice, userId: userLogin.userId, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {id: billArray.length+1, info: info, totalprice: totalprice, userId: userLogin.userId, date: d, status: 'Chưa xử lý'};
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
    var billArray = JSON.parse(localStorage.getItem('bill'));
    var subArr = JSON.parse(localStorage.getItem('subarr'));
    if(!subArr || subArr.length == 0){
        subArr = JSON.parse(localStorage.getItem('cart'));
        subArr[0].madon = billArray.length;
        localStorage.setItem('subarr',JSON.stringify(subArr));
    }
    else{
		var CartArr = JSON.parse(localStorage.getItem('cart')); //lấy mảng, dò rồi thêm vào
        // for(i=0;i<billArray.length;i++){
        //     subArr.push(CartArr);
        //     subArr[0].madon = billArray.length;
        // }
        //var subArr = JSON.parse(localStorage.getItem('subarr'));
        var cartItemCopy = Object.assign({}, CartArr[0]);
        subArr.push(cartItemCopy);
        subArr[subArr.length-1].madon = billArray.length;
        localStorage.setItem('subarr',JSON.stringify(subArr));
    }
    localStorage.removeItem('cart');
    localStorage.removeItem('tempArr');
    window.location.href='./base.html';
}
//Dong don hang cua khach hang 

    
function hidebill(){
        var formdonhang = document.querySelector('.modal-donhang');
        if(formdonhang.style.display == 'block'){
        formdonhang.style.display = 'none';
        }
}

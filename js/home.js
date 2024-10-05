 
 

function home(){
    var s=` <div class="contentitem">`;
    var t="";
    var productArray = JSON.parse(localStorage.getItem('product'));
    for( i = 0;i<productArray.length;i++){
        t+=`<div class="itemframe">
                <img class="item" src="${productArray[i].img}">
                <h5 id="name"><strong>${productArray[i].name}</strong></h5>
                <hr>
                <button id="cart-btn" href="#">Add to card</button>
                <button class="btn-view" href="#" onClick="showProductInfo('${productArray[i].productId}')">View</button>
                <br />
                <h4 style="float: right">${productArray[i].price} VND</h4>
            </div>`;
    }
    
    s=s+t+`</div>`;
    document.getElementById("head_container").innerHTML=s;
}

//HIEN THI SAN PHAM PHAN TRANG 

document.addEventListener('DOMContentLoaded', function () {

    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 4; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;

    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const currentProducts = productArray.slice(startIndex, endIndex);

        var s=` <div class="contentitem">`;
        var t="";
        
        for( i = 0;i<currentProducts.length;i++){
            t+=`<div class="itemframe">
                <img class="item" src="${currentProducts[i].img}">
                <h5 id="name"><strong>${currentProducts[i].name}</strong></h5>
                <hr>
                
                <button class="btn-view" href="#" onClick="showProductInfo('${currentProducts[i].productId}')">View</button>
                <br />
                <h4 style="float: right">${currentProducts[i].price} VND</h4>
            </div>`;
        }
    
        s=s+t+`</div>`;
        document.getElementById("head_container").innerHTML=s;
        
    }

    function displayPagination() {
        const totalPages = Math.ceil(productArray.length / productsPerPage);
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);

            const btnpagenumber = document.querySelectorAll('.pagination');
                for (let j = 0; j < btnpagenumber.length;j++){
                    if(j+1 == currentPage){
                        btnpagenumber[j].classList.add('active');
                    }
                    else{
                        btnpagenumber[j].classList.remove('active');
                    }
                }

        }
    }

    

    displayProducts(currentPage);
    displayPagination();
});


function hienthisanpham(){

    var showpagenumber = document.getElementById('pagination-container');
    if(showpagenumber.style.display == 'none'){
        showpagenumber.style.display ='flex';
    }

    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 3; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;

    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        // const currentProducts = productArray.slice(startIndex, endIndex);
        const currentProducts= [];



    var s=` <div class="contentitem">`;
    var t="";
    
    document.getElementById('text').innerHTML = `<h5><strong>CÁC LOẠI BÁNH TRÁNG</strong></h5>;`
    for( i = 0;i<productArray.length;i++){
        if(productArray[i].typeID == 'banhtrang'){
            currentProducts.push(productArray[i]);
        }
    }

        localStorage.setItem('currentProducts', JSON.stringify(currentProducts)); //Đưa mảng currentProducts lên local 
        const products = currentProducts.slice(startIndex, endIndex); // Tiến hành phân trang 
        for(i=0;i<products.length;i++){
            t+= `<div class="itemframe">
                         <img class="item" src="${products[i].img}">
                         <h5 id="name"><strong>${products[i].name}</strong></h5>
                         <hr>
                        
                         <button class="btn-view" href="#" onClick="showProductInfo('${products[i].productId}')">View</button>
                         <br />
                         <h4 style="float: right">${products[i].price} VND</h4>
                     </div>`;
        }
        

    s=s+t+`</div>`;
    document.getElementById("head_container").innerHTML=s;

    }   

    function displayPagination() {
        event.preventDefault();
        var currentProducts = JSON.parse(localStorage.getItem('currentProducts')); //Lấy mảng currentProducts từ local
        const totalPages = Math.ceil(currentProducts.length / productsPerPage); //Số lượng trang 
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);

            const btnpagenumber = document.querySelectorAll('.pagination');
                for (let j = 0; j < btnpagenumber.length;j++){
                    if(j+1 == currentPage){
                        btnpagenumber[j].classList.add('active');
                    }
                    else{
                        btnpagenumber[j].classList.remove('active');
                    }
                }
        }
    }

    displayProducts(currentPage);
    displayPagination();
    

}
function hienthisanpham1(){

    
    var showpagenumber = document.getElementById('pagination-container');
    if(showpagenumber.style.display == 'none'){
        showpagenumber.style.display ='flex';
    }

    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 3; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;

    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        const currentProducts= [];

    
        var s=` <div class="contentitem">`;
        var t="";
        
        document.getElementById('text').innerHTML = `<div id="text" style="text-align: center; margin-top: 20px;"><h5><strong>COMBO BÁNH TRÁNG</strong></h5></div>;`
        for( i = 0;i<productArray.length;i++){
        if(productArray[i].typeID == 'combo'){
            currentProducts.push(productArray[i]);
        }
        }

        localStorage.setItem('currentProducts', JSON.stringify(currentProducts)); //Đưa mảng currentProducts lên local 
        const products = currentProducts.slice(startIndex, endIndex); // Tiến hành phân trang 
        for(i=0;i<products.length;i++){
            t+= `<div class="itemframe">
                         <img class="item" src="${products[i].img}">
                         <h5 id="name"><strong>${products[i].name}</strong></h5>
                         <hr>
                        
                         <button class="btn-view" href="#" onClick="showProductInfo('${products[i].productId}')">View</button>
                         <br />
                         <h4 style="float: right">${products[i].price} VND</h4>
                     </div>`;
        }

        s=s+t+`</div>`;
        document.getElementById("head_container").innerHTML=s;

    }

    function displayPagination() {
        event.preventDefault();
        var currentProducts = JSON.parse(localStorage.getItem('currentProducts')); //Lấy mảng currentProducts từ local
        const totalPages = Math.ceil(currentProducts.length / productsPerPage); //Số lượng trang 
        const paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);

            const btnpagenumber = document.querySelectorAll('.pagination');
                for (let j = 0; j < btnpagenumber.length;j++){
                    if(j+1 == currentPage){
                        btnpagenumber[j].classList.add('active');
                    }
                    else{
                        btnpagenumber[j].classList.remove('active');
                    }
                }
        }
    }

    displayProducts(currentPage);
    displayPagination();


}

//SEARCH
function showSearch(){
    document.querySelector('.container-search').style.display='block';
}
function closeSearch(){
    document.querySelector('.container-search').style.display='none';
}
function search(){
    var searchProduct = document.getElementById('search').value.toLowerCase();
    var productArray = JSON.parse(localStorage.getItem('product'));

    const productsPerPage = 3; // Số sản phẩm hiển thị trên mỗi trang
    let currentPage = 1;
    
    function displayProducts(page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        // const currentProducts = productArray.slice(startIndex, endIndex);
        const currentProducts= [];
        var s = '';
        //Duyệt qua mảng tổng để tìm kiếm những sp như yêu cầu và lưu vào mảng currentProducts
        for(i =0; i<productArray.length;i++){
            if((productArray[i].name.toLowerCase().search(searchProduct) != -1 || productArray[i].typeID.toLowerCase().search(searchProduct) != -1) && searchProduct != ''){
                console.log(productArray[i]);
                currentProducts.push(productArray[i]);
                 
            }
            else{
                var typeSearch= document.getElementById('type-search').value;
                var fromPrice = document.getElementById('price-from').value;
                var toPrice = document.getElementById('to-price').value;
                if(typeSearch === "all-type"){
                    for(i =0; i<productArray.length;i++){
                        if(productArray[i].name.toLowerCase().search(searchProduct) != -1 && productArray[i].price >= fromPrice && productArray[i].price <= toPrice)
                        {
                            
                            currentProducts.push(productArray[i]);
                            
                    
                        }
                    }
                }
                else{
                    for(i =0; i<productArray.length;i++){
                        if(productArray[i].name.toLowerCase().search(searchProduct) != -1 && productArray[i].typeID === typeSearch && productArray[i].price >= fromPrice && productArray[i].price <= toPrice) 
                        {
                            
                            currentProducts.push(productArray[i]);
                        
                        }
                    }
                }
            }
        }

        localStorage.setItem('currentProducts', JSON.stringify(currentProducts)); //Đưa mảng currentProducts lên local 
        const products = currentProducts.slice(startIndex, endIndex); // Tiến hành phân trang 
        for(i=0;i<products.length;i++){
            s+= `<div class="itemframe">
                         <img class="item" src="${products[i].img}">
                         <h5 id="name"><strong>${products[i].name}</strong></h5>
                         <hr>
                        
                         <button class="btn-view" href="#" onClick="showProductInfo('${products[i].productId}')">View</button>
                         <br />
                         <h4 style="float: right">${products[i].price} VND</h4>
                     </div>`;
        }
        document.getElementById('search-result').innerHTML = s;
    }

    function displayPagination(e) {
        event.preventDefault();
        var currentProducts = JSON.parse(localStorage.getItem('currentProducts')); //Lấy mảng currentProducts từ local
        const totalPages = Math.ceil(currentProducts.length / productsPerPage); //Số lượng trang 
        const paginationContainer = document.getElementById('pagination-container2');
        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageElement = document.createElement('span');
            pageElement.className = 'pagination2';
            pageElement.innerText = i;
            pageElement.addEventListener('click', function () {
                currentPage = i;
                displayProducts(currentPage);
                displayPagination();
            });
            paginationContainer.appendChild(pageElement);

            const btnpagenumber = document.querySelectorAll('.pagination2');
                for (let j = 0; j < btnpagenumber.length;j++){
                    if(j+1 == currentPage){
                        btnpagenumber[j].classList.add('active');
                    }
                    else{
                        btnpagenumber[j].classList.remove('active');
                    }
                }
        }
    }

    displayProducts(currentPage);
    displayPagination();

    
}

function showProductInfo(id){
    
    
    document.getElementById('product-details').style.display ='block';
    var productArray = JSON.parse(localStorage.getItem('product'));
    var s = `<div  id="test">`;
    var t="";
    for(i=0;i<productArray.length;i++){
        if(productArray[i].productId == id){
            t += `<div id="info">
                <div class="left">
                <img id="image"src="${productArray[i].img}"/>
                </div>
                <div class="right">
                    <h4 id="productname">${productArray[i].name}</h4>
                    <h5 id="productid">${productArray[i].productId}</h5>
                    <p>${productArray[i].mota}</p>
                    <h4 id="productprice">${productArray[i].price} VND</h4>
                    <br /><br />
                    <h4>Số lượng: </h4>
                    <button class="quantityDown" onclick="quantitydown()">-</button><input type="text" id="quantity" value="1"><button class="quantityUp" onclick="quantityup()" >+</button>
                    <button class="btn-cart" href="#" onclick="addToCart('${productArray[i].productId}')">Thêm vào giỏ hàng</button>
                    <br />
                    <div style="margin-top: 10px; color: red; cursor: pointer; display: flex ; justify-content: center;" onclick="closeProductInfo()">Quay lại trang chủ</div>
                    
                    </div>
                </div>`;
        }
        
    }
    s += t + '</div>';
    document.getElementById('test').innerHTML = s;
 
}

var tempArr=[];
function addToCart(id){
    
    var loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
        alert('Vui lòng đăng nhập để mua hàng!');
        return false;
    }
    var currentUser = localStorage.getItem('currentUser');
    if(currentUser === 'admin'){
        alert('Admin không được mua hàng!!!');
        return false;
    }
    var productArray = JSON.parse(localStorage.getItem('product'));
    for(i=0;i<productArray.length;i++){
        if(productArray[i].productId == id){
            tempArr.push(productArray[i]);
        }
    }
    tempArr[tempArr.length-1].quantity = (document.getElementById('quantity').value);
    localStorage.setItem('tempArr', JSON.stringify(tempArr));
    alert('Đã thêm vào giỏ hàng.');
}





function closeProductInfo(){
    document.getElementById('product-details').style.display = 'none';
}
function quantitydown(){
    if(document.getElementById('quantity').value > 1){
        document.getElementById('quantity').value--;
    }
}
function quantityup(){
   
    document.getElementById('quantity').value++;
    
}


function showContact(){
    document.getElementById('text').style.display = 'none';
    document.getElementById('pagination-container').style.display = 'none';
    var t =`

                <div class="feedback">
                    <div class="user-feedback">
                        <img src="" alt="">
                        <label for="" class="label-feedback"><strong>Contact with us:</strong></label>    
                    </div>
                    <div class="content-feedback">
                        <li class="contact"><span><b>Facebook: </b></span><span>Tiệm bánh tráng</span></li>
                        <li class="contact"><span><b>Instagram: </b></span><span>@tiem_banhtrang</span></li>
                        <li class="contact"><span><b>Hotline: </b></span><span>1800 1100</span></li>
                    </div>
                </div>
            `;
    document.getElementById('head_container').innerHTML=t;

}
function showFeedback(){
    document.getElementById('text').style.display = 'none';
    var t =`
            <div id="content1">
            <div id="container1">

                <div class="feedback1">
                    <div class="user-feedback1">
                        <img src="" alt="">
                        <label for="" class="label-feedback">@nguoidung1</label>    
                    </div>
                    <div class="content-feedback1">
                        <p> Bánh tráng phơi sương này có vị thơm ngon và đặc trưng của gạo, kết hợp với hương sương tự nhiên, tạo nên một trải nghiệm ẩm ướt và thơm ngon.Bánh tráng có độ giòn vừa đủ, không quá cứng nhưng cũng không quá mềm. Khi nhai, bạn cảm nhận được sự giòn rụt và thú vị.</p>
                    </div>
                </div>

                <div class="feedback1">
                    <div class="user-feedback1">
                        <img src="" alt="">
                        <label for="" class="label-feedback">@nguoidung2</label>    
                    </div>
                    <div class="content-feedback1">
                        <p>Bánh tráng muối này có vị muối vừa phải, không quá mặn nhưng đủ để làm nổi bật hương vị tự nhiên của gạo. Vị muối làm cho bánh tráng trở nên thú vị và độc đáo.Lớp bánh tráng muối được cắt mỏng và phân phối đều, tạo nên một sản phẩm có hình dạng đẹp mắt và dễ sử dụng</p>
                    </div>
                </div>

                <div class="feedback1">
                    <div class="user-feedback1">
                        <img src="" alt="">
                        <label for="" class="label-feedback">@nguoidung3</label>    
                    </div>
                    <div class="content-feedback1">
                        <p>Bánh tráng trộn này là lựa chọn tuyệt vời cho những người muốn thử nghiệm với ẩm thực độc đáo. Nó có thể làm món ăn nhẹ hoặc một loại snack độc đáo để chia sẻ trong các buổi gặp mặt.Sản phẩm này không chỉ ngon về vị mà còn có hương thơm hấp dẫn. Khi mở bao, bạn sẽ ngửi thấy hương của các gia vị và nguyên liệu tự nhiên, tạo nên sự hứng thú trước khi thưởng thức.</p>
                    </div>
                </div>
            </div>


                
        </div>
       `;
    document.getElementById('head_container').innerHTML=t;

}
function theodoidonhang(){
    document.getElementById('theodoidonhang').style.display='block';

}
function closetheodoidonhang(){
    document.getElementById('theodoidonhang').style.display='none';
    
}

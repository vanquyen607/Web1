var OrderArr = JSON.parse(localStorage.getItem('bill'));
var UserArr = JSON.parse(localStorage.getItem('usersDataArray'));
var subArr = JSON.parse(localStorage.getItem('subarr'));



document.addEventListener('DOMContentLoaded', function () {
    function createProduct(){
    if(localStorage.getItem('product')===null){
        var productArray = [
            {typeID:'banhtrang', productId:'S001', img:'../img/banhtrangphoisuong.jpg', name:'Bánh Tráng Phơi Sương', price:12000, mota: 'Lớp bánh mỏng như lụa, được chăm sóc tỉ mỉ và phơi khô dưới ánh nắng tự nhiên, tạo nên sự giòn tan độc đáo và hương thơm tự nhiên của gạo nguyên chất.'},
            {typeID:'banhtrang', productId:'S002', img:'../img/banhtrangbocuon.jpg', name:'Bánh Tráng Bơ Cuộn ', price: 10000, mota: 'Được làm từ lá bánh tráng mỏng, nhẹ, giòn tan và được phủ một lớp bơ mềm mịn, tạo nên hương vị đặc trưng và thơm ngon.'},
            {typeID:'banhtrang', productId:'S003', img:'../img/banhtrangcuon.jpg', name:'Bánh Tráng Cuốn', price:20000, mota: 'Sản phẩm ẩm thực độc đáo và ngon miệng, được làm từ lá bánh tráng mỏng mịn cuốn quanh những thành phần tươi ngon bên trong.'},
            {typeID:'banhtrang', productId:'S004', img:'../img/banhtrangmuoitoi.jpg', name:'Bánh Tráng Muối Tỏi', price:12000, mota: 'Lớp bánh tráng mỏng và nhẹ, được ướp muối và tỏi tạo nên hương vị độc đáo và hấp dẫn.'},
            {typeID:'banhtrang', productId:'S005', img:'../img/banhtrangchabong.jpg', name:'Bánh Tráng Chà Bông', price:20000, mota: 'Lớp bánh tráng mỏng và giòn tan được phủ một lớp chà bông mịn màng, tạo nên sự kết hợp độc đáo và ngon lành.'},
            {typeID:'banhtrang', productId:'S006', img:'../img/goicuon.jpg', name:'Gỏi Cuốn', price:21000, mota: 'Lớp bánh tráng mỏng như tờ giấy chứa đựng sự ngon miệng của tôm tươi, bún giòn và rau sống mát lành.'},
            {typeID:'banhtrang', productId:'S007', img:'../img/banhtrangnuong.jpg', name:'Bánh Tráng Nướng', price:20000, mota: 'Bánh tráng mỏng được phủ một lớp gia vị hỗn hợp của mỡ, tỏi, hành, tiêu, và gia vị khác, sau đó được nướng chín trên bếp than để tạo nên vị thơm và hương vị đặc trưng.'},
            {typeID:'banhtrang', productId:'S008', img:'../img/banhtrangsike.jpg', name:'Bánh Tráng Sì Ke', price:5000, mota: 'Bánh dẻo mềm mịn xịn sò , bánh ăn tan trong miệng.'},
            {typeID:'banhtrang', productId:'S009', img:'../img/banhtrangtron.jpg', name:'Bánh Tráng Trộn', price:10000, mota: 'Bánh tráng trộn thấm vị đậm đà, ngon khó cưỡng.'},
            {typeID:'banhtrang', productId:'S010', img:'../img/banhtrangtron2trung.jpg', name:'Bánh Tráng Trộn 2 Trứng Cút', price:20000, mota: 'Được làm từ bánh tráng xéo thành sợi mảnh, thêm đậu phộng, mỡ hành, và các gia vị khác.'},
            {typeID:'combo', productId:'S011', img:'../img/met_trangtron.jpg', name:'Mẹt Bánh Tráng Trộn', price:60000, mota: 'Combo dành cho người yêu thích bánh tráng.'},
            {typeID:'combo', productId:'S012', img:'../img/set_banhphoisuong.jpg', name:'Set Bánh Tráng Phơi Sương', price:60000, mota: 'Como dành cho người yêu thích bánh tráng.'},
            {typeID: 'banhtrang', productId:'S013', img:'../img/banhtranggacay.jpg',name:'Bánh Tráng Gà Cay', price: 20000, mota:'Sự kết hợp độc đáo tạo nên hương vị khó quên.'},
            {typeID: 'banhtrang', productId:'S014', img:'../img/banhtranghoangkim.jpg',name:'Bánh Tráng Hoàng Kim', price: 20000, mota:'Sự kết hợp độc đáo tạo nên hương vị khó quên.'},
            {typeID: 'banhtrang', productId:'S015', img:'../img/banhtrangmamruoc.jpg',name:'Bánh Tráng Mắm Ruốc', price: 20000, mota:'Sự kết hợp độc đáo tạo nên hương vị khó cưỡng.'},
            {typeID: 'banhtrang', productId:'S016', img:'../img/banhtrangsieucay.jpg',name:'Bánh Tráng Siêu Cay', price: 20000, mota:'Cay hơn việc bạn đạt điểm trung bình 8.4'},
            {typeID: 'banhtrang', productId:'S017', img:'../img/banhtrangsottom.jpg',name:'Bánh Tráng Sốt Tôm', price: 20000, mota:'Vị ngon trên từng miếng bánh.'},
            {typeID: 'banhtrang', productId:'S018', img:'../img/banhtrangtoiot.jpg',name:'Bánh Tráng Tỏi Ớt', price: 20000, mota:'Sự kết hợp độc đáo tạo nên hương vị khó cưỡng.'},
            {typeID: 'banhtrang', productId:'S019', img:'../img/snackbanhtrangga.jpg',name:'Snack Bánh Tráng Gà', price: 20000, mota:'Hương vị mới, có một không hai.'},
            {typeID: 'banhtrang', productId:'S020', img:'../img/snackbanhtrangvit.jpg',name:'Snack Bánh Tráng Vịt', price: 20000, mota:'Hương vị mới, có một không hai.'}
            
        ];
        localStorage.setItem('product', JSON.stringify(productArray));
    }
    }
    createProduct();
});


function displayProductList() {
    var productArray = JSON.parse(localStorage.getItem('product'));
    var s=`<div id="list_sp">`;
    var t="";
    for(i = 0; i<productArray.length;i++){
        t+=`<div class="list">
        <input type="checkbox" class="checkbox"/>
        <div class="masp_sp">${productArray[i].productId}</div>
        <div class="sp_sp"><img src="${productArray[i].img}"/></div>
        <div class="tensp_sp">${productArray[i].name}</div>
        <div class="loai_sp">${productArray[i].typeID}</div>
        <div class="dongia_sp">${productArray[i].price}</div>
        <div class="thaotac_sp">
            <input type="button" class="sua_sp" value="Sửa" onclick="showSua('${productArray[i].productId}')" />
            <div>
                <input type="button" class="xoa_sp" value="Xóa" onclick="deleteProduct('${productArray[i].productId}')"/>
            </div>
        </div>
        </div>`
        
    }
    s = s+t+`</div></div>`;
    document.getElementById('list_sp').innerHTML = s;
}

function deleteProduct(id){
    var productArray = JSON.parse(localStorage.getItem('product'));
    for(i=0; i<productArray.length;i++){
        if(productArray[i].productId == id){
            if(confirm("Bạn muốn xóa sản phẩm này?")){
                productArray.splice(i,1);
            }
            
        }
    }
    
    localStorage.setItem('product', JSON.stringify(productArray));
    displayProductList();
}  

function addProduct(){
    var productArray = JSON.parse(localStorage.getItem('product'));
    var loai_sp = document.getElementById('loai-sp-them').value;
    var img_sp = document.getElementById('uploaded-image').src;
    var ma_sp = document.getElementById('ma-san-pham-them') .value;
    var ten_sp = document.getElementById('ten-san-pham-them').value;
    var mota_sp = document.getElementById('mo-ta-san-pham-them').value;
    var gia_sp = document.getElementById('gia-thanh-them').value;
    var product1 = {typeID: loai_sp, productId: ma_sp, img: img_sp, name: ten_sp, mota: mota_sp, price: gia_sp};
    productArray.push(product1);
    localStorage.setItem('product', JSON.stringify(productArray));
    hideThem();
    displayProductList();

} 
//localStorage.setItem('deleteArr', JSON.stringify(deleteArr));
function deleteCheckedProduct(){
    var productArray = JSON.parse(localStorage.getItem('product'));
    let checkboxes = document.getElementsByClassName('checkbox');
    if(confirm('Bạn muốn xóa tất cả sản phẩm đã chọn?')){
        for (let i = checkboxes.length - 1; i >= 0; i--) {
        
            if (checkboxes[i].checked) {
                if(productArray[i]){
                    productArray.splice(i,1);
                }
              
            }
        }
        localStorage.setItem('product', JSON.stringify(productArray));

    }
    displayProductList();
}
    

function resetFormThem(){
    document.getElementById('loai-sp-them').value = "";
    document.getElementById('uploaded-image').src = "";
    document.getElementById('ma-san-pham-them') .value = "";
    document.getElementById('ten-san-pham-them').value = "";
    document.getElementById('mo-ta-san-pham-them').value = "";
    document.getElementById('gia-thanh-them').value = "";
}

function showThem(){
    document.getElementById('formThemSanPham').style.display = "flex";
    document.getElementById('formSuaSanPham').style.display = "none";
    document.getElementById('formThongTinDonHang').style.display = "none";
}

function updateProduct(){
    var id = document.getElementById('ma-san-pham-sua').value;
    var productArray = JSON.parse(localStorage.getItem('product'));
    for(i=0;i<productArray.length;i++){
        if(productArray[i].productId == id){
            productArray[i].typeID = document.getElementById('loai-sp-sua').value;
            productArray[i].img = document.getElementById('change-image').src;
            productArray[i].productId = document.getElementById('ma-san-pham-sua') .value;
            productArray[i].name = document.getElementById('ten-san-pham-sua').value;
            productArray[i].mota = document.getElementById('mo-ta-san-pham-sua').value;
            productArray[i].price = document.getElementById('gia-thanh-sua').value;
            
        }
    }
    localStorage.setItem('product',JSON.stringify(productArray));
    hideSua();
    displayProductList();
}

function resetFormSua(){
    
    document.getElementById('loai-sp-sua').value = "";
    document.getElementById('change-image').src = "";
    document.getElementById('ma-san-pham-sua') .value = "";
    document.getElementById('ten-san-pham-sua').value = "";
    document.getElementById('mo-ta-san-pham-sua').value = "";
    document.getElementById('gia-thanh-sua').value = "";
}
function showSua(id){
    document.getElementById('formThemSanPham').style.display = "none";
    document.getElementById('formThongTinDonHang').style.display = "none";
    var productArray = JSON.parse(localStorage.getItem('product'));
    
    for(i=0;i<productArray.length;i++){
        if(id == productArray[i].productId){
            document.getElementById('loai-sp-sua').value = productArray[i].typeID;
            document.getElementById('change-image').src = productArray[i].img;
            document.getElementById('ma-san-pham-sua').value = productArray[i].productId;
            document.getElementById('ten-san-pham-sua').value = productArray[i].name;
            document.getElementById('mo-ta-san-pham-sua').value = productArray[i].mota;
            document.getElementById('gia-thanh-sua').value = productArray[i].price;
            
        }
    }
    document.getElementById('formSuaSanPham').style.display = "flex";

}

function hideThem(){
    document.getElementById('formThemSanPham').style.display = "none";
    resetFormThem();
}

function hideSua(){
    document.getElementById('formSuaSanPham').style.display = "none";
    resetFormSua();
}

function showListProduct(){
    document.getElementById('sanpham').style.display = "block";
    document.getElementById('doanhthu').style.display = "none";
    document.getElementById('nguoidung').style.display = "none";
    document.getElementById('donhang').style.display = "none";
}

function displayOrderList(){
    var OrderArr = JSON.parse(localStorage.getItem('bill'));
    var s = `<div id="list_order">`;
    var t="";
    for(i=0;i<OrderArr.length;i++){
        t += `<div class="order-container">
            <div class="order-info" onclick="showBill(${OrderArr[i].id})">
                <div>${OrderArr[i].id}</div>
                <div>${OrderArr[i].userId}</div>
                <div>${OrderArr[i].totalprice}</div>
                <div>${OrderArr[i].date}</div>
                <div>${OrderArr[i].status}</div>    
            </div>
        </div>`;
    }
    s += t +`</div>`;
    document.getElementById('list_order').innerHTML = s;
}
var selectedStatus = "";
function showBill(id){
    document.getElementById('formThongTinDonHang').style.display= "block";
    // var tempArr = JSON.parse(localStorage.getItem('tempArr'));
    CartArr = JSON.parse(localStorage.getItem('subarr'));

    var OrderArr = JSON.parse(localStorage.getItem('bill'));
    var userArr= JSON.parse(localStorage.getItem('usersDataArray')); 
    for(i=0;i<CartArr.length;i++){
        if(CartArr[i].madon == id){
            for(j=0;j<userArr.length;j++){
                if(CartArr[i].userId == userArr[j].userId){
                    var s=`
                    <div class="modal-donhang" >
                    <div class="wrapper">
            <div class="formdon">
            <div class="header-formdon">
                <p class="nameform">Thông tin đơn hàng</p>
                <div class="close-formdon" onclick="hidebill();">
                    <i class=" icon-close fas fa-window-close"></i>
                </div>
            </div>
            <div class="ttinkhach-formdon">
                <div>Địa chỉ : ${userArr[j].address}</div>
                <div>Tên KH : ${userArr[j].fullname}</div>
                <div>SĐT : ${userArr[j].phonenumber}</div>
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
                }
                
            }
        
        }
    }
        
    
    var t='';
    // //Lay mang gio hang
    var tongtien=0;
    if(CartArr){

        // var ngayHienTai = new Date();
        // var ngayThangNam = ngayHienTai.toLocaleDateString();


        //Duyet mang gio hang de dua san pham vao 
        
        for(i=0;i<CartArr.length;i++){
            //for(j=0;j<OrderArr.length;j++){console.log('hi4');
            if(CartArr[i].madon == id){
            for(j=0;j<OrderArr.length;j++){
                if(OrderArr[j].id == id){
                    tongtien = OrderArr[j].totalprice;
                }
            }
                // for(k=0;k<CartArr[i].cart.length;k++){
                //     tongtien += CartArr[i].cart[k].price * CartArr[i].cart[k].quantity;
                //     console.log(tongtien);
                // }
                

            }
            
        //}


        }
        for(i=0;i<CartArr.length;i++){
            if(CartArr[i].madon == id){
                for(j=0;j<OrderArr.length;j++){

                    if(CartArr[i].madon == OrderArr[j].id){
                    for(k=0;k<CartArr[i].cart.length;k++){
    
    
                        t+=`<div class="item">
                        <div>${CartArr[i].cart[k].name}</div> 
                        <span>${CartArr[i].cart[k].quantity}</span>
                        </div>`;

    
    
                    }
                }
            }
            

        }

        
    }
    }
    var thanhtien = tongtien;

    // t=`<div class="item">
    //         <div>1.Bánh tráng phơi sương</div> 
    //         <span>1</span>
    //         </div>`;

    var ngay;
    s=s+t+`</div>
                        
    <div class="ordertime">
        <div>Ngày đặt : `
        for(i=0;i<OrderArr.length;i++){
            if(OrderArr[i].id == id){
                ngay = OrderArr[i].date;
            }
        }
        
        s += `${ngay}</div>
    </div>    

    <div class="thanhtien">

        <div>Thành tiền : ${thanhtien} VND</div>
    </div>
    

    </div>

    <div class="trangthai">
            <div>Tình trạng</div>
            <!-- <div class="status"></div> -->`
            for(i=0;i<OrderArr.length;i++){
                if(OrderArr[i].id == id){
                    selectedStatus = OrderArr[i].status;
                }
            }
            // if (selectedStatus === "daxuly") {
            //     s += '<input type="radio" name="status" class="status" id="daxuly" onclick="changeStatus(' + id + ')" checked>Đã xử lý';
            //     s += '<input type="radio" name="status" class="status" id="chuaxuly" onclick="changeStatus(' + id + ')">Chưa xử lý';
            // } else if (selectedStatus === "chuaxuly") {
            //     s += '<input type="radio" name="status" class="status" id="daxuly" onclick="changeStatus(' + id + ')">Đã xử lý';
            //     s += '<input type="radio" name="status" class="status" id="chuaxuly" onclick="changeStatus(' + id + ')" checked>Chưa xử lý';
            // } 
             if(selectedStatus === "Đã xử lý"){
                
                s += '<input type="radio" name="status" class="status" id="daxuly" onclick="changeStatus(' + id + ')" checked>Đã xử lý';
                s += '<input type="radio" name="status" class="status" id="chuaxuly" onclick="changeStatus(' + id + ')">Chưa xử lý';
            }
            else if(selectedStatus === "Chưa xử lý"){
                
                s += '<input type="radio" name="status" class="status" id="daxuly" onclick="changeStatus(' + id + ')">Đã xử lý';
                s += '<input type="radio" name="status" class="status" id="chuaxuly" onclick="changeStatus(' + id + ')" checked>Chưa xử lý';
            }
            else {
                // Nếu không có trạng thái đã chọn, thì để mặc định chọn "Chưa xử lý"
                s += '<input type="radio" name="status" class="status" id="daxuly" onclick="changeStatus(' + id + ')">Đã xử lý';
                s += '<input type="radio" name="status" class="status" id="chuaxuly" onclick="changeStatus(' + id + ')" checked>Chưa xử lý';
            } 
            +
        `</div>
    </div>

    </div>
    </div> </div></div>`;
    document.getElementById('formThongTinDonHang').innerHTML = s;
}
    function hidebill(){
        document.getElementById('formThongTinDonHang').style.display = "none";
    }


function changeStatus(id){
    var OrderArr = JSON.parse(localStorage.getItem('bill'));
    var radioDaXuLy = document.getElementById('daxuly');
    var radioChuaXuLy = document.getElementById('chuaxuly');
    for(i=0;i<OrderArr.length;i++){
        if(OrderArr[i].id == id){
            if(radioDaXuLy.checked){
            OrderArr[i].status = "Đã xử lý";
            selectedStatus="daxuly";
            }
            if(radioChuaXuLy.checked){
                OrderArr[i].status = "Chưa xử lý";
                selectedStatus="chuaxuly";
            }
            localStorage.setItem('bill',JSON.stringify(OrderArr));
            displayOrderList();
        }
    }
    
}

function showListUsers(){
    document.getElementById('sanpham').style.display = "none";
    document.getElementById('doanhthu').style.display = "none";
    document.getElementById('nguoidung').style.display = "block";
    document.getElementById('donhang').style.display = "none";

}

function showListOrders(){
    document.getElementById('sanpham').style.display = "none";
    document.getElementById('doanhthu').style.display = "none";
    document.getElementById('nguoidung').style.display = "none";
    document.getElementById('donhang').style.display = "block";
}

function selectAllProduct() {
    var checkboxes = document.querySelectorAll('#list_sp input[type="checkbox"]');
    var selectAllCheckbox = document.getElementById('selectAllProducts');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;
    }
}

function displayUserList(){
    var UserArr = JSON.parse(localStorage.getItem('usersDataArray'));
    var s=`<div id="customer-info">`;
    var t="";
    for(i=0;i<UserArr.length;i++){
        t += `<div class="customer-info">
                <div class="checkbox-container">
                <input type="checkbox" class="checkbox"></div>
                <div>${UserArr[i].userId}</div>
                <div>${UserArr[i].fullname}</div>
                <div>${UserArr[i].username}</div>
                <div>${UserArr[i].email}</div>
                <div>${UserArr[i].phonenumber}</div>
            </div>`;
    }
    s += t +'</div>';
    document.getElementById('customer-info').innerHTML = s;
}

  
  // Function to toggle select all checkboxes
  function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('#customer-info input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById('selectAll');
  
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });
  }
  
  // Function to delete selected customers and save to local storage
  function deleteSelectedCustomers() {
    var UserArr = JSON.parse(localStorage.getItem('usersDataArray'));
    let checkboxes = document.querySelectorAll('#customer-info input[type="checkbox"]');
    let selectedIndexes = [];
  
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedIndexes.push(index);
      }
    });
  
    if (selectedIndexes.length > 0 && confirm('Bạn muốn xóa tất cả người dùng đã chọn?')) {
      // Sort selectedIndexes in descending order to avoid index shifting during deletion
      selectedIndexes.sort((a, b) => b - a);
  
      selectedIndexes.forEach((index) => {
        if (UserArr[index]) {
  UserArr.splice(index, 1);
        }
      });
  
      localStorage.setItem('usersDataArray', JSON.stringify(UserArr));
      displayUserList();
    }
  }

  function filterDon(selectedOption) {
    var MangDon = JSON.parse(localStorage.getItem('bill'));
    var filteredDon = [];
    var today = new Date();

    switch (selectedOption) {
        case 'ngay':
            // Filter orders for today
            filteredDon = MangDon.filter(order => {
                var orderDate = parseDate(order.date);
                return orderDate.getDate() === today.getDate() &&
                       orderDate.getMonth() + 1 === today.getMonth() + 1 &&
                       orderDate.getFullYear() === today.getFullYear();
            });
            break;
        case 'thang':
            // Filter orders for the current month
            var currentMonth = today.getMonth() + 1; // Months are zero-based
            filteredDon = MangDon.filter(order => {
                var orderDate = parseDate(order.date);
                return orderDate.getMonth() + 1 === currentMonth &&
                       orderDate.getFullYear() === today.getFullYear();
            });
            break;
        case 'nam':
            // Filter orders for the current year
            var currentYear = today.getFullYear();
            filteredDon = MangDon.filter(order => {
                var orderDate = parseDate(order.date);
                return orderDate.getFullYear() === currentYear;
            });
            break;
        default:
            // If no valid option is selected, show all orders
            filteredDon = MangDon;
            break;
    }

    // Display the filtered orders
    displayDon(filteredDon);
}

// Function to parse date strings in 'day-month-year' format
function parseDate(dateString) {
    var parts = dateString.split('-');
    return new Date(parts[2], parts[1] - 1, parts[0]); // Year, month (zero-based), day
}
// Function to display orders in the HTML
function displayDon(orders) {
    var listOrderElement = document.getElementById('list_order');
    listOrderElement.innerHTML = ''; // Clear previous content
    // Display each order in the listOrderElement
    orders.forEach(order => {
        var orderElement = document.createElement('div');
        orderElement.className = 'order-container';
        orderElement.innerHTML = `
            <div class="order-info" onclick="showBill(${order.id})">
                <div>${order.id}</div>
                <div>${order.userId}</div>
                <div>${order.totalprice}</div>
                <div>${order.date}</div>
                <div>${order.status}</div>
            </div>
        `;
        listOrderElement.appendChild(orderElement);
    });
}  
  
//thống kê
/*
function showSelectedThoigian(){
    document.getElementById('doanhthu').style.display = "block";
    var selectedThoigian = document.getElementById('thoigian').value;
    console.log(selectedThoigian);
    if(selectedThoigian == 'nam' || selectedThoigian == 'thang' || selectedThoigian == 'ngay'){
        document.getElementById('phanloai').style.display = "block";
    }
    

}

function showSelectedPhanloai(){
    //document.getElementById('phanloai').style.display = "block";
    var selectedPhanloai = document.getElementById('phanloai').value;
    if(selectedPhanloai == 'type'){
        document.getElementById('phanloaichitiet').style.display = "block";
    }
    if(selectedPhanloai == 'all'){
        displayThongKeTatCa();
    }
    
}

function showSelectedPhanloaichitiet(){
    var selectedPhanloaichitiet = document.getElementById('phanloaichitiet').value;
    switch(selectedPhanloaichitiet){
        case 'combo':
            displayCombo();
            break;
        case 'banhtrang':
            displayBanhtrang();
            break;    
    }
}

function displayThongKeTatCa(){
    var day = new Date();
    var thongke = JSON.parse(localStorage.getItem('thongke'))||[];
    //xét theo năm
    if(document.getElementById('thoigian').value == 'nam'){
        var year = day.getFullYear();
        var str;
        for(i=0;i<OrderArr.length;i++){
            str= OrderArr[i].date;
            var s = str.split("-");
            if(parseInt(s[2]) === year){
                for(j=0;j<subArr.length;j++){
                    if(subArr[j].madon == OrderArr[i].id){
                        if(!thongke || thongke.length == 0){
                            for(k=0;k<subArr[j].cart.length;k++){
                                x = {id_tk: subArr[j].cart[k].productId, img_tk: subArr[j].cart[k].img, name_tk: subArr[j].cart[k].name, quantity_tk: parseInt(subArr[j].cart[k].quantity)};
                                thongke.push(x);
                                localStorage.setItem('thongke', JSON.stringify(thongke));
                                
                                localStorage.setItem('thongke', JSON.stringify(thongke));
                            }
                        }
                        else{
                            for(k=0;k<subArr[j].cart.length;k++){
                                if(subArr[j].cart[k].productId == thongke[thongke.length-1].id_tk){
                                    thongke[thongke.length-1].quantity_tk += parseInt(subArr[j].cart[k].quantity);
                                    localStorage.setItem('thongke', JSON.stringify(thongke));
                                    
                                }
                                else{
                                    x = {id_tk: subArr[j].cart[k].productId, img_tk: subArr[j].cart[k].img, name_tk: subArr[j].cart[k].name, quantity_tk: subArr[j].cart[k].quantity, price_tk: subArr[j].cart[k].price*subArr[j].cart[k].quantity};
                                    thongke.push(x);
                                    localStorage.setItem('thongke', JSON.stringify(thongke));
    
                                }
                            }
                            
                        }
                    }
                    
                }
                thongke = JSON.parse(localStorage.getItem('thongke'));

                for(m=0;m<thongke.length;m++){
                    console.log(parseInt(subArr[j].cart[k].price));
                    console.log(parseInt(thongke[thongke.length-1].quantity_tk));
                    var a = parseInt(subArr[j].cart[k].price)*parseInt(thongke[thongke.length-1].quantity_tk);
                    console.log(a);
                    thongke[thongke.length-1].price_tk = a;
                }
                
                
            }
        }
        thongke = JSON.parse(localStorage.getItem('thongke'));
        var s = `<div id="list_tk">`;
        var t="";
        for(i=0; i<thongke.length;i++){
            t += `<div class="list">
                    <div class="masp_dt">${thongke[i].id_tk}</div>
                    <div class="sp_dt"><img src="${thongke[i].img_tk}"/></div>
                    <div class="tensp_dt">${thongke[i].name_tk}</div>
                    <div class="soluong_dt">${thongke[i].quantity_tk}</div>
                    <div class="dongia_dt">${thongke[i].price_tk}</div>
                </div>`;
        }
        s += t + '</div>';
        document.getElementById('list_tk').innerHTML = s;
    }
    //localStorage.removeItem('thongke');

}
function thongKe(){
    showSelectedThoigian();
    
}*/
/*  function deleteSelectedCustomers() {
    const checkboxes = document.querySelectorAll('.customer-info input[type="checkbox"]');
    const selectedCustomersIndices = [];
  
    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedCustomersIndices.push(index);
      }
    });
  
    // Remove selected customers from the data array
    selectedCustomersIndices.reverse().forEach((index) => {
      data.splice(index, 1);
    });
  
    // Save updated data to local storage
    saveData(data);
  
    // Refresh the display
    displayCustomers(data);
  
    alert(`Deleted customers at indices: ${selectedCustomersIndices.join(', ')}`);
  }
  
  // Function to get data from local storage
  function getData() {
    const localData = localStorage.getItem('usersDataArray');
    return localData ? JSON.parse(localData) : [];
  }
  
  // Function to save data to local storage
  function saveData(data) {
    localStorage.setItem('mangNguoiDungData', JSON.stringify(data));
  }
  
  // Function to create customer element
  function createCustomerElement(customer) {
    const customerElement = document.createElement('div');
    customerElement.classList.add('customer-info');
  
    // Create and append checkbox
    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxContainer.appendChild(checkbox);
    customerElement.appendChild(checkboxContainer);
  
    // Create and append customer info
    const customerInfoFields = ['maKhachHang', 'tenKhachHang', 'userName', 'email', 'soDienThoai', 'tongTien'];
    customerInfoFields.forEach((field) => {
      const fieldElement = document.createElement('div');
      fieldElement.textContent = customer[field];
      customerElement.appendChild(fieldElement);
    });
  
    return customerElement;
  }
  
  // Initial setup
  document.addEventListener('DOMContentLoaded', function () {
    const initialData = getData();
    displayCustomers(initialData);
  });
*/

import MenuItem from "./MenuItem.js";
import Customer from "./Customer.js";
class Restaurant {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.menu = []; // Array chứa các MenuItem
    this.customers = []; // Array chứa các Customer
    this.orders = []; // Array chứa các Order
    this.tables = this.initializeTables(20); // 20 bàn
    this.nextOrderId = 1;
    this.nextCustomerId = 1;
    this.nextMenuItemId = 1;
  }

  // Method: Khởi tạo bàn ăn 
  initializeTables(numberOfTables) {
    return Array.from({ length: numberOfTables }, (_, index) => ({
      number: index + 1,
      seats: Math.floor(Math.random() * 6) + 2, // 2-8 ghế
      occupied: false,
      currentOrderId: null,
    }));
  }

  // =================== QUẢN LÝ MENU ===================
  
  // Method: Thêm món vào menu
  addMenuItem(name, price, category, description = "") {
    const menuItem = new MenuItem( name, price, category, description);
    this.menu.push(menuItem);
    return menuItem;
  }

  // Method: Xóa món khỏi menu
  removeMenuItem(idx) {
      if (index < 0 || idx >= this.menu.length) {
        return false
      }
      this.menu.splice(idx, 1);
      return true;
  }

  // Method: Tìm món trong menu (ES6 Array methods)
  findMenuItems(searchTerm) {
    const result = this.menu.filter(item => item.id === searchTerm);
    if (result){
      return result;
    }
    return console.log("Không tìm thấy món có id này")
  }

  // Method: Lấy menu theo danh mục
  getMenuByCategory(category) {
    if (!category) {
      return console.log("Vui lòng nhập danh mục")
    }
    const normalCategory = String(category).trim().toLowerCase();
    const items = this.menu.filter(item => String(item.category || "").trim().toLowerCase() === normalCategory);
    return console.log(items);
  }

  // Method: Lấy các món có sẵn
  getAvailableItems() {
    const items = this.menu.filter(item => item.available);
    return console.log(items);
  } 

  // Method: Lấy top món đắt nhất
  getTopExpensiveItems(limit = 5) {}

  // =================== QUẢN LÝ KHÁCH HÀNG ===================

  // Method: Thêm khách hàng mới
  addCustomer(name, phone, email = "") {
     if (!name || !phone || !email) {
      return console.log("Vui lòng nhập đầy đủ thông tin!")
     }
     const newCustomer = new Customer(this.nextCustomerId++, name, phone, email);
     this.customers.push(newCustomer);
     return console.log(newCustomer);
  }

  // Method: Tìm khách hàng
  findCustomer(searchTerm) {
    const result = this.customers.filter(customer => customer.id === searchTerm);
    if (result){
      return console.log(result);
    }else{
      return console.log("Không tìm thấy khách hàng có id này");
    }
  }

  // Method: Lấy khách hàng VIP
  getVIPCustomers() {}

  // Method: Lấy top khách hàng chi tiêu nhiều nhất
  getTopCustomers(limit = 10) {}

  // =================== QUẢN LÝ ĐỚN HÀNG ===================

  // Method: Tạo đơn hàng mới
  createOrder(customerId, tableNumber = null) {}

  // Method: Hoàn thành đơn hàng
  completeOrder(orderId) {
    // Giải phóng bàn
    // Cập nhật lịch sử khách hàng
  }

  // Method: Lấy đơn hàng theo trạng thái
  getOrdersByStatus(status) {}

  // Method: Lấy đơn hàng đang chờ
  getPendingOrders() {}

  // Method: Lấy đơn hàng đang chuẩn bị
  getPreparingOrders() {}

  // =================== QUẢN LÝ BÀN ===================

  // Method: Lấy bàn trống
  getAvailableTables() {}

  // Method: Lấy bàn đang sử dụng
  getOccupiedTables() {}

  // =================== THỐNG KÊ VÀ BÁO CÁO ===================

  // Method: Tính doanh thu theo ngày
  getDailyRevenue(date = new Date()) {}

  // Method: Lấy món bán chạy nhất
  getBestSellingItems(limit = 10) {}

  // Method: Lấy báo cáo tổng quan
  getRestaurantSummary() {}
}

export default Restaurant;

import Order from "./Order.js";

class Customer {
  constructor(id, name, phone, email = "") {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.orderHistory = [];
    this.createdAt = new Date();
  }

  // Method: Thêm đơn hàng vào lịch sử
  addOrderToHistory(order) {    
    this.orderHistory.push(order);
    return console.log(`Đã thêm đơn hàng #${order.id} vào lịch sử`);
  }

  // Method: Lấy tổng số tiền đã chi tiêu
  getTotalSpent() {
    return this.orderHistory.reduce((total, order) => {
      if (order.getTotal) {
        return total + order.getTotal();
      } else {
        return total + 0;
      }
    }, 0);
  }

  // Method: Lấy số đơn hàng
  getOrderCount() {
    return this.orderHistory.length;
  }

  // Method: Lấy thông tin khách hàng
  getProfile() {
    return {
      id: this.id,
      name: this.name,
      phone: this.phone,
      email: this.email,
      createdAt: this.createdAt,
      orderHistory: this.orderHistory
    };
  }
}

export default Customer;

import MenuItem from "./MenuItem.js";
class Order {
  constructor(id, customerId, tableNumber = null) {
    this.id = id;
    this.customerId = customerId;
    this.tableNumber = tableNumber;
    this.items = []; // Array chứa các món đã order
    this.status = "pending"; // pending, preparing, ready, served, paid
    this.createdAt = new Date();
    this.discount = 0; // Giảm giá (%)
    this.tax = 0.1; // Thuế VAT 10%
  }

  // Method: Thêm món vào đơn hàng
  addItem(menuItem, quantity = 1, note = "") {
    if ((typeof menuItem.idx !== 'number') || // KIỂM TRA MỚI: Đảm bảo idx là một số
        !menuItem.price || 
        quantity <= 0) {
      return null;
    }

    const existingItem = this.items.find(item => item.menuItem.idx === menuItem.idx)
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.note = note || existingItem.note;
      return existingItem;
    } else {
      const lineItem = { menuItem, quantity, note };
      this.items.push(lineItem)
      return lineItem;
    }

  }

  // Method: Xóa món khỏi đơn hàng
  removeItem(menuItemIdx, quantity = 1) {
    if (!menuItemIdx || quantity <= 0) {
      return null;
    }
    const index = this.items.findIndex(item => item.menuItem.idx === menuItemIdx);
    if (index === -1) {
      return null;
    }else{
      const lineItem = this.items[index];
      if (lineItem.quantity > quantity) {
        lineItem.quantity -= quantity;
        return lineItem;
      }else{
        this.items.splice(index, 1);
        return true;
      }
    }
  }


  // Method: Cập nhật số lượng món
  updateItemQuantity(menuItemIdx, newQuantity) {
    if (!menuItemIdx || newQuantity === undefined || newQuantity === null || newQuantity < 0) {
      return null;
    }

    const item = this.items.find(item => item.menuItem.idx === menuItemIdx)
    if (!item) {
      return null;
    }

    if (newQuantity === 0) {
      this.removeItem(menuItemIdx, item.quantity);
    } else {
      item.quantity = newQuantity;
    }
  }

  // Method: Tính tổng tiền trước thuế và giảm giá
  getSubtotal() {
    return this.items.reduce((sum, line) => {
      const price = line.menuItem.price ;
      const qty = line.quantity;
      return sum + price * qty;
    }, 0);
  }

  // Method: Tính tiền giảm giá
  getDiscountAmount() {
    const subtotal = this.getSubtotal();
    const percentage = this.discount; // 0-100
    return percentage/100 * subtotal;
  }

  // Method: Tính thuế
  getTaxAmount() {
    const subtotal = this.getSubtotal();
    const tax = this.tax;
    return subtotal*tax;
  }

  // Method: Tính tổng tiền cuối cùng
  getTotal() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    const tax = this.getTaxAmount();
    return subtotal - discount + tax;
  }

  // Method: Áp dụng giảm giá
  applyDiscount(percentage) {
    const value = Number(percentage);
    this.discount = value;
    return this.discount;
  }

  // Method: Cập nhật trạng thái đơn hàng
  updateStatus(newStatus) {
    const valid = ["pending", "preparing", "ready", "served", "paid", "cancelled"];
    if (!valid.includes(newStatus)) {
      return console.log("Trạng thái không hợp lệ");
    }
    this.status = newStatus;
    return this.status;
  }

  // Method: Lấy các món theo danh mục (sử dụng Array methods)
  getItemsByCategory(category) {
    if (!category) {
      return console.log("Vui lòng nhập danh mục")
    }
    const normalCategory = String(category).trim().toLowerCase();
    const items = this.items.filter(item => 
      String(item.menuItem?.category).trim().toLowerCase() === normalCategory
    );
    return items;
  }

  // Method: Lấy món đắt nhất trong đơn hàng
  getMostExpensiveItem() {
    if (this.items.length === 0) return null;
    return this.items.reduce((maxLine, line) => {
      const price = line.menuItem.price;
      const maxPrice = maxLine.menuItem.price;
      if (price > maxPrice) {
        return line;
      } else {
        return maxLine;
      };
    });
  }

  // Method: Lấy thống kê đơn hàng
  getOrderSummary() {}

  // Method: Xuất hóa đơn
  generateReceipt() {
    let receipt = `===== HÓA ĐƠN =====\n`;
    receipt += `Mã đơn: ${this.id}\n`;
    receipt += `Khách hàng: ${this.customerId}\n`;
    receipt += `Bàn: ${this.tableNumber ?? '-'}\n`;
    receipt += `Thời gian: ${this.createdAt.toLocaleString()}\n`;
    receipt += `--------------------------\n`;
    this.items.forEach(line => {
        receipt += `${line.menuItem.name} x${line.quantity} - ${(line.menuItem.price * line.quantity).toLocaleString()}₫`;
        if (line.note) receipt += ` (${line.note})`;
        receipt += `\n`;
    });
    receipt += `--------------------------\n`;
    receipt += `Tạm tính: ${this.getSubtotal().toLocaleString()}₫\n`;
    receipt += `Giảm giá: -${this.getDiscountAmount().toLocaleString()}₫\n`;
    receipt += `Thuế (10%): +${this.getTaxAmount().toLocaleString()}₫\n`;
    receipt += `TỔNG CỘNG: ${this.getTotal().toLocaleString()}₫\n`;
    receipt += `Trạng thái: ${this.status}\n`;
    receipt += `==========================\n`;
    return receipt;
  }
}
export default Order;

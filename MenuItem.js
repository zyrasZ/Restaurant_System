class MenuItem {
  constructor(id, name, price, category, description = "", available = true) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.description = description;
    this.available = available;
    this.createdAt = new Date();
  }

  // Method: Cập nhật giá món ăn
  updatePrice(newPrice) {
    if (newPrice === null || newPrice === undefined) {
      return console.error("Giá trị không hợp lệ");
    }
    const value = Number(newPrice);
    if (!Number.isInteger(value) || value <= 0) {
      return console.error("Giá phải là số nguyên dương");
    }else{
      this.price = value;
      return this.price;
    }
  }

  // Method: Thay đổi trạng thái có sẵn
  toggleAvailability() {
    this.available = !this.available;
    return this.available;
  }

  // Method: Lấy thông tin chi tiết
  getDetails() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      formattedPrice: this.getFormattedPrice(),
      category: this.category,
      description: this.description,
      available: this.available,
      createdAt: this.createdAt,
    };
  }

  // Method: Format giá tiền
  getFormattedPrice() {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(this.price);
  }
}

export default MenuItem;

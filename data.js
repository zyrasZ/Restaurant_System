export const MENU_ITEMS = [
  {
    name: "Gỏi cuốn tôm thịt",
    price: 45000,
    category: "Khai vị",
    description: "Gỏi cuốn tươi với tôm và thịt ba chỉ",
    imageUrl: "https://www.cet.edu.vn/wp-content/uploads/2018/11/goi-cuon-tom-thit.jpg",
  },
  {
    name: "Chả cá Lã Vọng",
    price: 180000,
    category: "Món chính",
    description: "Đặc sản Hà Nội với cá lăng tươi",
    imageUrl: "https://www.cet.edu.vn/wp-content/uploads/2018/08/cha-ca-la-vong.jpg", 
  },
  {
    name: "Phở bò tái",
    price: 65000,
    category: "Món chính",
    description: "Phở bò truyền thống với thịt tái",
    imageUrl: "https://i.ytimg.com/vi/99tOr7JSr0k/maxresdefault.jpg",
  },
  {
    name: "Bánh flan",
    price: 25000,
    category: "Tráng miệng",
    description: "Bánh flan mềm mịn với caramel",
    imageUrl: "https://superfoods.vn/wp-content/uploads/2023/08/banh-flan-1.jpg",
  },
  {
    name: "Trà đá",
    price: 5000,
    category: "Đồ uống",
    description: "Trà đá truyền thống",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHJMLbJfgupTrFD34k2rY-0lADhjUFAr6ug&s",
  },
  {
    name: "Cà phê sữa đá",
    price: 20000,
    category: "Đồ uống",
    description: "Cà phê phin với sữa đặc",
    imageUrl: "https://cubes-asia.com/storage/blogs/2024-12/5-cach-pha-ca-phe-sua-tuoi-khong-duong-co.jpeg",
  },
  {
    name: "Salad trái cây",
    price: 35000,
    category: "Salad",
    description: "Salad trái cây tươi với sốt mayonnaise",
    imageUrl: "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2024_1_23_638416217857385936_cac-cong-thuc-salad-hoa-qua-tuoi-mat-thanh-loc-co-the-de-lam-khong-nen-bo-qua.jpg",
  },
  {
    name: "Canh chua cá",
    price: 55000,
    category: "Soup",
    description: "Canh chua cá bông lau với dứa",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDIincVxtJfDp46mcockAykc6W08d6k02Dw&s",
  },
  {
    name: "Tôm hùm nướng",
    price: 450000,
    category: "Hải sản",
    description: "Tôm hùm tươi nướng với bơ tỏi",
    imageUrl: "https://48bistro.com.vn/wp-content/uploads/2024/10/z5911268884438_89f8b6b7370c556ec5cc319170138b0c.jpg",
  },
  {
    name: "Bò lúc lắc",
    price: 120000,
    category: "Thịt",
    description: "Thịt bò thăn lưng xào lúc lắc",
    imageUrl: "https://i.ytimg.com/vi/0X5m98q3Pn0/maxresdefault.jpg",
  },
];

// Function: Tạo customers mẫu
const CUSTOMERS = [
  {
    name: "Nguyễn Văn An",
    phone: "0901234567",
    email: "an.nguyen@email.com",
  },
  {
    name: "Trần Thị Bình",
    phone: "0912345678",
    email: "binh.tran@email.com",
  },
  { name: "Lê Văn Cường", phone: "0923456789", email: "cuong.le@email.com" },
  {
    name: "Phạm Thị Dung",
    phone: "0934567890",
    email: "dung.pham@email.com",
  },
  { name: "Hoàng Văn Em", phone: "0945678901", email: "em.hoang@email.com" },
];

const ORDER_STATUS = {
  PENDING: "pending",
  PREPARING: "preparing",
  READY: "ready",
  SERVED: "served",
  PAID: "paid",
  CANCELLED: "cancelled",
};

const CATEGORIES = [
  "Khai vị",
  "Món chính",
  "Tráng miệng",
  "Đồ uống",
  "Salad",
  "Soup",
  "Hải sản",
  "Thịt",
  "Chay",
];


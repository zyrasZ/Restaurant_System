// ================================
// Yêu cầu bài:
// + Tạo nhà hàng
// + Tạo menu cho nhà hàng
// + Log Menu ra
// + Thêm khách hàng vào nhà hàng
// + Tạo 1 order cho khách hàng
// + Log Order ra
// + Thanh toán order
// + Log Thanh toán ra

// ================================
// Phần Làm bài:
import Restaurant from "./Restaurant.js";
import MenuItem from "./MenuItem.js";
import Order from "./Order.js";
import Customer from "./Customer.js";
import {MENU_ITEMS} from "./data.js" ;
// Tạo 1 nhà hàng
const newRestaurantForm = document.getElementById("newRes");
if (newRestaurantForm) {
    newRestaurantForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const nameInput = document.getElementById("resName");
        const addressInput = document.getElementById("resAddress");
        const phoneInput = document.getElementById("resPhone");

        const name = nameInput ? nameInput.value : "";
        const address = addressInput ? addressInput.value : "";
        const phone = phoneInput ? phoneInput.value : "";

        if (name) {
            localStorage.setItem("restaurantName", name);
        }
        if (address) {
            localStorage.setItem("restaurantAddress", address);
        }
        if (phone) {
            localStorage.setItem("restaurantPhone", phone);
        }

        window.location.href = "./homepage.html";
    });
}
// Tạo 1 menu cho nhà nhà hàng đó
// Log Menu ra
// Thêm khách hàng vào nhà hàng
// Tạo 1 order cho khách hàng
// Thêm món vào đơn hàng
// Log Order ra
// Xuất hóa đơn


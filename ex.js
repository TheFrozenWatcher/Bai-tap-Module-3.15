

// const user1 = new user("12", "Người dùng 1", "1@gmail.com", )

// const users = [];
// const products = [];
// const carts = [];
// let choose;
// do {
//     choose = +prompt("Nhập lựa chọn");
//     switch (choose) {
//         case 1:
//             const userId = prompt("Nhập ID người dùng: ");
//             const userName = prompt("Nhập tên người dùng");
//             const email = prompt("Nhập email ");
//             const password = prompt("Nhập mật khẩu")
//             const user = {
//                 userId: userId,
//                 userName: userName,
//                 email: email,
//                 password: password,
//                 createdAt: new Date().toISOString().split("T")[0],
//             };
//             users.push(user);
//             break;
//         case 2:
//             const productId = prompt("Nhập ID sản phẩm: ");
//             const productName = prompt("Nhập tên sản phẩm: ");
//             const price = +prompt("Nhập giá");
//             const product = {
//                 productId: productId,
//                 productName: productName,
//                 price: price,
//             };
//             products.push(product);
//             break;
//         case 3:
//             const cartId = prompt("Nhập ID cart: ");
//             const prodId = prompt("Nhập ID của sản phẩm");
//             const uID = prompt("Nhập ID của người dùng: ");
//             const quantity = +prompt("Nhập số lượng sản phẩm ")
//             const cart = {
//                 cartId: cartId,
//                 prodId: prodId,
//                 uID: uID,
//                 quantity: quantity,
//             };
//             break;
//         case 4:
//             for (let i = 0; i < users.length; i++) {
//                 console.log("user: ", users[i]);
//             };
//             break;
//         case 5:
//             for (let i = 0; i < products.length; i++) {
//                 console.log("product: ", product[i]);
//             };
//             break;
//         case 6:
//             for (let i = 0; i < carts.length; i++) {
//                 console.log("cart: ", carts[i]);
//             };
//             break;
//         case 7:
//             let total = 0;
//             for (let i = 0; i < carts.length; i++) {
//                 const productId = carts[i].prodId;
//                 const findProduct = products.find((pro) => pro.productId === productId)
//                 console.log("Product by ID: ", findProduct);
//                 total = total + findProduct.price * carts[i].quantity
//             };
//             console.log("Tổng số tiền của giỏ hàng; ", total);

//         default:
//             break;
//     }
// } while (choose != 8);


const array = [1, 2, 3, 4, 5, 6, 7, 8];
//Lọc những phần tử thỏa mãn, ko thỏa mãn điều kiện dùng hàm filter()
//Nó sẽ trả về 1 mảng mới chứa các giá trị thỏa mãn điều kiện, nếu ko có điều kiện gì thỏa mãn thì sẽ trả mảng rỗng
// Hay ứng dụng nếu cần xóa 1 phần tử khỏi mảng
// const filterNumber = array.filter((item, index)=>{
//     console.log((`item: ${item}, index: ${index}`));
//     return item!=1
// });

const filterNumber = array.filter((arr) => arr > 5);
console.log(filterNumber);

//Tìm kiếm 1 phần tử trong mảng theo 1 điều kiện cụ thể => hàm find()
// Nó sẽ trả về 1 phần tử có trong mảng mà thỏa mãn điều kiện, nếu ko có phần tử thỏa mãn sẽ trả về undefined
// Hay sử dụng để tìm kiếm 1 phần tử duy nhất trong mảng

const findNumber = array.find((arr) => arr === 2);
console.log(findNumber);

//Lấy ra vị trí 1 phần tử trong mảng nếu thỏa mãn điều kiện
// Hay ứng dụng trong trường hợp tìm kiếm vị trí của 1 phần tử trong mảng
// Nó trả về vị trí của phần tử trong mảng nếu thỏa mãn điều kiện
const findIndex = array.findIndex((arr) => arr === 4);
console.log(findIndex);

//Làm thay đổi tất cả giá trị trong mảng => hàm fill
const fillArray = array.fill(10, 0, 5);
console.log(fillArray);

//Kiểm tra các phần tử có trong mảng có thỏa mãn đk ko, chỉ cần 1 đk sai thì sẽ trả về false
const checkCondition = array.every((arr) => arr >= 1);
console.log(checkCondition);

//Kiêm tra chỉ cần 1 điều kiện thỏa mãn thì sẽ nhận true
const checkSomeCondition = array.some((arr) => arr >= 9);
console.log(checkSomeCondition);

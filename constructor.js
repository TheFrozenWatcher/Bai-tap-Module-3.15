// Cú pháp khởi tạo

//Khởi tạo đối tượng user
function User(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
};

User.prototype.classname = "JV231103";
//Khởi tạo đối tượng User
const user1 = new User("jfh", "jfh@gmail.com", "12345");
user1.readPost = "Đọc báo";

const user2 = new User("dfg", "dfg@gmail.com", "12345");
user2.manager = "Quản lý hệ thống";
console.log(user1);
console.log(user2);
console.log(user1.classname);

// Viết 1 chương trình yêu cầu người dùng nhập các lựa chọn
//1. Nhập thông tin user: name, email, password và lưu vào trong mảng
//2. In thông tin mảng người dùng ra bên ngoài
//3. Nhập tên người dùng từ trình duyệt và tim kiếm tên người dùng đó có trong mảng không
//4. Thoát chương trình
//Các trường hợp còn lại thông báo là chọn sai lựa chọn
let choose;
const UserList = [user1, user2];
const addUser = () => { //thêm người dùng
    const userName = prompt("Nhập tên người dùng: ");
    const password = prompt("Nhập mật khẩu: ");
    const email = prompt("Nhập email: ");
    const user = {
        userName: userName,
        password: password,
        email: email
    }
    UserList.push(user);
};
/** ĐỌc danh sách user
 * 
 * @param {*} array Mảng user
 */

const readUser = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log("Danh sách user: ", array[i]);
    }
};

/**
 * Tìm kiếm user theo tên
 * @param {*} inputValue tên lấy từ người dùng
 * @param {*} array mảng chứa danh sách user
 * @returns trả về index nếu như tìm thấy user, -1 nếu ko tìm thấy
 */

const handleSearch = (inputValue, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === inputValue) {
            return i; //trả về vị trí tìm thấy
        } else {
            return -1 // nếu không tìm thấy
        }
    }
}
do {
    choose = +prompt("Mời bạn nhập lựa chọn");

    switch (choose) {
        case 1: //thêm người dùng
            addUser();
            break;
        case 2: //đọc danh sahcs
            readUser(UserList);
            break;
        case 3:
            const nameSearch = prompt("Nhập tên tìm kiếm");
            const result = handleSearch(nameSearch, UserList)
            if (result != -1) {
                console.log(`${nameSearch} xuất hiện tại vị trí ${result}`);
            }
            else { console.log(`"Không tìm thấy ${nameSearch}`); };

            break;

        default: console.log("Nhập sai lựa chọn");
            break;
    }

} while (choose != 4);

// JS: có 2 kiểu dữ liệu hay được nhắc đến khi gián giá trị và chuyển vào trong hàm
// Tham chiếu: function, object, array
//      Tham trị
let a = 10;
let b = a;
b = 20;
console.log(a);
console.log(b);

// Tham trị: các kiểu dữ liệu nguyên thủy: boolean, number, string, undefined, null, NaN, symbol



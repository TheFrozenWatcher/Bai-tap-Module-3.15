// Cách tạo đối tượng trong JS
// từ_khóa_khai_báo tên_đối_tượng = {
// Các key và value
// }

//Cách 1: object literal

const user = {
    //key: value
    userName: "ABC",
    email: "abc@gmail.com",
    password: "1234567",
    age: 21,
    isMale: true,
    //Phương thức - hàm (method):
    getEmail: function () {
        return this.email;
    },
    getName: function () {
        return this.userName;
    }
}

//Cách xóa key và value trong object
delete user.isMale;

//Thêm key và value vào đối tượng: tên_đối_tượng.phần_tử
user.dateOFbirth = "12/12/1212";
user.address = "Hà Nội";
console.log(user);
console.log("getEmail: ", user.getEmail());

//Cách truy xuất phần tử: 
//Cách 1: tên_đối_tượng.phần_tử
console.log(user.age);
console.log(user.email);

// Cách 2: tên_đối_tương["phần_tử"]
console.log(user["isMale"]);

//Cách lặp qua các thuộc tính của đối tượng
//Cách 1:
for (let key in user) {
    console.log("key:", key);
    console.log("Value: ", user[key]);
}

//Cách 2:

// for (const key in object) {
//     // if (user.hasOwnProperty(key)) {
//     //     console.log(key);
//     // }
// }

//Tạo 1 mảng và lưu trữ 3 đối tượng product
const products = [
    {
        productID: 1,
        productName: "Áo thun nam",
        price: 200000,
        image: "",
        description: "",

    },
    {
        productID: 2,
        productName: "Áo thun nam",
        price: 200000,
        image: "",
        description: "",

    },
    {
        productID: 3,
        productName: "Áo thun nam",
        price: 200000,
        image: "",
        description: "",

    }

]
//Hiển thị dấu /
const path = require("path");
console.log(path.sep);

//Hiển thị tên đường dẫn thư mục dưới dạng chuỗi
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//Hiển thị tên file
const base = path.basename(filePath);
console.log(base);

//Hiển thị đường dẫn tuyệt đối dến file test.txt
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

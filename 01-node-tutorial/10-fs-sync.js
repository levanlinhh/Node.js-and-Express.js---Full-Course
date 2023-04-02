//Đoạn code thứ nhất và đoạn code thứ hai đều có chức năng tương tự nhau là tải mô-đun fs của Node.js và sử dụng hàm readFileSync để đọc nội dung của một tệp tin. Tuy nhiên, đoạn code thứ nhất sử dụng cú pháp "destructuring assignment" để trích xuất phương thức readFileSync từ mô-đun fs và gán nó vào một biến riêng lẻ. Trong khi đó, đoạn code thứ hai đơn giản là gán mô-đun fs vào một biến riêng lẻ.
//const fs = require("fs");

const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");

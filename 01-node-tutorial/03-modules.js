// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
require("./07-mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
// sayHi("Văn Lĩnh");
// sayHi(names.john);
// sayHi(names.peter);
// console.log(data);
//Trong đoạn code trên, sayHi là một hàm được import từ module 05-utils.js và có một tham số đầu vào là một chuỗi. Khi gọi sayHi(names.john) hoặc sayHi(names.peter), ta đang truyền vào hàm sayHi giá trị của thuộc tính john và peter trong biến names.

//Cụ thể, biến names được import từ module 04-names.js và chứa hai thuộc tính là john và peter, mỗi thuộc tính có giá trị là một chuỗi tương ứng với tên của hai người. Vì vậy, khi ta gọi sayHi(names.john), ta đang truyền vào hàm sayHi chuỗi "John" và khi ta gọi sayHi(names.peter), ta đang truyền vào hàm sayHi chuỗi "Peter".

//Khi được gọi với một chuỗi đầu vào, hàm sayHi sẽ log ra một thông báo chào mừng lên console. Do đó, khi gọi sayHi(names.john) và sayHi(names.peter), chúng ta sẽ nhìn thấy trên console hai thông báo chào mừng tương ứng với hai người John và Peter.

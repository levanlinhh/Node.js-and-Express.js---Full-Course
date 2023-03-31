module.exports.items = ["item1", "item2"];
//Đoạn mã trên xuất ra (export) một đối tượng có một thuộc tính items. Đối tượng này sẽ được sử dụng bên ngoài module hiện tại.

//Trong trường hợp này, thuộc tính items là một mảng chứa hai chuỗi "item1" và "item2". Mỗi khi một module khác import module hiện tại, nó sẽ có thể truy cập và sử dụng thuộc tính items bằng cách sử dụng cú pháp require('./file_name').items.

//Ví dụ, nếu trong module khác, ta muốn sử dụng mảng items này, ta có thể import module hiện tại bằng cách sử dụng cú pháp const myModule = require('./file_name'); và truy cập vào thuộc tính items bằng cách sử dụng myModule.items.

const person = {
  name: "Văn Lĩnh",
};
module.exports.singlePerson = person;
//Tuy nhiên, khi sử dụng module.exports.singlePerson = person để xuất đối tượng person, ta đang xuất một đối tượng với một thuộc tính tên là singlePerson chứa đối tượng person.

//Đoạn code trên định nghĩa một object person với một thuộc tính là name.

//Trong đó, name là một chuỗi có giá trị là "Văn Lĩnh". Để truy cập thuộc tính name của đối tượng person, ta có thể sử dụng cú pháp person.name.

const { readFile, writeFile } = require("fs");

console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = result;
    console.log(second);
    //Nhận vào 3 đối số
    // callback nhận vào 2 tham số
    //Đối số thứ ba là một hàm callback để xử lý kết quả. Hàm callback nhận vào hai tham số: err và result. Nếu có lỗi xảy ra trong quá trình đọc tệp tin, err sẽ bị gán giá trị và result sẽ là undefined. Nếu không có lỗi, err sẽ là null hoặc undefined và result chứa nội dung của tệp tin đã đọc
    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(`Done with this task ${result}`);
      }
    );
  });
});
console.log("starting next task");

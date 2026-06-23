const quizData = {};
quizData.session02 = [
  {
    question: "Toán tử nào dùng để so sánh bằng?",
    code: "",
    options: ["=", "==", "!=", "==="],
    answer: 1,
    explanation: "== dùng để so sánh giá trị.",
  },
  {
    question: "Kết quả của 10 % 3 là?",
    code: "",
    options: ["3", "1", "0", "10"],
    answer: 1,
    explanation: "% trả về phần dư.",
  },
  {
    question: "Toán tử nào dùng để lũy thừa?",
    code: "",
    options: ["^", "**", "//", "%"],
    answer: 1,
    explanation: "** dùng để tính lũy thừa.",
  },
  {
    question: "Kết quả của bool(0) là?",
    code: "",
    options: ["True", "False", "0", "Error"],
    answer: 1,
    explanation: "0 được xem là False.",
  },
  {
    question: "Khối elif dùng để làm gì?",
    code: "",
    options: [
      "Tạo vòng lặp",
      "Thêm điều kiện khác",
      "Kết thúc chương trình",
      "Khai báo biến",
    ],
    answer: 1,
    explanation: "elif là viết tắt của else if.",
  },
  {
    question: "Toán tử and trả về True khi nào?",
    code: "",
    options: [
      "Một điều kiện đúng",
      "Tất cả điều kiện đúng",
      "Ít nhất hai điều kiện đúng",
      "Luôn đúng",
    ],
    answer: 1,
    explanation: "and chỉ True khi mọi điều kiện đều True.",
  },
  {
    question: "Toán tử not dùng để?",
    code: "",
    options: ["So sánh", "Đảo ngược giá trị logic", "Cộng", "Trừ"],
    answer: 1,
    explanation: "not True -> False.",
  },
  {
    question: "Kết quả của 5 > 3 or 2 > 4 là?",
    code: "",
    options: ["True", "False", "Error", "None"],
    answer: 0,
    explanation: "True or False = True.",
  },
  {
    question: "Câu lệnh if đúng cú pháp là?",
    code: "",
    options: ["if x > 5:", "if(x>5)", "if x > 5 then", "if x > 5 {}"],
    answer: 0,
    explanation: "Python dùng dấu :",
  },
  {
    question: "Toán tử != có nghĩa là?",
    code: "",
    options: ["Bằng", "Không bằng", "Lớn hơn", "Nhỏ hơn"],
    answer: 1,
    explanation: "!= nghĩa là khác nhau.",
  },
  {
    question: "Đoán kết quả",
    code: `print(5 == 5)`,
    options: ["True", "False", "5", "Error"],
    answer: 0,
    explanation: "5 bằng 5.",
  },
  {
    question: "Đoán kết quả",
    code: `print(10 // 3)`,
    options: ["3", "3.33", "1", "4"],
    answer: 0,
    explanation: "Chia lấy phần nguyên.",
  },
  {
    question: "Đoán kết quả",
    code: `print(2 ** 3)`,
    options: ["6", "8", "9", "Error"],
    answer: 1,
    explanation: "2 mũ 3 = 8.",
  },
  {
    question: "Đoán kết quả",
    code: `
x = 10
if x > 5:
    print("Hello")
`,
    options: ["Hello", "10", "Error", "Không in gì"],
    answer: 0,
    explanation: "Điều kiện đúng.",
  },
  {
    question: "Đoán kết quả",
    code: `print(not False)`,
    options: ["True", "False", "None", "Error"],
    answer: 0,
    explanation: "not False = True.",
  },
];

quizData.session03 = [
  {
    question: "Vòng lặp nào dùng khi chưa biết trước số lần lặp?",
    code: "",
    options: ["for", "while", "if", "elif"],
    answer: 1,
    explanation: "while phù hợp khi chưa biết trước số lần lặp.",
  },
  {
    question: "Hàm range(5) tạo ra?",
    code: "",
    options: ["1→5", "0→4", "0→5", "1→4"],
    answer: 1,
    explanation: "range(5) = 0,1,2,3,4",
  },
  {
    question: "break dùng để?",
    code: "",
    options: [
      "Bỏ qua vòng lặp",
      "Thoát khỏi vòng lặp",
      "Tiếp tục vòng lặp",
      "Tạm dừng",
    ],
    answer: 1,
    explanation: "break kết thúc vòng lặp.",
  },
  {
    question: "continue dùng để?",
    code: "",
    options: [
      "Thoát vòng lặp",
      "Khởi động lại chương trình",
      "Bỏ qua lần lặp hiện tại",
      "Dừng chương trình",
    ],
    answer: 2,
    explanation: "continue bỏ qua vòng lặp hiện tại.",
  },
  {
    question: "Biến đếm thường được tăng bằng?",
    code: "",
    options: ["i = i + 1", "i = i - 1", "i = 0", "i = None"],
    answer: 0,
    explanation: "Tăng biến đếm thêm 1.",
  },
  {
    question: "Đoán kết quả",
    code: `
for i in range(3):
    print(i)
`,
    options: ["0 1 2", "1 2 3", "0 1 2 3", "3"],
    answer: 0,
    explanation: "range(3) chạy từ 0 đến 2.",
  },
  {
    question: "Đoán kết quả",
    code: `
i=1
while i<=3:
    print(i)
    i+=1
`,
    options: ["1 2 3", "1 2", "2 3", "Vô hạn"],
    answer: 0,
    explanation: "In từ 1 tới 3.",
  },
  {
    question: "Đoán kết quả",
    code: `
for i in range(5):
    if i==3:
        break
    print(i)
`,
    options: ["0 1 2", "0 1 2 3", "3", "4"],
    answer: 0,
    explanation: "Gặp 3 thì dừng.",
  },
  {
    question: "Đoán kết quả",
    code: `
for i in range(3):
    print("*")
`,
    options: ["*", "**", "***", "In 3 dòng *"],
    answer: 3,
    explanation: "Print 3 lần.",
  },
];

quizData.session05 = [
  {
    question: "range(1,10,2) tạo ra?",
    code: "",
    options: ["1 3 5 7 9", "1 2 3 4 5", "0 2 4 6 8", "2 4 6 8"],
    answer: 0,
    explanation: "Bước nhảy là 2.",
  },
  {
    question: "range(10,0,-2) tạo ra?",
    code: "",
    options: ["10 8 6 4 2", "10 9 8", "8 6 4 2", "10 5 0"],
    answer: 0,
    explanation: "Đếm lùi 2 đơn vị.",
  },
  {
    question: "Vòng lặp lồng nhau là gì?",
    code: "",
    options: [
      "for trong for",
      "if trong if",
      "while trong if",
      "Tất cả đều sai",
    ],
    answer: 0,
    explanation: "Nested loop.",
  },
  {
    question: "continue sẽ làm gì?",
    code: "",
    options: [
      "Thoát vòng lặp",
      "Bỏ qua lần lặp hiện tại",
      "Kết thúc chương trình",
      "Reset vòng lặp",
    ],
    answer: 1,
    explanation: "continue bỏ qua phần còn lại của lần lặp hiện tại.",
  },
  {
    question: "break và continue khác nhau ở điểm nào?",
    code: "",
    options: [
      "Giống nhau",
      "break thoát vòng lặp, continue bỏ qua lần lặp",
      "continue thoát vòng lặp",
      "break bỏ qua lần lặp",
    ],
    answer: 1,
    explanation: "break dừng hẳn, continue chỉ bỏ qua lần hiện tại.",
  },
  {
    question: "range(2,11,3) tạo ra?",
    code: "",
    options: ["2 5 8", "2 5 8 11", "3 6 9", "2 3 4"],
    answer: 0,
    explanation: "11 không được lấy.",
  },
  {
    question: "Trong vòng lặp lồng nhau, vòng lặp nào chạy nhiều lần nhất?",
    code: "",
    options: ["Vòng ngoài", "Vòng trong", "Cả hai như nhau", "Không xác định"],
    answer: 1,
    explanation: "Mỗi lần vòng ngoài chạy, vòng trong chạy lại từ đầu.",
  },
  {
    question: "Đoán kết quả",
    code: `
    for i in range(1,6):
        print(i)
    `,
    options: ["1 2 3 4 5", "1 2 3 4 5 6", "0 1 2 3 4 5", "0 1 2 3 4"],
    answer: 0,
    explanation: "range(1,6) chạy tới 5.",
  },
  {
    question: "Đoán kết quả",
    code: `
    for i in range(5):
        if i == 2:
            continue
        print(i)
    `,
    options: ["0 1 2 3 4", "0 1 3 4", "2 3 4", "1 3 4"],
    answer: 1,
    explanation: "Bỏ qua số 2.",
  },
  {
    question: "Đoán kết quả",
    code: `
    for i in range(3):
        for j in range(2):
            print("*")
    `,
    options: ["2 dấu *", "3 dấu *", "5 dấu *", "6 dấu *"],
    answer: 3,
    explanation: "3 × 2 = 6 lần.",
  },
  {
    question: "Đoán kết quả",
    code: `
    for i in range(4,0,-1):
        print(i)
    `,
    options: ["4 3 2 1", "1 2 3 4", "4 3 2", "0 1 2 3"],
    answer: 0,
    explanation: "Đếm lùi từ 4.",
  },
  {
    question: "Đoán kết quả",
    code: `
    for i in range(3):
        print(i*i)
    `,
    options: ["0 1 4", "1 4 9", "0 1 2", "0 2 4"],
    answer: 0,
    explanation: "0², 1², 2².",
  },
  {
    question: "Đoán kết quả",
    code: `
    total = 0
    for i in range(1,4):
        total += i
    print(total)
    `,
    options: ["3", "6", "10", "4"],
    answer: 1,
    explanation: "1+2+3 = 6.",
  },
  {
    question: "Đoán kết quả",
    code: `
    for i in range(2):
        print("Python")
    `,
    options: ["1 lần", "2 lần", "3 lần", "Không in"],
    answer: 1,
    explanation: "range(2) chạy 2 lần.",
  },
];
quizData.session07 = [
  {
    question: "String trong Python là gì?",
    code: "",
    options: ["Số nguyên", "Chuỗi ký tự", "Danh sách", "Boolean"],
    answer: 1,
    explanation: "String là chuỗi ký tự.",
  },
  {
    question: "Ký tự đầu tiên của chuỗi có chỉ số bao nhiêu?",
    code: "",
    options: ["0", "1", "-1", "Không có"],
    answer: 0,
    explanation: "Python đánh chỉ số từ 0.",
  },
  {
    question: "Ký tự cuối cùng có thể truy cập bằng?",
    code: "",
    options: ["s[0]", "s[-1]", "s[1]", "s[len]"],
    answer: 1,
    explanation: "-1 là phần tử cuối.",
  },
  {
    question: "Hàm len() dùng để?",
    code: "",
    options: ["Đếm số từ", "Đếm số ký tự", "Xóa chuỗi", "Nối chuỗi"],
    answer: 1,
    explanation: "len() trả về độ dài.",
  },
  {
    question: "upper() dùng để?",
    code: "",
    options: ["Chữ thường", "Chữ hoa", "Xóa khoảng trắng", "Đảo chuỗi"],
    answer: 1,
    explanation: "upper() chuyển thành chữ hoa.",
  },
  {
    question: "lower() dùng để?",
    code: "",
    options: ["Chữ thường", "Chữ hoa", "Đảo ngược", "Xóa"],
    answer: 0,
    explanation: "lower() chuyển thành chữ thường.",
  },
  {
    question: "replace() dùng để?",
    code: "",
    options: ["Thay thế chuỗi", "Xóa chuỗi", "Nối chuỗi", "Sắp xếp"],
    answer: 0,
    explanation: "replace thay thế nội dung.",
  },
  {
    question: "strip() dùng để?",
    code: "",
    options: [
      "Xóa khoảng trắng đầu cuối",
      "Xóa toàn bộ khoảng trắng",
      "Tách chuỗi",
      "Ghép chuỗi",
    ],
    answer: 0,
    explanation: "strip chỉ xóa đầu và cuối.",
  },
  {
    question: "split() trả về kiểu dữ liệu gì?",
    code: "",
    options: ["String", "Tuple", "List", "Int"],
    answer: 2,
    explanation: "split trả về danh sách.",
  },
  {
    question: "Toán tử kiểm tra chuỗi con là?",
    code: "",
    options: ["contains", "has", "in", "find"],
    answer: 2,
    explanation: "'Py' in 'Python'.",
  },
  {
    question: "Đoán kết quả",
    code: `
s = "Python"
print(s[0])
`,
    options: ["P", "y", "n", "0"],
    answer: 0,
    explanation: "Ký tự đầu tiên.",
  },
  {
    question: "Đoán kết quả",
    code: `
s = "Python"
print(s[-1])
`,
    options: ["P", "o", "n", "y"],
    answer: 2,
    explanation: "Ký tự cuối cùng.",
  },
  {
    question: "Đoán kết quả",
    code: `
print(len("Python"))
`,
    options: ["5", "6", "7", "8"],
    answer: 1,
    explanation: "Python có 6 ký tự.",
  },
  {
    question: "Đoán kết quả",
    code: `
print("python".upper())
`,
    options: ["python", "Python", "PYTHON", "Error"],
    answer: 2,
    explanation: "upper chuyển sang chữ hoa.",
  },
  {
    question: "Đoán kết quả",
    code: `
print("Hello".replace("H","Y"))
`,
    options: ["Hello", "Yello", "YHello", "Error"],
    answer: 1,
    explanation: "Thay H bằng Y.",
  },
];
quizData.session09 = [
  {
    question: "List trong Python dùng để?",
    code: "",
    options: [
      "Lưu nhiều giá trị",
      "Lưu duy nhất 1 giá trị",
      "Lưu hàm",
      "Lưu vòng lặp",
    ],
    answer: 0,
    explanation: "List dùng để lưu nhiều phần tử.",
  },
  {
    question: "List được khai báo bằng cặp dấu nào?",
    code: "",
    options: ["()", "{}", "[]", "<>"],
    answer: 2,
    explanation: "List sử dụng dấu ngoặc vuông.",
  },
  {
    question: "append() dùng để?",
    code: "",
    options: ["Xóa phần tử", "Thêm cuối danh sách", "Sắp xếp", "Đếm phần tử"],
    answer: 1,
    explanation: "append() thêm phần tử vào cuối.",
  },
  {
    question: "len(list) dùng để?",
    code: "",
    options: ["Tính tổng", "Đếm phần tử", "Sắp xếp", "Tìm kiếm"],
    answer: 1,
    explanation: "len() trả về số phần tử.",
  },
  {
    question: "remove(x) dùng để?",
    code: "",
    options: [
      "Xóa theo giá trị",
      "Xóa theo vị trí",
      "Thêm phần tử",
      "Đảo ngược list",
    ],
    answer: 0,
    explanation: "remove() xóa phần tử có giá trị x.",
  },
  {
    question: "pop() thường dùng để?",
    code: "",
    options: ["Xóa phần tử cuối", "Thêm phần tử", "Sắp xếp", "Đếm phần tử"],
    answer: 0,
    explanation: "pop() mặc định xóa phần tử cuối.",
  },
  {
    question: "sort() dùng để?",
    code: "",
    options: ["Đảo ngược", "Sắp xếp", "Xóa", "Ghép"],
    answer: 1,
    explanation: "sort() sắp xếp tăng dần.",
  },
  {
    question: "reverse() dùng để?",
    code: "",
    options: ["Đảo ngược thứ tự", "Sắp xếp", "Xóa", "Ghép"],
    answer: 0,
    explanation: "reverse() đảo thứ tự phần tử.",
  },
  {
    question: "index(x) dùng để?",
    code: "",
    options: ["Tìm vị trí phần tử", "Xóa phần tử", "Đếm phần tử", "Sắp xếp"],
    answer: 0,
    explanation: "index() trả về vị trí đầu tiên.",
  },
  {
    question: "List có thể chứa?",
    code: "",
    options: ["Chỉ số", "Chỉ chuỗi", "Nhiều kiểu dữ liệu", "Chỉ boolean"],
    answer: 2,
    explanation: "List có thể chứa nhiều kiểu dữ liệu.",
  },
  {
    question: "Đoán kết quả",
    code: `
a = [1,2,3]
print(a[1])
`,
    options: ["1", "2", "3", "Error"],
    answer: 1,
    explanation: "Chỉ số bắt đầu từ 0.",
  },
  {
    question: "Đoán kết quả",
    code: `
a = [1,2]
a.append(3)
print(a)
`,
    options: ["[1,2]", "[1,2,3]", "[3]", "Error"],
    answer: 1,
    explanation: "append thêm vào cuối.",
  },
  {
    question: "Đoán kết quả",
    code: `
a = [5,3,1]
a.sort()
print(a)
`,
    options: ["[5,3,1]", "[1,3,5]", "[5,1,3]", "Error"],
    answer: 1,
    explanation: "sort sắp xếp tăng dần.",
  },
  {
    question: "Đoán kết quả",
    code: `
a = [1,2,3]
a.pop()
print(a)
`,
    options: ["[1,2]", "[2,3]", "[1,2,3]", "[3]"],
    answer: 0,
    explanation: "pop xóa phần tử cuối.",
  },
  {
    question: "Đoán kết quả",
    code: `
a = [10,20,30]
print(len(a))
`,
    options: ["2", "3", "10", "30"],
    answer: 1,
    explanation: "List có 3 phần tử.",
  },
];
quizData.session11 = [
  {
    question: "Tuple được khai báo bằng?",
    code: "",
    options: ["[]", "{}", "()", "<>"],
    answer: 2,
    explanation: "Tuple dùng dấu ngoặc đơn.",
  },
  {
    question: "Đặc điểm nổi bật của Tuple là?",
    code: "",
    options: ["Có thể sửa", "Không thể sửa", "Có thể sort", "Có thể append"],
    answer: 1,
    explanation: "Tuple là immutable.",
  },
  {
    question: "Dictionary lưu dữ liệu theo?",
    code: "",
    options: ["index", "key-value", "tuple", "vòng lặp"],
    answer: 1,
    explanation: "Dictionary hoạt động theo key-value.",
  },
  {
    question: "Dictionary được khai báo bằng?",
    code: "",
    options: ["()", "[]", "{}", "<>"],
    answer: 2,
    explanation: "Dictionary dùng dấu ngoặc nhọn.",
  },
  {
    question: "keys() trả về?",
    code: "",
    options: [
      "Danh sách key",
      "Danh sách value",
      "Danh sách tuple",
      "Số lượng phần tử",
    ],
    answer: 0,
    explanation: "keys() lấy các key.",
  },
  {
    question: "values() trả về?",
    code: "",
    options: ["Danh sách key", "Danh sách value", "Tuple", "Index"],
    answer: 1,
    explanation: "values() lấy các value.",
  },
  {
    question: "items() trả về?",
    code: "",
    options: ["Các cặp key-value", "Chỉ key", "Chỉ value", "Số lượng phần tử"],
    answer: 0,
    explanation: "items() trả về từng cặp key-value.",
  },
  {
    question: "get() dùng để?",
    code: "",
    options: ["Lấy giá trị theo key", "Xóa key", "Thêm key", "Đếm key"],
    answer: 0,
    explanation: "get() lấy value của key.",
  },
  {
    question: "count() là phương thức của?",
    code: "",
    options: ["Tuple", "Dictionary", "Set", "Function"],
    answer: 0,
    explanation: "Tuple có count().",
  },
  {
    question: "index() trong tuple dùng để?",
    code: "",
    options: ["Tìm vị trí phần tử", "Xóa phần tử", "Sắp xếp", "Thêm phần tử"],
    answer: 0,
    explanation: "index() trả về vị trí xuất hiện đầu tiên.",
  },
  {
    question: "Đoán kết quả",
    code: `
t = (1,2,3)
print(t[0])
`,
    options: ["1", "2", "3", "Error"],
    answer: 0,
    explanation: "Phần tử đầu tiên.",
  },
  {
    question: "Đoán kết quả",
    code: `
student = {
    "name":"An",
    "age":20
}
print(student["name"])
`,
    options: ["An", "20", "name", "Error"],
    answer: 0,
    explanation: "Lấy value của key name.",
  },
  {
    question: "Đoán kết quả",
    code: `
student = {
    "age":20
}
print(student.get("age"))
`,
    options: ["age", "20", "None", "Error"],
    answer: 1,
    explanation: "get trả về value.",
  },
  {
    question: "Đoán kết quả",
    code: `
t = (1,1,2,3)
print(t.count(1))
`,
    options: ["1", "2", "3", "4"],
    answer: 1,
    explanation: "Số 1 xuất hiện 2 lần.",
  },
  {
    question: "Đoán kết quả",
    code: `
t = (10,20,30)
print(t.index(20))
`,
    options: ["0", "1", "2", "20"],
    answer: 1,
    explanation: "20 ở vị trí 1.",
  },
];
quizData.session14 = [
  {
    question: "Từ khóa dùng để khai báo hàm trong Python là?",
    code: "",
    options: ["function", "func", "def", "create"],
    answer: 2,
    explanation: "Python dùng từ khóa def.",
  },
  {
    question: "Mục đích của hàm là?",
    code: "",
    options: [
      "Lặp lại code",
      "Tổ chức và tái sử dụng code",
      "Khai báo biến",
      "Tăng tốc máy tính",
    ],
    answer: 1,
    explanation: "Hàm giúp tái sử dụng code.",
  },
  {
    question: "Tham số (parameter) là gì?",
    code: "",
    options: [
      "Giá trị truyền vào khi gọi hàm",
      "Biến được khai báo trong định nghĩa hàm",
      "Kiểu dữ liệu",
      "Tên hàm",
    ],
    answer: 1,
    explanation: "Parameter xuất hiện trong phần định nghĩa hàm.",
  },
  {
    question: "Argument là gì?",
    code: "",
    options: [
      "Giá trị truyền vào khi gọi hàm",
      "Tên hàm",
      "Biến toàn cục",
      "Giá trị trả về",
    ],
    answer: 0,
    explanation: "Argument là dữ liệu truyền vào lúc gọi hàm.",
  },
  {
    question: "return dùng để?",
    code: "",
    options: [
      "In kết quả",
      "Kết thúc vòng lặp",
      "Trả về giá trị từ hàm",
      "Tạo biến",
    ],
    answer: 2,
    explanation: "return trả về kết quả cho nơi gọi.",
  },
  {
    question: "Một hàm có thể có bao nhiêu tham số?",
    code: "",
    options: ["1", "2", "3", "Không giới hạn"],
    answer: 3,
    explanation: "Có thể có nhiều tham số.",
  },
  {
    question: "Biến được khai báo bên trong hàm gọi là?",
    code: "",
    options: [
      "Global variable",
      "Local variable",
      "Static variable",
      "Constant",
    ],
    answer: 1,
    explanation: "Biến cục bộ chỉ dùng trong hàm.",
  },
  {
    question: "Biến global có thể được sử dụng ở đâu?",
    code: "",
    options: [
      "Chỉ trong hàm",
      "Chỉ ngoài hàm",
      "Toàn bộ chương trình",
      "Không dùng được",
    ],
    answer: 2,
    explanation: "Biến toàn cục có phạm vi rộng.",
  },
  {
    question: "Nếu hàm không có return thì giá trị trả về mặc định là?",
    code: "",
    options: ["0", "False", "None", "Error"],
    answer: 2,
    explanation: "Python mặc định trả về None.",
  },
  {
    question: "Một hàm có thể gọi hàm khác không?",
    code: "",
    options: ["Không", "Có", "Chỉ trong vòng lặp", "Chỉ trong class"],
    answer: 1,
    explanation: "Hàm hoàn toàn có thể gọi hàm khác.",
  },
  {
    question: "Đoán kết quả",
    code: `
def hello():
    print("Hello")

hello()
`,
    options: ["Hello", "hello", "Error", "Không in gì"],
    answer: 0,
    explanation: "Hàm được gọi nên in Hello.",
  },
  {
    question: "Đoán kết quả",
    code: `
def add(a,b):
    return a+b

print(add(2,3))
`,
    options: ["2", "3", "5", "23"],
    answer: 2,
    explanation: "2 + 3 = 5.",
  },
  {
    question: "Đoán kết quả",
    code: `
def square(x):
    return x*x

print(square(4))
`,
    options: ["4", "8", "16", "20"],
    answer: 2,
    explanation: "4² = 16.",
  },
  {
    question: "Đoán kết quả",
    code: `
def show():
    print("Python")

show()
show()
`,
    options: ["Python", "Python Python", "In 2 lần Python", "Error"],
    answer: 2,
    explanation: "Hàm được gọi 2 lần.",
  },
  {
    question: "Đoán kết quả",
    code: `
def test():
    x = 10

test()
print(x)
`,
    options: ["10", "None", "Error", "0"],
    answer: 2,
    explanation: "x là biến local nên không tồn tại bên ngoài.",
  },
];
quizData.session16 = [
  {
    question: "Tham số mặc định (default parameter) là gì?",
    code: "",
    options: [
      "Tham số không có giá trị",
      "Tham số có giá trị mặc định",
      "Biến global",
      "Hàm lambda",
    ],
    answer: 1,
    explanation: "Có thể bỏ qua khi gọi hàm.",
  },
  {
    question: "Keyword argument là gì?",
    code: "",
    options: [
      "Truyền giá trị theo tên tham số",
      "Truyền theo vị trí",
      "Biến toàn cục",
      "Vòng lặp",
    ],
    answer: 0,
    explanation: "Ví dụ: greet(name='An').",
  },
  {
    question: "*args dùng để?",
    code: "",
    options: [
      "Nhận nhiều tham số vị trí",
      "Nhận dictionary",
      "Khai báo class",
      "Tạo vòng lặp",
    ],
    answer: 0,
    explanation: "*args gom nhiều đối số thành tuple.",
  },
  {
    question: "**kwargs dùng để?",
    code: "",
    options: [
      "Nhận nhiều tham số dạng key=value",
      "Nhận list",
      "Nhận tuple",
      "Nhận int",
    ],
    answer: 0,
    explanation: "**kwargs tạo dictionary.",
  },
  {
    question: "Lambda là gì?",
    code: "",
    options: ["Hàm ẩn danh", "Vòng lặp", "Dictionary", "Tuple"],
    answer: 0,
    explanation: "Lambda là hàm ngắn gọn không cần def.",
  },
  {
    question: "Lambda thường dùng khi?",
    code: "",
    options: [
      "Hàm đơn giản, ngắn",
      "Chương trình lớn",
      "Làm database",
      "Tạo file",
    ],
    answer: 0,
    explanation: "Lambda phù hợp với các phép xử lý ngắn.",
  },
  {
    question: "Phạm vi của biến local là?",
    code: "",
    options: [
      "Toàn chương trình",
      "Chỉ trong hàm",
      "Trong file",
      "Trong class",
    ],
    answer: 1,
    explanation: "Local chỉ tồn tại trong hàm.",
  },
  {
    question: "Phạm vi của biến global là?",
    code: "",
    options: ["Trong hàm", "Trong vòng lặp", "Toàn chương trình", "Trong list"],
    answer: 2,
    explanation: "Global dùng được ở nhiều nơi.",
  },
  {
    question: "Hàm lambda có dùng return không?",
    code: "",
    options: ["Có", "Không", "Đôi khi", "Bắt buộc"],
    answer: 1,
    explanation: "Lambda tự trả về biểu thức.",
  },
  {
    question: "Cú pháp lambda đúng là?",
    code: "",
    options: [
      "lambda x => x*x",
      "lambda(x):x*x",
      "lambda x: x*x",
      "lambda {x:x*x}",
    ],
    answer: 2,
    explanation: "Đây là cú pháp chuẩn Python.",
  },
  {
    question: "Đoán kết quả",
    code: `
def greet(name="Python"):
    print(name)

greet()
`,
    options: ["Python", "name", "None", "Error"],
    answer: 0,
    explanation: "Dùng giá trị mặc định.",
  },
  {
    question: "Đoán kết quả",
    code: `
def greet(name):
    print(name)

greet(name="An")
`,
    options: ["name", "An", "None", "Error"],
    answer: 1,
    explanation: "Truyền theo keyword argument.",
  },
  {
    question: "Đoán kết quả",
    code: `
square = lambda x: x*x
print(square(5))
`,
    options: ["5", "10", "25", "50"],
    answer: 2,
    explanation: "5² = 25.",
  },
  {
    question: "Đoán kết quả",
    code: `
x = 100

def test():
    print(x)

test()
`,
    options: ["100", "0", "None", "Error"],
    answer: 0,
    explanation: "Hàm đọc được biến global.",
  },
  {
    question: "Đoán kết quả",
    code: `
def add(*args):
    print(len(args))

add(1,2,3,4)
`,
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "*args nhận 4 đối số.",
  },
];
quizData.session20 = [  
  {
    question: "Clean Code là gì?",
    code: "",
    options: [
      "Mã khó đọc",
      "Mã dễ đọc và dễ bảo trì",
      "Mã chạy nhanh nhất",
      "Mã ngắn nhất",
    ],
    answer: 1,
    explanation: "Clean code ưu tiên tính dễ đọc và dễ bảo trì.",
  },
  {
    question: "Tên biến tốt nên như thế nào?",
    code: "",
    options: [
      "Ngắn nhất có thể",
      "Không cần ý nghĩa",
      "Thể hiện rõ mục đích",
      "Chỉ dùng 1 ký tự",
    ],
    answer: 2,
    explanation: "Tên biến nên mô tả ý nghĩa của dữ liệu.",
  },
  {
    question: "Hàm trong Clean Code nên?",
    code: "",
    options: [
      "Càng dài càng tốt",
      "Chỉ thực hiện một nhiệm vụ",
      "Chứa nhiều chức năng",
      "Không cần return",
    ],
    answer: 1,
    explanation: "Một hàm nên chỉ làm một việc.",
  },
  {
    question: "Comment nên được sử dụng khi nào?",
    code: "",
    options: [
      "Cho mọi dòng code",
      "Khi code khó giải thích",
      "Không bao giờ",
      "Chỉ cho biến",
    ],
    answer: 1,
    explanation: "Code tốt thường tự giải thích, comment dùng khi cần.",
  },
  {
    question: "Debug là gì?",
    code: "",
    options: [
      "Xóa chương trình",
      "Tìm và sửa lỗi",
      "Tăng tốc chương trình",
      "Đổi tên biến",
    ],
    answer: 1,
    explanation: "Debug là quá trình tìm và sửa lỗi.",
  },
  {
    question: "Syntax Error là?",
    code: "",
    options: ["Lỗi cú pháp", "Lỗi logic", "Lỗi nhập liệu", "Lỗi hệ điều hành"],
    answer: 0,
    explanation: "Syntax Error xuất hiện khi viết sai cú pháp.",
  },
  {
    question: "Logic Error là?",
    code: "",
    options: [
      "Chương trình chạy đúng kết quả",
      "Chương trình không chạy",
      "Chạy được nhưng kết quả sai",
      "Lỗi cú pháp",
    ],
    answer: 2,
    explanation: "Logic Error khó phát hiện hơn Syntax Error.",
  },
  {
    question: "print() thường được dùng để?",
    code: "",
    options: ["Debug chương trình", "Xóa biến", "Tạo hàm", "Thoát vòng lặp"],
    answer: 0,
    explanation: "print() thường được dùng để kiểm tra giá trị.",
  },
  {
    question: "Code lặp lại nhiều lần nên?",
    code: "",
    options: ["Giữ nguyên", "Đưa vào hàm", "Viết thêm", "Xóa hết"],
    answer: 1,
    explanation: "Tái sử dụng bằng hàm giúp code sạch hơn.",
  },
  {
    question: "Magic Number là?",
    code: "",
    options: [
      "Biến đặc biệt",
      "Số xuất hiện trực tiếp không rõ ý nghĩa",
      "Số ngẫu nhiên",
      "Hằng số Pi",
    ],
    answer: 1,
    explanation: "Nên thay Magic Number bằng hằng số có tên rõ ràng.",
  },
];
quizData.session23 = [
  {
    question: "Module trong Python là gì?",
    code: "",
    options: [
      "Một file chứa code Python",
      "Một biến",
      "Một vòng lặp",
      "Một list",
    ],
    answer: 0,
    explanation: "Mỗi file .py đều là một module.",
  },
  {
    question: "Từ khóa dùng để sử dụng module?",
    code: "",
    options: ["include", "using", "import", "package"],
    answer: 2,
    explanation: "Python dùng import.",
  },
  {
    question: "math là?",
    code: "",
    options: ["Package ngoài", "Module có sẵn", "Hàm", "Class"],
    answer: 1,
    explanation: "math là module chuẩn.",
  },
  {
    question: "Package là gì?",
    code: "",
    options: ["Tập hợp nhiều module", "Một biến", "Một hàm", "Một tuple"],
    answer: 0,
    explanation: "Package chứa nhiều module.",
  },
  {
    question: "Lệnh import math giúp?",
    code: "",
    options: [
      "Tạo module mới",
      "Sử dụng module math",
      "Xóa module",
      "Đổi tên module",
    ],
    answer: 1,
    explanation: "Import để sử dụng module.",
  },
  {
    question: "sqrt() thuộc module nào?",
    code: "",
    options: ["random", "math", "os", "time"],
    answer: 1,
    explanation: "sqrt() nằm trong math.",
  },
  {
    question: "random.randint() dùng để?",
    code: "",
    options: ["Tạo số ngẫu nhiên", "Tính căn bậc hai", "Làm tròn", "Tính sin"],
    answer: 0,
    explanation: "randint sinh số nguyên ngẫu nhiên.",
  },
  {
    question: "Alias được tạo bằng từ khóa?",
    code: "",
    options: ["as", "alias", "rename", "new"],
    answer: 0,
    explanation: "Ví dụ: import math as m.",
  },
  {
    question: "from math import sqrt nghĩa là?",
    code: "",
    options: ["Import toàn bộ", "Chỉ import sqrt", "Xóa sqrt", "Tạo sqrt"],
    answer: 1,
    explanation: "Chỉ lấy hàm sqrt.",
  },
  {
    question: "Package thường được tổ chức bằng?",
    code: "",
    options: ["Folder", "List", "Tuple", "Dictionary"],
    answer: 0,
    explanation: "Package là thư mục chứa nhiều module.",
  },
];
quizData.session24 = [
  {
    question: "OOP là viết tắt của?",
    code: "",
    options: [
      "Object Oriented Programming",
      "Open Object Program",
      "Order Of Python",
      "Only Object Process",
    ],
    answer: 0,
    explanation: "Lập trình hướng đối tượng.",
  },
  {
    question: "Đối tượng trong OOP được tạo từ?",
    code: "",
    options: ["Function", "Class", "Loop", "List"],
    answer: 1,
    explanation: "Object là instance của class.",
  },
  {
    question: "Class là?",
    code: "",
    options: [
      "Bản thiết kế tạo đối tượng",
      "Một biến",
      "Một vòng lặp",
      "Một list",
    ],
    answer: 0,
    explanation: "Class giống bản thiết kế.",
  },
  {
    question: "Thuộc tính của đối tượng gọi là?",
    code: "",
    options: ["Attribute", "Loop", "Package", "Index"],
    answer: 0,
    explanation: "Attribute là dữ liệu của object.",
  },
  {
    question: "Hàm trong class gọi là?",
    code: "",
    options: ["Function", "Method", "Tuple", "Package"],
    answer: 1,
    explanation: "Method là hàm thuộc class.",
  },
  {
    question: "self đại diện cho?",
    code: "",
    options: ["Class", "Object hiện tại", "Biến toàn cục", "Package"],
    answer: 1,
    explanation: "self tham chiếu đến đối tượng hiện tại.",
  },
  {
    question: "Tính đóng gói (Encapsulation) giúp?",
    code: "",
    options: [
      "Ẩn dữ liệu và kiểm soát truy cập",
      "Tăng tốc CPU",
      "Xóa class",
      "Xóa object",
    ],
    answer: 0,
    explanation: "Đóng gói giúp bảo vệ dữ liệu.",
  },
  {
    question: "Tên thuộc tính bắt đầu bằng __ biểu thị?",
    code: "",
    options: ["Private", "Public", "Global", "Static"],
    answer: 0,
    explanation: "__name biểu thị thuộc tính riêng tư.",
  },
  {
    question: "Một class có thể tạo nhiều object không?",
    code: "",
    options: ["Có", "Không", "Chỉ 2 object", "Chỉ 1 object"],
    answer: 0,
    explanation: "Class có thể tạo nhiều object.",
  },
  {
    question: "Constructor trong Python là?",
    code: "",
    options: ["__init__()", "main()", "create()", "start()"],
    answer: 0,
    explanation: "__init__ được gọi khi tạo object.",
  },
];
quizData.session26 = [
  {
    question: "Có bao nhiêu tính chất chính của OOP?",
    code: "",
    options: ["2", "3", "4", "5"],
    answer: 2,
    explanation: "OOP có 4 tính chất.",
  },
  {
    question: "Encapsulation nghĩa là?",
    code: "",
    options: ["Đóng gói", "Kế thừa", "Đa hình", "Trừu tượng"],
    answer: 0,
    explanation: "Encapsulation là đóng gói.",
  },
  {
    question: "Inheritance nghĩa là?",
    code: "",
    options: ["Kế thừa", "Đa hình", "Trừu tượng", "Đóng gói"],
    answer: 0,
    explanation: "Inheritance cho phép lớp con kế thừa lớp cha.",
  },
  {
    question: "Polymorphism nghĩa là?",
    code: "",
    options: ["Đa hình", "Kế thừa", "Đóng gói", "Trừu tượng"],
    answer: 0,
    explanation: "Một hành vi có nhiều cách thực hiện.",
  },
  {
    question: "Abstraction nghĩa là?",
    code: "",
    options: ["Trừu tượng", "Đa hình", "Kế thừa", "Đóng gói"],
    answer: 0,
    explanation: "Ẩn chi tiết phức tạp.",
  },
  {
    question: "Lớp con được gọi là?",
    code: "",
    options: ["Child class", "Parent class", "Main class", "Root class"],
    answer: 0,
    explanation: "Child class kế thừa parent class.",
  },
  {
    question: "Lớp cha được gọi là?",
    code: "",
    options: ["Parent class", "Child class", "Tuple", "Method"],
    answer: 0,
    explanation: "Parent class còn gọi là base class.",
  },
  {
    question: "super() dùng để?",
    code: "",
    options: ["Gọi lớp cha", "Xóa object", "Tạo list", "Tạo module"],
    answer: 0,
    explanation: "super() truy cập lớp cha.",
  },
  {
    question: "Đa hình giúp?",
    code: "",
    options: ["Tăng tính linh hoạt", "Giảm RAM", "Tăng CPU", "Xóa class"],
    answer: 0,
    explanation: "Polymorphism giúp code linh hoạt hơn.",
  },
  {
    question: "Tính trừu tượng giúp?",
    code: "",
    options: [
      "Ẩn chi tiết không cần thiết",
      "Tăng tốc độ chạy",
      "Giảm bộ nhớ",
      "Xóa method",
    ],
    answer: 0,
    explanation: "Abstraction tập trung vào những gì quan trọng.",
  },
];

const sessionSelect = document.getElementById("session-select");
const questionText = document.getElementById("question-text");
const codeBlock = document.getElementById("code-block");
const optionsContainer = document.getElementById("options-container");

const nextBtn = document.getElementById("next-btn");

const explanationBox = document.getElementById("explanation-box");

const explanationText = document.getElementById("explanation-text");

const progressBar = document.getElementById("progress-bar");

const questionCounter = document.getElementById("question-counter");

const sessionTag = document.getElementById("session-tag");

const resultScreen = document.getElementById("result-screen");

const scoreText = document.getElementById("score");

const totalScoreText = document.getElementById("total-score");

const restartBtn = document.getElementById("restart-btn");

const scoreFeedback = document.getElementById("score-feedback");

let currentSession = [];
let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function loadSession(sessionName) {
  currentSession = structuredClone(quizData[sessionName]);

  shuffleArray(currentSession);

  currentQuestionIndex = 0;
  score = 0;

  resultScreen.classList.add("hidden");

  sessionTag.textContent = sessionName.toUpperCase();

  loadQuestion();
}

function loadQuestion() {
  explanationBox.classList.add("hidden");
  nextBtn.classList.add("hidden");

  const question = currentSession[currentQuestionIndex];

  questionText.textContent = question.question;

  if (question.code && question.code.trim() !== "") {
    codeBlock.classList.remove("hidden");

    codeBlock.querySelector("code").textContent = question.code;
  } else {
    codeBlock.classList.add("hidden");
  }

  optionsContainer.innerHTML = "";

  let options = question.options.map((option, index) => ({
    text: option,
    originalIndex: index,
  }));

  shuffleArray(options);

  options.forEach((option) => {
    const button = document.createElement("button");

    button.classList.add("option-btn");

    button.textContent = option.text;

    button.addEventListener("click", () => {
      checkAnswer(option.originalIndex);
    });

    optionsContainer.appendChild(button);
  });

  updateProgress();
}

function checkAnswer(selectedIndex) {
  const question = currentSession[currentQuestionIndex];

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((button) => {
    button.disabled = true;
  });

  const clickedButton = [...buttons].find(
    (btn) => btn.textContent === question.options[selectedIndex],
  );

  if (selectedIndex === question.answer) {
    if (clickedButton) {
      clickedButton.classList.add("correct");
    }

    score++;
  } else {
    if (clickedButton) {
      clickedButton.classList.add("wrong");
    }

    buttons.forEach((btn) => {
      if (btn.textContent === question.options[question.answer]) {
        btn.classList.add("correct");
      }
    });
  }

  explanationText.textContent = question.explanation;

  explanationBox.classList.remove("hidden");

  nextBtn.classList.remove("hidden");
}

function updateProgress() {
  const percent = ((currentQuestionIndex + 1) / currentSession.length) * 100;

  progressBar.style.width = percent + "%";

  questionCounter.textContent = `Câu hỏi: ${
    currentQuestionIndex + 1
  }/${currentSession.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentSession.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  resultScreen.classList.remove("hidden");

  scoreText.textContent = score;

  totalScoreText.textContent = currentSession.length;

  const percent = score / currentSession.length;

  if (percent >= 0.8) {
    scoreFeedback.textContent = "🔥 Xuất sắc!";
  } else if (percent >= 0.6) {
    scoreFeedback.textContent = "👍 Khá tốt!";
  } else {
    scoreFeedback.textContent = "📚 Cần ôn tập thêm.";
  }

  const sessionName = sessionSelect.value;

  localStorage.setItem(sessionName, score);
}

restartBtn.addEventListener("click", () => {
  loadSession(sessionSelect.value);
});

sessionSelect.addEventListener("change", (e) => {
  loadSession(e.target.value);
});

window.addEventListener("DOMContentLoaded", () => {
  loadSession(sessionSelect.value);
});

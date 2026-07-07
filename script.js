console.log("Hệ thống quản lý kho đã khởi động");
const file1 = document.getElementById("file1");
const img1 = document.getElementById("img1");

file1.addEventListener("change", function () {

    img1.src = URL.createObjectURL(this.files[0]);

});

const file2 = document.getElementById("file2");
const img2 = document.getElementById("img2");

file2.addEventListener("change", function () {

    img2.src = URL.createObjectURL(this.files[0]);

});
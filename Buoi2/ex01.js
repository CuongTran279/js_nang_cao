// const map1 = new Map();
// Map có 2 giá trị key và value
// Thêm giá trị mới vào map
// map1.set("Alo","so 1");
// map1.set(1,"so 2");
// console.log(map1);

// Lấy giá trị bằng key
// console.log(map1.get(1));

// Khởi tạo map từ array
// const arraya = [[0,1],[1,3],[5,6],["alo","OK"]];
// const map2 = new Map(arraya);
// const set1 = new Set(arraya);
// console.log(map2);
// console.log(map2.get("alo"));

// Khởi tạo map từ map
// const map3 = new Map(map2);
// console.log(map3);

// Xóa 1 phần tử trong map
// map3.delete(1);

// Xóa toàn bộ phần tử trong map
// map3.clear;

// Kiểm tra phần tử có trong map
// console.log(map3.has("2"));

// const tracNghiem = new Map();
// tracNghiem.set("Cau hoi","Đâu là tên 1 châu lục");
// tracNghiem.set(1,"Châu Á");
// tracNghiem.set(2,"VN");
// tracNghiem.set(3,"TQ");
// tracNghiem.set("dapan","Châu Á");
// tracNghiem.set(true,"đúng");
// tracNghiem.set(false,"Sai");
// console.log(tracNghiem.get("Cau hoi"));
// console.log((`1. ${tracNghiem.get(1)}`));
// console.log((`2. ${tracNghiem.get(2)}`));
// console.log((`3. ${tracNghiem.get(3)}`));
// const dapAn = 1;
// console.log(tracNghiem.get(tracNghiem.get("dapan")==tracNghiem.get(dapAn)));

// **********
// const tinhTong = (a,b=2)=>a+b;
// console.log(tinhTong(5));

// Call back
// const printResult = (so1,so2,fn)=>{
//     console.log(`Tổng 2 số là : ${fn(so1,so2)}`);
// }
// printResult(5,7,tinhTong)

//Return hàm trong hàm
// const demo1 = ()=>{
//     console.log("Đấy là hàm số 1");
//     return(a)=>{
//         console.log(`Đấy là hàm số ${a}`);
//     }
// }
// demo1()("Hàm con");

// Gọi hàm ngay lập tức
// (demo2 = ()=>{
//     console.log(`Gọi hàm ngay lập tức `);
// })();

const obj = [
    {a:7,b:6},
    {a:23,b:21},
    {a:1,b:62},
    {a:52,b:12},
]
const manga = [5,62,1,2,6,3,7];
// manga.map((value,index)=>{
//     console.log(value,index);
// })
// manga.forEach((value,index) => {
//     console.log(value,index);
// });

// const mangb = manga.filter((value)=>{
//     return value>=6;
// });
// const mangc = obj.filter((value)=>{
//     const {a,b} = value;
//     return a==7;
//     // return (value.a==1)&&(value.a==7);
// });
// console.log(mangc);

const mang = [4,6,5,7,3,8,2];
const tong = mang.reduce((result,value)=>{
    if(value%2==1){
        result+=value;
    }
    return result;
},0);
console.log(tong);

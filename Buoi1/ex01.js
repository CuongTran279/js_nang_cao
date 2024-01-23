// const manga = [6,3,7,2,9];
// const mangb = [9,5,7];
// Spread
// DÙng để copy mảng, object mà không phá vỡ cấu trúc của mảng hay object
// Chèn mảng, obj
// Ghộp mảng, obj
// let mangcopy = [...manga];
// let [so1,so2]=manga;
// mangcopy.push(5);
// console.log(manga);
// console.log(mangcopy);
// let mangInsert = [5,2,6,...manga];
// console.log(mangInsert);
// const mangc = [...manga,...mangb];
// console.log(mangc);
// const obj ={
//     name : {firstname: "Trang",lastname: "CUong"},
//     age : 20,
//     address : "ND"
// }
// const obj2 ={
//     gioiTinh : "Nu",
//     Email : "585325@igfas.com",
// }
// const objCopy = {...obj,...obj2};
// console.log(objCopy);

// **********************************************************
//Đối với mảng thì dùng []
// let [pt1,pt2,pt3,pt4,pt5] = manga;
//Đối với Object thì dùng {}
// C1: let {name,age,address} = obj;
// C2: let {name:ten,age:tuoi,address:diachi} = obj;
// console.log(tuoi);

// **********************************************************
// Falsy value : false,'',true,0,undefied
// let a = ''||null||10;
// console.log(a);

// **********************************************************
// Nullish(Giống falsy value)Khi giá trị gán là null hoặc undefied
// let title = "VN";
// let newtitle = title??"Thẻ mặc định";
// console.log(newtitle);

// **********************************************************
// const mang = [6,2,7,8,3];
// for(let item of mang.entries()){
//     console.log(item);
// }

// **********************************************************
// let ten = obj.name?.lastname??"Thẻ mặc định";
// console.log(ten);
// const mang = [6,2,6,1,6] ;
// const mangMoi = new Set(mang);
// mangMoi.add(5);
// mangMoi.add(6);
// console.log(mangMoi.has(8));
// console.log(`Số lượng: ${mangMoi.size}`);
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};
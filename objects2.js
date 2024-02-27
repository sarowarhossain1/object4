const daraz = {
  category: "Sarees",
  name: "Fashionable Halfsilk Cutwork Saree For Women (All Colour",
  brand: "MOHADEB & CO",
  img: "https://static-01.daraz.com.bd/p/bf1a0ecb5d825c52094e8e18075fc27e.jpg_188x188.jpg_.webp",
  price: 530,
  color: "White",
  Ratings: 3.9,
  nestedObj: {
    category: "Shalwar Kameez",
    name: "New Exclusive Designed Linen Screen Print Three Piece For Stylish Women",
    brand: "Nilima",
    img: "https://static-01.daraz.com.bd/p/08a01c6013d66815842cfb200131b1d6.jpg_300x0q75.webp",
    price: 59,
    color: "Red",
    Ratings: 3.8,
    nestedObj2: {
      category: "Unstitched Fabrice",
      name: "Unstitched Muslised Silk Salwar Kamiz (Made by Tant & Washable Colour )",
      brand: "MONI TRADERS",
      img: "https://static-01.daraz.com.bd/p/18dfe3e974efb72888e240fd9440a6ad.jpg_300x0q75.webp",
      price: 2294,
      color: "White",
      Ratings: 5,
      nestedObj3: {
        category: "Facial Cleansers",
        name: "BIOAQUA Black Mask Activated Carbon Charcoal Blackhead Removal Peel Off Mask Black Nose Nose Film And Oil-Control Depth Clean Pore 60g HZ20",
        brand: "LAIKOU",
        img: "https://static-01.daraz.com.bd/p/fbc6cdbb1bfc337613e93ba6942747fc.jpg_300x0q75.webp",
        price: 179,
        color: "White",
        Ratings: 4.0,
      },
    },
  },
};
console.log("Name", daraz.name, "price", daraz.price);
// console.log(daraz.nestedObj.nestedObj2.name);

// console.log(
//   `${daraz} ${daraz.nestedObj} ${daraz.nestedObj.nestedObj2} ${daraz.nestedObj.nestedObj2.nestedObj3}`
// );
// for (let i in daraz) {
//   console.log(
//     `${daraz[i]} ${daraz.nestedObj[i]} ${daraz.nestedObj.nestedObj2[i]} ${daraz.nestedObj.nestedObj2.nestedObj3[i]}`
//   );
// }

// for (let i = 0; i < daraz.length; i++) {
//   console.log(
//     `name:${daraz[i].name}  price:${daraz[i].price} Ratings:${daraz[i].Ratings}`
//   );
// }

// for (let e in daraz) {
//   console.log(daraz[e]);
// }

// const DiscountType = {
//   Standard: 'Standard', // 6%
//   Seasonal: 'Seasonal', // 12%
//   Weight: 'Weight', //6%
// };

// function getDiscountedPrice(cartWeight, totalPrice, discountType) {
//   let discountOnCart = 0;

//   switch (discountType) {
//     case 'Standard':
//       discountOnCart = 6;
//       break;

//     case 'Seasonal':
//       discountOnCart = 12;
//       break;

//     case 'Weight':
//       if (cartWeight > 10) {
//         discountOnCart = 18;
//       } else if (cartWeight <= 10) {
//         discountOnCart = 6;
//       }
//       break;
//   }

//   console.log('Discount on price ==>', discountOnCart);
//   const calculateThePrice = totalPrice * (discountOnCart / 100);
//   return calculateThePrice;
// }

// console.log(getDiscountedPrice(12, 100, DiscountType.Weight));

// 

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
//   console.log(add10(2)); // 12


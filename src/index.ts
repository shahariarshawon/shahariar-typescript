function formatString(input: string, toUpper?: boolean): string {
  return toUpper == false ? input.toLowerCase() : input.toUpperCase();
}
console.log(formatString("Hello Bangladesh"));
console.log(formatString("Hello Bangladesh", true));
console.log(formatString("Hello Bangladesh", false));

function filterByRating(
  items: { title: string; rating: number }[],
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const newArray = arrays.reduce(
    (previousArray, currentArray) => [...previousArray, ...currentArray],
    [],
  );
  return newArray;
}
console.log(concatenateArrays(["a", "b"], ["c"]));

console.log(concatenateArrays([1, 2], [3, 4], [5]));

// class Vehicle{
//     constructor
// }

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}
console.log(processValue("hello"));
console.log(processValue(10));

// interface Product {
//   name: string;
//   price: number;
// }

// function getMostExpensiveProduct(products: Product[]): Product | null {
//   if (products.length === 0) {
//     return null;
//   }
//   let mostExpensiveProduct = products[0];
//   for (let i = 1; i < products.length; i++) {
//     if (products[i].price > mostExpensiveProduct.price) {
//       mostExpensiveProduct = products[i];
//     }
//   }
//   return mostExpensiveProduct;
// }

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];

// console.log(getMostExpensiveProduct(products));

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Saturday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > -1) {
        resolve(n * n);
      } else {
        reject("Error: Negative number not allowed");
      }
    }, 1000);
  });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);

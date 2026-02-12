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

function concatenateArrays<T>(...arrays: T[][]): T[] {}

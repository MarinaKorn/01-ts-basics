interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const usernames: string[] = ['Alice', 'Bob', 'Charlie'];
const ratings: number[] = [5, 4, 3];

const products: Product[] = [
  { id: 1, name: 'Coffee', price: 2.5 },
  { id: 2, name: 'Tea', price: 1.8, description: 'Green tea' },
  { id: 3, name: 'Cookie', price: 1.2 }
];

console.log('Usernames:', usernames);
console.log('Ratings:', ratings);
console.log('Products:', products);

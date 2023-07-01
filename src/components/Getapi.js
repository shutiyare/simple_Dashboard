export function getUsers() {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
  // .then(console.log);
}

export function getInventory() {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
  // .then(console.log);
}

export function getOrders() {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
  // .then(console.log);
}

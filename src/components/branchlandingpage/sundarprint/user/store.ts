import type { Product } from "../types";

export type Order = {
  id: string;
  products: Product[];
  total: number;
  date: string;
};

export type Payment = {
  id: string;
  amount: number;
  status: "SUCCESS" | "CANCELLED";
  date: string;
};

export let likedProducts: Product[] = [];
export let cartProducts: Product[] = [];
export const orders: Order[] = [];
export const payments: Payment[] = [];

// ACTIONS
export const likeProduct = (p: Product) => {
  if (!likedProducts.find(i => i.id === p.id)) {
    likedProducts.push(p);
  }
};

export const moveToCart = (id: string) => {
  const product = likedProducts.find(p => p.id === id);
  if (product) {
    cartProducts.push(product);
    likedProducts = likedProducts.filter(p => p.id !== id);
  }
};

export const removeFromCart = (id: string) => {
  cartProducts = cartProducts.filter(p => p.id !== id);
};

export const checkout = () => {
  const total = cartProducts.reduce((s, p) => s + p.price, 0);
  const now = new Date().toLocaleString();

  orders.push({
    id: "ORD" + Date.now(),
    products: cartProducts,
    total,
    date: now,
  });

  payments.push({
    id: "PAY" + Date.now(),
    amount: total,
    status: Math.random() > 0.3 ? "SUCCESS" : "CANCELLED",
    date: now,
  });

  cartProducts = [];
};

import { createReducer } from '@ngrx/store';

export interface AppState {
  cart: CartItem[]
}

export interface CartItem {
  name: string
  price: number
  quantity: number
}

export const cartReducer = createReducer<CartItem[]>([
  { name: 'Produit 1', price: 1, quantity: 1 },
  { name: 'Produit 2', price: 1, quantity: 2 },
])

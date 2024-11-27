import { createReducer } from '@ngrx/store';

export const cartReducer = createReducer([
  { name: 'Produit 1', price: 1, quantity: 1 },
  { name: 'Produit 2', price: 1, quantity: 2 },
])

import { createAction, createReducer, on, props } from '@ngrx/store';

export interface AppState {
  cart: CartItem[]
}

export interface CartItem {
  name: string
  price: number
  quantity: number
}

export const add = createAction('Cart Add', props<CartItem>())
export const remove = createAction('Cart Remove', props<{ name: string }>())

export const cartReducer = createReducer<CartItem[]>(
  [
    { name: 'Produit 1', price: 1, quantity: 1 },
    { name: 'Produit 2', price: 1, quantity: 2 },
  ],
  on(add, (state, cartItem) => {
    const existing = state.find(p => p.name === cartItem.name);

    if (existing) {
      return state.map(p => p.name === existing.name ? { ...p, quantity: p.quantity + cartItem.quantity } : p);
    }

    // state.push(cartItem)
    return [...state, cartItem]
  }),
  on(remove, (state, { name }) => state.filter(i => i.name !== name))
)

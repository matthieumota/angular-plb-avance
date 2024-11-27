import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';

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

export const quantity = createSelector(
  (state: AppState) => state.cart,
  (cart: CartItem[]) => {
    let quantity = 0

    for (let item of cart) {
      quantity += item.quantity
    }

    return quantity
  }
)

export const total = createSelector(
  (state: AppState) => state.cart,
  (cart: CartItem[]) => cart.reduce((p, c) => c.quantity * c.price + p, 0)
)

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

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, AppState, CartItem, remove } from '../../stores/cart.reducer';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { DsfrFormInputModule } from '@edugouvfr/ngx-dsfr';

@Component({
  selector: 'app-cart',
  imports: [AsyncPipe, ReactiveFormsModule, DsfrFormInputModule, JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart$!: Observable<CartItem[]>
  loginForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.cart$ = this.store.select('cart')
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, this.forbiddenValidator()]),
    })
  }

  forbiddenValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      console.log(control.value)

      if (control.value === 'toto') {
        return { forbidden: 'toto' }
      }

      return null
    }
  }

  login() {
    console.log(this.loginForm.value)
  }

  add(name: string, price: number, quantity: number) {
    this.store.dispatch(add({ name, price, quantity }))
  }

  remove(name: string) {
    this.store.dispatch(remove({ name }))
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class CurrentHouseService {
  house: BehaviorSubject<House | null> = new BehaviorSubject<House | null>(null)
}

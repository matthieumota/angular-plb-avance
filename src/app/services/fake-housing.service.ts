import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from '../models/house';

const HOUSES: House[] = [
  {
    id: 1,
    name: 'Charming Studio',
    city: 'Paris',
    photo: 'https://via.placeholder.com/150',
    rooms: 1,
    wifi: true,
    price: 250000,
    rental: 1200
  },
  {
    id: 2,
    name: 'Modern Loft',
    city: 'Lyon',
    photo: 'https://via.placeholder.com/150',
    rooms: 2,
    wifi: true,
    price: 450000,
    rental: 1800
  },
  {
    id: 3,
    name: 'Cozy Cottage',
    city: 'Marseille',
    photo: 'https://via.placeholder.com/150',
    rooms: 3,
    wifi: false,
    price: 300000,
    rental: 1400
  },
  {
    id: 4,
    name: 'Luxury Villa',
    city: 'Nice',
    photo: 'https://via.placeholder.com/150',
    rooms: 5,
    wifi: true,
    price: 1200000,
    rental: 5000
  },
  {
    id: 5,
    name: 'Seaside Apartment',
    city: 'Bordeaux',
    photo: 'https://via.placeholder.com/150',
    rooms: 2,
    wifi: true,
    price: 320000,
    rental: 1600
  }
];

@Injectable({
  providedIn: 'root'
})
export class FakeHousingService {
  all(): Observable<House[]> {
    return of(HOUSES)
  }
}

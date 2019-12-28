import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private rentals: any[] = [
    {
      id: 1,
      title: "Merina",
      city: "Chennai",
      street: "ABCD",
      category: "apartment",
      image: "http://via.placeholder.com/350x250",
      bedrooms: 3,
      description: "Very nice apartment",
      dailyRate: 34,
      shared: false,
      createdAt: "24/12/2019"
    }

  ];

  constructor() { }

  public getRentals(): any {
    debugger;
    const rentalObservable = new Observable((observer) => {
      debugger;
      observer.next(this.rentals);
    }) ;

    return rentalObservable;
  }
}

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ExpensesItem } from '@interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private data$ = new BehaviorSubject<ExpensesItem[]>([]);

  constructor() { }

  setData(value: ExpensesItem) {
    const currentState = this.data$.getValue();
    this.data$.next([...currentState, value]);
  }

  getData(): Observable<ExpensesItem[]> {
    return this.data$.asObservable();
  }

  getDataValue(): ExpensesItem[] {
    return this.data$.getValue();
  }

  removeData(index: number){
    const currentState = this.data$.getValue();
    currentState.splice(index, 1);
    this.data$.next([...currentState]);
  }
}

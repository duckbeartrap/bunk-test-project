import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PayoutsResponse, PayoutsRequest } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PayoutsService {
  constructor(private http: HttpClient) { }

  settleExpenses(payload: PayoutsRequest): Observable<PayoutsResponse>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<PayoutsResponse>(`${environment.API_URL}/payouts`, payload, { headers });
  }
}

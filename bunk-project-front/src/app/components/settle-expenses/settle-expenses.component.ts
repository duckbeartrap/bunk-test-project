import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services';
import { PayoutsService } from '@services';
import { Observable } from 'rxjs';
import { PayoutsResponse, PayoutsRequest } from 'src/app/interfaces';

@Component({
  selector: 'app-settle-expenses',
  templateUrl: './settle-expenses.component.html',
  styleUrls: ['./settle-expenses.component.scss']
})
export class SettleExpensesComponent implements OnInit {
  data$: Observable<PayoutsResponse> | undefined;

  constructor(private storageService: StorageService, private payoutsService: PayoutsService) { }

  ngOnInit(): void {
  }

  settleUp(){
    const payload: PayoutsRequest = {
      expenses: this.storageService.getDataValue()
    }

    this.data$ = this.payoutsService.settleExpenses(payload);
  }
  
}

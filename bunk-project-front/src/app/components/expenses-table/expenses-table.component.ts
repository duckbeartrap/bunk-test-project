import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { StorageService } from '@services';
import { ExpensesItem } from '@interfaces';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {
  data$: Observable<ExpensesItem[]>;
  displayedColumns: string[] = ['name', 'amount', 'actions'];

  constructor(private storageService: StorageService) { 
    this.data$ = this.storageService.getData()
  }

  ngOnInit(): void {
  }

  removeTableItem(index: number){
    console.log(index);
    this.storageService.removeData(index);
  }

}

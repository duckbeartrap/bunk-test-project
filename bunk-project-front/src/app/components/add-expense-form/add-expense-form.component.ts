import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageService } from '@services';
import { ExpensesItem } from '@interfaces';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent implements OnInit {
  addExpenseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl(null, Validators.required)
  })

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }

  addExpense(){
    if(this.addExpenseForm.valid && this.addExpenseForm.value.amount && this.addExpenseForm.value.name){
      const payload: ExpensesItem = {
        name: this.addExpenseForm.value.name,
        amount: this.addExpenseForm.value.amount
      };

      this.storageService.setData(payload);
      this.addExpenseForm.reset();
    }
  }

}

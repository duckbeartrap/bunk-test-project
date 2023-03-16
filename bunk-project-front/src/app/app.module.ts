import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpErrorHandler } from '@interceptors';
import { TransformPayoutPipe } from '@pipes';
import { 
  AddExpenseFormComponent, 
  ExpensesTableComponent, 
  SettleExpensesComponent, 
  FrameWrapperComponent, 
  ErrorDialogComponent
} from '@components';

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseFormComponent,
    ExpensesTableComponent,
    SettleExpensesComponent,
    TransformPayoutPipe,
    FrameWrapperComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandler, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

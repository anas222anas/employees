import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDynamicFormComponent } from './components/view-dynamic-form/view-dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@NgModule({
  declarations: [
    ViewDynamicFormComponent,
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    HttpClientModule
  ],
  exports: [
    ViewDynamicFormComponent
  ],
  providers: [provideNativeDateAdapter()]
})
export class DynamicFormModule { }

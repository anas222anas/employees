import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from './employees-routing.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NgxsModule } from '@ngxs/store';
import { EmployeesState } from './state/employees.state';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { PagessState} from '../state/pages.state';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    DynamicFormModule,
    MatTableModule,
    MatPaginatorModule,
    NgxsModule.forFeature([EmployeesState, PagessState])
  ]
})
export class EmployeesModule { }

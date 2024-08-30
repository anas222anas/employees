import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { buttonsConfig, CUSTOM_INPUT_MODEL, TYPES } from '../../dynamic-form/models/custom-input.model';
import { Store } from '@ngxs/store';
import { EmployeesState } from '../state/employees.state';
import { AddEmployeeAction, GetDepartmentsAction, GetEmployeeByIdAction, GetEmployeesAction, GetGradsAction, GetReportingMangersAction, GetSkillsAction } from '../state/employees.actions';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { SetNotificationsAction } from '../../state/pages.actions';
import { get } from 'lodash';
export interface EmployeesColmun {
  employeeCode: string;
  fullName: string;
  middleName: string;
  departmentName: string;
  grade: string;
  reportingManger: string;
  skills: string;
  basicSalary: string;
  houseRent: string;
  otherAllowance: string;
  totalSalaryPM: string;
  totalSalaryPA: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent implements OnInit, AfterViewInit{
  subscription: Subscription
  departments = this.store.select(EmployeesState.departments)
  skills = this.store.select(EmployeesState.skills)
  grads = this.store.select(EmployeesState.grads)
  reportingMangers = this.store.select(EmployeesState.reportingMangers)
  displayedColumns: string[] = ['employeeCode', 'fullName', 'middleName', 'departmentName', 'grade', 
    'reportingManger','skills', 'basicSalary', 'houseRent', 'otherAllowance', 'totalSalaryPM', 'totalSalaryPA'];
  _employees = this.store.select(EmployeesState.employees);
  employees = new MatTableDataSource<EmployeesColmun>([]);
  buttonsConfig: buttonsConfig = {
    submit: {
      text: 'Submit', handleSubmit: (data: any) => {
        this.addEmployee(data)
      }
    },
  }
  employeeForm: CUSTOM_INPUT_MODEL[] = [
    {
      type: TYPES.ID, key: 'employeeCode', label: 'Employee Code',
      placeholder: 'Enter Employee Code', required: true, minLength: 8, maxLength: 10
    },
    {
      type: TYPES.Text, key: 'firstName', label: 'First Name',
      placeholder: 'enter first name', required: true
    },
    {
      type: TYPES.Text, key: 'lastName', label: 'Last Name',
      placeholder: 'enter last name', required: true
    },
    {
      type: TYPES.Text, key: 'middleName', label: 'Middle Name',
      placeholder: 'enter middle name', required: false
    },
    {
      type: TYPES.Select, key: 'departmentName', label: 'Department Name',
      placeholder: 'select department', required: true, options: this.departments
    },
    {
      type: TYPES.Select, key: 'grade', label: 'Grade',
      placeholder: 'select grade', required: true, options: this.grads
    },
    {
      type: TYPES.Select, key: 'reportingManger', label: 'Reporting Manger',
      placeholder: 'select reporting manger', required: true, options: this.reportingMangers
    },
    {
      type: TYPES.Select, key: 'skills', label: 'Skills',
      placeholder: 'select one skill or more', required: true, options: this.skills, multiple: true
    },
    {
      type: TYPES.Number, key: 'basicSalary', label: 'Basic Salary',
      placeholder: 'enter basic salary', required: true, min: 1
    },
    {
      type: TYPES.Number, key: 'houseRent', label: 'House Rent',
      placeholder: 'enter house rent', required: true, min: 1
    },
    {
      type: TYPES.Number, key: 'otherAllowance', label: 'Other Allowance',
      placeholder: 'enter other allowance', min: 1
    },
    {
      type: TYPES.Number, key: 'totalSalaryPM', label: 'Total Salary/PM',
      placeholder: 'total salary/PM', min: 1
    },
    {
      type: TYPES.Number, key: 'totalSalaryPA', label: 'Total Salary/PA',
      placeholder: 'total salary/PA', min: 1
    }
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.employees.paginator = this.paginator;
  }
  constructor(private store: Store, private dialog: MatDialog) {
    this.subscription = new Subscription()
    this.store.dispatch(new GetEmployeesAction())
    this.store.dispatch(new GetDepartmentsAction())
    this.store.dispatch(new GetSkillsAction())
    this.store.dispatch(new GetGradsAction())
    this.store.dispatch(new GetReportingMangersAction())
  }
  ngOnInit(): void {
    this.subscription.add(
      this._employees.subscribe(data => {
        this.employees = new MatTableDataSource<EmployeesColmun>(data);
        this.employees.paginator = this.paginator;
      })
    )
  }
  addEmployee(employeeData: any) {
    this.store.dispatch(new AddEmployeeAction(employeeData))
    this.store.dispatch(new SetNotificationsAction({
      title: 'Add employee',
      description: `${get(employeeData, 'firstName')}${get(employeeData, 'lastName')} has been added `, date: '12:08 PM', readonly: false
    }))

  }
  editEmployee(employeeData){
    this.store.dispatch(new GetEmployeeByIdAction(employeeData.id)).subscribe({complete: ()=>{
      setTimeout(() => {
        this.dialog.open(EditEmployeeComponent, {
          data: {id: employeeData.id},
          width: '60%',
          height: '80%',
          maxWidth: '100%',
          disableClose: false
        })
      }, 150)
    }})
}
}
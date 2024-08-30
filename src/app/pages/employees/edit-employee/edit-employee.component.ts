import { AfterViewChecked, AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { buttonsConfig, CUSTOM_INPUT_MODEL, TYPES } from '../../dynamic-form/models/custom-input.model';
import { Store } from '@ngxs/store';
import { EmployeesState } from '../state/employees.state';
import { EditEmployeeAction } from '../state/employees.actions';
import { Subscription } from 'rxjs';
import { get } from 'lodash';
import { SetNotificationsAction } from '../../state/pages.actions';
export interface EmployeesDataType {
  employeeCode: string;
  firstName: string;
  lastName: string
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
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnDestroy {
  departments = this.store.select(EmployeesState.departments)
  skills = this.store.select(EmployeesState.skills)
  grads = this.store.select(EmployeesState.grads)
  reportingMangers = this.store.select(EmployeesState.reportingMangers)
  employeeDetails: EmployeesDataType = this.store.selectSnapshot(EmployeesState.employeeDetails)[0]
  subsrciption: Subscription
  employeeForm: CUSTOM_INPUT_MODEL[] = []

  buttonsConfig: buttonsConfig = {
    submit: {
      text: 'Update', handleSubmit: (data: any) => {
        this.editEmployee(data)
      }
    },
    close: {text: 'Close', handleClose: () => {
      this.closeDialog()
    }}
  }

  constructor(public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {
    this.employeeDetails = this.store.selectSnapshot(EmployeesState.employeeDetails)[0]
    if (this.employeeDetails)
      this.employeeForm = [
        {
          type: TYPES.ID, key: 'employeeCode', label: 'Employee Code', defaultValue: this.employeeDetails?.employeeCode || '',
          placeholder: 'Enter Employee Code', required: true, minLength: 8, maxLength: 10
        },
        {
          type: TYPES.Text, key: 'firstName', label: 'First Name', defaultValue: this.employeeDetails?.firstName || '',
          placeholder: 'enter first name', required: true
        },
        {
          type: TYPES.Text, key: 'lastName', label: 'Last Name', defaultValue: this.employeeDetails?.lastName || '',
          placeholder: 'enter last name', required: true
        },
        {
          type: TYPES.Text, key: 'middleName', label: 'Middle Name', defaultValue: this.employeeDetails?.middleName || '',
          placeholder: 'enter middle name', required: false
        },
        {
          type: TYPES.Select, key: 'departmentName', label: 'Department Name', defaultValue: this.employeeDetails?.departmentName || null,
          placeholder: 'select department', required: true, options: this.departments
        },
        {
          type: TYPES.Select, key: 'grade', label: 'Grade', defaultValue: this.employeeDetails?.grade || null,
          placeholder: 'select grade', required: true, options: this.grads
        },
        {
          type: TYPES.Select, key: 'reportingManger', label: 'Reporting Manger', defaultValue: this.employeeDetails?.reportingManger || null,
          placeholder: 'select reporting manger', required: true, options: this.reportingMangers
        },
        {
          type: TYPES.Select, key: 'skills', label: 'Skills', defaultValue: this.employeeDetails?.skills || null,
          placeholder: 'select one skill or more', required: true, options: this.skills, multiple: true
        },
        {
          type: TYPES.Number, key: 'basicSalary', label: 'Basic Salary', defaultValue: this.employeeDetails?.basicSalary || null,
          placeholder: 'enter basic salary', required: true, min: 1
        },
        {
          type: TYPES.Number, key: 'houseRent', label: 'House Rent', defaultValue: this.employeeDetails?.houseRent || null,
          placeholder: 'enter house rent', required: true, min: 1
        },
        {
          type: TYPES.Number, key: 'otherAllowance', label: 'Other Allowance', defaultValue: this.employeeDetails?.otherAllowance || null,
          placeholder: 'enter other allowance', min: 1
        },
        {
          type: TYPES.Number, key: 'totalSalaryPM', label: 'Total Salary/PM', defaultValue: this.employeeDetails?.totalSalaryPM || null,
          placeholder: 'total salary/PM', min: 1
        },
        {
          type: TYPES.Number, key: 'totalSalaryPA', label: 'Total Salary/PA', defaultValue: this.employeeDetails?.totalSalaryPA || null,
          placeholder: 'total salary/PA', min: 1
        }
      ]
    this.subsrciption = new Subscription()

  }
  ngOnDestroy(): void {
    this.subsrciption.unsubscribe()
  }
  editEmployee(newEmployeeData: any) {
    this.store.dispatch(new EditEmployeeAction(newEmployeeData, get(this.data, 'id')))
    this.store.dispatch(new SetNotificationsAction({
      title: 'Update employee',
      description: `${get(this.employeeDetails, 'firstName')}${get(this.employeeDetails, 'lastName')} has been updated`, date: '12:08 PM', readonly: false
    }))
    this.dialogRef.close()
  }
  closeDialog(){
    this.dialogRef.close()
  }
}

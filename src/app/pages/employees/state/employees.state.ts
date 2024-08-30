import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { get } from 'lodash';
import { AddEmployeeAction, EditEmployeeAction, GetDepartmentsAction, GetEmployeeByIdAction, GetEmployeesAction, GetGradsAction, GetReportingMangersAction, GetSkillsAction } from './employees.actions';
import { EmployeeService } from '../services/employee.service';
import { EmployeesDataType } from '../edit-employee/edit-employee.component';

export class EmployeesStateModel {
    public employees!: any[];
    public departments!: any[];
    public skills!: any[];
    public grads!: any[];
    public reportingMangers!: any[]
    public employeeDetails!: any[]
}

const defaults = {
    employees: [],
    departments: [],
    skills: [],
    grads: [],
    reportingMangers: [],
    employeeDetails: []
};

@State<EmployeesStateModel>({
    name: 'employees',
    defaults
})
@Injectable()
export class EmployeesState {
    constructor(private employeeService: EmployeeService) {

    }
    @Selector()
    static employees(state: EmployeesState) {
        return get(state, 'employees') || [];
    }
    @Selector()
    static departments(state: EmployeesState): any[] {
        return get(state, 'departments') || [];
    }
    @Selector()
    static skills(state: EmployeesState): any[] {
        return get(state, 'skills') || [];
    }
    @Selector()
    static grads(state: EmployeesState): any[] {
        return get(state, 'grads') || [];
    }
    @Selector()
    static reportingMangers(state: EmployeesState): any[] {
        return get(state, 'reportingMangers') || [];
    }
    @Selector()
    static employeeDetails(state: EmployeesState): EmployeesDataType[] {
        return get(state, 'employeeDetails') || [];
    }
    @Action(AddEmployeeAction)
    addEmployee({ dispatch }: StateContext<EmployeesStateModel>, { payload }: AddEmployeeAction) {
        this.employeeService.addEmployee(payload).subscribe(() => {
            dispatch(new GetEmployeesAction())
        })
    }
    @Action(EditEmployeeAction)
    editEmployee({ dispatch }: StateContext<EmployeesStateModel>, { payload, id }: EditEmployeeAction) {
        this.employeeService.editEmployee(payload, id).subscribe(() => {
            dispatch(new GetEmployeesAction())
        })
    }
    @Action(GetEmployeeByIdAction)
    getEmployeeById({ patchState }: StateContext<EmployeesStateModel>, { id }: GetEmployeeByIdAction) {
        this.employeeService.getEmployeeById(id).subscribe((data: any) => {
            patchState({ employeeDetails: data })
        })
    }
    GetEmployeeByIdAction

    @Action(GetEmployeesAction)
    getEmployees({ patchState }: StateContext<EmployeesStateModel>) {
        this.employeeService.getEmployees().subscribe((data: any[]) => {
            let temp: any[]
            temp = data.map(item => {
                let skills = ''
                item.skills.forEach((item: string) => {
                    skills += item + ' '
                });
                return {
                    ...item,
                    fullName: item.firstName + ' ' + item.lastName,
                    skills: skills
                }

            })
            patchState({ employees: temp })
        })
    }

    @Action(GetDepartmentsAction)
    getDepartments({ patchState }: StateContext<EmployeesStateModel>) {
        this.employeeService.getDepartments().subscribe((data: any[]) => {
            patchState({ departments: data })
        })
    }

    @Action(GetSkillsAction)
    getSkills({ patchState }: StateContext<EmployeesStateModel>) {
        this.employeeService.getSkills().subscribe((data: any[]) => {
            patchState({ skills: data })
        })
    }

    @Action(GetGradsAction)
    getGrads({ patchState }: StateContext<EmployeesStateModel>) {
        this.employeeService.getGrads().subscribe((data: any[]) => {
            patchState({ grads: data })
        })
    }
    @Action(GetReportingMangersAction)
    getReportingMangers({ patchState }: StateContext<EmployeesStateModel>) {
        this.employeeService.getreportingMangers().subscribe((data: any[]) => {
            patchState({ reportingMangers: data })
        })
    }


}

export class AddEmployeeAction {
    static readonly type = '[employees] Add Employee Action';
    constructor(public payload: any) { }
}

export class GetEmployeesAction {
    static readonly type = '[employees] Get Employees Action';
    constructor() { }
}
export class GetEmployeeByIdAction {
    static readonly type = '[employees] Get Employee By Id Action';
    constructor(public id: any) { }
}
export class EditEmployeeAction {
    static readonly type = '[employees] Edit Employees Action';
    constructor(public payload: any, public id: any) { }
}

export class GetDepartmentsAction {
    static readonly type = '[employees] Get Departments Action';
}

export class GetSkillsAction {
    static readonly type = '[employees] Get Skills Action';
}

export class GetGradsAction {
    static readonly type = '[employees] Get Grads Action';
}
export class GetReportingMangersAction {
    static readonly type = '[employees] Get ReportingMangers Action';
}


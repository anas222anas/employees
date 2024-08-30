import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) { }
    addEmployee(employeeData: any) {
        return this.http.post('http://localhost:3000/employees',  employeeData )
    }
    editEmployee(employeeData: any, id: any) {
        return this.http.put('http://localhost:3000/employees/' + id,  employeeData )
    }
    getEmployeeById(id: any) {
        return this.http.get('http://localhost:3000/employees', {
            params: {id: id}
        } )
    }
    
    getEmployees():Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/employees')
    }
    
    getDepartments():Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/departments')
    }
    getSkills():Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/skills')
    }
    getGrads():Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/grades')
    }
    getreportingMangers():Observable<any[]> {
        return this.http.get<any[]>('http://localhost:3000/reportingMangers')
    }
}
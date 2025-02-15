import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'employees',
                loadChildren: () => import('.//employees/employees.module').then(m => m.EmployeesModule)
            },
            {
                path: 'demo',
                loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

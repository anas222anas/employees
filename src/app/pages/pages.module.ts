import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { PagessState } from './state/pages.state';


@NgModule({
  declarations: [
    WrapperComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    NgxsModule.forFeature([PagessState])
  ]
})
export class PagesModule { }

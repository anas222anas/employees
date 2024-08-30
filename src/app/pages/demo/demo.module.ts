import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDemoComponent } from './components/video-demo/video-demo.component';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    VideoDemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }

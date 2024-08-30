import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './components/language/language.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    LanguageComponent,
    NotificationsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    LanguageComponent,
    NotificationsComponent,
    ProfileComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './components/language/language.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    LanguageComponent,
    NotificationsComponent,
    ProfileComponent,
    SearchComponent,
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
    ProfileComponent,
    SearchComponent,
  ]
})
export class SharedModule { }

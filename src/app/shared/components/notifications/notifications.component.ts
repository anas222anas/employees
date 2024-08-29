import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Notifications } from '../../../pages/components/toolbar/toolbar.component';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../language/language.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit, AfterContentChecked{
  hidden = false;


  constructor(private changeDetector: ChangeDetectorRef) {
    
  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }
  ngOnInit(): void {
  }
  @Input('notifications') notifications: Notifications[] = []

  onShowAll() {

  }
  toggleBadgeVisibility() {
    this.hidden = true;
  }
  currentLang: string = '';
}

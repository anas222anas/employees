import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../language/language.component';
import { Notifications } from '../../../pages/components/toolbar/toolbar.component';
export interface Profile {
  name: string;
  role: string;
  img: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, AfterContentChecked {
  isEnglish = true
  actions = [{ name: 'My Account', icon: 'person' },
  { name: 'Settings', icon: 'settings' },
  { name: 'Logout', icon: 'power_settings_new' }
  ]
  @Input('profile') profile!: Profile
  @Input('width') width: string = '211px'
  constructor(private language: TranslateService, private changeDetector: ChangeDetectorRef) {

  }
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges()
  }
  ngOnInit(): void {
    this.language.onLangChange.subscribe(lang => {
      this.isEnglish = lang.lang == LANGUAGE.English
    })
  }

  onShowAll() {

  }
  currentLang: string = '';
  changeDetected(){
    this.changeDetector.detectChanges()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../../../shared/components/language/language.component';
import { Profile } from '../../../shared/components/profile/profile.component';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { PagessState } from '../../state/pages.state';

export interface Notifications {
  title: string;
  description: string;
  date: string;
  readonly?: boolean
}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit, OnDestroy {
  sub = new Subscription()
  _notifications = this.store.select(PagessState.notifications)
  constructor(private language: TranslateService, private store: Store) {

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
  isEnglish = true
  notifications: Notifications[] = []
  profile: Profile = { name: 'Anas Zidan', role: 'Admin', img: 'Anas.png' }

  config = {
    placeHolder: 'Search',
    maxNumOfIcon: 1,
    action: [
      { path: 'search', handleClick: (value: any) => this.search(value) }
    ],
    onEnter: (value: any) => this.search(value)
  }
  ngOnInit(): void {
    this.language.onLangChange.subscribe(lang => {
      this.isEnglish = lang.lang == LANGUAGE.English
    })
    this.sub.add(
      this._notifications.subscribe((data: any[]) => {
        if (data)
          this.notifications = [...data]
      })
    )
  }
  search(value: any) {
    value = value ? value : null
  }
}

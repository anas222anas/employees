import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGE } from '../../../shared/components/language/language.component';
import { Profile } from '../../../shared/components/profile/profile.component';

export interface Notifications {
  title: string;
  description: string;
  date: string;
  readonly: boolean
}
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  constructor(private language: TranslateService){

  }
  isEnglish = true
  notifications: Notifications[] = [{
    title: 'GIS Data Request',
    description: 'Ahmed Khalil is Waiting for approval to Add New GIS Data', date: '12:08 PM', readonly: false
  },
  {
    title: 'GIS Data Request',
    description: 'Ahmed Khalil is Waiting for approval to Add New GIS Data', date: '23/01/2023', readonly: true
  },
  {
    title: 'GIS Data Request',
    description: 'Ahmed Khalil is Waiting for approval to Add New GIS Data', date: '23/01/2023', readonly: true
  }]
  profile: Profile = {name: 'Anas Zidan', role: 'Admin', img: 'Anas.png'} 

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
  }
  search(value: any) {
    value = value ? value : null
  }
}

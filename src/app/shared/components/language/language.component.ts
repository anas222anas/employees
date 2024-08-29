import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export enum LANGUAGE {
  English = 'English',
  Arabic = 'Arabic',
}
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss'
})
export class LanguageComponent implements OnInit{
  currentLang: string = LANGUAGE.English;
  langulages = [{name: LANGUAGE.English, icon: ''}, {name: LANGUAGE.Arabic, icon: ''}];
  constructor(@Optional() private langService: TranslateService, @Inject(DOCUMENT) private document: Document){
    this.langService.currentLang = this.currentLang
    this.langService.langs = [LANGUAGE.Arabic, LANGUAGE.English];
    this.langService.setDefaultLang(this.currentLang);
    this.changeLang(this.currentLang)
  }
  ngOnInit(): void {

  }

  changeLang(lang: string){
    this.currentLang = lang;
    if (this.currentLang === LANGUAGE.English) {
      this.document.body.dir = 'ltr';
    } else {
      this.document.body.dir = 'rtl';
    }
    this.langService.use(this.currentLang);
    this.langService.currentLang = this.currentLang
  }
}

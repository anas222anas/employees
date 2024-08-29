import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { get, isFunction } from 'lodash'
import { animationFade_in } from '../../animations/fade-in.animation';
import { AppInjector } from '../../services/app-injector';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [animationFade_in]
})
/// Example to Config
// config = {
//   label: 'costumers search',
//   placeHolder: 'search',
//   maxNumOfIcon: 1,
//   action: [
//     { path: 'icons/gallory.svg', handleClick: this.search },
//     { path: 'assets/icons/user.svg' },
//     { path: 'location_on' }
//   ]
// }
export class SearchComponent implements OnInit {
  allActions: any[] = [];
  maxNumOfIcon!: number;
  type:string='text';
  indexRight = 0
  indexLeft = -1
  _config: any = {};
  _actionsIcon: any[] = [];
  @Input('config') set config(value: any) {
    this.allActions = [...(get(value, 'action') || [])]
      this._config = {
        label: get(value, 'label') || '',
        placeHolder: get(value, 'placeHolder') || '',
        maxNumOfIcon: get(value, 'maxNumOfIcon') || undefined,
        onEnter: get(value, 'onEnter') || undefined,
      };
      this.filterIcons();
      this.type=get(value, 'type') || 'text';
  }
  constructor() {
  }
  get placeHolder(){
    return this._config.placeHolder || ''
  }
  get label(){
    return this._config.label || ''
  }
  ngOnInit(): void {
  }
  get actionsIcon(){
    return this._actionsIcon
  }
  checkIconPathImg(action: any){
    return action.path.includes('/')
  }
  get isAr(){
    const langauge: TranslateService = AppInjector.injector.get(TranslateService)
    if(langauge.currentLang == 'en')
      return false;
    else return true;
  }

  handler(input: any, icon: any) {
    if(isFunction(icon.handleClick)) {
      icon.handleClick(input.value);
    }
  }
  onEnter(event: any, input: any){
    if(!(event.key == "Enter")){
      return
    }
    if(isFunction(this._config.onEnter)){
      this._config.onEnter(input.value);
  }
}
  filterIcons(){
    if(!this._config.maxNumOfIcon){
      this._actionsIcon = [...this.allActions]
    }else {
        for(let i=this.indexRight; i<this._config.maxNumOfIcon; i++){
          if(this.allActions[i]){
            this._actionsIcon = [...this._actionsIcon, this.allActions[i]]
            this.indexRight = i+1;
          }
        }
    }
  }
  filterRight(){
    for(let i=0; i<this._config.maxNumOfIcon; i++){
      if(this.allActions[this.indexRight]){
        this._actionsIcon.shift()
        this._actionsIcon.push(this.allActions[this.indexRight])
        this.indexRight += 1
        this.indexLeft += 1
      }
    }
  }
  filterLeft(){
    for(let i=0; i<this._config.maxNumOfIcon; i++){
      if(this.allActions[this.indexLeft]){
        this._actionsIcon.splice(-1)
        this._actionsIcon = [this.allActions[this.indexLeft], ...this._actionsIcon]
        this.indexLeft -= 1;
        this.indexRight -= 1;
      }
    }
  }
}

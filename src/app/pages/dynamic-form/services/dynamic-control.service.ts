import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CUSTOM_INPUT_MODEL } from '../models/custom-input.model';
@Injectable({
  providedIn: 'root'
})
export class DynamicControlService {
  toFormGroup(config: CUSTOM_INPUT_MODEL[]) {
    const group: any = {};
    config.forEach((config) => {
        group[config.key] = config.required
        ? new FormControl(config.defaultValue || '', Validators.required)
        : new FormControl(config.defaultValue || '');
    });
    return new FormGroup(group);
  }
}
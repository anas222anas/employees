import { Component, input, OnInit } from "@angular/core"
import { buttonsConfig, CUSTOM_INPUT_MODEL, TYPES } from "../../models/custom-input.model"
import { FormGroup } from "@angular/forms"
import { DynamicControlService } from "../../services/dynamic-control.service"

@Component({
  selector: 'app-view-dynamic-form',
  templateUrl: './view-dynamic-form.component.html',
  styleUrl: './view-dynamic-form.component.scss'
})
export class ViewDynamicFormComponent implements OnInit {
  viewFormConfig = input.required<CUSTOM_INPUT_MODEL[]>()
  viewFormGroup: FormGroup = new FormGroup({})
  title = input<string>();
  buttonsConfig = input.required<buttonsConfig>()
  constructor(private dynamicControlService: DynamicControlService) {
  }
  ngOnInit(): void {
    this.viewFormGroup = this.dynamicControlService.toFormGroup(this.viewFormConfig());
  }
  onSubmit() {
    this.viewFormGroup.markAllAsTouched()
    this.viewFormGroup.updateValueAndValidity()
    if (!this.viewFormGroup.valid)
      return
    this.buttonsConfig()?.submit.handleSubmit(this.viewFormGroup.value)
    this.viewFormGroup.reset()
  }
  close() {
      this.buttonsConfig()?.close.handleClose()
  }
}



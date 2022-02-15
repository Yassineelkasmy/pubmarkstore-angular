import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
})
export class CreateprojectComponent implements OnInit {
  constructor() {}
  steps: number = 5;
  currentStep: number = 1;

  nextStep() {
    if (this.currentStep != this.steps) this.currentStep++;
  }

  goBack() {
    if (this.currentStep != 1) this.currentStep--;
  }
  ngOnInit(): void {}
}

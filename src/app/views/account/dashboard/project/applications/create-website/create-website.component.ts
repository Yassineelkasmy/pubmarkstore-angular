import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebsiteCategories } from 'src/app/constants/website-categories.constant';
import { CreateWebAppStep } from 'src/app/models/CreateWebAppStep';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.component.html',
})
export class CreateWebsiteComponent implements OnInit {
  constructor(private applicationService: ApplicationService) {
    this.createWebAppForm = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.required,
      ]),
      domain: new FormControl('', [
        Validators.pattern(
          '^(?!.* .*)(?:[a-z0-9][a-z0-9-]{0,61}[a-z0-9].)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$'
        ),
        Validators.required,
      ]),
    });

    this.steps = [
      {
        step: 1,
        canContinue: () =>
          this.createWebAppForm.get('name')?.valid &&
          this.createWebAppForm.get('description')?.valid,
      },
      {
        step: 2,
        canContinue: () => true,
        canSkip: true,
      },
      {
        step: 3,
        canContinue: () => this.createWebAppForm.get('domain')?.valid,
        canSkip: true,
      },
      {
        step: 4,
        canContinue: () => true,
        canSkip: true,
      },
    ];
    this.currentStep = this.steps[2];
  }
  createWebAppForm: FormGroup;
  steps: CreateWebAppStep[];
  currentStep: CreateWebAppStep;

  websiteCategories = WebsiteCategories;
  domainAvailable: boolean = false;
  chekingDomain: boolean = false;

  domainValid(): boolean | undefined {
    return this.createWebAppForm.get('domain')?.valid;
  }

  isLastStep(): boolean {
    return this.currentStep == this.steps[this.steps.length - 1];
  }

  isFirstStep(): boolean {
    return this.currentStep == this.steps[0];
  }

  nextStep() {
    if (!this.isLastStep())
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
  }

  goBack() {
    if (!this.isFirstStep())
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) - 1];
  }

  checkDomain() {
    if (this.domainValid()) {
    }
  }

  ngOnInit(): void {}
}

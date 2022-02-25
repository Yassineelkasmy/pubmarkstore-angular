import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateWebAppFeatures } from 'src/app/constants/create-webapp-features.constants';
import { DomainNameRegex } from 'src/app/constants/validators.regex';
import { WebsiteCategories } from 'src/app/constants/website-categories.constant';
import { CheckDomainNameRequest } from 'src/app/dto/CheckDomainName.request';
import { CreateWebAppStep } from 'src/app/models/CreateWebAppStep';
import { DomainNameAvailability } from 'src/app/models/domain-name/domain-name-availability.enum';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-create-website',
  templateUrl: './create-website.component.html',
})
export class CreateWebsiteComponent implements OnInit {
  constructor(
    private applicationService: ApplicationService,
    private formBuilder: FormBuilder
  ) {
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
        Validators.pattern(DomainNameRegex),
        Validators.required,
      ]),
      imported_domain: new FormControl('', [
        Validators.pattern(DomainNameRegex),
        Validators.required,
      ]),
      categories: this.formBuilder.array([], []),
      features: this.formBuilder.array([], []),
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
        canContinue: () =>
          (this.createWebAppForm.get('domain')?.valid &&
            this.domainAvailable) ||
          this.createWebAppForm.get('imported_domain')?.valid,
        canSkip: true,
      },
      {
        step: 4,
        canContinue: () => true,
        canSkip: true,
      },
      {
        step: 5,
        canContinue: () => true,
        canSkip: true,
      },
    ];
    this.currentStep = this.steps[4];
  }
  createWebAppForm: FormGroup;

  steps: CreateWebAppStep[];
  currentStep: CreateWebAppStep;

  websiteCategories = WebsiteCategories;
  createWebAppFetures = CreateWebAppFeatures;

  //Domain name business logic booleans
  domainAvailable: boolean = false;
  domainFailed: boolean = false;
  chekingDomain: boolean = false;

  onCategoryCheckboxChange(e: any) {
    const checkArray: FormArray = this.createWebAppForm.get(
      'categories'
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onFeatureCheckboxChange(e: any) {
    const checkArray: FormArray = this.createWebAppForm.get(
      'categories'
    ) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

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
      this.chekingDomain = true;
      let checkDomainRequest: CheckDomainNameRequest = {
        domainName: this.createWebAppForm.get('domain')?.value,
      };
      this.applicationService
        .checkDomainNameAvailablity(checkDomainRequest)
        .subscribe((resp) => {
          console.log(resp);
          this.chekingDomain = false;
          if (
            resp.DomainInfo.domainAvailability ==
            DomainNameAvailability.AVAILABLE
          ) {
            this.domainAvailable = true;
          } else if (
            resp.DomainInfo.domainAvailability ==
            DomainNameAvailability.UNAVAILABLE
          ) {
            this.domainFailed = true;
          }
        });
    }
  }

  ngOnInit(): void {}
}

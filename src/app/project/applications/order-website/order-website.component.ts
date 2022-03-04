import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderWebAppFeatures } from 'src/app/content/order-webapp-features.content';
import { DomainNameRegex } from 'src/app/constants/validators.regex';
import { WebsiteCategories } from 'src/app/content/website-categories.content';
import {
  CheckDomainGQL,
  CheckDomainNameDto,
  OrderWebsiteDto,
  OrderWebsiteGQL,
} from 'src/generated/graphql';

import { CreateWebAppStep } from 'src/app/models/CreateWebAppStep';
import { DomainNameAvailability } from 'src/app/models/domain-name/domain-name-availability.enum';
import { ApplicationService } from 'src/app/services/application.service';
import { ProjectService } from '../../project.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'order-website',
  templateUrl: './order-website.component.html',
})
export class OrderWebsiteComponent implements OnInit {
  constructor(
    private orderWebsiteGql: OrderWebsiteGQL,
    private projectServcie: ProjectService,
    private checkDomainGql: CheckDomainGQL,
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
        Validators.maxLength(1000),
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
      deadline: new FormControl('', [Validators.required]),
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
      {
        step: 6,
        canContinue: () => this.createWebAppForm.get('deadline')?.valid,
        canSkip: true,
      },
    ];
    this.currentStep = this.steps[0];
  }
  createWebAppForm: FormGroup;

  deadlines: string[] = [
    'Less than a month',
    '2 Month',
    '3 Months',
    '4 Months',
    '6 Months',
    'Not sure',
  ];

  projectId?: string;
  steps: CreateWebAppStep[];
  currentStep: CreateWebAppStep;

  websiteCategories = WebsiteCategories;
  createWebAppFetures = OrderWebAppFeatures;

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
      'features'
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
      let checkDomainDto: CheckDomainNameDto = {
        domainName: this.createWebAppForm.get('domain')?.value,
      };
      this.checkDomainGql
        .watch({ domain: checkDomainDto })
        .valueChanges.subscribe((result) => {
          this.chekingDomain = false;
          if (
            result.data.checkDomain.DomainInfo.domainAvailability ==
            DomainNameAvailability.AVAILABLE
          ) {
            this.domainAvailable = true;
          } else if (
            result.data.checkDomain.DomainInfo.domainAvailability ==
            DomainNameAvailability.UNAVAILABLE
          ) {
            this.domainFailed = true;
          }
        });
    }
  }
  orderWebsite() {
    let orderWebsiteDto: OrderWebsiteDto = {
      name: this.createWebAppForm.get('name')?.value,
      description: this.createWebAppForm.get('description')?.value,
      domain: this.createWebAppForm.get('domain')?.value,
      imported_domain: this.createWebAppForm.get('imported_domain')?.value,
      categories: this.createWebAppForm.get('categories')?.value,
      features: this.createWebAppForm.get('features')?.value,
      deadline: this.createWebAppForm.get('deadline')?.value,
      projectId: this.projectId!,
    };

    const submitMsg =
      'This was just an intro for your website request, you will get a notification after validating your order soon, we will contact you and have further disscussions or an online meeting to know your user story clear enough.';

    Swal.fire({
      text: submitMsg,
      titleText: 'Notice',
      confirmButtonText: 'Order now',
    }).then((swal) => {
      if (swal.isConfirmed) {
        Swal.showLoading();
        this.orderWebsiteGql
          .mutate({ order: orderWebsiteDto })
          .subscribe((result) => {
            Swal.close();
          });
      }
    });
  }

  ngOnInit(): void {
    this.projectServcie.currentProject$?.subscribe(
      (project) => (this.projectId = project._id)
    );
  }
}

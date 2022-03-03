import { Component, OnInit } from '@angular/core';
import { CreateProjectStep } from 'src/app/models/CreateProjectStep';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  CreateProjectDto,
  CreateProjectGQL,
  CreateProjectMutation,
  ProjectsGQL,
} from 'src/generated/graphql';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
})
export class CreateprojectComponent implements OnInit {
  constructor(
    private createProjectGql: CreateProjectGQL,
    private projectsGql: ProjectsGQL,
    private router: Router
  ) {
    this.createProjectForm = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(30),

        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(200),
        Validators.required,
      ]),
      company_name: new FormControl('', Validators.maxLength(200)),
      company_website: new FormControl('', Validators.maxLength(200)),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(20),
        Validators.required,
      ]),
      facebook: new FormControl('', Validators.maxLength(200)),
      instagram: new FormControl('', Validators.maxLength(200)),
      linkedin: new FormControl('', Validators.maxLength(200)),
    });
    this.steps = [
      {
        step: 1,
        canContinue: () => {
          console.log(this.projectsNames);
          return (
            this.createProjectForm.get('name')!.valid &&
            !this.projectsNames!.includes(
              (
                this.createProjectForm.get('name')?.value as string
              ).toLocaleLowerCase()
            )
          );
        },
      },
      {
        step: 2,
        canContinue: () => this.createProjectForm.get('description')!.valid,
      },
      {
        step: 3,
        canSkip: true,
        canContinue: () =>
          this.createProjectForm.get('company_name')?.valid &&
          this.createProjectForm.get('company_website')?.valid,
      },
      {
        step: 4,
        canContinue: () =>
          this.createProjectForm.get('email')?.valid &&
          this.createProjectForm.get('phone')?.valid,
      },
      {
        step: 5,
        canSkip: true,
        canContinue: () => undefined,
      },
    ];

    this.currentStep = this.steps[0];
  }

  //UI loading
  loading = false;

  steps: CreateProjectStep[];
  skippableSteps = [3, 5];
  currentStep: CreateProjectStep;
  createProjectForm: FormGroup;

  //User projects names
  projectsNames?: string[];

  //The newly created project
  newProject?: CreateProjectMutation['createProject'];

  get isLastStep(): boolean {
    return this.currentStep == this.steps[this.steps.length - 1];
  }

  get isFirstStep(): boolean {
    return this.currentStep == this.steps[0];
  }

  nextStep() {
    if (!this.isLastStep)
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) + 1];
  }

  goBack() {
    if (!this.isFirstStep)
      this.currentStep = this.steps[this.steps.indexOf(this.currentStep) - 1];
  }
  ngOnInit(): void {
    this.projectsGql
      .watch()
      .valueChanges.subscribe(
        (result) =>
          (this.projectsNames = result.data.projects.map((project) =>
            project.name.toLocaleLowerCase()
          ))
      );
  }

  submitProject() {
    const createProjectDto: CreateProjectDto = {
      name: this.createProjectForm.get('name')?.value,
      description: this.createProjectForm.get('description')?.value,
      company_name: this.createProjectForm.get('company_name')?.value,
      company_website: this.createProjectForm.get('company_website')?.value,
      email: this.createProjectForm.get('email')?.value,
      phone: this.createProjectForm.get('phone')?.value,
      social_links: [
        this.createProjectForm.get('facebook')?.value,
        this.createProjectForm.get('instagram')?.value,
        this.createProjectForm.get('linkedin')?.value,
      ],
    };

    this.createProjectGql
      .mutate({ project: createProjectDto })
      .subscribe((result) => {
        this.newProject = result.data?.createProject;
        this.loading = result.loading;
        if (this.newProject) {
          this.router.navigate(['/project']);
        }
        this.projectsGql.watch().refetch();
      });
  }
}

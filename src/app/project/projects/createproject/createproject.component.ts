import { Component, OnInit } from '@angular/core';
import { CreateProjectStep } from 'src/app/models/CreateProjectStep';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../../project.service';
import { CreateProjectRequest } from 'src/app/dto/CreateProject.request';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
})
export class CreateprojectComponent implements OnInit {
  constructor(private projectService: ProjectService) {
    this.createProjectForm = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(5),
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
        canContinue: () => this.createProjectForm.get('name')!.valid,
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
  steps: CreateProjectStep[];
  skippableSteps = [3, 5];
  currentStep: CreateProjectStep;
  createProjectForm: FormGroup;

  //The newly created project

  newProject?: Project;

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
  ngOnInit(): void {}

  submitProject() {
    const req: CreateProjectRequest = {
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

    this.projectService
      .createProject(req)
      .subscribe((project) => (this.newProject = project));
  }
}

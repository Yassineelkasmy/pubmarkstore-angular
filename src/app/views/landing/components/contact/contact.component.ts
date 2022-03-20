import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(30),
        Validators.required,
      ]),
      company: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }
  contactForm: FormGroup;

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // if (this.contactForm.valid) {
    //   // Implement your logic here to handle form submission
    //   // For example, you can send the form data to a backend API or display a success message
    //   console.log(this.contactForm.value);
    //   // Clear the form after submission
    //   this.contactForm.reset();
    // }
  }
}

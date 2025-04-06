import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;
    this.contactService.sendEmail(this.contactForm.value).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.snackBar.open('Email sent successfully!', 'Close', { duration: 3000 });
        this.contactForm.reset();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.snackBar.open('Failed to send email. Please try again.', 'Close', { duration: 3000 });
      },
    });
  }
}

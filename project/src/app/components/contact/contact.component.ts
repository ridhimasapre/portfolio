import emailjs from 'emailjs-com';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  status :String = ''

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add your form submission logic here

    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.status = 'Please fill in all fields!';
      return;
    }

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    };

    // Email.js configuration
    emailjs.send('service_64pysnc', 'template_62m3wlo', templateParams, 'EXgM2poGjR-o3godH')
      .then((result) => {
        this.status = 'Email sent successfully!';
        console.log(result.text);
      }, (error) => {
        this.status = 'Error sending email. Please try again.';
        console.log(error.text);
      });
  }

  
}
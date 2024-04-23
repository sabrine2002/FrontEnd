import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-help-c',
  templateUrl: './help-c.component.html',
  styleUrls: ['./help-c.component.scss']
})
export class HelpCComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  submitForm(): void {
    this.http.post('http://localhost:8076/api/test/contact-messages', this.formData)
      .subscribe(
        (response) => {
          console.log('Message sent successfully:', response);
          // Réinitialiser le formulaire après l'envoi
          this.formData = {};
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
  }
}

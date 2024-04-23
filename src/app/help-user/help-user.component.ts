import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactMessage } from '../models/ContactMessage .model';


@Component({
  selector: 'app-help-user',
  templateUrl: './help-user.component.html',
  styleUrls: ['./help-user.component.scss']
})
export class HelpUserComponent implements OnInit {
  contactMessages: ContactMessage[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllContactMessages();
  }

  getAllContactMessages(): void {
    this.http.get<ContactMessage[]>('http://localhost:8076/api/test/all')
      .subscribe(
        (response) => {
          this.contactMessages = response;
        },
        (error) => {
          this.errorMessage = 'Error retrieving contact messages: ' + error.message;
        }
      );
  }
}

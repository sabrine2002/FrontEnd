import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  newUser: User = { username: '', email: '', password: '' };
  errorMessage = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      user => {
        // Utilisateur créé avec succès, rediriger vers la page d'administration par exemple
        this.router.navigate(['/admin']);
      },
      error => {
        this.errorMessage = 'Error creating user: ' + error.message;
      }
    );
  }
}

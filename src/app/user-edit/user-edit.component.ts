import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user-edit',
  templateUrl:'./user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId: number | undefined;
  user: User | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Récupérer l'ID de l'utilisateur depuis l'URL
      if (this.userId) { // Vérifier si l'ID est défini
        this.loadUserDetails();
      }
    });
  }

  loadUserDetails(): void {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(
        user => {
          this.user = user;
        },
        error => {
          this.errorMessage = 'Error retrieving user details: ' + error.message;
        }
      );
    }
  }

  updateUser(): void {
    if (this.userId && this.user) { // Vérifier si l'ID et l'utilisateur sont définis
      this.userService.updateUser(this.userId, this.user).subscribe(
        updatedUser => {
          // Rediriger vers la page de liste des utilisateurs après la mise à jour
          this.router.navigate(['/admin']);
        },
        error => {
          this.errorMessage = 'Error updating user: ' + error.message;
        }
      );
    }
  }
}

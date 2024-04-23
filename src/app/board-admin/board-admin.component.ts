import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content?: string;
  users: User[] = [];
  errorMessage = '';
  

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
    this.getAllUsers();

  }
  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        this.errorMessage = 'Error retrieving users: ' + error.message;
      }
    );
  }

  createUser(username: string, email: string, password: string): void {
    const newUser: User = { username, email, password };
    this.userService.createUser(newUser).subscribe(
      user => {
        this.users.push(user);
      },
      error => {
        this.errorMessage = 'Error creating user: ' + error.message;
      }
    );
  }
  navigateToCreateUser(): void {
  this.router.navigate(['/create-user']);
}

  navigateToUpdateUser(id: number | undefined): void {
    if (id === undefined) {
      console.error("ID is undefined");
      return;
    }

    // Naviguer vers la page de modification des utilisateurs avec l'identifiant de l'utilisateur à modifier
    this.router.navigate(['/edit-user', id]);
  }


  deleteUser(id: number | undefined, username: string): void {
    if (id === undefined) {
      console.error("ID is undefined");
      return;
    }

    const confirmed = window.confirm(`Are you sure you want to delete user ${id}, ${username}?`);
    if (!confirmed) {
      return;
    }
  
    this.userService.deleteUser(id).subscribe(
      () => {
        // Suppression réussie, afficher un message de confirmation
        alert(`User ${id}, ${username} is deleted.`);
        this.users = this.users.filter(user => user.id !== id);
      },
      error => {
        this.errorMessage = 'Error deleting user: ' + error.message;
      }
    );
  }

  deleteAllUsers(): void {
    this.userService.deleteAllUsers().subscribe(
      () => {
        this.users = [];
      },
      error => {
        this.errorMessage = 'Error deleting all users: ' + error.message;
      }
    );
  }
  
  
}

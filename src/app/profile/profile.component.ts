import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  users: User[] = [];


  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();

  }
  
  navigateToUpdateUser(id: number | undefined): void {
    if (id === undefined) {
      console.error("ID is undefined");
      return;
    }

    // Naviguer vers la page de modification des utilisateurs avec l'identifiant de l'utilisateur à modifier
    this.router.navigate(['/edit-user', id]);
  }

}
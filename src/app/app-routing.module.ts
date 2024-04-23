import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAuditComponent } from './board-audit/board-audit.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersComponent } from './users/users.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ContractComponent } from './contract/contract.component';
import { HelpCComponent } from './help-c/help-c.component';
import { HelpUserComponent } from './help-user/help-user.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'user', component: BoardUserComponent },
{ path: 'audit', component: BoardAuditComponent },
{ path: 'admin', component: BoardAdminComponent },
{ path: 'edit-user/:id', component: UserEditComponent },
{ path: 'create-user', component: UserCreateComponent },
{ path: 'users', component: UsersComponent },
{ path: 'transaction', component: TransactionComponent },
{ path: 'contract', component: ContractComponent },
{ path: 'help', component: HelpCComponent },
{ path: 'msg', component: HelpUserComponent },



{ path: '', redirectTo: 'home', pathMatch: 'full' },
]// Route pour l'édition d'utilisateur];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

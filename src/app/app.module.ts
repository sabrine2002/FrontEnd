import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAuditComponent } from './board-audit/board-audit.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersComponent } from './users/users.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ContractComponent } from './contract/contract.component';
import { FooterComponent } from './footer/footer.component';
import { HelpCComponent } from './help-c/help-c.component';
import { CommonModule } from '@angular/common';
import { HelpUserComponent } from './help-user/help-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardAuditComponent,
    BoardUserComponent,
    UserEditComponent,
    UserCreateComponent,
    UsersComponent,
    TransactionComponent,
    ContractComponent,
    FooterComponent,
    HelpCComponent,
    HelpUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserInfoComponent} from './user/user-info/user-info.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {UserService} from './user/user.service';
import {AddUserComponent} from './user/add-user/add-user.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: 'add-user',
    component: AddUserComponent
  }, {
    path: 'users',
    component: UserListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserInfoComponent,
    AddUserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule


  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

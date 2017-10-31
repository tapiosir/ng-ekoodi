import {Component} from '@angular/core';
import {User} from './user/user';
import {UserService} from './user/user.service';

@Component({
  selector: 'ekoodi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedUserName: string;

  firstName: string;
  lastName: string;

  constructor(private userService: UserService) {
    this.selectedUserName = 'ekoodi';
    this.firstName = '';
    this.lastName = '';
  }

  addUser(): void {
    let user: User = new User(this.firstName, this.lastName);
    console.log(user);
    this.userService.addUser(user);
    this.firstName = '';
    this.lastName = '';
  }

  onUserSelected(user: User) {
    console.log(user);
    this.selectedUserName = user.firstName + ' ' + user.lastName;
  }

}

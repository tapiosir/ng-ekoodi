import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'ekoodi-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string;
  users: User[];
  @Output() userSelected: EventEmitter<User>;

  constructor() {
    this.title = 'User List';
    this.users = [];
    this.userSelected = new EventEmitter();
  }

  ngOnInit() {
    this.users = [
      new User('tapio', 'sirvio'),
      new User('joku', 'muu'),
      new User('asd', 'das')
    ];
  }

  onUserSelect(user: User) {
    this.userSelected.emit(user);

  }
}

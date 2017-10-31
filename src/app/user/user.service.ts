import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable()
export class UserService {

  private users: User[];

  constructor() {
    this.users = [
      new User('tapio', 'sirvio'),
      new User('joku', 'muu'),
      new User('asd', 'das')
    ];
  }

  getUsers(): User[] {
    return this.users;
  }
}

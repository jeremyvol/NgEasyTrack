import { Component } from '@angular/core';
// import { NgFor, NgIf } from '@angular/common';

import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from "./user/user.component";

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    TasksComponent,
    // NgFor,
    // NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;
  // selectedUser: {
  //   id: string,
  //   name: string,
  //   avatar: string
  // } | null = null;

  onSelectUser(id: string) {
    this.selectedUserId = id;
    // this.selectedUser = DUMMY_USERS.find(user => user.id === id)!;
  }

  get selectedUser() {
    return DUMMY_USERS.find(user => user.id === this.selectedUserId);
  }
}

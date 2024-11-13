import {
  Component,
  EventEmitter,
  Input,
  Output,
  // input,
  // output,
  // computed
} from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // without signals
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // with signals
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // with signals
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // without signals
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // with signals
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    // without signals
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}

import {
  Component,
  EventEmitter,
  Input,
  Output,
  // input,
  output,
  // computed
} from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // without signals
  @Input({ required: true }) user!: User;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

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

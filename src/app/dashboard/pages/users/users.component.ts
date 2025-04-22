import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService = inject(UsersService);
}

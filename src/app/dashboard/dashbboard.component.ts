import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@Component({
  selector: 'app-dashbboard',
  imports: [RouterOutlet, SidemenuComponent],
  templateUrl: './dashbboard.component.html',
})
export default class DashbboardComponent {}

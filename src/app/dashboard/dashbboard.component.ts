import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashbboard',
  imports: [RouterOutlet],
  templateUrl: './dashbboard.component.html',
})
export default class DashbboardComponent {}

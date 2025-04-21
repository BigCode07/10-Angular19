import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'shared-sidemenu',
  imports: [],
  templateUrl: './sidemenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'shared-sidemenu',
  imports: [RouterModule],
  templateUrl: './sidemenu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidemenuComponent {
  public menuItems = routes
    // Por cada ruta, toma su propiedad "children" si existe, si no, retorna un array vacío
    .map((route) => route.children ?? [])
    // Aplana el array de arrays de rutas hijas en un único array
    .flat()
    // Filtra para quedarse solo con las rutas que existen y tienen definido un "path"
    .filter((route) => route && route.path)
    // Filtra las rutas que NO contienen ":" en su "path"
    // (es decir, elimina rutas que contienen parámetros como ":id", ":nombre", etc.)
    .filter((route) => !route.path?.includes(':'));
}

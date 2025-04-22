import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <shared-title title="Change Detection" />
    <pre>{{ frameworkasSignal() | json }}</pre>
    <pre>{{ frameworkasProperty | json }}</pre>
  `,
})
export default class ChangeDetectionComponent {
  // public currentFramework = computed(
  //   () => `Change detection - ${this.frameworkasSignal().name}`
  // )

  public frameworkasSignal = signal<Object>({
    name: 'Angular with Signal',
    releaseDate: 2018,
  });

  public frameworkasProperty = {
    name: 'Angular with Property',
    releaseDate: 2015,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkasProperty.name = 'React';
      this.frameworkasSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('Hecho');
    }, 3000);
  }
}

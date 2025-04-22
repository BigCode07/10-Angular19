import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal<Boolean>(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}

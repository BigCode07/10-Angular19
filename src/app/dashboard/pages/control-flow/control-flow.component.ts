import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [],
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

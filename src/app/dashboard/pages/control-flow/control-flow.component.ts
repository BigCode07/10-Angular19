import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal<Boolean>(false);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}

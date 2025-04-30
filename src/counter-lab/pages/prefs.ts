import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../stores/counter-store';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      <button
        [disabled]="store.by() === 1"
        (click)="store.setBy(1)"
        class="btn join-item"
      >
        1
      </button>
      <button
        [disabled]="store.by() === 3"
        (click)="store.setBy(3)"
        class="btn join-item"
      >
        3
      </button>
      <button
        [disabled]="store.by() === 5"
        (click)="store.setBy(5)"
        class="btn join-item"
      >
        5
      </button>
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}

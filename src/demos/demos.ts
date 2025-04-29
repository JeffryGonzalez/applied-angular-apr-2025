import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HitCounter } from '../shared/services/hit-counter';

@Component({
  providers: [],
  selector: 'app-demos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex flex-row gap-4">
      <a class="link" routerLink="signals">Signals</a>
      <a class="link" routerLink="shared-state">Shared State</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class DemosComponent {
  hc = inject(HitCounter);
}

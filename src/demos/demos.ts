import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="flex flex-row">
      <a class="link" routerLink="signals">Signals</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class DemosComponent {}

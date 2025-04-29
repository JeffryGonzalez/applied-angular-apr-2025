import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-developer-news',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div>
      <a
        class="link"
        routerLink="list"
        [routerLinkActive]="['text-secondary', 'font-bold']"
        >List Of Links</a
      >
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class DeveloperNewsComponent {}

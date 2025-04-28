import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { LinkModel } from '../types';

@Component({
  selector: 'app-navbar-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="menu menu-horizontal px-1">
      @for (link of links(); track link.path) {
        <li>
          <a>{{ link.text }}</a>
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class NavbarCenterComponent {
  links = input.required<LinkModel[]>();
}

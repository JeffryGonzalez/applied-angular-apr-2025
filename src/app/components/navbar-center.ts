import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-center',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Developer News</summary>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  `,
  styles: ``,
})
export class NavbarCenterComponent {}

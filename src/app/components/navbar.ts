import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NavbarEndComponent } from './navbar-end';
import { NavbarCenterComponent } from './navbar-center';
import { NavbarDropdownComponent } from './navbar-dropdown';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavbarEndComponent, NavbarCenterComponent, NavbarDropdownComponent],
  template: `
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <app-navbar-dropdown />
        <a class="btn btn-ghost text-xl">Applied Angular Class</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <app-navbar-center />
      </div>
      <div class="navbar-end">
        <app-navbar-end />
      </div>
    </div>
  `,
  styles: ``,
})
export class NavbarComponent {
  links = signal([
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Developer News',
      path: 'developer-news',
    },
    {
      text: 'Demos',
      path: 'demos',
    },
  ]);
}

import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar />
    <main class="container mx-auto"></main>
  `,
  styles: [],
  imports: [NavbarComponent],
})
export class AppComponent {}

import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar />
    <main class="container mx-auto">
      <p>JEff Was Here</p>
    </main>
  `,
  styles: [],
  imports: [NavbarComponent],
})
export class AppComponent {}

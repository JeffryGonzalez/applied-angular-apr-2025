import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NewLinkModel } from '../types';

@Component({
  selector: 'app-developer-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul>
      @for (link of links(); track link.id) {
        <li class="card card-border bg-base-100 w-96">
          <div class="card-body">
            <p class="card-title text-accent">
              {{ link.title }}
            </p>
            <a [href]="link.href" class="link" target="_blank">{{
              link.href
            }}</a>
            @if (link.description) {
              <p>
                {{ link.description }}
              </p>
            }
          </div>
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class ListComponent {
  links = signal<NewLinkModel[]>([
    {
      id: '1',
      title: 'Applied Angular Course Material',
      description: 'Stuff from class',
      href: 'https://applied-angular.hypertheory.com',
    },
    {
      id: '99',
      title: 'TypeScript Official Documentation',
      href: 'https://typescriptlang.org',
    },
  ]);
}

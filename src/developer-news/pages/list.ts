import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { NewsLinkModel } from '../types';
import { NewsRatingComponent } from '../components/news-rating';

@Component({
  selector: 'app-developer-news-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NewsRatingComponent],
  template: `
    @if (links.isLoading()) {
      <span class="loading loading-spinner text-warning"></span>
    } @else {
      @if (links.error()) {
        <div class="alert alert-warning">Can't load your data!</div>
      } @else {
        <ul>
          @for (link of links.value(); track link.id) {
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
                <div class="card-actions">
                  <app-news-rating [link]="link" readPrompt="Mark As Read" />
                </div>
              </div>
            </li>
          } @empty {
            <p>There are not links to display. Sorry. Try again later.</p>
          }
        </ul>
      }
    }
  `,
  styles: ``,
})
export class ListComponent {
  // links = signal<NewsLinkModel[]>([
  //   {
  //     id: '1',
  //     title: 'Applied Angular Course Material',
  //     description: 'Stuff from class',
  //     href: 'https://applied-angular.hypertheory.com',
  //   },
  //   {
  //     id: '99',
  //     title: 'TypeScript Official Documentation',
  //     href: 'https://typescriptlang.org',
  //   },
  // ]);

  links = resource<NewsLinkModel[], unknown>({
    loader: () =>
      fetch('https://some-api.company-that-does-not-exist.com/news-links').then(
        (res) => res.json(),
      ),
  });
}

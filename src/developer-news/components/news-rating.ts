import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-news-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="flex gap-2">
      <label class="label">
        <input type="checkbox" checked="checked" class="toggle" />
        Link Read
      </label>

      <div class="rating">
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
          aria-label="1 star"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
          aria-label="2 star"
          checked="checked"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
          aria-label="3 star"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
          aria-label="4 star"
        />
        <input
          type="radio"
          name="rating-4"
          class="mask mask-star-2 bg-green-500"
          aria-label="5 star"
        />
      </div>

      <button class="btn btn-circle btn-error">X</button>
    </div>
  `,
  styles: ``,
})
export class NewsRatingComponent {}

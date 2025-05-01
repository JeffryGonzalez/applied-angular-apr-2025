import { JsonPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  isDevMode,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InfoStore } from '../stores/info-store';
import { tap } from 'rxjs';
import { DevBlockComponent } from '../../shared/components/dev-block';
@Component({
  selector: 'app-demos-info',
  providers: [InfoStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, JsonPipe, DevBlockComponent],
  template: `
    <form [formGroup]="form" (ngSubmit)="addInfo()">
      <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend class="fieldset-legend">Add A Contact</legend>

        <label class="label" for="email">Email Address</label>
        <input
          formControlName="email"
          name="email"
          type="text"
          class="input"
          placeholder="jenny@company.com"
        />
        @let emailField = form.controls.email;
        @if (emailField.errors && (emailField.touched || emailField.dirty)) {
          <div class="alert alert-error mt-2">
            <div class="flex-1">
              <p>We have errors!</p>
            </div>
            @if (emailField.hasError('email')) {
              <p>Invalid email address</p>
            }
            @if (emailField.hasError('required')) {
              <p>Email can't be blank</p>
            }
          </div>
        }

        <label class="label" for="phone">Phone</label>
        <input
          name="phone"
          type="text"
          class="input"
          placeholder="867-5309"
          formControlName="phone"
        />
      </fieldset>
      <button type="submit" class="btn btn-primary mt-4">Submit</button>
      <button type="reset" class="btn btn-secondary mt-4">Reset</button>
    </form>
    @defer (when isDev) {
      <app-dev-block title="Form Value">
        {{ form.value | json }}
      </app-dev-block>
    }
  `,
  styles: ``,
})
export class InfoComponent {
  isDev = isDevMode();
  store = inject(InfoStore);
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    phone: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  constructor() {
    // TODO UNSUBSCRIBE
    this.form.controls.email.setValue(this.store.email());
    this.form.controls.phone.setValue(this.store.phone());

    this.form.valueChanges
      .pipe(
        takeUntilDestroyed(), // when this component is destroyed, unsubscribe
        tap((value) => {
          this.store.setEmail(value.email || '');
          this.store.setPhone(value.phone || '');
        }),
      )
      .subscribe();
  }

  addInfo() {
    this.form.markAllAsTouched({});
    if (this.form.invalid) {
      console.log('Form is invalid');
    } else {
      console.log(this.form.value);
      this.form.reset();
    }
  }
}

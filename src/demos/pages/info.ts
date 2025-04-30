import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InfoStore } from '../stores/info-store';
import { tap } from 'rxjs';
@Component({
  selector: 'app-demos-info',
  providers: [InfoStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="form" (ngSubmit)="addInfo()">
      <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend class="fieldset-legend">Your Contact Information Please</legend>

        <label class="label" for="email">Email Address</label>
        <input
          formControlName="email"
          name="email"
          type="text"
          class="input"
          placeholder="jenny@company.com"
        />
        @if (
          form.controls.email.errors &&
          (form.controls.email.touched || form.controls.email.dirty)
        ) {
          <div class="alert alert-error mt-2">
            <div class="flex-1">
              <p>We have errors!</p>
            </div>
            @if (form.controls.email.hasError('email')) {
              <p>Invalid email address</p>
            }
            @if (form.controls.email.hasError('required')) {
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
    <pre>
    {{ form.value | json }}
</pre>
  `,
  styles: ``,
})
export class InfoComponent {
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
    if (this.form.invalid) {
      console.log('Form is invalid');
    } else {
      console.log(this.form.value);
      this.form.reset();
    }
  }
}

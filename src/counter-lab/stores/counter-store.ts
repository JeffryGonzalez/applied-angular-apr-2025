import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type CounterState = {
  by: 1 | 3 | 5;
  current: number;
};

export const CounterStore = signalStore(
  withState<CounterState>({
    by: 1,
    current: 0,
  }),
  withMethods((store) => {
    // some magic can happen here.
    return {
      setBy: (by: 1 | 3 | 5) => {
        patchState(store, { by });
      },
      increment: () => {
        patchState(store, { current: store.current() + store.by() });
      },
      decrement: () => {
        patchState(store, { current: store.current() - store.by() });
      },
    };
  }),
  withComputed((store) => {
    return {
      decrementDisabled: computed(() => store.current() - store.by() < 0),
    };
  }),
);

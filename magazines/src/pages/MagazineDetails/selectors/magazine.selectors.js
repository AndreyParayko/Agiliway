import { createSelector } from 'reselect';

const selectMagazine = (state) => state.magazine;

export const selectIsLoading = createSelector(
  selectMagazine,
  (magazine) => magazine.isLoading,
);

export const selectData = createSelector(
  selectMagazine,
  (magazine) => magazine.data,
);

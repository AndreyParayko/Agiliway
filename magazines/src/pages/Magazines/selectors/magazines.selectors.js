import { createSelector } from "reselect";
import moment from "moment";

const selectModal = (state) => state.modal;

export const selectModalName = createSelector(
  selectModal,
  (modal) => modal.name
);

export const selectModalId = createSelector(selectModal, (modal) => modal.id);

export const selectModalIsLoading = createSelector(
  selectModal,
  (modal) => modal.isLoading
);

export const selectModalData = createSelector(
  selectModal,
  (modal) => modal.data
);

export const selectModalType = createSelector(
  selectModal,
  (modal) => modal.type
);

const selectMagazines = (state) => state.magazines;

export const selectMagazinesData = createSelector(
  selectMagazines,
  (magazines) => magazines.data
);

export const selectMagazinesIsLoading = createSelector(
  selectMagazines,
  (magazines) => magazines.isLoading
);

export const selectMagazinesWithFormatedData = createSelector(
  selectMagazines,
  (magazines) =>
    magazines.data.map((item) => {
      const obj = Object.assign({}, item);
      obj["createDate"] = moment(obj["createDate"]).format(
        "ll"
      );
      return obj;
    })
);

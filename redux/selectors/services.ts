import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const services = (state: AppState) => state.services.allServices;
export const getServiceOptions = createSelector(services, (data) => {
  return data.map(({ name, id }) => {
    return {
      value: id,
      label: name,
    };
  });
});

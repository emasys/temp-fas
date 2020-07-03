import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const locations = (state: AppState) => state.locations;
export const getLocations = createSelector(locations, (data) => {
  return data.map(({ name, states }) => {
    const areas = states.map((state) => ({
      label: state.name,
      value: state.name,
      id: state.stateId
    }));
    return { value: name, label: name, areas };
  });
});

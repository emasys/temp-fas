import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const locations = (state: AppState) => state.locations;
export const getLocations = createSelector(locations, (data) => {
  return data.map(({ name, areas, id }) => {
    const formatAreas = areas.map((state) => ({
      label: state.name,
      value: state.id,
      id: state.stateId,
    }));
    return {
      value: id,
      label: name,
      areas: formatAreas,
    };
  });
});

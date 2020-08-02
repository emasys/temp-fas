import { createSelector } from 'reselect';
import { AppState } from '../../lib/initialState';

const locations = (state: AppState) => state.locations;
const vendor = (state: AppState) => state.vendor.activeVendor;

export const getLocations = createSelector(locations, (data) => {
  let options = data.map(({ name, areas, id }) => {
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
  return options;
});

export const getOneLocation = createSelector(
  [locations, vendor],
  (data, vendor) => {
    const location: any = {
      state: '',
      area: '',
    };
    data.forEach(({ name, areas, id }) => {
      if (id === vendor.locationId) {
        location.state = {
          label: name,
          value: id,
        };
        location.area = null;
      }
      areas.forEach((state) => {
        if (state.id === vendor.locationId) {
          location.state = {
            label: name,
            value: id,
          };
          location.area = {
            label: state.name,
            value: state.id,
          };
        }
      });
    });
    return location;
  }
);

export const ALL_VALUES = 'All';

export const INFINITE_SCROLL_BATCH_SIZE = 15;
// If the user has scrolled within 200px of the bottom, add more data
export const INFINITE_SCROLL_BOTTOM_BUFFER = 200;

export const ALL_SELECTED_METRICS = ['areaInSqKm', 'population'];
export const METRIC_SELECTION_OTIONS = [
  { label: 'All', value: ALL_SELECTED_METRICS },
  { label: 'Area in Square Km', value: ['areaInSqKm'] },
  { label: 'Population', value: ['population'] },
];


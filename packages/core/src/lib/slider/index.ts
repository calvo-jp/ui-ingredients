export * as Slider from './slider.js';

export type {SliderControlProps} from './slider-control.svelte';
export type {SliderDraggingIndicatorProps} from './slider-dragging-indicator.svelte';
export type {SliderHiddenInputProps} from './slider-hidden-input.svelte';
export type {SliderLabelProps} from './slider-label.svelte';
export type {SliderMarkerGroupProps} from './slider-marker-group.svelte';
export type {SliderMarkerProps} from './slider-marker.svelte';
export type {SliderRangeProps} from './slider-range.svelte';
export type {SliderProps} from './slider-root.svelte';
export type {SliderThumbProps} from './slider-thumb.svelte';
export type {SliderTrackProps} from './slider-track.svelte';
export type {SliderValueTextProps} from './slider-value-text.svelte';

export {
  createSlider,
  type CreateSliderProps,
  type CreateSliderReturn,
} from './create-slider.svelte.js';
export {anatomy as sliderAnatomy} from './slider-anatomy.js';
export {getSliderContext, setSliderContext} from './slider-context.svelte.js';

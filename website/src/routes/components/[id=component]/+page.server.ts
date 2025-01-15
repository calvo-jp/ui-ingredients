import accordionMarkdown from '$lib/assets/markdown/accordion.md?raw';
import alertDialogMarkdown from '$lib/assets/markdown/alert-dialog.md?raw';
import alertMarkdown from '$lib/assets/markdown/alert.md?raw';
import angleSliderMarkdown from '$lib/assets/markdown/angle-slider.md?raw';
import avatarMarkdown from '$lib/assets/markdown/avatar.md?raw';
import breadcrumbsMarkdown from '$lib/assets/markdown/breadcrumbs.md?raw';
import carouselMarkdown from '$lib/assets/markdown/carousel.md?raw';
import checkboxMarkdown from '$lib/assets/markdown/checkbox.md?raw';
import clipboardMarkdown from '$lib/assets/markdown/clipboard.md?raw';
import collapsibleMarkdown from '$lib/assets/markdown/collapsible.md?raw';
import colorPickerMarkdown from '$lib/assets/markdown/color-picker.md?raw';
import comboboxMarkdown from '$lib/assets/markdown/combobox.md?raw';
import datePickerMarkdown from '$lib/assets/markdown/date-picker.md?raw';
import dialogMarkdown from '$lib/assets/markdown/dialog.md?raw';
import drawerMarkdown from '$lib/assets/markdown/drawer.md?raw';
import editableMarkdown from '$lib/assets/markdown/editable.md?raw';
import fieldMarkdown from '$lib/assets/markdown/field.md?raw';
import fileUploadMarkdown from '$lib/assets/markdown/file-upload.md?raw';
import floatingPanelMarkdown from '$lib/assets/markdown/floating-panel.md?raw';
import hoverCardMarkdown from '$lib/assets/markdown/hover-card.md?raw';
import menuMarkdown from '$lib/assets/markdown/menu.md?raw';
import numberInputMarkdown from '$lib/assets/markdown/number-input.md?raw';
import paginationMarkdown from '$lib/assets/markdown/pagination.md?raw';
import pinInputMarkdown from '$lib/assets/markdown/pin-input.md?raw';
import popoverMarkdown from '$lib/assets/markdown/popover.md?raw';
import progressCircularMarkdown from '$lib/assets/markdown/progress-circular.md?raw';
import progressLinearMarkdown from '$lib/assets/markdown/progress-linear.md?raw';
import qrCodeMarkdown from '$lib/assets/markdown/qr-code.md?raw';
import radioGroupMarkdown from '$lib/assets/markdown/radio-group.md?raw';
import ratingGroupMarkdown from '$lib/assets/markdown/rating-group.md?raw';
import segmentGroupMarkdown from '$lib/assets/markdown/segment-group.md?raw';
import selectMarkdown from '$lib/assets/markdown/select.md?raw';
import signaturePadMarkdown from '$lib/assets/markdown/signature-pad.md?raw';
import sliderMarkdown from '$lib/assets/markdown/slider.md?raw';
import splitterMarkdown from '$lib/assets/markdown/splitter.md?raw';
import stepsMarkdown from '$lib/assets/markdown/steps.md?raw';
import switchMarkdown from '$lib/assets/markdown/switch.md?raw';
import tabsMarkdown from '$lib/assets/markdown/tabs.md?raw';
import tagsInputMarkdown from '$lib/assets/markdown/tags-input.md?raw';
import timePickerMarkdown from '$lib/assets/markdown/time-picker.md?raw';
import timerMarkdown from '$lib/assets/markdown/timer.md?raw';
import toastMarkdown from '$lib/assets/markdown/toast.md?raw';
import toggleGroupMarkdown from '$lib/assets/markdown/toggle-group.md?raw';
import toggleMarkdown from '$lib/assets/markdown/toggle.md?raw';
import tooltipMarkdown from '$lib/assets/markdown/tooltip.md?raw';
import tourMarkdown from '$lib/assets/markdown/tour.md?raw';
import treeViewMarkdown from '$lib/assets/markdown/tree-view.md?raw';
import {parseMarkdown} from '$lib/server/utils';
import type {ComponentId} from '$lib/types';
import {parseEnum} from '$lib/utils';
import {error} from '@sveltejs/kit';
import {z} from 'zod';
import type {EntryGenerator, PageServerLoad} from './$types';

const MARKDOWN = {
  'alert-dialog': alertDialogMarkdown,
  'angle-slider': angleSliderMarkdown,
  'color-picker': colorPickerMarkdown,
  'date-picker': datePickerMarkdown,
  'file-upload': fileUploadMarkdown,
  'floating-panel': floatingPanelMarkdown,
  'hover-card': hoverCardMarkdown,
  'number-input': numberInputMarkdown,
  'pin-input': pinInputMarkdown,
  'progress-circular': progressCircularMarkdown,
  'progress-linear': progressLinearMarkdown,
  'qr-code': qrCodeMarkdown,
  'radio-group': radioGroupMarkdown,
  'rating-group': ratingGroupMarkdown,
  'segment-group': segmentGroupMarkdown,
  'signature-pad': signaturePadMarkdown,
  'tags-input': tagsInputMarkdown,
  'time-picker': timePickerMarkdown,
  'toggle-group': toggleGroupMarkdown,
  'tree-view': treeViewMarkdown,
  accordion: accordionMarkdown,
  alert: alertMarkdown,
  avatar: avatarMarkdown,
  breadcrumbs: breadcrumbsMarkdown,
  carousel: carouselMarkdown,
  checkbox: checkboxMarkdown,
  clipboard: clipboardMarkdown,
  collapsible: collapsibleMarkdown,
  combobox: comboboxMarkdown,
  dialog: dialogMarkdown,
  drawer: drawerMarkdown,
  editable: editableMarkdown,
  field: fieldMarkdown,
  menu: menuMarkdown,
  pagination: paginationMarkdown,
  popover: popoverMarkdown,
  select: selectMarkdown,
  slider: sliderMarkdown,
  splitter: splitterMarkdown,
  steps: stepsMarkdown,
  switch: switchMarkdown,
  tabs: tabsMarkdown,
  timer: timerMarkdown,
  toast: toastMarkdown,
  toggle: toggleMarkdown,
  tooltip: tooltipMarkdown,
  tour: tourMarkdown,
} satisfies Record<ComponentId, unknown>;

export const prerender = true;

export const entries: EntryGenerator = () => {
  return Object.keys(MARKDOWN).map((id) => ({id}));
};

export const load: PageServerLoad = async ({params}) => {
  const id = parseEnum(Object.keys(MARKDOWN), params.id);

  if (!id) return error(404);

  const {html, meta} = await parseMarkdown(MARKDOWN[id]);
  const {title, description} = z
    .object({
      title: z.string(),
      description: z.string(),
    })
    .parse(meta);

  return {
    id,
    html,
    title,
    description,
  };
};

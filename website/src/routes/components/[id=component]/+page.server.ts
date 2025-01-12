import type {ComponentId} from '$lib/types';
import {parseMarkdown} from '$lib/utils';
import fs from 'node:fs/promises';
import path from 'node:path';
import type {PageServerLoad} from './$types';

const filenames: Record<string, string> = {
  'alert-dialog': 'alert-dialog.md',
  'angle-slider': 'angle-slider.md',
  'color-picker': 'color-picker.md',
  'date-picker': 'date-picker.md',
  'file-upload': 'file-upload.md',
  'floating-panel': 'floating-panel.md',
  'hover-card': 'hover-card.md',
  'number-input': 'number-input.md',
  'pin-input': 'pin-input.md',
  'progress-circular': 'progress-circular.md',
  'progress-linear': 'progress-linear.md',
  'qr-code': 'qr-code.md',
  'radio-group': 'radio-group.md',
  'rating-group': 'rating-group.md',
  'segment-group': 'segment-group.md',
  'signature-pad': 'signature-pad.md',
  'tags-input': 'tags-input.md',
  'time-picker': 'time-picker.md',
  'toggle-group': 'toggle-group.md',
  'tree-view': 'tree-view.md',
  accordion: 'accordion.md',
  alert: 'alert.md',
  avatar: 'avatar.md',
  breadcrumbs: 'breadcrumbs.md',
  carousel: 'carousel.md',
  checkbox: 'checkbox.md',
  clipboard: 'clipboard.md',
  collapsible: 'collapsible.md',
  combobox: 'combobox.md',
  dialog: 'dialog.md',
  drawer: 'drawer.md',
  editable: 'editable.md',
  field: 'field.md',
  menu: 'menu.md',
  pagination: 'pagination.md',
  popover: 'popover.md',
  select: 'select.md',
  slider: 'slider.md',
  splitter: 'splitter.md',
  steps: 'steps.md',
  switch: 'switch.md',
  tabs: 'tabs.md',
  timer: 'timer.md',
  toast: 'toast.md',
  toggle: 'toggle.md',
  tooltip: 'tooltip.md',
  tour: 'tour.md',
} satisfies Record<ComponentId, string>;

export const load: PageServerLoad = async ({params}) => {
  const location = path.join(
    process.cwd(),
    'src/lib/assets/markdown',
    filenames[params.id],
  );

  const markdown = await fs.readFile(location, 'utf-8');
  const {html} = await parseMarkdown(markdown);

  return {html};
};

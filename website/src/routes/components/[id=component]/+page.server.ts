import type {ComponentId} from '$lib/types';
import {parseEnum, parseMarkdown} from '$lib/utils';
import {error} from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';
import {z} from 'zod';
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
  const id = parseEnum<ComponentId>(
    [
      'alert-dialog',
      'angle-slider',
      'color-picker',
      'date-picker',
      'file-upload',
      'floating-panel',
      'hover-card',
      'number-input',
      'pin-input',
      'progress-circular',
      'progress-linear',
      'qr-code',
      'radio-group',
      'rating-group',
      'segment-group',
      'signature-pad',
      'tags-input',
      'time-picker',
      'toggle-group',
      'tree-view',
      'accordion',
      'alert',
      'avatar',
      'breadcrumbs',
      'carousel',
      'checkbox',
      'clipboard',
      'collapsible',
      'combobox',
      'dialog',
      'drawer',
      'editable',
      'field',
      'menu',
      'pagination',
      'popover',
      'select',
      'slider',
      'splitter',
      'steps',
      'switch',
      'tabs',
      'timer',
      'toast',
      'toggle',
      'tooltip',
      'tour',
    ],
    params.id,
  );

  if (!id) return error(404);

  const location = path.resolve('src/lib/assets/markdown', filenames[id]);

  const markdown = await fs.readFile(location, 'utf-8');
  const {html, meta} = await parseMarkdown(markdown);

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

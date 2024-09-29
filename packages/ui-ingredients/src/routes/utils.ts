interface Link {
  path: string;
  label: string;
}

export const links: Link[] = [
  {
    label: 'Accordion',
    path: '/accordion',
  },
  {
    label: 'Avatar',
    path: '/avatar',
  },
  {
    label: 'Checkbox',
    path: '/checkbox',
  },
  {
    label: 'Dialog',
    path: '/dialog',
  },
  {
    label: 'Collapsible',
    path: '/collapsible',
  },
  {
    label: 'Combobox',
    path: '/combobox',
  },
  {
    label: 'Switch',
    path: '/switch',
  },
  {
    label: 'Tooltip',
    path: '/tooltip',
  },
  {
    label: 'Pin Input',
    path: '/pin-input',
  },
  {
    label: 'Number Input',
    path: '/number-input',
  },
  {
    label: 'Carousel',
    path: '/carousel',
  },
  {
    label: 'Clipboard',
    path: '/clipboard',
  },
  {
    label: 'Toggle Group',
    path: '/toggle-group',
  },
  {
    label: 'Tabs',
    path: '/tabs',
  },
  {
    label: 'Popover',
    path: '/popover',
  },
  {
    label: 'Pagination',
    path: '/pagination',
  },
  {
    label: 'Hover Card',
    path: '/hover-card',
  },
  {
    label: 'Progress',
    path: '/progress',
  },
  {
    label: 'Slider',
    path: '/slider',
  },
  {
    label: 'Toast',
    path: '/toast',
  },
  {
    label: 'Select',
    path: '/select',
  },
  {
    label: 'Radio Group',
    path: '/radio-group',
  },
  {
    label: 'Steps',
    path: '/steps',
  },
  {
    label: 'Timer',
    path: '/timer',
  },
  {
    label: 'Tags Input',
    path: '/tags-input',
  },
  {
    label: 'Editable',
    path: '/editable',
  },
  {
    label: 'Rating Group',
    path: '/rating-group',
  },
  {
    label: 'Segment Group',
    path: '/segment-group',
  },
  {
    label: 'Menu',
    path: '/menu',
  },
  {
    label: 'Context Menu',
    path: '/menu/context',
  },
  {
    label: 'Nested Menu',
    path: '/menu/nested',
  },
  {
    label: 'Date Picker',
    path: '/date-picker',
  },
  {
    label: 'File Upload',
    path: '/file-upload',
  },
  {
    label: 'Signature Pad',
    path: '/signature-pad',
  },
  {
    label: 'Tree View',
    path: '/tree-view',
  },
  {
    label: 'QR Code',
    path: '/qr-code',
  },
  {
    label: 'Splitter',
    path: '/splitter',
  },
  {
    label: 'Range Date Picker',
    path: '/date-picker/range',
  },
  {
    label: 'Field',
    path: '/field',
  },
  {
    label: 'Time Picker',
    path: '/time-picker',
  },
  {
    label: 'Color Picker',
    path: '/color-picker',
  },
  {
    label: 'Presence',
    path: '/presence',
  },
  {
    label: 'Highlight',
    path: '/highlight',
  },
  {
    label: 'Time Picker',
    path: '/time-picker',
  },
  {
    label: 'Tour',
    path: '/tour',
  },
].toSorted((i, j) => i.label.localeCompare(j.label));

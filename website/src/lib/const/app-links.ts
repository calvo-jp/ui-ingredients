interface Link {
  path: string;
  label: string;
  betaBadge?: boolean;
}

const COMPONENT_LINKS: Link[] = [
  {
    path: '/components/accordion',
    label: 'Accordion',
  },
  {
    path: '/components/alert',
    label: 'Alert',
  },
  {
    path: '/components/alert-dialog',
    label: 'Alert Dialog',
  },
  {
    path: '/components/avatar',
    label: 'Avatar',
  },
  {
    path: '/components/breadcrumbs',
    label: 'Breadcrumbs',
  },
  {
    path: '/components/carousel',
    label: 'Carousel',
    betaBadge: true,
  },
  {
    path: '/components/checkbox',
    label: 'Checkbox',
  },
  {
    path: '/components/clipboard',
    label: 'Clipboard',
  },
  {
    path: '/components/collapsible',
    label: 'Collapsible',
  },
  {
    path: '/components/color-picker',
    label: 'Color Picker',
  },
  {
    path: '/components/combobox',
    label: 'Combobox',
  },
  {
    path: '/components/date-picker',
    label: 'Date Picker',
  },
  {
    path: '/components/dialog',
    label: 'Dialog',
  },
  {
    path: '/components/drawer',
    label: 'Drawer',
  },
  {
    path: '/components/editable',
    label: 'Editable',
  },
  {
    path: '/components/field',
    label: 'Field',
  },
  {
    path: '/components/file-upload',
    label: 'File Upload',
  },
  // {
  //   path: '/components/floating-panel',
  //   label: 'Floating Panel',
  // },
  {
    path: '/components/hover-card',
    label: 'Hover Card',
  },
  {
    path: '/components/menu',
    label: 'Menu',
  },
  {
    path: '/components/number-input',
    label: 'Number Input',
  },
  {
    path: '/components/pagination',
    label: 'Pagination',
  },
  {
    path: '/components/pin-input',
    label: 'Pin Input',
  },
  {
    path: '/components/popover',
    label: 'Popover',
  },
  {
    path: '/components/progress-linear',
    label: 'Progress - Linear',
  },
  {
    path: '/components/progress-circular',
    label: 'Progress - Circular',
  },
  {
    path: '/components/qr-code',
    label: 'QR Code',
  },
  {
    path: '/components/radio-group',
    label: 'Radio Group',
  },
  {
    path: '/components/rating-group',
    label: 'Rating Group',
  },
  {
    path: '/components/segment-group',
    label: 'Segment Group',
  },
  {
    path: '/components/select',
    label: 'Select',
  },
  {
    path: '/components/signature-pad',
    label: 'Signature Pad',
  },
  {
    path: '/components/slider',
    label: 'Slider',
  },
  {
    path: '/components/splitter',
    label: 'Splitter',
  },
  {
    path: '/components/steps',
    label: 'Steps',
  },
  {
    path: '/components/switch',
    label: 'Switch',
  },
  {
    path: '/components/tabs',
    label: 'Tabs',
  },
  {
    path: '/components/tags-input',
    label: 'Tags Input',
  },
  // {
  //   path: '/components/time-picker',
  //   label: 'Time Picker',
  //   beta: true,
  // },
  {
    path: '/components/timer',
    label: 'Timer',
  },
  {
    path: '/components/toast',
    label: 'Toast',
  },
  {
    path: '/components/toggle',
    label: 'Toggle',
  },
  {
    path: '/components/toggle-group',
    label: 'Toggle Group',
  },
  {
    path: '/components/tooltip',
    label: 'Tooltip',
  },
  {
    path: '/components/tour',
    label: 'Tour',
    betaBadge: true,
  },
  {
    path: '/components/tree-view',
    label: 'Tree View',
    betaBadge: true,
  },
];

const UTILITY_LINKS: Link[] = [
  {
    path: '/utilities/environment-provider',
    label: 'Environment Provider',
  },
  {
    path: '/utilities/highlight',
    label: 'Highlight',
  },
  {
    path: '/utilities/locale-provider',
    label: 'Locale Provider',
  },
  {
    path: '/utilities/portal',
    label: 'Portal',
  },
  {
    path: '/utilities/presence',
    label: 'Presence',
  },
];

interface ParentLink {
  label: string;
  links: Link[];
}

export const APP_LINKS: ParentLink[] = [
  {
    label: 'Overview',
    links: [
      {
        label: 'Introduction',
        path: '/',
      },
      {
        label: 'Getting Started',
        path: '/getting-started',
      },
      {
        label: 'Styling',
        path: '/styling',
      },
      {
        label: 'asChild',
        path: '/aschild',
      },
    ],
  },
  {
    label: 'Components',
    links: COMPONENT_LINKS,
  },
  {
    label: 'Utilities',
    links: UTILITY_LINKS,
  },
];

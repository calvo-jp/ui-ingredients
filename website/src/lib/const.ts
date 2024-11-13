import {
  getAccessibilityDoc,
  getApiDoc,
  getDataAttrDoc,
  type AccessibilityDoc,
  type ApiDoc,
  type DataAttrEntry,
} from '@zag-js/docs';
import {getAnatomyIcon} from './anatomy-icons';

interface Details {
  slug: string;
  name: string;
  apiDoc?: ApiDoc;
  dataAttrDoc?: DataAttrEntry;
  accessibilityDoc?: AccessibilityDoc;
  markdownPath: string;
  anatomyIcon?: string;
  isPreview?: boolean;
}

export const COMPONENTS: Details[] = [
  {
    slug: 'accordion',
    name: 'Accordion',
    get apiDoc() {
      return getApiDoc('accordion');
    },
    get dataAttrDoc() {
      return getDataAttrDoc('accordion');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('accordion');
    },
    get anatomyIcon() {
      return getAnatomyIcon('accordion');
    },
    markdownPath: 'src/lib/docs/accordion.md',
  },
  {
    slug: 'alert',
    name: 'Alert',
    markdownPath: 'src/lib/docs/alert.md',
  },
  {
    slug: 'alert-dialog',
    name: 'Alert Dialog',
    markdownPath: 'src/lib/docs/alert-dialog.md',
    apiDoc: getApiDoc('dialog'),
    dataAttrDoc: getDataAttrDoc('dialog'),
    accessibilityDoc: getAccessibilityDoc('dialog'),
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    markdownPath: 'src/lib/docs/avatar.md',
    apiDoc: getApiDoc('avatar'),
    dataAttrDoc: getDataAttrDoc('avatar'),
    get anatomyIcon() {
      return getAnatomyIcon('avatar');
    },
  },
  {
    slug: 'breadcrumbs',
    name: 'Breadcrumbs',
    markdownPath: 'src/lib/docs/breadcrumbs.md',
  },
  {
    slug: 'carousel',
    name: 'Carousel',
    markdownPath: 'src/lib/docs/carousel.md',
    apiDoc: getApiDoc('carousel'),
    dataAttrDoc: getDataAttrDoc('carousel'),
    get anatomyIcon() {
      return getAnatomyIcon('carousel');
    },

    isPreview: true,
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    markdownPath: 'src/lib/docs/checkbox.md',
    apiDoc: getApiDoc('checkbox'),
    dataAttrDoc: getDataAttrDoc('checkbox'),
    accessibilityDoc: getAccessibilityDoc('checkbox'),
    get anatomyIcon() {
      return getAnatomyIcon('checkbox');
    },
  },
  {
    slug: 'clipboard',
    name: 'Clipboard',
    markdownPath: 'src/lib/docs/clipboard.md',
    apiDoc: getApiDoc('clipboard'),
    dataAttrDoc: getDataAttrDoc('clipboard'),
    get anatomyIcon() {
      return getAnatomyIcon('clipboard');
    },
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    markdownPath: 'src/lib/docs/collapsible.md',
    apiDoc: getApiDoc('collapsible'),
    dataAttrDoc: getDataAttrDoc('collapsible'),
    accessibilityDoc: getAccessibilityDoc('collapsible'),
  },
  {
    slug: 'color-picker',
    name: 'Color Picker',
    markdownPath: 'src/lib/docs/color-picker.md',
    apiDoc: getApiDoc('color-picker'),
    dataAttrDoc: getDataAttrDoc('color-picker'),
    accessibilityDoc: getAccessibilityDoc('color-picker'),
    get anatomyIcon() {
      return getAnatomyIcon('color-picker');
    },
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    markdownPath: 'src/lib/docs/combobox.md',
    apiDoc: getApiDoc('combobox'),
    dataAttrDoc: getDataAttrDoc('combobox'),
    accessibilityDoc: getAccessibilityDoc('combobox'),
    get anatomyIcon() {
      return getAnatomyIcon('combobox');
    },
  },
  {
    slug: 'date-picker',
    name: 'Date Picker',
    markdownPath: 'src/lib/docs/date-picker.md',
    apiDoc: getApiDoc('date-picker'),
    dataAttrDoc: getDataAttrDoc('date-picker'),
    accessibilityDoc: getAccessibilityDoc('date-picker'),
    get anatomyIcon() {
      return getAnatomyIcon('date-picker');
    },
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    markdownPath: 'src/lib/docs/dialog.md',
    apiDoc: getApiDoc('dialog'),
    dataAttrDoc: getDataAttrDoc('dialog'),
    accessibilityDoc: getAccessibilityDoc('dialog'),
    get anatomyIcon() {
      return getAnatomyIcon('dialog');
    },
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    markdownPath: 'src/lib/docs/drawer.md',
    apiDoc: getApiDoc('dialog'),
    dataAttrDoc: getDataAttrDoc('dialog'),
    accessibilityDoc: getAccessibilityDoc('dialog'),
  },
  {
    slug: 'editable',
    name: 'Editable',
    markdownPath: 'src/lib/docs/editable.md',
    apiDoc: getApiDoc('editable'),
    dataAttrDoc: getDataAttrDoc('editable'),
    accessibilityDoc: getAccessibilityDoc('editable'),
    get anatomyIcon() {
      return getAnatomyIcon('editable');
    },
  },
  {
    slug: 'field',
    name: 'Field',
    markdownPath: 'src/lib/docs/field.md',
    get anatomyIcon() {
      return getAnatomyIcon('field');
    },
  },
  {
    slug: 'file-upload',
    name: 'File Upload',
    markdownPath: 'src/lib/docs/file-upload.md',
    apiDoc: getApiDoc('file-upload'),
    dataAttrDoc: getDataAttrDoc('file-upload'),
    get anatomyIcon() {
      return getAnatomyIcon('file-upload');
    },
  },
  {
    slug: 'floating-panel',
    name: 'Floating Panel',
    markdownPath: 'src/lib/docs/floating-panel.md',
    apiDoc: getApiDoc('floating-panel'),
    dataAttrDoc: getDataAttrDoc('floating-panel'),
  },
  {
    slug: 'hover-card',
    name: 'Hover Card',
    markdownPath: 'src/lib/docs/hover-card.md',
    apiDoc: getApiDoc('hover-card'),
    dataAttrDoc: getDataAttrDoc('hover-card'),
    get anatomyIcon() {
      return getAnatomyIcon('hover-card');
    },
  },
  {
    slug: 'menu',
    name: 'Menu',
    markdownPath: 'src/lib/docs/menu.md',
    apiDoc: getApiDoc('menu'),
    dataAttrDoc: getDataAttrDoc('menu'),
    accessibilityDoc: getAccessibilityDoc('menu'),
    get anatomyIcon() {
      return getAnatomyIcon('menu');
    },
  },
  {
    slug: 'number-input',
    name: 'Number Input',
    apiDoc: getApiDoc('number-input'),
    dataAttrDoc: getDataAttrDoc('number-input'),
    accessibilityDoc: getAccessibilityDoc('number-input'),
    get anatomyIcon() {
      return getAnatomyIcon('number-input');
    },

    markdownPath: 'src/lib/docs/number-input.md',
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    apiDoc: getApiDoc('pagination'),
    dataAttrDoc: getDataAttrDoc('pagination'),
    get anatomyIcon() {
      return getAnatomyIcon('pagination');
    },

    markdownPath: 'src/lib/docs/pagination.md',
  },
  {
    slug: 'pin-input',
    name: 'Pin Input',
    apiDoc: getApiDoc('pin-input'),
    dataAttrDoc: getDataAttrDoc('pin-input'),
    accessibilityDoc: getAccessibilityDoc('pin-input'),
    get anatomyIcon() {
      return getAnatomyIcon('pin-input');
    },

    markdownPath: 'src/lib/docs/pin-input.md',
  },
  {
    slug: 'popover',
    name: 'Popover',
    apiDoc: getApiDoc('popover'),
    dataAttrDoc: getDataAttrDoc('popover'),
    accessibilityDoc: getAccessibilityDoc('popover'),
    get anatomyIcon() {
      return getAnatomyIcon('popover');
    },

    markdownPath: 'src/lib/docs/popover.md',
  },
  {
    slug: 'progress-linear',
    name: 'Progress - Linear',
    apiDoc: getApiDoc('progress'),
    dataAttrDoc: getDataAttrDoc('progress'),
    get anatomyIcon() {
      return getAnatomyIcon('linear-progress');
    },

    markdownPath: 'src/lib/docs/progress-linear.md',
  },
  {
    slug: 'progress-circular',
    name: 'Progress - Circular',
    apiDoc: getApiDoc('progress'),
    dataAttrDoc: getDataAttrDoc('progress'),
    get anatomyIcon() {
      return getAnatomyIcon('circular-progress');
    },

    markdownPath: 'src/lib/docs/progress-circular.md',
  },
  {
    slug: 'qr-code',
    name: 'QR Code',
    apiDoc: getApiDoc('qr-code'),
    dataAttrDoc: getDataAttrDoc('qr-code'),
    get anatomyIcon() {
      return getAnatomyIcon('qr-code');
    },

    markdownPath: 'src/lib/docs/qr-code.md',
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    apiDoc: getApiDoc('radio-group'),
    dataAttrDoc: getDataAttrDoc('radio-group'),
    accessibilityDoc: getAccessibilityDoc('radio-group'),
    get anatomyIcon() {
      return getAnatomyIcon('radio-group');
    },

    markdownPath: 'src/lib/docs/radio-group.md',
  },
  {
    slug: 'rating-group',
    name: 'Rating Group',
    apiDoc: getApiDoc('rating-group'),
    dataAttrDoc: getDataAttrDoc('rating-group'),
    accessibilityDoc: getAccessibilityDoc('rating-group'),
    get anatomyIcon() {
      return getAnatomyIcon('rating-group');
    },

    markdownPath: 'src/lib/docs/rating-group.md',
  },
  {
    slug: 'segment-group',
    name: 'Segment Group',
    apiDoc: getApiDoc('radio-group'),
    dataAttrDoc: getDataAttrDoc('radio-group'),
    accessibilityDoc: getAccessibilityDoc('radio-group'),
    get anatomyIcon() {
      return getAnatomyIcon('segment-group');
    },

    markdownPath: 'src/lib/docs/segment-group.md',
  },
  {
    slug: 'select',
    name: 'Select',
    apiDoc: getApiDoc('select'),
    dataAttrDoc: getDataAttrDoc('select'),
    accessibilityDoc: getAccessibilityDoc('select'),
    markdownPath: 'src/lib/docs/select.md',
  },
  {
    slug: 'signature-pad',
    name: 'Signature Pad',
    apiDoc: getApiDoc('signature-pad'),
    dataAttrDoc: getDataAttrDoc('signature-pad'),
    get anatomyIcon() {
      return getAnatomyIcon('signature-pad');
    },

    markdownPath: 'src/lib/docs/signature-pad.md',
  },
  {
    slug: 'slider',
    name: 'Slider',
    apiDoc: getApiDoc('slider'),
    dataAttrDoc: getDataAttrDoc('slider'),
    accessibilityDoc: getAccessibilityDoc('slider'),
    get anatomyIcon() {
      return getAnatomyIcon('slider');
    },

    markdownPath: 'src/lib/docs/slider.md',
  },
  {
    slug: 'splitter',
    name: 'Splitter',
    apiDoc: getApiDoc('splitter'),
    dataAttrDoc: getDataAttrDoc('splitter'),
    get anatomyIcon() {
      return getAnatomyIcon('splitter');
    },

    markdownPath: 'src/lib/docs/splitter.md',
  },
  {
    slug: 'steps',
    name: 'Steps',
    apiDoc: getApiDoc('steps'),
    dataAttrDoc: getDataAttrDoc('steps'),
    get anatomyIcon() {
      return getAnatomyIcon('steps');
    },

    markdownPath: 'src/lib/docs/steps.md',
  },
  {
    slug: 'switch',
    name: 'Switch',
    apiDoc: getApiDoc('switch'),
    dataAttrDoc: getDataAttrDoc('switch'),
    accessibilityDoc: getAccessibilityDoc('switch'),
    get anatomyIcon() {
      return getAnatomyIcon('switch');
    },

    markdownPath: 'src/lib/docs/switch.md',
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    apiDoc: getApiDoc('tabs'),
    dataAttrDoc: getDataAttrDoc('tabs'),
    accessibilityDoc: getAccessibilityDoc('tabs'),
    get anatomyIcon() {
      return getAnatomyIcon('tabs');
    },

    markdownPath: 'src/lib/docs/tabs.md',
  },
  {
    slug: 'tags-input',
    name: 'Tags Input',
    apiDoc: getApiDoc('tags-input'),
    dataAttrDoc: getDataAttrDoc('tags-input'),
    accessibilityDoc: getAccessibilityDoc('tags-input'),
    get anatomyIcon() {
      return getAnatomyIcon('tags-input');
    },

    markdownPath: 'src/lib/docs/tags-input.md',
  },
  {
    slug: 'time-picker',
    name: 'Time Picker',
    apiDoc: getApiDoc('time-picker'),
    dataAttrDoc: getDataAttrDoc('time-picker'),
    accessibilityDoc: getAccessibilityDoc('time-picker'),
    markdownPath: 'src/lib/docs/time-picker.md',
    isPreview: true,
  },
  {
    slug: 'timer',
    name: 'Timer',
    apiDoc: getApiDoc('timer'),
    dataAttrDoc: getDataAttrDoc('timer'),
    markdownPath: 'src/lib/docs/timer.md',
  },
  {
    slug: 'toast',
    name: 'Toast',
    apiDoc: getApiDoc('toast'),
    dataAttrDoc: getDataAttrDoc('toast'),
    get anatomyIcon() {
      return getAnatomyIcon('toast');
    },

    markdownPath: 'src/lib/docs/toast.md',
  },
  {
    slug: 'toggle',
    name: 'Toggle',
    markdownPath: 'src/lib/docs/toggle.md',
  },
  {
    slug: 'toggle-group',
    name: 'Toggle Group',
    apiDoc: getApiDoc('toggle-group'),
    dataAttrDoc: getDataAttrDoc('toggle-group'),
    accessibilityDoc: getAccessibilityDoc('toggle-group'),
    get anatomyIcon() {
      return getAnatomyIcon('toggle-group');
    },

    markdownPath: 'src/lib/docs/toggle-group.md',
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    apiDoc: getApiDoc('tooltip'),
    dataAttrDoc: getDataAttrDoc('tooltip'),
    accessibilityDoc: getAccessibilityDoc('tooltip'),
    get anatomyIcon() {
      return getAnatomyIcon('tooltip');
    },

    markdownPath: 'src/lib/docs/tooltip.md',
  },
  {
    slug: 'tour',
    name: 'Tour',
    apiDoc: getApiDoc('tour'),
    dataAttrDoc: getDataAttrDoc('tour'),
    accessibilityDoc: getAccessibilityDoc('tour'),
    get anatomyIcon() {
      return getAnatomyIcon('tour');
    },

    markdownPath: 'src/lib/docs/tour.md',
    isPreview: true,
  },
  {
    slug: 'tree-view',
    name: 'Tree View',
    apiDoc: getApiDoc('tree-view'),
    dataAttrDoc: getDataAttrDoc('tree-view'),
    accessibilityDoc: getAccessibilityDoc('tree-view'),
    get anatomyIcon() {
      return getAnatomyIcon('tree-view');
    },

    markdownPath: 'src/lib/docs/tree-view.md',
    isPreview: true,
  },
];

export const UTILITIES: Details[] = [
  {
    slug: 'environment-provider',
    name: 'Environment Provider',
    markdownPath: 'src/lib/docs/environment-provider.md',
  },
  {
    slug: 'highlight',
    name: 'Highlight',
    markdownPath: 'src/lib/docs/highlight.md',
  },
  {
    slug: 'locale-provider',
    name: 'Locale Provider',
    markdownPath: 'src/lib/docs/locale-provider.md',
  },
  {
    slug: 'portal',
    name: 'Portal',
    markdownPath: 'src/lib/docs/portal.md',
  },
  {
    slug: 'presence',
    name: 'Presence',
    apiDoc: getApiDoc('presence'),
    dataAttrDoc: getDataAttrDoc('accordion'),
    accessibilityDoc: getAccessibilityDoc('accordion'),
    markdownPath: 'src/lib/docs/presence.md',
  },
];

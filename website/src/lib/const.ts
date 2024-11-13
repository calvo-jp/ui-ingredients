import {
  getAccessibilityDoc,
  getApiDoc,
  getDataAttrDoc,
  type AccessibilityDoc,
  type ApiDoc,
  type DataAttrEntry,
} from '@zag-js/docs';
import {getAnatomyIcon} from './anatomy-icons';

interface ApiDocEntry {
  [part: string]: ApiDoc;
}

interface Details {
  slug: string;
  /**
   * formal name eg. `Date Picker`
   */
  name: string;
  /**
   * path to markdown using "src" as root path
   */
  markdownPath: string;
  /**
   * @format html
   */
  anatomyIcon?: string;
  apiDoc?: ApiDocEntry;
  dataAttrDoc?: DataAttrEntry;
  accessibilityDoc?: AccessibilityDoc;
  isPreview?: boolean;
}

export const COMPONENTS = [
  {
    slug: 'accordion',
    name: 'Accordion',
    get apiDoc() {
      return {
        Root: getApiDoc('accordion'),
      };
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
    get apiDoc() {
      return {
        Root: getApiDoc('dialog'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('dialog');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('dialog');
    },
    markdownPath: 'src/lib/docs/alert-dialog.md',
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    get apiDoc() {
      return {
        Root: getApiDoc('avatar'),
      };
    },

    get dataAttrDoc() {
      return getDataAttrDoc('avatar');
    },
    get anatomyIcon() {
      return getAnatomyIcon('avatar');
    },
    markdownPath: 'src/lib/docs/avatar.md',
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
    get apiDoc() {
      return {
        Root: getApiDoc('carousel'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('carousel');
    },
    get anatomyIcon() {
      return getAnatomyIcon('carousel');
    },
    isPreview: true,
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    markdownPath: 'src/lib/docs/checkbox.md',
    get apiDoc() {
      return {
        Root: getApiDoc('checkbox'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('checkbox');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('checkbox');
    },
    get anatomyIcon() {
      return getAnatomyIcon('checkbox');
    },
  },
  {
    slug: 'clipboard',
    name: 'Clipboard',
    markdownPath: 'src/lib/docs/clipboard.md',
    get apiDoc() {
      return {
        Root: getApiDoc('clipboard'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('clipboard');
    },
    get anatomyIcon() {
      return getAnatomyIcon('clipboard');
    },
  },
  {
    slug: 'collapsible',
    name: 'Collapsible',
    markdownPath: 'src/lib/docs/collapsible.md',
    get apiDoc() {
      return {
        Root: getApiDoc('collapsible'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('collapsible');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('collapsible');
    },
  },
  {
    slug: 'color-picker',
    name: 'Color Picker',
    markdownPath: 'src/lib/docs/color-picker.md',
    get apiDoc() {
      return {
        Root: getApiDoc('color-picker'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('color-picker');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('color-picker');
    },
    get anatomyIcon() {
      return getAnatomyIcon('color-picker');
    },
  },
  {
    slug: 'combobox',
    name: 'Combobox',
    markdownPath: 'src/lib/docs/combobox.md',
    get apiDoc() {
      return {
        Root: getApiDoc('combobox'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('combobox');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('combobox');
    },
    get anatomyIcon() {
      return getAnatomyIcon('combobox');
    },
  },
  {
    slug: 'date-picker',
    name: 'Date Picker',
    markdownPath: 'src/lib/docs/date-picker.md',
    get apiDoc() {
      return {
        Root: getApiDoc('date-picker'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('date-picker');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('date-picker');
    },
    get anatomyIcon() {
      return getAnatomyIcon('date-picker');
    },
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    markdownPath: 'src/lib/docs/dialog.md',
    get apiDoc() {
      return {
        Root: getApiDoc('dialog'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('dialog');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('dialog');
    },
    get anatomyIcon() {
      return getAnatomyIcon('dialog');
    },
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    markdownPath: 'src/lib/docs/drawer.md',
    get apiDoc() {
      return {
        Root: getApiDoc('dialog'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('dialog');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('dialog');
    },
  },
  {
    slug: 'editable',
    name: 'Editable',
    markdownPath: 'src/lib/docs/editable.md',
    get apiDoc() {
      return {
        Root: getApiDoc('editable'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('editable');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('editable');
    },
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
    get apiDoc() {
      return {
        Root: getApiDoc('file-upload'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('file-upload');
    },
    get anatomyIcon() {
      return getAnatomyIcon('file-upload');
    },
  },
  {
    slug: 'floating-panel',
    name: 'Floating Panel',
    markdownPath: 'src/lib/docs/floating-panel.md',
    get apiDoc() {
      return {
        Root: getApiDoc('floating-panel'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('floating-panel');
    },
  },
  {
    slug: 'hover-card',
    name: 'Hover Card',
    markdownPath: 'src/lib/docs/hover-card.md',
    get apiDoc() {
      return {
        Root: getApiDoc('hover-card'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('hover-card');
    },
    get anatomyIcon() {
      return getAnatomyIcon('hover-card');
    },
  },
  {
    slug: 'menu',
    name: 'Menu',
    markdownPath: 'src/lib/docs/menu.md',
    get apiDoc() {
      return {
        Root: getApiDoc('menu'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('menu');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('menu');
    },
    get anatomyIcon() {
      return getAnatomyIcon('menu');
    },
  },
  {
    slug: 'number-input',
    name: 'Number Input',
    get apiDoc() {
      return {
        Root: getApiDoc('number-input'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('number-input');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('number-input');
    },
    get anatomyIcon() {
      return getAnatomyIcon('number-input');
    },
    markdownPath: 'src/lib/docs/number-input.md',
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    get apiDoc() {
      return {
        Root: getApiDoc('pagination'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('pagination');
    },
    get anatomyIcon() {
      return getAnatomyIcon('pagination');
    },
    markdownPath: 'src/lib/docs/pagination.md',
  },
  {
    slug: 'pin-input',
    name: 'Pin Input',
    get apiDoc() {
      return {
        Root: getApiDoc('pin-input'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('pin-input');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('pin-input');
    },
    get anatomyIcon() {
      return getAnatomyIcon('pin-input');
    },
    markdownPath: 'src/lib/docs/pin-input.md',
  },
  {
    slug: 'popover',
    name: 'Popover',
    get apiDoc() {
      return {
        Root: getApiDoc('popover'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('popover');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('popover');
    },
    get anatomyIcon() {
      return getAnatomyIcon('popover');
    },
    markdownPath: 'src/lib/docs/popover.md',
  },
  {
    slug: 'progress-linear',
    name: 'Progress - Linear',
    get apiDoc() {
      return {
        Root: getApiDoc('progress'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('progress');
    },
    get anatomyIcon() {
      return getAnatomyIcon('linear-progress');
    },
    markdownPath: 'src/lib/docs/progress-linear.md',
  },
  {
    slug: 'progress-circular',
    name: 'Progress - Circular',
    get apiDoc() {
      return {
        Root: getApiDoc('progress'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('progress');
    },
    get anatomyIcon() {
      return getAnatomyIcon('circular-progress');
    },
    markdownPath: 'src/lib/docs/progress-circular.md',
  },
  {
    slug: 'qr-code',
    name: 'QR Code',
    get apiDoc() {
      return {
        Root: getApiDoc('qr-code'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('qr-code');
    },
    get anatomyIcon() {
      return getAnatomyIcon('qr-code');
    },
    markdownPath: 'src/lib/docs/qr-code.md',
  },
  {
    slug: 'radio-group',
    name: 'Radio Group',
    get apiDoc() {
      return {
        Root: getApiDoc('radio-group'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('radio-group');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('radio-group');
    },
    get anatomyIcon() {
      return getAnatomyIcon('radio-group');
    },
    markdownPath: 'src/lib/docs/radio-group.md',
  },
  {
    slug: 'rating-group',
    name: 'Rating Group',
    get apiDoc() {
      return {
        Root: getApiDoc('rating-group'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('rating-group');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('rating-group');
    },
    get anatomyIcon() {
      return getAnatomyIcon('rating-group');
    },
    markdownPath: 'src/lib/docs/rating-group.md',
  },
  {
    slug: 'segment-group',
    name: 'Segment Group',
    get apiDoc() {
      return {
        Root: getApiDoc('radio-group'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('radio-group');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('radio-group');
    },
    get anatomyIcon() {
      return getAnatomyIcon('segment-group');
    },
    markdownPath: 'src/lib/docs/segment-group.md',
  },
  {
    slug: 'select',
    name: 'Select',
    get apiDoc() {
      return {
        Root: getApiDoc('select'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('select');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('select');
    },
    markdownPath: 'src/lib/docs/select.md',
  },
  {
    slug: 'signature-pad',
    name: 'Signature Pad',
    get apiDoc() {
      return {
        Root: getApiDoc('signature-pad'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('signature-pad');
    },
    get anatomyIcon() {
      return getAnatomyIcon('signature-pad');
    },
    markdownPath: 'src/lib/docs/signature-pad.md',
  },
  {
    slug: 'slider',
    name: 'Slider',
    get apiDoc() {
      return {
        Root: getApiDoc('slider'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('slider');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('slider');
    },
    get anatomyIcon() {
      return getAnatomyIcon('slider');
    },
    markdownPath: 'src/lib/docs/slider.md',
  },
  {
    slug: 'splitter',
    name: 'Splitter',
    get apiDoc() {
      return {
        Root: getApiDoc('splitter'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('splitter');
    },
    get anatomyIcon() {
      return getAnatomyIcon('splitter');
    },
    markdownPath: 'src/lib/docs/splitter.md',
  },
  {
    slug: 'steps',
    name: 'Steps',
    get apiDoc() {
      return {
        Root: getApiDoc('steps'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('steps');
    },
    get anatomyIcon() {
      return getAnatomyIcon('steps');
    },
    markdownPath: 'src/lib/docs/steps.md',
  },
  {
    slug: 'switch',
    name: 'Switch',
    get apiDoc() {
      return {
        Root: getApiDoc('switch'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('switch');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('switch');
    },
    get anatomyIcon() {
      return getAnatomyIcon('switch');
    },
    markdownPath: 'src/lib/docs/switch.md',
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    get apiDoc() {
      return {
        Root: getApiDoc('tabs'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('tabs');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('tabs');
    },
    get anatomyIcon() {
      return getAnatomyIcon('tabs');
    },
    markdownPath: 'src/lib/docs/tabs.md',
  },
  {
    slug: 'tags-input',
    name: 'Tags Input',
    get apiDoc() {
      return {
        Root: getApiDoc('tags-input'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('tags-input');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('tags-input');
    },
    get anatomyIcon() {
      return getAnatomyIcon('tags-input');
    },
    markdownPath: 'src/lib/docs/tags-input.md',
  },
  {
    slug: 'time-picker',
    name: 'Time Picker',
    get apiDoc() {
      return {
        Root: getApiDoc('time-picker'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('time-picker');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('time-picker');
    },
    markdownPath: 'src/lib/docs/time-picker.md',
    isPreview: true,
  },
  {
    slug: 'timer',
    name: 'Timer',
    get apiDoc() {
      return {
        Root: getApiDoc('timer'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('timer');
    },
    markdownPath: 'src/lib/docs/timer.md',
  },
  {
    slug: 'toast',
    name: 'Toast',
    get apiDoc() {
      return {
        Root: getApiDoc('toast'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('toast');
    },
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
    get apiDoc() {
      return {
        Root: getApiDoc('toggle-group'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('toggle-group');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('toggle-group');
    },
    get anatomyIcon() {
      return getAnatomyIcon('toggle-group');
    },

    markdownPath: 'src/lib/docs/toggle-group.md',
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    get apiDoc() {
      return {
        Root: getApiDoc('tooltip'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('tooltip');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('tooltip');
    },
    get anatomyIcon() {
      return getAnatomyIcon('tooltip');
    },
    markdownPath: 'src/lib/docs/tooltip.md',
  },
  {
    slug: 'tour',
    name: 'Tour',
    get apiDoc() {
      return {
        Root: getApiDoc('tour'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('tour');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('tour');
    },
    get anatomyIcon() {
      return getAnatomyIcon('tour');
    },
    markdownPath: 'src/lib/docs/tour.md',
    isPreview: true,
  },
  {
    slug: 'tree-view',
    name: 'Tree View',
    get apiDoc() {
      return {
        Root: getApiDoc('tree-view'),
      };
    },
    get dataAttrDoc() {
      return getDataAttrDoc('tree-view');
    },
    get accessibilityDoc() {
      return getAccessibilityDoc('tree-view');
    },
    get anatomyIcon() {
      return getAnatomyIcon('tree-view');
    },
    markdownPath: 'src/lib/docs/tree-view.md',
    isPreview: true,
  },
] satisfies Details[];

export const UTILITIES = [
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
    markdownPath: 'src/lib/docs/presence.md',
  },
] satisfies Details[];

export const APP_LINKS = [
  {
    name: 'Overview',
    links: [
      {
        name: 'Introduction',
        href: '/',
      },
      {
        name: 'Getting Started',
        href: '/getting-started',
      },
      {
        name: 'Styling',
        href: '/styling',
      },
      {
        name: 'asChild',
        href: '/aschild',
      },
    ],
  },
  {
    name: 'Components',
    links: COMPONENTS.map((item) => ({
      name: item.name,
      href: `/components/${item.slug}`,
    })),
  },
  {
    name: 'Utilities',
    links: UTILITIES.map((item) => ({
      name: item.name,
      href: `/utilities/${item.slug}`,
    })),
  },
];

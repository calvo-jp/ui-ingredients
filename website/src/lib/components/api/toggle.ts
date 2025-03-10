import {toggleAnatomy} from 'ui-ingredients';
import {apiEntryFromAnatomy} from './utils';

export default apiEntryFromAnatomy(toggleAnatomy)({
  Root: {
    dataAttr: {
      'data-scope': 'toggle',
      'data-part': 'root',
      'data-state': '"off" | "on"',
      'data-pressed': 'Present when the toggle is pressed',
    },
    context: {
      pressed: {
        type: 'boolean',
        description: 'Whether the toggle is pressed or not.',
      },
      onPressedChange: {
        type: '(pressed: boolean) => void',
        description: 'Function to call when the toggle is clicked.',
      },
    },
  },
  Indicator: {
    context: {
      asChild: {
        type: 'Snippet',
        description: 'Render a different element.',
      },
    },
    dataAttr: {
      'data-scope': 'toggle',
      'data-part': 'indicator',
      'data-state': '"off" | "on"',
      'data-pressed': 'Present when the toggle is pressed',
    },
  },
});
